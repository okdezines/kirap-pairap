"use client";

import { motion } from "motion/react";

export default function OurPurpose() {
    return (
        <section className="relative overflow-hidden bg-black text-white">
            {/* Subtle continuation of the hero */}
            <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-red-600/60 to-transparent" />

            <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32 lg:px-12 lg:py-40">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                    className="max-w-3xl"
                >
                    {/* Section label */}
                    <p className="mb-8 text-xs font-black uppercase tracking-[0.4em] text-red-500">
                        Our Purpose
                    </p>

                    {/* Main statement */}
                    <h2 className="max-w-3xl text-[clamp(3.5rem,7vw,7rem)] font-black uppercase leading-[0.82] tracking-[-0.055em]">
                        Music
                        <span className="block">Keeps Our</span>
                        <span className="block">
                            Story <span className="text-red-600">Alive.</span>
                        </span>
                    </h2>

                    {/* Red divider */}
                    <div className="mt-10 h-[2px] w-16 bg-red-600" />

                    {/* Supporting statement */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7,
                            delay: 0.25,
                            ease: "easeOut",
                        }}
                        className="mt-8 max-w-lg text-base leading-7 text-white/55"
                    >
                        Kirap Pairap is more than a band. Music gives us a way to
                        remember where we come from, celebrate who we are and carry
                        our culture forward.
                    </motion.p>
                </motion.div>
            </div>

            {/* Very subtle red glow */}
            <div className="pointer-events-none absolute -bottom-48 -left-48 h-96 w-96 rounded-full bg-red-700/10 blur-[120px]" />
        </section>
    );
}