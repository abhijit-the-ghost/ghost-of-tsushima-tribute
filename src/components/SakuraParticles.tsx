import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Petal {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  duration: number;
  delay: number;
}

export const SakuraParticles = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -10,
      size: Math.random() * 10 + 5,
      rotation: Math.random() * 360,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 20,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="sakura-petal"
          initial={{ 
            x: `${petal.x}vw`, 
            y: "-5vh", 
            rotate: petal.rotation,
            opacity: 0 
          }}
          animate={{ 
            y: "110vh", 
            x: `${petal.x + (Math.random() * 20 - 10)}vw`,
            rotate: petal.rotation + 720,
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "linear",
          }}
          style={{
            width: petal.size,
            height: petal.size,
            background: "radial-gradient(circle, #ffb7c5 0%, #ff91a4 100%)",
            borderRadius: "40% 60% 60% 40% / 60% 40% 60% 40%",
            boxShadow: "0 0 5px rgba(255, 183, 197, 0.5)",
          }}
        />
      ))}
    </div>
  );
};
