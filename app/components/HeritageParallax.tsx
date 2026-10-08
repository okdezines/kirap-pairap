"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const purposes = [
    {
        number: "01",
        title: "Ignite",
        text: "Spark interest in Papua New Guinea's music, culture and creative spirit.",
    },
    {
        number: "02",
        title: "Preserve",
        text: "Keep our musical and cultural heritage alive through community, storytelling and sound.",
    },
    {
        number: "03",
        title: "Pass On",
        text: "Share what we carry with the next generation, so the story continues.",
    },
];

export default function HeritageParallax() {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Background moves slowly to create depth
    const backgroundY = useTransform(
        scrollYProgress,
        [0, 1],
        ["-8%", "12%"]
    );

    // Stage 1 — Heritage message
    const textY = useTransform(
        scrollYProgress,
        [0, 1],
        ["40px", "-120px"]
    );

    const opacity = useTransform(
        scrollYProgress,
        [0.10, 0.20, 0.32, 0.40],
        [0, 1, 1, 0]
    );

    // Stage 2 — Our Story
    const storyY = useTransform(
        scrollYProgress,
        [0.30, 0.46, 0.62],
        ["80px", "0px", "-60px"]
    );

    const storyOpacity = useTransform(
        scrollYProgress,
        [0.28, 0.38, 0.54, 0.64],
        [0, 1, 1, 0]
    );

    // Stage 3 — Purpose principles
    const purposeY = useTransform(
        scrollYProgress,
        [0.48, 0.62, 0.82],
        ["80px", "0px", "-60px"]
    );

    const purposeOpacity = useTransform(
        scrollYProgress,
        [0.46, 0.54, 0.76, 0.86],
        [0, 1, 1, 0]
    );

    return (
        <section
            ref={sectionRef}
            className="relative h-[310vh] overflow-hidden bg-black"
        >
            {/* Parallax artwork */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute -inset-y-[10%] inset-x-0"
            >
                <div
                    className="
                        h-full w-full
                        bg-[url('/kirap-pairap/images/hero/kirap-pairap-hero.png')]
                        bg-cover
                        bg-center
                        bg-no-repeat
                    "
                />
            </motion.div>

            {/* Cinematic overlays */}
            <div className="absolute inset-0 bg-black/25" />

            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

            {/* =======================================================
                STAGE 1 — HERITAGE
            ======================================================== */}
            <div className="absolute inset-x-0 top-0 z-10 mx-auto flex h-screen w-full max-w-7xl items-center px-6 md:px-10 lg:px-12">
                <motion.div
                    style={{
                        y: textY,
                        opacity,
                    }}
                    className="max-w-3xl"
                >
                    <p className="mb-5 text-xs font-black uppercase tracking-[0.4em] text-red-500">
                        From generation to generation
                    </p>

                    <h2 className="text-[clamp(3.5rem,8vw,8rem)] font-black uppercase leading-[0.82] tracking-[-0.055em] text-white">
                        Our Stories

                        <span className="block">
                            Live In
                        </span>

                        <span className="block text-red-600">
                            Our Music.
                        </span>
                    </h2>

                    <div className="mt-8 h-[2px] w-16 bg-red-600" />

                    <p className="mt-8 max-w-lg text-base leading-7 text-white/70 md:text-lg">
                        What was carried through story, song and community
                        continues through the music we create today.
                    </p>
                </motion.div>
            </div>

            {/* =======================================================
                STAGE 2 — OUR STORY
            ======================================================== */}
            <div className="absolute inset-0 z-10 mx-auto flex h-full w-full max-w-7xl items-center px-6 md:px-10 lg:px-12">
                <motion.div
                    style={{
                        y: storyY,
                        opacity: storyOpacity,
                    }}
                    className="ml-auto max-w-2xl"
                >
                    <p className="mb-5 text-xs font-black uppercase tracking-[0.4em] text-red-500">
                        Our Story & Purpose
                    </p>

                    <h2 className="text-[clamp(3.5rem,7vw,7rem)] font-black uppercase leading-[0.82] tracking-[-0.055em] text-white">
                        More Than

                        <span className="block text-red-600">
                            A Band.
                        </span>
                    </h2>

                    <div className="my-8 h-[2px] w-16 bg-red-600" />

                    <p className="max-w-xl text-base font-semibold leading-7 text-[#FFF5EE] md:text-lg md:leading-8">
                        Kirap Pairap is about more than making music. It is about
                        keeping our connection to Papua New Guinea alive through
                        music, culture and community here in Wellington.
                    </p>

                    <p className="mt-5 max-w-xl text-base font-semibold leading-7 text-[#FFF5EE] md:text-lg md:leading-8">
                        We want the next generation to grow up hearing the music,
                        seeing the culture and knowing that these stories belong
                        to them too.
                    </p>
                </motion.div>
            </div>

            {/* =======================================================
                STAGE 3 — IGNITE / PRESERVE / PASS ON
            ======================================================== */}
            <div
                className="
        absolute inset-x-0
        bottom-[5vh]
        z-10 mx-auto
        flex h-[145vh]
        w-full max-w-7xl
        items-center
        px-6
        md:bottom-[14vh]
        md:px-10
        lg:bottom-[40vh]
        lg:px-10
    "
            >
                <motion.div
                    style={{
                        y: purposeY,
                        opacity: purposeOpacity,
                    }}
                    className="w-full"
                >
                    <p className="mb-8 text-xs font-black uppercase tracking-[0.4em] text-red-500">
                        What We Carry Forward
                    </p>

                    <div className="grid gap-0 lg:grid-cols-3">
                        {purposes.map((purpose, index) => (
                            <motion.article
                                key={purpose.number}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{
                                    once: true,
                                    amount: 0.25,
                                }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.12,
                                    ease: "easeOut",
                                }}

                                className="
    border-t border-white/25
    py-6
    md:border-r
    md:px-6
    md:py-8
    first:md:pl-0
    last:md:border-r-0
    lg:px-8
    lg:py-10
"
                            >
                                <span className="text-xs font-black tracking-[0.3em] text-red-500">
                                    {purpose.number}
                                </span>

                                <h3 className="mt-5 text-4xl font-black uppercase tracking-[-0.04em] text-white md:text-5xl">
                                    {purpose.title}
                                </h3>

                                <p className="mt-5 max-w-md text-base font-semibold leading-7 text-[#FFF5EE] md:text-lg md:leading-8">
                                    {purpose.text}
                                </p>
                            </motion.article>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}