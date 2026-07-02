// src/components/3d/HeroScene.tsx
'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, PresentationControls, Sparkles } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

function FloatingObjects() {
  // In einer echten Umgebung würdest du hier useGLTF('/models/scissors.glb') nutzen
  return (
    <>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[3, 1, -2]} rotation={[0.5, 0.5, 0]}>
          <octahedronGeometry args={[0.5]} />
          <meshStandardMaterial color="#B76E79" roughness={0.2} metalness={0.8} />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[-4, -1, -3]}>
          <torusGeometry args={[0.4, 0.1, 16, 32]} />
          <meshStandardMaterial color="#F7E7CE" roughness={0.1} metalness={1} />
        </mesh>
      </Float>
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#FFFDD0" />
        
        {/* Weiches HDRI Lighting für edle Reflexionen */}
        <Environment preset="city" />

        <PresentationControls 
          global 
          rotation={[0, 0, 0]} 
          polar={[-0.1, 0.1]} 
          azimuth={[-0.2, 0.2]} 
          config={{ mass: 2, tension: 400 }}
        >
          <FloatingObjects />
        </PresentationControls>

        {/* Schwebende Premium-Partikel / Staub */}
        <Sparkles count={100} scale={12} size={2} speed={0.4} opacity={0.3} color="#F7E7CE" />
      </Suspense>
    </Canvas>
  );
}