"use client";

import { motion } from "motion/react";

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

export default function OurPurpose() {
    return (
        <section className="relative overflow-hidden bg-black text-white">
            {/* subtle continuation of the hero */}
            <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-red-600/60 to-transparent" />

            <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32 lg:px-12 lg:py-40">
                <div className="grid gap-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-28">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:sticky lg:top-32 lg:self-start"
                    >
                        <p className="mb-8 text-xs font-black uppercase tracking-[0.4em] text-red-500">
                            Our Purpose
                        </p>

                        <h2 className="max-w-xl text-[clamp(3.5rem,7vw,7rem)] font-black uppercase leading-[0.82] tracking-[-0.055em]">
                            Music
                            <span className="block">Keeps Our</span>
                            <span className="block">
                                Story <span className="text-red-600">Alive.</span>
                            </span>
                        </h2>

                        <div className="mt-10 h-[2px] w-16 bg-red-600" />

                        <p className="mt-8 max-w-md text-base leading-7 text-white/55">
                            Kirap Pairap is more than a band. Music gives us a way to
                            remember where we come from, celebrate who we are and carry
                            our culture forward.
                        </p>
                    </motion.div>

                    {/* RIGHT */}
                    <div>
                        {purposes.map((purpose, index) => (
                            <motion.article
                                key={purpose.number}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.35 }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.08,
                                    ease: "easeOut",
                                }}
                                className="border-t border-white/15 py-10 md:py-14"
                            >
                                <div className="grid gap-5 md:grid-cols-[90px_1fr]">
                                    <span className="text-sm font-black tracking-[0.25em] text-red-500">
                                        {purpose.number}
                                    </span>

                                    <div>
                                        <h3 className="text-4xl font-black uppercase tracking-[-0.04em] md:text-5xl">
                                            {purpose.title}
                                        </h3>

                                        <p className="mt-5 max-w-lg text-base leading-7 text-white/55">
                                            {purpose.text}
                                        </p>
                                    </div>
                                </div>
                            </motion.article>
                        ))}

                        <div className="border-t border-white/15" />
                    </div>
                </div>
            </div>

            {/* very subtle red glow */}
            <div className="pointer-events-none absolute -bottom-48 -left-48 h-96 w-96 rounded-full bg-red-700/10 blur-[120px]" />
        </section>
    );
}