"use client";

import { motion } from "motion/react";
import { bandMembers } from "../data/members";

export default function BandMembers() {
    return (
        <section
            id="members"
            className="bg-white px-6 py-24 text-black md:py-32 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section label */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                    className="mb-8 text-xs font-bold uppercase tracking-[0.35em] text-red-600"
                >
                    The People
                </motion.p>

                {/* Heading */}
                <div className="grid gap-10 lg:grid-cols-2">

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
                                Meet
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
                                Kirap Pairap.
                            </motion.span>
                        </span>
                    </h2>

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
                            Six people brought together by music, culture and community.
                            Each member brings their own experience, personality and sound
                            to the Kirap Pairap journey.
                        </p>
                    </motion.div>

                </div>

                {/* Members */}
                <div className="mt-20 grid grid-cols-2 gap-x-4 gap-y-12 md:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                    {bandMembers.map((member, index) => (
                        <motion.article
                            key={member.id}
                            initial={{
                                opacity: 0,
                                y: 35,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.15,
                            }}
                            transition={{
                                duration: 0.65,
                                delay: (index % 3) * 0.08,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="group"
                        >

                            {/* Portrait */}
                            <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">

                                {member.image ? (
                                    <img
                                        src={member.image}
                                        alt={`${member.name} — ${member.role}`}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <p className="text-4xl font-black text-black/10 md:text-6xl">
                                                {String(index + 1).padStart(2, "0")}
                                            </p>

                                            <p className="mt-3 text-xs font-bold uppercase tracking-[0.25em] text-black/30">
                                                Portrait Coming Soon
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Member number */}
                                <div className="absolute left-4 top-4 bg-black px-3 py-2 text-xs font-bold tracking-[0.2em] text-white">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                            </div>

                            {/* Information */}
                            <div className="pt-5">

                                <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
                                    {member.role}
                                </p>

                                <h3 className="mt-2 text-xl font-black uppercase tracking-tight md:text-2xl">
                                    {member.name}
                                </h3>

                                <p className="mt-3 max-w-sm text-sm leading-6 text-black/55 md:text-base md:leading-7">
                                    {member.bio}
                                </p>

                            </div>

                        </motion.article>
                    ))}
                </div>

            </div>
        </section>
    );
}