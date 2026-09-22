"use client";

import { motion } from "motion/react";
import { fundraising } from "../data/fundraising";

export default function SupportPageContent() {
    const progress = Math.min(
        (fundraising.raised / fundraising.goal) * 100,
        100
    );

    const formatMoney = (amount: number) =>
        new Intl.NumberFormat("en-NZ", {
            style: "currency",
            currency: fundraising.currency,
            maximumFractionDigits: 0,
        }).format(amount);

    return (
        <main className="bg-black text-white">

            {/* HERO */}
            <section className="px-6 pb-24 pt-36 md:pb-32 lg:px-8">
                <div className="mx-auto max-w-7xl">

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8 text-xs font-bold uppercase tracking-[0.35em] text-red-500"
                    >
                        Support Kirap Pairap
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
                                Help Us Build
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
                                The Band.
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
                            Music • Culture • Community
                        </p>

                        <p className="max-w-xl text-lg leading-8 text-white/65">
                            We are raising funds to help Kirap Pairap purchase the
                            instruments and equipment needed to rehearse, create music and
                            eventually perform for our community.
                        </p>
                    </motion.div>

                </div>
            </section>


            {/* FUNDRAISING PROGRESS */}
            <section className="bg-red-600 px-6 py-24 text-white md:py-32 lg:px-8">
                <div className="mx-auto max-w-7xl">

                    <div className="grid gap-14 lg:grid-cols-2">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/70">
                                Our Fundraising Goal
                            </p>

                            <h2 className="mt-6 text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl">
                                Building something
                                <span className="block text-black">together.</span>
                            </h2>
                        </div>

                        <div className="flex flex-col justify-end">
                            <div className="flex items-end justify-between gap-6">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                                        Raised
                                    </p>

                                    <p className="mt-2 text-4xl font-black md:text-6xl">
                                        {formatMoney(fundraising.raised)}
                                    </p>
                                </div>

                                <div className="text-right">
                                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                                        Goal
                                    </p>

                                    <p className="mt-2 text-2xl font-black md:text-4xl">
                                        {formatMoney(fundraising.goal)}
                                    </p>
                                </div>
                            </div>

                            {/* Progress bar */}
                            <div className="mt-8 h-3 overflow-hidden rounded-full bg-black/20">
                                <motion.div
                                    initial={{ width: "0%" }}
                                    whileInView={{ width: `${progress}%` }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 1.4,
                                        delay: 0.2,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="h-full rounded-full bg-white"
                                />
                            </div>

                            <div className="mt-4 flex justify-between text-sm font-bold uppercase tracking-[0.2em]">
                                <span>{Math.round(progress)}% funded</span>
                                <span>
                                    {formatMoney(fundraising.goal - fundraising.raised)} to go
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            {/* WHAT THE SUPPORT BUILDS */}
            <section className="bg-[#f3f0ea] px-6 py-24 text-black md:py-32 lg:px-8">
                <div className="mx-auto max-w-7xl">

                    <div className="grid gap-10 lg:grid-cols-2">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-600">
                                What We&apos;re Building
                            </p>

                            <h2 className="mt-6 text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl">
                                Instruments
                                <span className="block">create opportunity.</span>
                            </h2>
                        </div>

                        <div className="flex items-end">
                            <p className="max-w-xl text-lg leading-8 text-black/60">
                                The goal is not simply to own equipment. These instruments
                                give Kirap Pairap the tools to practise consistently, develop
                                our music and share it with others.
                            </p>
                        </div>
                    </div>

                    {/* Equipment */}
                    <div className="mt-20">
                        {fundraising.equipment.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.05,
                                }}
                                className="grid gap-4 border-t border-black/20 py-7 md:grid-cols-[0.2fr_1fr_0.5fr] md:items-center"
                            >
                                <p className="text-sm font-black text-red-600">
                                    {String(index + 1).padStart(2, "0")}
                                </p>

                                <h3 className="text-2xl font-black uppercase md:text-3xl">
                                    {item.name}
                                </h3>

                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40 md:text-right">
                                    {item.status}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>


            {/* WHY SUPPORT MATTERS */}
            <section className="bg-white px-6 py-24 text-black md:py-32 lg:px-8">
                <div className="mx-auto max-w-7xl">

                    <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-600">
                        Why It Matters
                    </p>

                    <div className="mt-8 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
                        <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl">
                            More than
                            <span className="block">equipment.</span>
                        </h2>

                        <div className="space-y-6 text-lg leading-8 text-black/60">
                            <p>
                                Supporting Kirap Pairap helps create a space where music can
                                strengthen cultural connection and community.
                            </p>

                            <p>
                                It also helps us build something younger generations can see,
                                hear and participate in — keeping Papua New Guinean music and
                                cultural identity visible here in Wellington.
                            </p>
                        </div>
                    </div>

                </div>
            </section>


            {/* FUTURE CONTRIBUTION AREA */}
            <section className="bg-black px-6 py-24 text-white md:py-32 lg:px-8">
                <div className="mx-auto max-w-7xl">

                    <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-500">
                        Make A Contribution
                    </p>

                    <div className="mt-8 grid gap-14 lg:grid-cols-2">
                        <div>
                            <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl">
                                Be part of
                                <span className="block text-red-600">the journey.</span>
                            </h2>

                            <p className="mt-8 max-w-xl text-lg leading-8 text-white/60">
                                Every contribution, large or small, can help Kirap Pairap move
                                closer to the instruments and equipment needed to build the
                                band.
                            </p>
                        </div>

                        {/* Contribution UI */}
                        <div className="border border-white/15 p-6 md:p-8">
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/50">
                                Choose an amount
                            </p>

                            <div className="mt-6 grid grid-cols-2 gap-3">
                                {["$20", "$50", "$100", "Other"].map((amount) => (
                                    <button
                                        key={amount}
                                        type="button"
                                        disabled
                                        className="cursor-not-allowed border border-white/20 px-5 py-5 text-lg font-black text-white/40"
                                    >
                                        {amount}
                                    </button>
                                ))}
                            </div>

                            <button
                                type="button"
                                disabled
                                className="mt-4 w-full cursor-not-allowed bg-white/10 px-6 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white/40"
                            >
                                Contribution System Coming Soon
                            </button>

                            <p className="mt-5 text-sm leading-6 text-white/40">
                                Online contributions are not yet enabled. A secure payment
                                system will be added in a future stage of the project.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

        </main>
    );
}