import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Float, useTexture } from '@react-three/drei';
import { useRef, useState, Suspense, useMemo } from 'react';
import * as THREE from 'three';
import healthkeyAppLogo from '@/assets/healthkey-app-logo.png';

// Hexagonal shard that orbits the token
const DataShard = ({ index, total, hovered }: { index: number; total: number; hovered: boolean }) => {
  const ref = useRef<THREE.Mesh>(null);
  const angle = (index / total) * Math.PI * 2;
  const radius = 2.2 + (index % 2) * 0.4;
  const speed = 0.3 + (index % 3) * 0.15;
  const yOffset = (index % 2 === 0 ? 0.3 : -0.3);

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime * (hovered ? speed * 0.3 : speed);
      ref.current.position.x = Math.cos(angle + t) * radius;
      ref.current.position.z = Math.sin(angle + t) * radius;
      ref.current.position.y = yOffset + Math.sin(t * 2) * 0.2;
      ref.current.rotation.x = t * 0.5;
      ref.current.rotation.y = t * 0.3;
    }
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.15, 0.25, 0.05]} />
      <meshStandardMaterial
        color="#22c55e"
        emissive="#22c55e"
        emissiveIntensity={hovered ? 1 : 0.5}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

// Main token coin with logo texture
const TokenCoin = ({ hovered }: { hovered: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);
  const pulseRef = useRef(0);
  
  // Load the logo texture
  const logoTexture = useLoader(THREE.TextureLoader, healthkeyAppLogo);
  
  // Configure texture
  useMemo(() => {
    if (logoTexture) {
      logoTexture.colorSpace = THREE.SRGBColorSpace;
      logoTexture.minFilter = THREE.LinearFilter;
      logoTexture.magFilter = THREE.LinearFilter;
    }
  }, [logoTexture]);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle rotation
      const targetRotY = hovered ? 0 : Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.05);
      
      // Tilt toward cursor on hover
      if (hovered) {
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, 0.1, 0.1);
      } else {
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, 0, 0.05);
      }

      // Pulse wave effect every 7 seconds
      pulseRef.current += 0.016;
      if (pulseRef.current > 7) {
        pulseRef.current = 0;
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main coin body */}
      <mesh>
        <cylinderGeometry args={[1.2, 1.2, 0.2, 64]} />
        <meshPhysicalMaterial
          color="#0a2a1a"
          metalness={0.9}
          roughness={0.1}
          transmission={0.3}
          thickness={0.5}
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          emissive="#22c55e"
          emissiveIntensity={hovered ? 0.4 : 0.2}
        />
      </mesh>
      
      {/* Logo on top face */}
      <mesh position={[0, 0.11, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2, 2]} />
        <meshStandardMaterial
          map={logoTexture}
          transparent
          alphaTest={0.1}
          emissive="#22c55e"
          emissiveIntensity={hovered ? 0.5 : 0.2}
        />
      </mesh>
      
      {/* Outer glow ring */}
      <mesh position={[0, 0.12, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.1, 1.25, 64]} />
        <meshStandardMaterial
          color="#22c55e"
          emissive="#22c55e"
          emissiveIntensity={hovered ? 1.5 : 0.8}
          transparent
          opacity={0.6}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

// Pulse wave effect
const PulseWave = () => {
  const ref = useRef<THREE.Mesh>(null);
  const [scale, setScale] = useState(0);
  const [opacity, setOpacity] = useState(0);

  useFrame((state) => {
    const time = state.clock.elapsedTime % 7;
    if (time < 1.5) {
      const progress = time / 1.5;
      setScale(1 + progress * 2);
      setOpacity(0.5 * (1 - progress));
    } else {
      setScale(0);
      setOpacity(0);
    }
    
    if (ref.current) {
      ref.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <ringGeometry args={[1.3, 1.5, 64]} />
      <meshBasicMaterial
        color="#22c55e"
        transparent
        opacity={opacity}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

// Scene with all elements
const TokenScene = ({ hovered }: { hovered: boolean }) => {
  const shardCount = 8;

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#22c55e" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4ade80" />
      <spotLight
        position={[0, 5, 0]}
        angle={0.5}
        penumbra={1}
        intensity={hovered ? 2 : 1}
        color="#22c55e"
      />

      {/* Floating token */}
      <Float
        speed={2}
        rotationIntensity={0}
        floatIntensity={0.5}
        floatingRange={[-0.1, 0.1]}
      >
        <group>
          <TokenCoin hovered={hovered} />
          <PulseWave />
        </group>
      </Float>

      {/* Orbiting shards */}
      {[...Array(shardCount)].map((_, i) => (
        <DataShard key={i} index={i} total={shardCount} hovered={hovered} />
      ))}
    </>
  );
};

// Loading fallback
const LoadingFallback = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

// Main export
export const HealthToken3D = ({ className = "" }: { className?: string }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow effect behind canvas */}
      <div 
        className={`absolute inset-0 rounded-full blur-3xl transition-all duration-500 ${
          hovered ? 'bg-primary/40' : 'bg-primary/20'
        }`}
        style={{
          transform: 'scale(0.6)',
        }}
      />
      
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          camera={{ position: [0, 2, 5], fov: 45 }}
          style={{ width: '100%', height: '100%' }}
          dpr={[1, 2]}
        >
          <TokenScene hovered={hovered} />
        </Canvas>
      </Suspense>
    </div>
  );
};
