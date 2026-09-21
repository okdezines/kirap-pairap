"use client";

import { motion } from "motion/react";
import { milestones } from "../data/milestones";



export default function Journey() {
    return (
        <section
            id="journey"
            className="bg-black px-6 py-24 text-white md:py-32 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="grid gap-10 lg:grid-cols-2">
                    <div>
                        <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-red-500">
                            Our Journey
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
                                    From an idea
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
                                    To a band.
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
                    </motion.div>
                </div>

                {/* Timeline */}
                <div className="mt-24">
                    {milestones.map((milestone, index) => (
                        <motion.article
                            key={milestone.id}
                            initial={{
                                opacity: 0,
                                y: 35,
                                x: milestone.status === "current" ? 15 : 0,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.25,
                            }}
                            transition={{
                                duration: 0.65,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="grid border-t border-white/20 py-10 md:grid-cols-[120px_1fr_2fr] md:gap-10 md:py-14"
                        >
                            {/* Number */}
                            <div>
                                <span
                                    className={`text-sm font-bold ${milestone.status === "current"
                                        ? "text-red-500"
                                        : "text-white/30"
                                        }`}
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>

                            {/* Title */}
                            <div className="mt-4 md:mt-0">
                                <p
                                    className={`text-xs font-bold uppercase tracking-[0.25em] ${milestone.status === "current"
                                        ? "text-red-500"
                                        : "text-white/40"
                                        }`}
                                >
                                    {milestone.date}
                                </p>

                                <h3 className="mt-3 text-2xl font-black uppercase md:text-3xl">
                                    {milestone.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <div className="mt-5 md:mt-0">
                                <p className="max-w-2xl leading-7 text-white/60">
                                    {milestone.description}
                                </p>

                                <div className="mt-6">
                                    <Status status={milestone.status} />
                                </div>
                            </div>
                        </motion.article>
                    ))}

                    <div className="border-t border-white/20" />
                </div>

            </div>
        </section>
    );
}

function Status({
    status,
}: {
    status: "completed" | "current" | "future";
}) {
    const labels = {
        completed: "Completed",
        current: "In Progress",
        future: "Coming Up",
    };

    return (
        <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: 0.25,
            }}
            className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${status === "current"
                ? "border-red-500 text-red-500"
                : "border-white/20 text-white/40"
                }`}
        >
            {labels[status]}
        </motion.span>
    );
}