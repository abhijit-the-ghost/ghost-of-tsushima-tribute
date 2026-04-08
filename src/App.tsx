/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  Sword, 
  Wind, 
  Map, 
  Users, 
  History, 
  Sun, 
  CloudRain, 
  Cloud, 
  Zap,
  ChevronDown,
  X
} from "lucide-react";
import { SakuraParticles } from "./components/SakuraParticles";
import { WeatherSystem, WeatherType } from "./components/WeatherSystem";
import { ThemeToggle } from "./components/ThemeToggle";
import { Button } from "./components/ui/button";
import { cn } from "./lib/utils";

 const heroImage = "https://picsum.photos/seed/tsushima-fire/1200/800';
const secondImage = "https://picsum.photos/seed/tsushima-fire/1200/800";
const jinSakai = "https://picsum.photos/seed/jinsakai/800/1000";
const lordShimura = "https://picsum.photos/seed/shimura/800/1000";
const khotunKhan = "https://picsum.photos/seed/khotun/800/1000";



const characters = [
  {
    name: "Jin Sakai",
    role: "The Ghost",
    description: "A samurai who must choose between his code of honor and the survival of his people.",
    details: "Jin Sakai is the main protagonist of Ghost of Tsushima. Raised as a samurai by his uncle Lord Shimura, Jin was taught the ways of honor and direct combat. However, after the devastating defeat at Komoda Beach, Jin realizes that traditional samurai tactics are not enough to defeat the Mongol invaders. He begins to adopt the persona of 'The Ghost', using stealth, fear, and unconventional weapons to dismantle the Mongol army from the shadows.",
    image: jinSakai,
    stats: { honor: "Low", stealth: "Master", combat: "Versatile" }
  },
  {
    name: "Lord Shimura",
    role: "The Jito",
    description: "Jin's uncle and the ruler of Tsushima, strictly bound by the samurai code.",
    details: "Lord Shimura is the Jito (lord) of Tsushima and Jin's maternal uncle. He is a staunch traditionalist who believes that honor is everything. To him, fighting from the shadows is a coward's path. His rigid adherence to the samurai code often puts him at odds with Jin's evolving tactics, creating a tragic conflict between family loyalty and ideological duty.",
    image: lordShimura,
    stats: { honor: "Absolute", stealth: "None", combat: "Traditional" }
  },
  {
    name: "Khotun Khan",
    role: "The Invader",
    description: "The ruthless leader of the Mongol army seeking to conquer all of Japan.",
    details: "Khotun Khan is the grandson of Genghis Khan and the leader of the Mongol invasion of Tsushima. Unlike many villains, Khotun is highly intelligent and has studied Japanese culture, language, and the samurai code to better exploit their weaknesses. He is a master of psychological warfare and is willing to use any means necessary to achieve total conquest.",
    image: khotunKhan,
    stats: { honor: "None", stealth: "Strategic", combat: "Brutal" }
  }
];

const gameplayFeatures = [
  {
    title: "The Guiding Wind",
    description: "Nature itself guides your path. Call upon the wind to lead you to your next objective.",
    icon: Wind,
  },
  {
    title: "Standoffs & Duels",
    description: "Engage in cinematic one-on-one combat that tests your timing and resolve.",
    icon: Sword,
  },
  {
    title: "Ghost Weapons",
    description: "Master stealth and unconventional tools like kunai, smoke bombs, and firecrackers.",
    icon: Zap,
  },
  {
    title: "Exploration",
    description: "Discover hidden shrines, hot springs, and haiku spots across the beautiful island.",
    icon: Map,
  }
];

export default function App() {
  const [weather, setWeather] = useState<WeatherType>("sunny");
  const [selectedCharacter, setSelectedCharacter] = useState<typeof characters[0] | null>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  return (
    <div className="relative min-h-screen selection:bg-tsushima-red selection:text-white">
      <SakuraParticles />
      <WeatherSystem weather={weather} />
      
      {/* Navigation / Controls */}
      <nav className="fixed top-6 right-6 z-[100] flex items-center gap-4">
        <div className="flex bg-background/50 backdrop-blur-md border border-border/50 rounded-full p-1">
          {(["sunny", "rainy", "foggy", "stormy"] as WeatherType[]).map((w) => (
            <Button
              key={w}
              variant="ghost"
              size="icon"
              onClick={() => setWeather(w)}
              className={cn(
                "rounded-full w-10 h-10 transition-all",
                weather === w ? "bg-primary text-primary-foreground" : "hover:bg-accent/50"
              )}
            >
              {w === "sunny" && <Sun className="h-4 w-4" />}
              {w === "rainy" && <CloudRain className="h-4 w-4" />}
              {w === "foggy" && <Cloud className="h-4 w-4" />}
              {w === "stormy" && <Zap className="h-4 w-4" />}
            </Button>
          ))}
        </div>
        <ThemeToggle />
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <motion.div 
          style={{ opacity, scale }}
          className="z-10"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-tsushima-red dark:text-tsushima-gold font-heading tracking-[0.3em] uppercase text-sm mb-4"
          >
            A Tribute to
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl font-heading mb-6 tracking-tighter"
          >
            Ghost of <br />
            <span className="text-tsushima-red dark:text-tsushima-gold">Tsushima</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.6 }}
            className="max-w-xl mx-auto text-lg font-serif italic"
          >
            "Honor died on the beach. The Ghost was born in the shadows."
          </motion.p>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50"
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>

        {/* Background Image with Parallax */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
          <img 
            src={heroImage} 
            alt="Tsushima Landscape" 
            className="w-full h-full object-cover opacity-40 dark:opacity-20"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-columns-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-tsushima-red dark:text-tsushima-gold mb-4">
              <History className="h-5 w-5" />
              <span className="font-heading tracking-widest uppercase text-xs">The Legend</span>
            </div>
            <h2 className="text-4xl font-heading mb-6">The Invasion of 1274</h2>
            <p className="text-muted-foreground leading-relaxed mb-6 font-serif text-lg">
              In the late 13th century, the Mongol empire has laid waste to entire nations along their campaign to conquer the East. Tsushima Island is all that stands between mainland Japan and a massive Mongol invasion fleet led by the ruthless and cunning general, Khotun Khan.
            </p>
            <p className="text-muted-foreground leading-relaxed font-serif text-lg">
              As the island burns in the wake of the first wave of the Mongol assault, samurai warrior Jin Sakai stands as one of the last surviving members of his clan. He is resolved to do whatever it takes, at any cost, to protect his people and reclaim his home.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-2xl"
          >
            <img 
              src={secondImage}
              alt="Tsushima on Fire" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-tsushima-red/10 mix-blend-overlay" />
          </motion.div>
        </div>
      </section>

      {/* Characters Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-2 text-tsushima-red dark:text-tsushima-gold mb-4">
              <Users className="h-5 w-5" />
              <span className="font-heading tracking-widest uppercase text-xs">The Warriors</span>
            </div>
            <h2 className="text-4xl font-heading">Key Figures</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {characters.map((char, i) => (
              <motion.div
                key={char.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ 
                  scale: 1.03, 
                  borderColor: "rgba(139, 0, 0, 0.8)",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                onClick={() => setSelectedCharacter(char)}
                className="group relative bg-background border border-border/50 rounded-2xl overflow-hidden cursor-pointer transition-colors duration-500"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={char.image} 
                    alt={char.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <p className="text-tsushima-red dark:text-tsushima-gold font-heading text-xs tracking-widest uppercase mb-1">{char.role}</p>
                  <h3 className="text-2xl font-heading mb-3">{char.name}</h3>
                  <p className="text-muted-foreground font-serif">{char.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Character Modal */}
      <AnimatePresence>
        {selectedCharacter && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCharacter(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-tsushima-paper dark:bg-tsushima-ink border border-tsushima-red/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button
                onClick={() => setSelectedCharacter(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
              >
                <X className="h-6 w-6 text-white" />
              </button>

              <div className="w-full md:w-2/5 aspect-[3/4] md:aspect-auto">
                <img 
                  src={selectedCharacter.image} 
                  alt={selectedCharacter.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto max-h-[60vh] md:max-h-none">
                <p className="text-tsushima-red dark:text-tsushima-gold font-heading tracking-widest uppercase text-sm mb-2">
                  {selectedCharacter.role}
                </p>
                <h2 className="text-4xl md:text-5xl font-heading mb-6">{selectedCharacter.name}</h2>
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {Object.entries(selectedCharacter.stats).map(([key, value]) => (
                    <div key={key} className="text-center p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-border/50">
                      <p className="text-[10px] uppercase tracking-tighter text-muted-foreground mb-1">{key}</p>
                      <p className="text-sm font-heading text-tsushima-red dark:text-tsushima-gold">{value}</p>
                    </div>
                  ))}
                </div>

                <p className="text-lg font-serif leading-relaxed text-muted-foreground">
                  {selectedCharacter.details}
                </p>
                
                <div className="mt-8 pt-8 border-t border-border/50">
                  <Button 
                    onClick={() => setSelectedCharacter(null)}
                    className="bg-tsushima-red hover:bg-tsushima-red/90 text-white font-heading tracking-widest uppercase"
                  >
                    Return to Tsushima
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Gameplay Section */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 text-tsushima-red dark:text-tsushima-gold mb-4">
            <Sword className="h-5 w-5" />
            <span className="font-heading tracking-widest uppercase text-xs">The Path</span>
          </div>
          <h2 className="text-4xl font-heading">Gameplay Mechanics</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gameplayFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-background border border-border/50 rounded-2xl hover:bg-accent/5 transition-colors"
            >
              <feature.icon className="h-10 w-10 text-tsushima-red dark:text-tsushima-gold mb-6" />
              <h3 className="text-xl font-heading mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50 text-center">
        <p className="font-heading text-tsushima-red dark:text-tsushima-gold tracking-[0.5em] uppercase text-xs mb-4">Tsushima</p>
        <p className="text-muted-foreground text-sm font-serif">
          A tribute to the masterpiece by Sucker Punch Productions.
        </p>
        <div className="mt-8 flex justify-center gap-6 text-muted-foreground">
          {/* Social icons placeholder */}
          <div className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center hover:text-primary transition-colors cursor-pointer">
            <Wind className="h-4 w-4" />
          </div>
          <div className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center hover:text-primary transition-colors cursor-pointer">
            <Sword className="h-4 w-4" />
          </div>
        </div>
      </footer>
    </div>
  );
}
