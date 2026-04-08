import { motion, AnimatePresence } from "motion/react";
import { CloudRain, Sun, Cloud, Wind } from "lucide-react";

export type WeatherType = "sunny" | "rainy" | "foggy" | "stormy";

interface WeatherSystemProps {
  weather: WeatherType;
}

export const WeatherSystem = ({ weather }: WeatherSystemProps) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      <AnimatePresence mode="wait">
        {weather === "rainy" && (
          <motion.div
            key="rain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/10"
          >
            {Array.from({ length: 100 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-blue-400/30 w-[1px] h-10"
                initial={{ 
                  top: -100, 
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() 
                }}
                animate={{ 
                  top: "120%",
                  left: `${(Math.random() * 10) + (i % 100)}%`
                }}
                transition={{ 
                  duration: 0.5 + Math.random() * 0.5, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: Math.random() * 2
                }}
              />
            ))}
          </motion.div>
        )}

        {weather === "foggy" && (
          <motion.div
            key="fog"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"
          />
        )}

        {weather === "stormy" && (
          <motion.div
            key="storm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40"
          >
             {/* Lightning flashes */}
             <motion.div 
               animate={{ opacity: [0, 0, 1, 0, 0, 1, 0] }}
               transition={{ duration: 5, repeat: Infinity, times: [0, 0.8, 0.82, 0.84, 0.9, 0.92, 1] }}
               className="absolute inset-0 bg-white/30"
             />
             {/* Rain but faster/more */}
             {Array.from({ length: 150 }).map((_, i) => (
              <motion.div
                key={`storm-rain-${i}`}
                className="absolute bg-blue-200/40 w-[1px] h-16"
                initial={{ 
                  top: -100, 
                  left: `${Math.random() * 100}%`,
                  rotate: 15
                }}
                animate={{ 
                  top: "120%",
                  left: `${(Math.random() * 20) + (i % 100) - 10}%`
                }}
                transition={{ 
                  duration: 0.3 + Math.random() * 0.3, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: Math.random() * 2
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Guiding Wind Effect (Always present but subtle) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`wind-${i}`}
            className="absolute h-[2px] bg-white/50 blur-sm"
            initial={{ left: "-20%", top: `${20 + i * 15}%`, width: "0%" }}
            animate={{ left: "120%", width: ["0%", "30%", "0%"] }}
            transition={{ 
              duration: 4 + Math.random() * 4, 
              repeat: Infinity, 
              delay: i * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};
