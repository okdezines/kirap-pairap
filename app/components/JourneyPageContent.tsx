"use client";

import { motion } from "motion/react";
import { milestones } from "../data/milestones";
import JourneyLog from "./JourneyLog";

export default function JourneyPageContent() {
    return (

        <main className="bg-black text-white">

            {/* HERO */}
            <section className="px-6 pb-24 pt-36 md:pb-32 lg:px-8">
                <div className="mx-auto max-w-7xl">

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                        }}
                        className="mb-8 text-xs font-bold uppercase tracking-[0.35em] text-red-500"
                    >
                        Our Journey
                    </motion.p>

                    <h1 className="text-6xl font-black uppercase leading-[0.84] tracking-tight md:text-8xl lg:text-[9rem]">

                        <span className="block overflow-hidden">
                            <motion.span
                                initial={{ y: "110%" }}
                                animate={{ y: 0 }}
                                transition={{
                                    duration: 0.9,
                                    delay: 0.1,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="block"
                            >
                                From An Idea.
                            </motion.span>
                        </span>

                        <span className="block overflow-hidden text-red-600">
                            <motion.span
                                initial={{ y: "110%" }}
                                animate={{ y: 0 }}
                                transition={{
                                    duration: 0.9,
                                    delay: 0.2,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="block"
                            >
                                To The Stage.
                            </motion.span>
                        </span>

                    </h1>

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                        }}
                        className="mt-16 grid gap-8 border-t border-white/20 pt-8 md:grid-cols-2"
                    >
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/45">
                            Kirap Pairap • The Journey
                        </p>

                        <p className="max-w-xl text-lg leading-8 text-white/65">
                            Kirap Pairap is still at the beginning of its story. From an idea
                            shared between six people to fundraising, rehearsals and future
                            performances, this is where we document each step forward.
                        </p>
                    </motion.div>

                </div>
            </section>
            {/* JOURNEY TIMELINE */}
            <section className="bg-[#f3f0ea] px-6 py-24 text-black md:py-32 lg:px-8">
                <div className="mx-auto max-w-7xl">

                    {/* Section introduction */}
                    <div className="grid gap-10 border-b border-black/20 pb-16 lg:grid-cols-2">
                        <div>
                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-xs font-bold uppercase tracking-[0.35em] text-red-600"
                            >
                                The Road Ahead
                            </motion.p>

                            <h2 className="mt-6 text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl">
                                Every step
                                <span className="block">builds the band.</span>
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
                                Kirap Pairap is a work in progress. Some milestones are already
                                behind us, one represents where we are now, and others show where
                                we hope the journey will take us next.
                            </p>
                        </motion.div>
                    </div>

                    {/* Milestones */}
                    <div>
                        {milestones.map((milestone, index) => {
                            const isCurrent = milestone.status === "current";
                            const isCompleted = milestone.status === "completed";

                            return (
                                <motion.article
                                    key={milestone.id}
                                    initial={{ opacity: 0, y: 35 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{
                                        once: true,
                                        amount: 0.2,
                                    }}
                                    transition={{
                                        duration: 0.7,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className={`grid gap-8 border-b border-black/20 py-12 md:grid-cols-[0.35fr_0.65fr_1fr] md:py-16 ${isCurrent ? "bg-red-600 text-white" : ""
                                        }`}
                                >
                                    {/* Number */}
                                    <div className={isCurrent ? "px-6 md:px-8" : ""}>
                                        <p
                                            className={`text-5xl font-black md:text-6xl ${isCurrent
                                                ? "text-white"
                                                : isCompleted
                                                    ? "text-black"
                                                    : "text-black/20"
                                                }`}
                                        >
                                            {String(index + 1).padStart(2, "0")}
                                        </p>
                                    </div>

                                    {/* Status */}
                                    <div className={isCurrent ? "px-6 md:px-0" : ""}>
                                        <p
                                            className={`text-xs font-bold uppercase tracking-[0.3em] ${isCurrent
                                                ? "text-white/70"
                                                : isCompleted
                                                    ? "text-red-600"
                                                    : "text-black/35"
                                                }`}
                                        >
                                            {milestone.date}
                                        </p>

                                        <p
                                            className={`mt-3 text-xs font-bold uppercase tracking-[0.2em] ${isCurrent ? "text-white" : "text-black/40"
                                                }`}
                                        >
                                            {isCurrent
                                                ? "Where We Are Now"
                                                : isCompleted
                                                    ? "Completed"
                                                    : "Ahead"}
                                        </p>
                                    </div>

                                    {/* Content */}
                                    <div className={isCurrent ? "px-6 pb-6 md:px-8 md:pb-0" : ""}>
                                        <h3
                                            className={`text-3xl font-black uppercase tracking-tight md:text-5xl ${!isCurrent && !isCompleted ? "text-black/35" : ""
                                                }`}
                                        >
                                            {milestone.title}
                                        </h3>

                                        <p
                                            className={`mt-5 max-w-2xl text-base leading-7 md:text-lg md:leading-8 ${isCurrent
                                                ? "text-white/80"
                                                : isCompleted
                                                    ? "text-black/60"
                                                    : "text-black/40"
                                                }`}
                                        >
                                            {milestone.description}
                                        </p>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>

                </div>
            </section>
            <JourneyLog />

        </main>
    );
}