import { useRef, useMemo, useState, useEffect, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import { Brain, Cpu, Cloud } from "lucide-react";

// --- Helpers ---

/** Convert lon/lat degrees to a 3D position on a sphere of given radius */
function latLonToVec3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

// --- GeoJSON types ---

interface GeoJSONFeature {
  geometry: {
    type: string;
    coordinates: number[][][] | number[][][][];
  };
}

interface GeoJSONData {
  features: GeoJSONFeature[];
}

// --- Shared GeoJSON loader (single fetch for both texture and lines) ---

let _geoDataCache: GeoJSONData | null = null;
let _geoDataPromise: Promise<GeoJSONData> | null = null;

function fetchGeoJSON(): Promise<GeoJSONData> {
  if (_geoDataCache) return Promise.resolve(_geoDataCache);
  if (!_geoDataPromise) {
    _geoDataPromise = fetch(`${import.meta.env.BASE_URL}data/ne_110m_land.geojson`)
      .then((res) => res.json())
      .then((data: GeoJSONData) => {
        _geoDataCache = data;
        return data;
      });
  }
  return _geoDataPromise;
}

// --- Canvas-based continent texture from GeoJSON ---

function useGeoJSONTexture() {
  const [texture, setTexture] = useState<THREE.CanvasTexture | null>(null);

  useEffect(() => {
    fetchGeoJSON()
      .then((geoData) => {
        const canvas = document.createElement("canvas");
        canvas.width = 2048;
        canvas.height = 1024;
        const ctx = canvas.getContext("2d")!;

        // Dark ocean background
        ctx.fillStyle = "#030a14";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Convert lon/lat to canvas pixel coordinates
        const toXY = (lon: number, lat: number): [number, number] => [
          ((lon + 180) / 360) * canvas.width,
          ((90 - lat) / 180) * canvas.height,
        ];

        // Draw each GeoJSON polygon
        for (const feature of geoData.features) {
          const { type, coordinates } = feature.geometry;
          let polygons: number[][][][] = [];
          if (type === "Polygon") {
            polygons = [coordinates as number[][][]];
          } else if (type === "MultiPolygon") {
            polygons = coordinates as number[][][][];
          }

          for (const polygon of polygons) {
            for (const ring of polygon) {
              ctx.beginPath();
              const [sx, sy] = toXY(ring[0][0], ring[0][1]);
              ctx.moveTo(sx, sy);
              for (let i = 1; i < ring.length; i++) {
                const [px, py] = toXY(ring[i][0], ring[i][1]);
                ctx.lineTo(px, py);
              }
              ctx.closePath();

              // Fill continents with dark teal
              ctx.fillStyle = "#0a2a35";
              ctx.fill();

              // Outline with brighter cyan
              ctx.strokeStyle = "rgba(0, 217, 255, 0.5)";
              ctx.lineWidth = 1.2;
              ctx.stroke();
            }
          }
        }

        const tex = new THREE.CanvasTexture(canvas);
        setTexture(tex);
      })
      .catch(console.error);
  }, []);

  return texture;
}

// --- GeoJSON 3D Coastline Lines ---

function ContinentLines({ radius }: { radius: number }) {
  const [geoData, setGeoData] = useState<GeoJSONData | null>(null);

  useEffect(() => {
    fetchGeoJSON().then(setGeoData).catch(console.error);
  }, []);

  const lineGeometries = useMemo(() => {
    if (!geoData) return [];
    const geoms: THREE.BufferGeometry[] = [];

    for (const feature of geoData.features) {
      const { type, coordinates } = feature.geometry;
      let polygons: number[][][][] = [];
      if (type === "Polygon") {
        polygons = [coordinates as number[][][]];
      } else if (type === "MultiPolygon") {
        polygons = coordinates as number[][][][];
      }

      for (const polygon of polygons) {
        for (const ring of polygon) {
          const points: THREE.Vector3[] = [];
          for (const coord of ring) {
            points.push(latLonToVec3(coord[1], coord[0], radius));
          }
          if (points.length > 1) {
            geoms.push(new THREE.BufferGeometry().setFromPoints(points));
          }
        }
      }
    }
    return geoms;
  }, [geoData, radius]);

  if (!lineGeometries.length) return null;

  return (
    <group>
      {lineGeometries.map((geo, i) => (
        <line key={i} geometry={geo}>
          <lineBasicMaterial color="#00d9ff" transparent opacity={0.8} />
        </line>
      ))}
    </group>
  );
}



// --- Globe Core ---

interface GlobeCoreProps {
  continentTexture: THREE.CanvasTexture | null;
}

function GlobeCore({ continentTexture }: GlobeCoreProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) groupRef.current.rotation.y += 0.001;
  });

  return (
    <group>
      {/* All rotating elements in one group */}
      <group ref={groupRef}>
        {/* Base dark sphere */}
        <mesh>
          <sphereGeometry args={[2.5, 64, 64]} />
          {continentTexture ? (
            <meshBasicMaterial key="textured" map={continentTexture} toneMapped={false} />
          ) : (
            <meshBasicMaterial key="solid" color="#030a14" toneMapped={false} />
          )}
        </mesh>

        {/* 3D continent outline lines from GeoJSON */}
        <ContinentLines radius={2.505} />
      </group>

      {/* Atmosphere glow — rendered BEHIND everything via BackSide + larger scale */}
      <mesh scale={[1.2, 1.2, 1.2]}>
        <sphereGeometry args={[2.5, 64, 64]} />
        <shaderMaterial
          vertexShader={`
            varying float vIntensity;
            void main() {
              vec3 vNormal = normalize(normalMatrix * normal);
              vec3 vView = normalize(normalMatrix * vec3(0.0, 0.0, 1.0));
              vIntensity = pow(0.6 - dot(vNormal, vView), 3.0);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            varying float vIntensity;
            void main() {
              vec3 color = vec3(0.0, 0.85, 1.0);
              gl_FragColor = vec4(color * vIntensity * 0.6, vIntensity * 0.4);
            }
          `}
          side={THREE.BackSide}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

// --- Orbit Nodes ---

function OrbitNodes() {
  const nodesRef = useRef<THREE.Group>(null);
  const revRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (nodesRef.current) {
      nodesRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
    if (revRef.current) {
      revRef.current.rotation.y = -state.clock.elapsedTime * 0.15;
      revRef.current.rotation.z =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group>
      {/* Orbit rings */}
      <mesh rotation-x={Math.PI / 2}>
        <torusGeometry args={[3.5, 0.01, 16, 100]} />
        <meshBasicMaterial color="#00d9ff" transparent opacity={0.15} />
      </mesh>
      <mesh rotation-x={Math.PI / 2.2}>
        <torusGeometry args={[4.2, 0.01, 16, 100]} />
        <meshBasicMaterial color="#00d9ff" transparent opacity={0.15} />
      </mesh>

      {/* Revolving nodes group */}
      <group ref={nodesRef}>
        <Html position={[3.5, 0, 0]} center className="pointer-events-none">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-[#0a1628]/80 backdrop-blur-md border border-[#00d9ff]/30 flex items-center justify-center shadow-[0_0_15px_rgba(0,217,255,0.2)]">
              <Cpu className="w-5 h-5 text-[#00d9ff]" />
            </div>
            <div className="h-[1px] w-8 bg-gradient-to-r from-[#00d9ff]/50 to-transparent" />
          </div>
        </Html>

        <Html
          position={[-2.5, 1.5, -2.5]}
          center
          className="pointer-events-none"
        >
          <div className="flex items-center gap-2 flex-row-reverse">
            <div className="w-10 h-10 rounded-xl bg-[#0a1628]/80 backdrop-blur-md border border-[#00d9ff]/30 flex items-center justify-center shadow-[0_0_15px_rgba(0,217,255,0.2)]">
              <Brain className="w-5 h-5 text-[#00d9ff]" />
            </div>
            <div className="h-[1px] w-8 bg-gradient-to-l from-[#00d9ff]/50 to-transparent" />
          </div>
        </Html>
      </group>

      <group ref={revRef}>
        <Html
          position={[0, -2, 3.6]}
          center
          className="pointer-events-none"
        >
          <div className="w-10 h-10 rounded-xl bg-[#0a1628]/80 backdrop-blur-md border border-[#00d9ff]/30 flex items-center justify-center shadow-[0_0_15px_rgba(0,217,255,0.2)]">
            <Cloud className="w-5 h-5 text-[#00d9ff]" />
          </div>
        </Html>
      </group>
    </group>
  );
}

function ScaleGroup({ children }: { children: React.ReactNode }) {
  const { viewport } = useThree();
  const scale = Math.min(1, viewport.width / 9.5); // Ensure outer orbits (radius ~4.2) fit
  return <group scale={scale}>{children}</group>;
}

// --- Exported Component ---

export function EarthGlobe() {
  const [canvasReady, setCanvasReady] = useState(false);
  const continentTexture = useGeoJSONTexture();

  const handleCreated = useCallback((state: { gl: THREE.WebGLRenderer }) => {
    state.gl.toneMapping = THREE.NoToneMapping;
    state.gl.outputColorSpace = THREE.LinearSRGBColorSpace;
    // Wait a frame to ensure settings are applied before showing
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setCanvasReady(true);
      });
    });
  }, []);

  const isReady = canvasReady && continentTexture !== null;

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-transparent">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 45 }}
        gl={{ antialias: true, alpha: true, toneMapping: THREE.NoToneMapping }}
        flat
        onCreated={handleCreated}
        style={{
          opacity: isReady ? 1 : 0,
          transition: "opacity 0.4s ease-in",
          backgroundColor: "transparent"
        }}
      >
        <ScaleGroup>
          <GlobeCore continentTexture={continentTexture} />
          <OrbitNodes />
        </ScaleGroup>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={(2 * Math.PI) / 3}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}

