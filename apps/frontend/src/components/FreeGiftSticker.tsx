"use client";

import React from "react";
import { motion } from "motion/react";

export default function FreeGiftSticker() {
  return (
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className={`absolute rotate-[-6deg] sm:rotate-[8deg] left-1/2 -bottom-[20px] sm:bottom-auto -translate-x-1/2 sm:top-[-18px] sm:translate-x-0 font-semibold border border-kk-dark-pink px-5 py-1 sm:right-[-15px] sm:left-auto bg-kk-pink text-kk-purple`}
      >
        FREE GIFT
      </motion.div>
  );
}
