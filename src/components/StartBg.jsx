import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

function MovingStars() {
  const starsRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (starsRef.current) {
      starsRef.current.rotation.x = t * 0.01;
      starsRef.current.rotation.y = t * 0.01;
    }
  });

  return <Stars ref={starsRef} radius={50} count={5000} factor={4} fade />;
}

export default function StarBg({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      
      {/* ⭐ Stars background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <MovingStars />
        </Canvas>
      </div>

      {/* 🌑 Optional dark overlay for readability */}
      <div className="absolute inset-0 z-10 bg-black/40" />

      {/* 🧠 YOUR CONTENT */}
      <div className="relative z-20">
        {children}
      </div>

    </div>
  );
}
