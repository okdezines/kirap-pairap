import Link from "next/link";

export default function ContributionSuccessPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-32 md:px-10">
                <div className="w-full">
                    <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-red-500">
                        Kirap Pairap
                    </p>

                    <h1 className="max-w-5xl text-6xl font-black uppercase leading-[0.85] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
                        Thank
                        <br />
                        <span className="text-red-600">You.</span>
                    </h1>

                    <div className="mt-12 max-w-2xl border-l border-white/20 pl-6 md:pl-8">
                        <p className="text-xl font-bold uppercase tracking-tight md:text-3xl">
                            You&apos;re part of the journey.
                        </p>

                        <p className="mt-6 text-base leading-7 text-white/60">
                            Your contribution has been submitted successfully. Stripe is
                            securely confirming your payment.
                        </p>

                        <p className="mt-4 text-base leading-7 text-white/60">
                            Your support helps Kirap Pairap build our sound, strengthen our
                            community and keep Papua New Guinea&apos;s musical and cultural
                            heritage alive.
                        </p>

                        <p className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-white/40">
                            Ignite • Preserve • Pass On
                        </p>
                    </div>

                    <div className="mt-12 flex flex-wrap gap-4">
                        <Link
                            href="/"
                            className="inline-flex min-h-14 items-center justify-center bg-red-600 px-8 text-sm font-black uppercase tracking-[0.15em] text-white transition hover:bg-red-500"
                        >
                            Return to Kirap Pairap
                        </Link>

                        <Link
                            href="/support/"
                            className="inline-flex min-h-14 items-center justify-center border border-white/20 px-8 text-sm font-black uppercase tracking-[0.15em] text-white transition hover:border-white/60"
                        >
                            Support Page
                        </Link>
                    </div>

                    <div className="mt-20 border-t border-white/10 pt-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                            Papua New Guinea • Wellington • New Zealand
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}