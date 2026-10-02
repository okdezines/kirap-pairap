"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import { fundraising } from "../data/fundraising";

export default function SupportPageContent() {
    const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
    const [customAmount, setCustomAmount] = useState("");


    const searchParams = useSearchParams();
    const payment = searchParams.get("payment");

    const paymentStatus =
        payment === "success" || payment === "cancelled"
            ? payment
            : null;
    // State  read Stripe's return URL



    // const STRIPE_TEST_PAYMENT_LINK =
    //     "https://buy.stripe.com/test_bJeeVf5YUaH3a2502D0oM00";

    const handleContribution = async () => {
        if (!selectedAmount || selectedAmount <= 0) {
            return;
        }

        try {
            const response = await fetch(
                "https://kirap-pairap-api-fyb3a0bhhsesf6gb.newzealandnorth-01.azurewebsites.net/api/createCheckoutSession",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        amount: selectedAmount,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Unable to create checkout session.");
            }

            const data = await response.json();

            if (!data.checkoutUrl) {
                throw new Error("Stripe checkout URL was not returned.");
            }

            window.location.href = data.checkoutUrl;
        } catch (error) {
            console.error("Contribution checkout failed:", error);
        }
    };

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
            {/* SUPPORT + CONTRIBUTION HERO */}
            <section className="min-h-screen px-6 pb-10 pt-24 md:pt-28 lg:px-8 lg:pb-12 lg:pt-28">
                <div className="mx-auto flex max-w-7xl flex-col lg:min-h-[calc(100vh-7rem)]">

                    <div className="grid flex-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

                        {/* LEFT — MESSAGE */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <p className="mb-7 text-xs font-bold uppercase tracking-[0.35em] text-red-500">
                                Support Kirap Pairap
                            </p>

                            <h1 className="text-6xl font-black uppercase leading-[0.82] tracking-tight sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem]">
                                Help Us
                                <span className="block text-red-600">
                                    Build The
                                </span>
                                <span className="block">
                                    Sound.
                                </span>
                            </h1>

                            <p className="mt-8 max-w-xl text-base leading-7 text-white/60 md:text-lg md:leading-8">
                                Your contribution helps Kirap Pairap purchase the instruments
                                and equipment needed to create music, strengthen community and
                                pass on our Papua New Guinean cultural heritage.
                            </p>

                            <p className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-white/35">
                                Ignite • Preserve • Pass On
                            </p>
                        </motion.div>


                        {/* RIGHT — CONTRIBUTION */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                            className="border-t border-white/20 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0"
                        >

                            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/45">
                                Make A Contribution
                            </p>

                            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight md:text-4xl">
                                Choose your amount.
                            </h2>


                            {/* Payment status */}

                            {paymentStatus === "success" && (
                                <div className="mt-8 border border-green-500/30 bg-green-500/10 p-5">
                                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-green-400">
                                        Thank You
                                    </p>

                                    <p className="mt-3 text-sm leading-6 text-white/60">
                                        Your contribution has been completed. Thank you for
                                        supporting Kirap Pairap.
                                    </p>
                                </div>
                            )}

                            {paymentStatus === "cancelled" && (
                                <div className="mt-8 border border-white/20 bg-white/5 p-5">
                                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">
                                        Contribution Cancelled
                                    </p>

                                    <p className="mt-3 text-sm leading-6 text-white/60">
                                        No payment was made. You can choose another amount
                                        whenever you&apos;re ready.
                                    </p>
                                </div>
                            )}


                            {/* Amount buttons */}

                            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                                {[10, 20, 50, 100].map((amount) => {
                                    const isSelected = selectedAmount === amount;

                                    return (
                                        <button
                                            key={amount}
                                            type="button"
                                            onClick={() => {
                                                setSelectedAmount(amount);
                                                setCustomAmount("");
                                            }}
                                            className={`border px-4 py-6 text-xl font-black transition-all ${isSelected
                                                ? "border-red-600 bg-red-600 text-white"
                                                : "border-white/20 text-white hover:border-white/70"
                                                }`}
                                        >
                                            ${amount}
                                        </button>
                                    );
                                })}
                            </div>


                            {/* Custom amount */}

                            <div className="mt-3">
                                <label
                                    htmlFor="heroCustomAmount"
                                    className="sr-only"
                                >
                                    Enter another contribution amount
                                </label>

                                <div className="flex items-center border border-white/20 transition-colors focus-within:border-red-600">
                                    <span className="pl-5 text-lg font-black text-white/50">
                                        NZ$
                                    </span>

                                    <input
                                        id="heroCustomAmount"
                                        type="number"
                                        min="1"
                                        step="1"
                                        inputMode="numeric"
                                        placeholder="Other amount"
                                        value={customAmount}
                                        onChange={(event) => {
                                            const value = event.target.value;

                                            setCustomAmount(value);

                                            const numericValue = Number(value);

                                            if (numericValue > 0) {
                                                setSelectedAmount(numericValue);
                                            } else {
                                                setSelectedAmount(null);
                                            }
                                        }}
                                        className="w-full bg-transparent px-3 py-5 text-lg font-black text-white outline-none placeholder:text-white/30"
                                    />
                                </div>
                            </div>


                            {/* Checkout */}

                            <button
                                type="button"
                                onClick={handleContribution}
                                disabled={!selectedAmount || selectedAmount <= 0}
                                className={`mt-4 w-full px-6 py-6 text-sm font-bold uppercase tracking-[0.2em] transition-all ${selectedAmount && selectedAmount > 0
                                    ? "bg-red-600 text-white hover:bg-red-500"
                                    : "cursor-not-allowed bg-white/10 text-white/30"
                                    }`}
                            >
                                {selectedAmount
                                    ? `Contribute NZ$${selectedAmount} →`
                                    : "Choose an amount"}
                            </button>

                            <div className="mt-5 flex items-center gap-3">
                                <span className="h-2 w-2 rounded-full bg-red-500" />

                                <p className="text-xs leading-5 text-white/40">
                                    Stripe sandbox payments are enabled for testing.
                                    No real money will be charged.
                                </p>
                            </div>

                        </motion.div>
                    </div>


                    {/* HERO FUNDRAISING STATUS */}

                    <div className="mt-16 border-t border-white/15 pt-6 lg:mt-8">
                        <div className="grid gap-6 sm:grid-cols-[auto_1fr_auto] sm:items-end">

                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">
                                    Raised
                                </p>

                                <p className="mt-1 text-2xl font-black">
                                    {formatMoney(fundraising.raised)}
                                </p>
                            </div>

                            <div className="sm:pb-2">
                                <div className="h-1 overflow-hidden bg-white/10">
                                    <motion.div
                                        initial={{ width: "0%" }}
                                        animate={{ width: `${progress}%` }}
                                        transition={{
                                            duration: 1.4,
                                            delay: 0.5,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="h-full bg-red-600"
                                    />
                                </div>

                                {/* <div className="mt-3 flex items-center justify-between gap-4">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
                                        {Math.round(progress)}% funded
                                    </p>

                                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
                                        {formatMoney(fundraising.goal - fundraising.raised)} to go
                                    </p>
                                </div> */}
                            </div>

                            <div className="sm:text-right">
                                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">
                                    Goal
                                </p>

                                <p className="mt-1 text-2xl font-black">
                                    {formatMoney(fundraising.goal)}
                                </p>
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

                            <h2 className="mt-6 text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-5xl md:text-7xl">
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

        </main>
    );
}