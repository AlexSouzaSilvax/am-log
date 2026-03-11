import truck from "@/assets/truck.png";
import { motion } from "framer-motion";

export function TruckAnimated() {
  return (
    <>
      <div
        className="absolute w-72 h-72 bg-linear-to-r
          from-zinc-300/40 via-zinc-400/30 to-zinc-500/40
          dark:from-white/20 dark:via-white/10 dark:to-white/20
          blur-[120px] rounded-full animate-pulse"
      ></div>

      <motion.img
        src={truck}
        alt="Caminhão"
        className="relative max-h-105 drop-shadow-[0_30px_40px_rgba(255,255,255,0.1)]  invert dark:invert-0"
        initial={{ y: 10 }}
        animate={{ y: -10 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 3,
          ease: "easeInOut",
        }}
      />
    </>
  );
}
