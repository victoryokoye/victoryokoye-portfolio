"use client"

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations"

export default function FadeUp({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}