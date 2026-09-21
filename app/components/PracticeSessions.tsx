"use client";

import { motion } from "motion/react";

import { practiceSessions } from "../data/practiceSessions";

export default function PracticeSessions() {
    return (
        <section
            id="gallery"
            className="bg-[#f3f0ea] px-6 py-24 text-black md:py-32 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="grid gap-10 lg:grid-cols-2">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-8 text-xs font-bold uppercase tracking-[0.35em] text-red-600"
                        >
                            Practice Log
                        </motion.p>

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
                        transition={{ duration: 0.7, delay: 0.25 }}
                        className="flex items-end"
                    >
                        <p className="max-w-xl text-lg leading-8 text-black/60">
                            Follow Kirap Pairap behind the scenes as we practise, learn,
                            experiment and develop our sound together.
                        </p>
                    </motion.div>
                </div>

                {/* Sessions */}
                <div className="mt-20">
                    {practiceSessions.map((session, index) => (
                        <motion.article
                            key={session.id}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.08,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="border-t border-black/20 py-12 md:py-16"
                        >
                            {/* Session heading */}
                            <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
                                        Session {String(session.id).padStart(2, "0")}
                                    </p>

                                    <p className="mt-4 text-sm font-semibold uppercase tracking-wider">
                                        {session.date}
                                    </p>

                                    <p className="mt-1 text-sm text-black/50">
                                        {session.location}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-black uppercase tracking-tight md:text-5xl">
                                        {session.title}
                                    </h3>

                                    <p className="mt-6 max-w-2xl text-base leading-7 text-black/60 md:text-lg md:leading-8">
                                        {session.summary}
                                    </p>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="mt-12 grid gap-10 md:grid-cols-2">
                                <div className="border-t border-black/15 pt-6">
                                    <p className="text-xs font-bold uppercase tracking-[0.3em]">
                                        What We Worked On
                                    </p>

                                    <ul className="mt-6 space-y-3">
                                        {session.workedOn.map((item) => (
                                            <li
                                                key={item}
                                                className="flex items-start gap-4 text-black/65"
                                            >
                                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="border-t border-black/15 pt-6">
                                    <p className="text-xs font-bold uppercase tracking-[0.3em]">
                                        What We Learned
                                    </p>

                                    <p className="mt-6 max-w-xl text-lg leading-8 text-black/65">
                                        {session.learned}
                                    </p>
                                </div>
                            </div>

                            {/* Media placeholders */}
                            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
                                {[1, 2, 3].map((item) => (
                                    <div
                                        key={item}
                                        className="flex aspect-[4/3] items-center justify-center bg-black/5"
                                    >
                                        <div className="text-center">
                                            <p className="text-2xl font-black text-black/10">
                                                0{item}
                                            </p>

                                            <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.25em] text-black/30">
                                                Media Coming Soon
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Closing */}
                <div className="border-t border-black/20 pt-10">
                    <p className="max-w-3xl text-2xl font-black uppercase leading-tight md:text-4xl">
                        Every rehearsal becomes part of{" "}
                        <span className="text-red-600">our story.</span>
                    </p>
                </div>
            </div>
        </section>
    );
}