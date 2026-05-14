import { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

type ServiceMode = "globe" | "hardware" | "ai" | "software";

interface GlobeMeshProps {
  mode: ServiceMode;
}

function GlobeMesh({ mode }: GlobeMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const [morphProgress, setMorphProgress] = useState(0);

  const particleCount = 1000;

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const radius = 2.5;

    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }

    return pos;
  }, []);

  const circuitPositions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const radius = 2.5;

    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      const gridSnap = 0.3;
      pos[i * 3] = Math.round(x / gridSnap) * gridSnap + (Math.random() - 0.5) * 0.1;
      pos[i * 3 + 1] = Math.round(y / gridSnap) * gridSnap + (Math.random() - 0.5) * 0.1;
      pos[i * 3 + 2] = Math.round(z / gridSnap) * gridSnap + (Math.random() - 0.5) * 0.1;
    }

    return pos;
  }, []);

  const neuralPositions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const layers = 8;
    const nodesPerLayer = Math.floor(particleCount / layers);

    for (let i = 0; i < particleCount; i++) {
      const layer = Math.floor(i / nodesPerLayer);
      const nodeInLayer = i % nodesPerLayer;
      const totalInLayer = Math.min(nodesPerLayer, particleCount - layer * nodesPerLayer);

      const angle = (nodeInLayer / totalInLayer) * Math.PI * 2;
      const radius = 1.5 + Math.random() * 0.5;

      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = (layer / layers) * 5 - 2.5;
      pos[i * 3 + 2] = Math.sin(angle) * radius;
    }

    return pos;
  }, []);

  const softwarePositions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const layers = 10;
    const radius = 2.5;

    for (let i = 0; i < particleCount; i++) {
      const layer = Math.floor(Math.random() * layers);
      const angle = Math.random() * Math.PI * 2;
      const r = radius * (0.6 + Math.random() * 0.4);

      pos[i * 3] = r * Math.cos(angle);
      pos[i * 3 + 1] = (layer / layers) * 4 - 2;
      pos[i * 3 + 2] = r * Math.sin(angle);
    }

    return pos;
  }, []);

  const pointsGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [positions]);

  const linesGeometry = useMemo(() => {
    const linePositions: number[] = [];
    const segments = 32;
    const rings = 16;
    const radius = 2.5;

    for (let i = 0; i <= segments; i++) {
      for (let j = 0; j < rings; j++) {
        const phi1 = (j / rings) * Math.PI;
        const phi2 = ((j + 1) / rings) * Math.PI;
        const theta = (i / segments) * Math.PI * 2;

        const x1 = radius * Math.sin(phi1) * Math.cos(theta);
        const y1 = radius * Math.cos(phi1);
        const z1 = radius * Math.sin(phi1) * Math.sin(theta);

        const x2 = radius * Math.sin(phi2) * Math.cos(theta);
        const y2 = radius * Math.cos(phi2);
        const z2 = radius * Math.sin(phi2) * Math.sin(theta);

        linePositions.push(x1, y1, z1, x2, y2, z2);
      }
    }

    for (let j = 0; j <= rings; j++) {
      for (let i = 0; i < segments; i++) {
        const phi = (j / rings) * Math.PI;
        const theta1 = (i / segments) * Math.PI * 2;
        const theta2 = ((i + 1) / segments) * Math.PI * 2;

        const x1 = radius * Math.sin(phi) * Math.cos(theta1);
        const y1 = radius * Math.cos(phi);
        const z1 = radius * Math.sin(phi) * Math.sin(theta1);

        const x2 = radius * Math.sin(phi) * Math.cos(theta2);
        const y2 = radius * Math.cos(phi);
        const z2 = radius * Math.sin(phi) * Math.sin(theta2);

        linePositions.push(x1, y1, z1, x2, y2, z2);
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePositions), 3));
    return geometry;
  }, []);

  const getCurrentPositions = () => {
    switch (mode) {
      case "hardware":
        return circuitPositions;
      case "ai":
        return neuralPositions;
      case "software":
        return softwarePositions;
      default:
        return positions;
    }
  };

  useEffect(() => {
    setMorphProgress(0);
  }, [mode]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }

    if (morphProgress < 1) {
      setMorphProgress(Math.min(morphProgress + 0.02, 1));
    }

    if (pointsRef.current && pointsRef.current.geometry.attributes.position) {
      const posAttr = pointsRef.current.geometry.attributes.position;
      const targetPos = getCurrentPositions();
      const startPos = positions;

      for (let i = 0; i < particleCount * 3; i++) {
        const target = targetPos[i];
        const start = startPos[i];

        (posAttr.array as Float32Array)[i] = start + (target - start) * morphProgress;
      }

      posAttr.needsUpdate = true;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group>
      <lineSegments ref={linesRef} geometry={linesGeometry}>
        <lineBasicMaterial
          color="#00d9ff"
          opacity={0.15}
          transparent
        />
      </lineSegments>

      <points ref={pointsRef} geometry={pointsGeometry}>
        <pointsMaterial
          size={0.05}
          color="#00d9ff"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>

      <mesh ref={meshRef}>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshStandardMaterial
          color="#00d9ff"
          wireframe={mode === "globe"}
          transparent
          opacity={mode === "globe" ? 0.1 : 0.05}
          emissive="#00d9ff"
          emissiveIntensity={0.2}
        />
      </mesh>

      <pointLight position={[10, 10, 10]} intensity={0.5} color="#00d9ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#00ffea" />
      <ambientLight intensity={0.3} />
    </group>
  );
}

interface InteractiveGlobeProps {
  onModeChange?: (mode: ServiceMode) => void;
}

export function InteractiveGlobe({ onModeChange }: InteractiveGlobeProps) {
  const [mode, setMode] = useState<ServiceMode>("globe");
  const [isDragging, setIsDragging] = useState(false);

  const handleModeChange = (newMode: ServiceMode) => {
    setMode(newMode);
    onModeChange?.(newMode);
  };

  return (
    <div className="relative w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        onPointerDown={() => setIsDragging(true)}
        onPointerUp={() => setIsDragging(false)}
      >
        <GlobeMesh mode={mode} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={(3 * Math.PI) / 4}
          autoRotate={!isDragging}
          autoRotateSpeed={0.5}
        />
      </Canvas>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        <button
          onClick={() => handleModeChange("globe")}
          className={`px-4 py-2 rounded-lg backdrop-blur-xl border text-xs font-medium transition-all duration-300 ${
            mode === "globe"
              ? "bg-[#00d9ff] text-[#0a1628] border-[#00d9ff] shadow-[0_0_20px_rgba(0,217,255,0.6)]"
              : "bg-white/5 text-white border-white/20 hover:border-[#00d9ff]"
          }`}
        >
          GLOBE
        </button>
        <button
          onClick={() => handleModeChange("hardware")}
          className={`px-4 py-2 rounded-lg backdrop-blur-xl border text-xs font-medium transition-all duration-300 ${
            mode === "hardware"
              ? "bg-[#00d9ff] text-[#0a1628] border-[#00d9ff] shadow-[0_0_20px_rgba(0,217,255,0.6)]"
              : "bg-white/5 text-white border-white/20 hover:border-[#00d9ff]"
          }`}
        >
          HARDWARE
        </button>
        <button
          onClick={() => handleModeChange("ai")}
          className={`px-4 py-2 rounded-lg backdrop-blur-xl border text-xs font-medium transition-all duration-300 ${
            mode === "ai"
              ? "bg-[#00d9ff] text-[#0a1628] border-[#00d9ff] shadow-[0_0_20px_rgba(0,217,255,0.6)]"
              : "bg-white/5 text-white border-white/20 hover:border-[#00d9ff]"
          }`}
        >
          AI
        </button>
        <button
          onClick={() => handleModeChange("software")}
          className={`px-4 py-2 rounded-lg backdrop-blur-xl border text-xs font-medium transition-all duration-300 ${
            mode === "software"
              ? "bg-[#00d9ff] text-[#0a1628] border-[#00d9ff] shadow-[0_0_20px_rgba(0,217,255,0.6)]"
              : "bg-white/5 text-white border-white/20 hover:border-[#00d9ff]"
          }`}
        >
          SOFTWARE
        </button>
      </div>
    </div>
  );
}
