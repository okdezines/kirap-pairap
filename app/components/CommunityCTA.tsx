"use client";

import { motion } from "motion/react";

export default function CommunityCTA() {
    return (
        <section className="bg-black px-6 py-24 text-white md:py-32 lg:px-8">
            <div className="mx-auto max-w-7xl">

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                    className="mb-8 text-xs font-bold uppercase tracking-[0.35em] text-red-500"
                >
                    Music • Culture • Community
                </motion.p>


                <div className="grid gap-12 lg:grid-cols-2">

                    <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl">
                        <span className="block overflow-hidden">
                            <motion.span
                                initial={{ y: "110%" }}
                                whileInView={{ y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="block"
                            >
                                Be part
                            </motion.span>
                        </span>

                        <span className="block overflow-hidden">
                            <motion.span
                                initial={{ y: "110%" }}
                                whileInView={{ y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.1,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="block"
                            >
                                Of the
                            </motion.span>
                        </span>

                        <span className="block overflow-hidden">
                            <motion.span
                                initial={{ y: "110%" }}
                                whileInView={{ y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.2,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="block text-red-500"
                            >
                                Journey.
                            </motion.span>
                        </span>
                    </h2>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            duration: 0.75,
                            delay: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex flex-col justify-end"
                    >
                        <p className="max-w-xl text-lg leading-8 text-white/60">
                            Kirap Pairap is being built by people who believe in the
                            power of music to bring our community together and keep
                            Papua New Guinean culture alive in Wellington.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="#support"
                                className="rounded-full bg-white px-7 py-3 text-sm font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-white/80"
                            >
                                Support the Band
                            </a>

                            <a
                                href="#gallery"
                                className="rounded-full border border-white/30 px-7 py-3 text-sm font-bold transition duration-300 hover:-translate-y-1 hover:border-white"
                            >
                                Follow Our Journey
                            </a>
                        </div>
                    </motion.div>

                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.15,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-24 border-t border-white/15 pt-8"
                >
                    <p className="max-w-4xl text-2xl font-bold leading-relaxed text-white/80 md:text-4xl">
                        From Papua New Guinea to Wellington —
                        <span className="text-red-500">
                            {" "}our music carries our story with us.
                        </span>
                    </p>
                </motion.div>

            </div>
        </section>
    );
}