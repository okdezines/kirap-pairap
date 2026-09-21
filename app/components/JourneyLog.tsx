"use client";

import { motion } from "motion/react";
import { practiceSessions } from "../data/practiceSessions";

export default function JourneyLog() {
    return (
        <section className="bg-white px-6 py-24 text-black md:py-32 lg:px-8">
            <div className="mx-auto max-w-7xl">

                {/* Introduction */}
                <div className="grid gap-10 border-b border-black/20 pb-16 lg:grid-cols-2">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-xs font-bold uppercase tracking-[0.35em] text-red-600"
                        >
                            The Journey So Far
                        </motion.p>

                        <h2 className="mt-6 text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl">
                            Not just where
                            <span className="block">we&apos;re going.</span>

                            <span className="block text-red-600">
                                Where we&apos;ve been.
                            </span>
                        </h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7,
                            delay: 0.15,
                        }}
                        className="flex items-end"
                    >
                        <p className="max-w-xl text-lg leading-8 text-black/60">
                            Rehearsals, lessons, challenges and small victories all become
                            part of the Kirap Pairap story. This journal records those
                            moments as the band grows.
                        </p>
                    </motion.div>
                </div>

                {/* Sessions */}
                <div>
                    {practiceSessions.map((session, sessionIndex) => (
                        <motion.article
                            key={session.id}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="border-b border-black/20 py-20"
                        >
                            {/* Session heading */}
                            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-600">
                                        {session.session}
                                    </p>

                                    <p className="mt-4 text-sm font-bold uppercase">
                                        {session.date}
                                    </p>

                                    <p className="mt-1 text-sm text-black/45">
                                        {session.location}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-4xl font-black uppercase tracking-tight md:text-6xl">
                                        {session.title}
                                    </h3>

                                    <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">
                                        {session.description}
                                    </p>
                                </div>
                            </div>

                            {/* Learning */}
                            <div className="mt-14 grid gap-12 md:grid-cols-2">

                                <div className="border-t border-black/20 pt-6">
                                    <p className="text-xs font-bold uppercase tracking-[0.3em]">
                                        What We Worked On
                                    </p>

                                    <ul className="mt-6 space-y-3">
                                        {session.workedOn.map((item) => (
                                            <li
                                                key={item}
                                                className="flex gap-4 text-base text-black/65"
                                            >
                                                <span className="text-red-600">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="border-t border-black/20 pt-6">
                                    <p className="text-xs font-bold uppercase tracking-[0.3em]">
                                        What We Learned
                                    </p>

                                    <p className="mt-6 max-w-xl text-lg leading-8 text-black/65">
                                        {session.learned}
                                    </p>
                                </div>

                            </div>

                            {/* Media */}
                            <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
                                {[0, 1, 2].map((imageIndex) => {
                                    const image = session.images[imageIndex];

                                    return (
                                        <div
                                            key={imageIndex}
                                            className={`relative aspect-[4/3] overflow-hidden bg-black/5 ${imageIndex === 2 ? "col-span-2 md:col-span-1" : ""
                                                }`}
                                        >
                                            {image ? (
                                                <img
                                                    src={image}
                                                    alt={`${session.title} — ${imageIndex + 1}`}
                                                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="text-center">
                                                        <p className="text-3xl font-black text-black/10">
                                                            {String(imageIndex + 1).padStart(2, "0")}
                                                        </p>

                                                        <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.3em] text-black/25">
                                                            Media Coming Soon
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Entry number */}
                            <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-black/30">
                                Journal Entry {String(sessionIndex + 1).padStart(2, "0")}
                            </p>

                        </motion.article>
                    ))}
                </div>

                {/* Closing statement */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="pt-20"
                >
                    <p className="max-w-5xl text-4xl font-black uppercase leading-[0.95] tracking-tight md:text-6xl">
                        Every rehearsal becomes
                        <span className="block">
                            part of <span className="text-red-600">our story.</span>
                        </span>
                    </p>
                </motion.div>

            </div>
        </section>
    );
}