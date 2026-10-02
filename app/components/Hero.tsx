"use client";

import { motion } from "motion/react";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden bg-[#F2D94E] text-black">

            {/* Top black accent */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                    duration: 1,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute left-0 top-0 z-30 h-3 w-full origin-left bg-black"
            />

            {/* Right red accent - desktop */}
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{
                    duration: 1,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute right-0 top-0 z-30 hidden w-3 bg-red-600 lg:block"
            />

            {/* =====================================================
          MOBILE BACKGROUND ARTWORK
          Hidden on desktop
      ====================================================== */}
            <motion.div
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1.2,
                    delay: 0.15,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 z-0 lg:hidden"
            >
                <img
                    src="/kirap-pairap/images/hero/kirap-pairap-retro-art.png"
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full scale-[1.05] object-cover object-center"
                />

                {/* Dark overlay makes white text readable */}
                <div className="absolute inset-0 bg-black/55" />

                {/* Slight yellow tint keeps the retro identity */}
                <div className="absolute inset-0 bg-[#F2D94E]/10" />

                {/* Extra lower gradient for buttons/text */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/45" />
            </motion.div>

            {/* =====================================================
          DESKTOP ARTWORK
          Pulled closer toward the text
      ====================================================== */}
            <motion.div
                initial={{ opacity: 0, x: 80, rotate: 3 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{
                    duration: 1,
                    delay: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="
  pointer-events-none
  absolute
  right-[1%]
  top-1/2
  z-[2]
  hidden
  w-[61%]
  max-w-[1000px]
  -translate-y-1/2
  lg:block
  xl:right-[2%]
"
            >
                <img
                    src="/kirap-pairap/images/hero/kirap-pairap-retro-art.png"
                    alt=""
                    aria-hidden="true"
                    className="h-auto w-full object-contain"
                />
            </motion.div>

            {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">

                {/* Limit width on desktop so text and artwork share space */}
                <div className="max-w-xl lg:max-w-[48%]">

                    {/* Location */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.2,
                            ease: "easeOut",
                        }}
                        className="
              mb-6
              text-xs
              font-black
              uppercase
              tracking-[0.3em]
              text-white
              lg:text-red-700
              md:text-sm
            "
                    >
                        Papua New Guinea • Wellington • New Zealand
                    </motion.p>

                    {/* Heading */}
                    <h1
                        className="
              overflow-hidden
              text-6xl
              font-black
              uppercase
              leading-[0.82]
              tracking-tight
              text-white
              sm:text-7xl
              md:text-8xl
              lg:text-[7rem]
              lg:text-black
              xl:text-[8rem]
            "
                    >
                        <span className="block overflow-hidden">
                            <motion.span
                                initial={{ y: "110%" }}
                                animate={{ y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.3,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="block"
                            >
                                Kirap
                            </motion.span>
                        </span>

                        <span className="block overflow-hidden">
                            <motion.span
                                initial={{ y: "110%" }}
                                animate={{ y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.42,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="block"
                            >
                                Pairap<span className="text-red-600">.</span>
                            </motion.span>
                        </span>
                    </h1>

                    {/* Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
              mt-8
              h-[3px]
              w-20
              origin-left
              bg-white
              lg:bg-black
            "
                    />

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.65,
                            ease: "easeOut",
                        }}
                        className="
              mt-8
              max-w-xl
              text-lg
              font-medium
              leading-relaxed
              text-white/90
              md:text-xl
              lg:text-black/75
            "
                    >
                        One community. Building a band to ignite, preserve and pass on
                        Papua New Guinea&apos;s musical and cultural heritage.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.8,
                            ease: "easeOut",
                        }}
                        className="mt-10"
                    >
                        <a
                            href="#support"
                            className="
            group
            inline-flex
            items-center
            gap-5
            rounded-full
            bg-black
            px-8
            py-5
            text-base
            font-black
            uppercase
            tracking-[0.12em]
            text-white
            transition-all
            duration-300
            hover:bg-red-600
            hover:px-10
            sm:px-10
            sm:py-6
            sm:text-lg
        "
                        >
                            Help Fund the Band

                            <span
                                className="
        flex
        h-11
        w-11
        shrink-0
        items-center
        justify-center
        rounded-full
        bg-[#F2D94E]
        text-2xl
        font-bold
        leading-none
        text-black
        transition-transform
        duration-300
        group-hover:translate-x-1
        sm:h-10
        sm:w-10
        sm:text-xl
    "
                            >
                                →
                            </span>
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* =====================================================
          BOTTOM RIGHT MESSAGE
      ====================================================== */}
            <div className="absolute bottom-8 right-6 z-20 hidden text-right md:block lg:right-8">
                <p
                    className="
            text-xs
            font-black
            uppercase
            tracking-[0.3em]
            text-white/70
            lg:text-black/60
          "
                >
                    Our Music
                    <br />
                    Our Culture
                    <br />
                    Our Story
                </p>
            </div>

            {/* =====================================================
          BOTTOM LEFT IDENTITY
      ====================================================== */}
            <div className="absolute bottom-8 left-6 z-20 md:left-8">
                <div className="mb-3 h-10 w-[3px] bg-red-600" />

                <p
                    className="
            text-[9px]
            font-black
            uppercase
            tracking-[0.25em]
            text-white/70
            sm:text-[10px]
            lg:text-black/50
          "
                >
                    Ignite • Preserve • Pass On
                </p>
            </div>
        </section>
    );
}