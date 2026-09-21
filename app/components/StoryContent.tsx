"use client";

import { motion } from "motion/react";

export default function StoryContent() {
    return (
        <main className="bg-black text-white">
            <section className="min-h-[85vh] px-6 pb-20 pt-36 lg:px-8">
                <div className="mx-auto flex min-h-[65vh] max-w-7xl flex-col justify-between">
                    <div>
                        {/* Label */}
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.1,
                                ease: "easeOut",
                            }}
                            className="mb-8 text-xs font-bold uppercase tracking-[0.35em] text-red-500"
                        >
                            Our Story
                        </motion.p>

                        {/* Main heading */}
                        <h1 className="max-w-6xl text-6xl font-black uppercase leading-[0.84] tracking-tight md:text-8xl lg:text-[9rem]">
                            <span className="block overflow-hidden">
                                <motion.span
                                    initial={{ y: "110%" }}
                                    animate={{ y: 0 }}
                                    transition={{
                                        duration: 0.9,
                                        delay: 0.15,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="block"
                                >
                                    From Papua
                                </motion.span>
                            </span>

                            <span className="block overflow-hidden">
                                <motion.span
                                    initial={{ y: "110%" }}
                                    animate={{ y: 0 }}
                                    transition={{
                                        duration: 0.9,
                                        delay: 0.25,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="block"
                                >
                                    New Guinea
                                </motion.span>
                            </span>

                            <span className="block overflow-hidden text-red-600">
                                <motion.span
                                    initial={{ y: "110%" }}
                                    animate={{ y: 0 }}
                                    transition={{
                                        duration: 0.9,
                                        delay: 0.35,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="block"
                                >
                                    To Wellington.
                                </motion.span>
                            </span>
                        </h1>
                    </div>

                    {/* Hero footer */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.65,
                            ease: "easeOut",
                        }}
                        className="mt-16 grid gap-8 border-t border-white/20 pt-8 md:grid-cols-2"
                    >
                        <p className="max-w-md text-sm font-bold uppercase tracking-[0.2em] text-white/50">
                            Music • Culture • Community
                        </p>

                        <p className="max-w-xl text-lg leading-8 text-white/65">
                            Kirap Pairap was created from a shared desire to keep our
                            connection to Papua New Guinea alive through music, culture and
                            community — while building something the next generation can
                            carry forward.
                        </p>
                    </motion.div>
                </div>
            </section>
            {/* CHAPTER 01 */}
            <section className="bg-[#f3f0ea] px-6 py-24 text-black md:py-32 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

                        {/* Chapter label */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.7,
                                ease: "easeOut",
                            }}
                        >
                            <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-600">
                                Chapter 01
                            </p>

                            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-black/45">
                                Where We Come From
                            </p>
                        </motion.div>

                        <div>
                            {/* Heading */}
                            <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-tight md:text-7xl">
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
                                        Our music carries
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
                                        where we come from.
                                    </motion.span>
                                </span>
                            </h2>

                            {/* Copy */}
                            <motion.div
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.25,
                                    ease: "easeOut",
                                }}
                                className="mt-10 grid gap-8 md:grid-cols-2"
                            >
                                <p className="text-lg leading-8 text-black/65">
                                    Papua New Guinea is home to extraordinary cultural and musical
                                    diversity. Music has long been part of the way our communities
                                    gather, celebrate, remember and share stories.
                                </p>

                                <p className="text-lg leading-8 text-black/65">
                                    Although Kirap Pairap is based in Wellington, our connection to
                                    Papua New Guinea remains at the heart of who we are and what we
                                    want our music to represent.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>


            {/* CHAPTER 02 */}
            <section className="bg-red-600 px-6 py-24 text-white md:py-32 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.7,
                                ease: "easeOut",
                            }}
                        >
                            <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/70">
                                Chapter 02
                            </p>

                            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em]">
                                Why Kirap Pairap
                            </p>
                        </motion.div>

                        <div>
                            <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-tight md:text-7xl">
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
                                        Six people.
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
                                        One community.
                                    </motion.span>
                                </span>
                            </h2>

                            <motion.p
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.2,
                                    ease: "easeOut",
                                }}
                                className="mt-10 max-w-3xl text-lg leading-8 text-white/80 md:text-xl md:leading-9"
                            >
                                Kirap Pairap brings six people together through a shared love of
                                music and a desire to create something meaningful for our Papua New
                                Guinean community in Wellington.
                            </motion.p>

                            {/* Purpose */}
                            <motion.div
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.35,
                                    ease: "easeOut",
                                }}
                                className="mt-16 grid gap-8 border-t border-white/30 pt-8 sm:grid-cols-3"
                            >
                                <div>
                                    <p className="text-4xl font-black">01</p>
                                    <p className="mt-3 text-sm font-bold uppercase tracking-[0.25em]">
                                        Ignite
                                    </p>
                                </div>

                                <div>
                                    <p className="text-4xl font-black">02</p>
                                    <p className="mt-3 text-sm font-bold uppercase tracking-[0.25em]">
                                        Preserve
                                    </p>
                                </div>

                                <div>
                                    <p className="text-4xl font-black">03</p>
                                    <p className="mt-3 text-sm font-bold uppercase tracking-[0.25em]">
                                        Pass On
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>


            {/* CHAPTER 03 */}
            <section className="bg-white px-6 py-24 text-black md:py-32 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.7,
                                ease: "easeOut",
                            }}
                        >
                            <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-600">
                                Chapter 03
                            </p>

                            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-black/45">
                                The Next Generation
                            </p>
                        </motion.div>

                        <div>
                            <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-tight md:text-7xl">
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
                                        What we carry,
                                    </motion.span>
                                </span>

                                <span className="block overflow-hidden text-red-600">
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
                                        we pass on.
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
                                className="mt-10 max-w-3xl space-y-8"
                            >
                                <p className="text-lg leading-8 text-black/65 md:text-xl md:leading-9">
                                    Kirap Pairap is not only about the music we make today. It is about
                                    helping younger generations see, hear and experience a culture
                                    that belongs to them too.
                                </p>

                                <p className="text-lg leading-8 text-black/65 md:text-xl md:leading-9">
                                    Every rehearsal, song and future performance becomes another
                                    opportunity to keep that connection alive.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>


            {/* CLOSING */}
            <section className="bg-black px-6 py-24 text-white md:py-32 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-xs font-bold uppercase tracking-[0.35em] text-red-500"
                    >
                        Our Purpose
                    </motion.p>

                    <h2 className="mt-8 max-w-5xl text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl lg:text-8xl">
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
                                Ignite.
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
                                Preserve.
                            </motion.span>
                        </span>

                        <span className="block overflow-hidden text-red-600">
                            <motion.span
                                initial={{ y: "110%" }}
                                whileInView={{ y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.2,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="block"
                            >
                                Pass On.
                            </motion.span>
                        </span>
                    </h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7,
                            delay: 0.35,
                        }}
                        className="mt-16 flex flex-wrap gap-4"
                    >
                        <a
                            href="/kirap-pairap/#members"
                            className="rounded-full bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-black transition-transform hover:-translate-y-1"
                        >
                            Meet the Band
                        </a>

                        <a
                            href="/kirap-pairap/#support"
                            className="rounded-full border border-white/30 px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition-transform hover:-translate-y-1"
                        >
                            Support Kirap Pairap
                        </a>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}