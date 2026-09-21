// import Image from "next/image";
"use client";

import { motion } from "motion/react";

import { galleryItems } from "../data/gallery";

export default function PracticeSessions() {
    return (
        <section
            id="gallery"
            className="bg-neutral-100 px-6 py-24 text-black md:py-32 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="grid gap-10 lg:grid-cols-2">
                    <div>
                        <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-red-600">
                            Practice Sessions
                        </p>

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
                                    Finding
                                </motion.span>
                            </span>

                            <span className="block overflow-hidden">
                                <motion.span
                                    initial={{ y: "110%" }}
                                    whileInView={{ y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.12,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="block"
                                >
                                    Our Sound.
                                </motion.span>
                            </span>
                        </h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7,
                            delay: 0.25,
                            ease: "easeOut",
                        }}
                        className="flex items-end"
                    >
                        <p className="max-w-xl text-lg leading-8 text-black/60">
                            Every practice is part of the Kirap Pairap story. We are
                            documenting the rehearsals, conversations and moments
                            that take us from an idea to a performing band.
                        </p>
                    </motion.div>
                </div>

                {/* Gallery */}
                <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {galleryItems.map((item, index) => (
                        <motion.article
                            key={item.id}
                            initial={{
                                opacity: 0,
                                y: 40,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.12,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="group"
                        >

                            {/* Image */}
                            <motion.div
                                whileHover={{ scale: 0.985 }}
                                transition={{
                                    duration: 0.35,
                                    ease: "easeOut",
                                }}
                                className="relative aspect-[4/5] overflow-hidden bg-neutral-300"
                            >
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.35,
                                    }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <div className="text-center">
                                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/30">
                                            Kirap Pairap
                                        </p>

                                        <p className="mt-2 text-sm text-black/40">
                                            Photo coming soon
                                        </p>
                                    </div>
                                </motion.div>

                                <div className="absolute left-5 top-5">
                                    <span className="rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
                                        {item.type}
                                    </span>
                                </div>
                            </motion.div>

                            {/* Information */}
                            <div className="pt-5">
                                <div className="flex items-center justify-between gap-4">
                                    <h3 className="text-xl font-black uppercase">
                                        {item.title}
                                    </h3>

                                    <span className="text-xs font-semibold text-black/40">
                                        {item.date}
                                    </span>
                                </div>

                                <p className="mt-3 leading-7 text-black/55">
                                    {item.description}
                                </p>
                            </div>

                        </motion.article>
                    ))}
                </div>

            </div>
        </section>
    );
}