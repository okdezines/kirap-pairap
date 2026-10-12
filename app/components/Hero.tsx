"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);

    // Track the hero as it moves through the viewport.
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    // Background moves more slowly than the page.
    const backgroundY = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", "12%"]
    );

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen overflow-hidden bg-black"
        >
            {/* Parallax hero artwork */}
            <motion.div
                style={{
                    y: backgroundY,
                    // scaleX: -1,
                }}
                className="
                        absolute
                        -inset-y-[8%]
                        inset-x-0
                        bg-[url('/kirap-pairap/images/hero/story.png')]
                        bg-cover
                        bg-[center_55%]
                        bg-no-repeat
                        will-change-transform
                    "
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/35" />

            {/* Left-side gradient for readable text */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-transparent" />

            {/* Hero content */}
            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 md:px-10 lg:px-12">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.12,
                                delayChildren: 0.15,
                            },
                        },
                    }}
                    className="max-w-3xl"
                >
                    {/* Location */}
                    {/* Location + PNG Community Badge */}
                    <motion.div
                        variants={{
                            hidden: {
                                opacity: 0,
                                x: -35,
                            },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 0.7,
                                },
                            },
                        }}
                        className="mb-8 flex items-center gap-4 md:gap-5"
                    >
                        {/* WPNGC Badge */}
                        <img
                            src="/kirap-pairap/images/logo/gloss.png"
                            alt="Wellington Papua New Guinea Community Inc."
                            className="
                                    h-12 w-12
                                    shrink-0
                                    object-contain
                                    md:h-16 md:w-16
                                    lg:h-[72px] lg:w-[72px]
                            "
                        />


                        {/* Location */}
                        <p
                            className="
                                max-w-xl
                                text-xs
                                font-bold
                                uppercase
                                leading-[1.45]
                                tracking-[0.25em]
                                text-[#d2b48c]
                                md:text-sm
                                md:leading-[1.5]
                                "
                        >
                            Papua New Guinea• Wellington• Community• Inc• New Zealand
                        </p>
                    </motion.div>

                    {/* Main title */}
                    <motion.h1
                        variants={{
                            hidden: {
                                opacity: 0,
                                x: -70,
                            },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 0.9,
                                    ease: [0.22, 1, 0.36, 1],
                                },
                            },
                        }}
                        className="
                            hero-title
                            text-[clamp(4.5rem,10vw,9rem)]
                            font-black
                            uppercase
                            leading-[0.72]
                            tracking-[-0.06em]
    "
                    >
                        Kirapim

                        <span className="block">
                            Paiya<span className="hero-title-dot">.</span>
                        </span>
                    </motion.h1>

                    {/* Tagline */}
                    <motion.div
                        variants={{
                            hidden: {
                                opacity: 0,
                            },
                            visible: {
                                opacity: 1,
                                transition: {
                                    duration: 0.8,
                                },
                            },
                        }}
                        className="
    mt-4
    flex
    w-fit
    items-center
    gap-[10px]
    whitespace-nowrap
    text-[10px]
    font-black
    uppercase
    tracking-[0.18em]
    text-red-500

    sm:text-[16px]
    sm:gap-3

    md:mt-6
    md:gap-5
    md:text-[16px]
    md:tracking-[0.14em]
  "
                    >
                        <span>Ignite</span>
                        <span className="text-red-600">•</span>
                        <span>Preserve</span>
                        <span className="text-red-600">•</span>
                        <span>Pass On</span>
                    </motion.div>

                    {/* Animated red line */}
                    <motion.div
                        variants={{
                            hidden: {
                                scaleX: 0,
                            },
                            visible: {
                                scaleX: 1,
                                transition: {
                                    duration: 0.6,
                                },
                            },
                        }}
                        className="my-8  h-[2px] w-16 origin-left bg-red-600"
                    />


                    <motion.p
                        className="
                            hero-description
                            max-w-xl
                            text-[15px]
                            md:text-[18px]
                            lg:text-[19px]
                            leading-[1.45]
                            tracking-[0.14em]
                            text-[#d2b48c]
                        "
                    >
                        One community. Building a music band to ignite, preserve and pass on
                        Papua New Guinea&apos;s musical and cultural heritage.
                    </motion.p>


                    {/* CTA buttons */}
                    <motion.div
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 25,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.6,
                                },
                            },
                        }}
                        className="mt-10 flex flex-wrap gap-4"
                    >
                        <Link
                            href="/story/"
                            className="rounded-lg border border-white/30 bg-[#e7c220] px-8 py-4 text-xs font-black 
                            uppercase tracking-[0.2em] text-black backdrop-blur-sm transition hover:border-white 
                            hover:bg-[#151512] hover:text-white"
                        >
                            Our Story →
                        </Link>

                        <Link
                            href="/support/"
                            className="rounded-md border border-white/30 bg-red-600 px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-black"
                        >
                            Support the Band →
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom label */}
            <motion.div
                initial={{
                    opacity: 0,
                    x: 20,
                }}
                animate={{
                    opacity: 1,
                    x: 0,
                }}
                transition={{
                    duration: 0.8,
                    delay: 1.1,
                }}
                className="absolute bottom-8 right-8 z-10 hidden text-right text-[10px] font-bold uppercase tracking-[0.35em] text-white/60 md:block"
            >
                <p>Our Music</p>
                <p>Our Culture</p>
                <p>Our Story</p>
            </motion.div>
        </section>
    );
}