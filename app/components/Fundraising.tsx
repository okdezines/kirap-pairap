import { fundraising } from "../data/fundraising";

export default function Fundraising() {
    const progress = Math.min(
        (fundraising.raised / fundraising.goal) * 100,
        100
    );

    const money = new Intl.NumberFormat("en-NZ", {
        style: "currency",
        currency: fundraising.currency,
        maximumFractionDigits: 0,
    });

    return (
        <section
            id="support"
            className="bg-red-700 px-6 py-24 text-white md:py-32 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section heading */}
                <div className="grid gap-10 lg:grid-cols-2">

                    <div>
                        <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-white/60">
                            Support Kirap Pairap
                        </p>

                        <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl">
                            Build
                            <br />
                            the band.
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="max-w-xl text-lg leading-8 text-white/75">
                            We are raising funds to purchase the instruments and
                            equipment needed to establish Kirap Pairap. Every
                            contribution brings us one step closer to rehearsing,
                            performing and sharing our music with the community.
                        </p>
                    </div>

                </div>

                {/* Fundraising total */}
                <div className="mt-20 border-y border-white/20 py-12">

                    <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

                        <div>
                            <p className="text-sm uppercase tracking-[0.25em] text-white/60">
                                Raised so far
                            </p>

                            <p className="mt-3 text-6xl font-black tracking-tight md:text-8xl">
                                {money.format(fundraising.raised)}
                            </p>
                        </div>

                        <div className="md:text-right">
                            <p className="text-sm uppercase tracking-[0.25em] text-white/60">
                                Our goal
                            </p>

                            <p className="mt-2 text-3xl font-bold">
                                {money.format(fundraising.goal)}
                            </p>
                        </div>

                    </div>

                    {/* Progress bar */}
                    <div className="mt-12">
                        <div className="mb-4 flex justify-between text-sm font-bold">
                            <span>Our progress</span>
                            <span>{progress.toFixed(0)}%</span>
                        </div>

                        <div className="h-3 overflow-hidden rounded-full bg-black/25">
                            <div
                                className="h-full rounded-full bg-white transition-all duration-700"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>

                </div>

                {/* Equipment */}
                <div className="mt-16">

                    <p className="mb-8 text-xs font-bold uppercase tracking-[0.35em] text-white/60">
                        What we're building
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3">
                        {fundraising.equipment.map((item, index) => (
                            <div
                                key={item.name}
                                className="border-t border-white/20 py-7 md:mr-8"
                            >
                                <div className="flex items-start justify-between gap-4">

                                    <div>
                                        <span className="text-xs text-white/40">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <h3 className="mt-3 text-2xl font-black uppercase">
                                            {item.name}
                                        </h3>
                                    </div>

                                    <span className="rounded-full border border-white/30 px-3 py-1 text-xs text-white/70">
                                        {item.status}
                                    </span>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Message */}
                <div className="mt-20 max-w-3xl">
                    <p className="text-2xl font-bold leading-relaxed md:text-4xl">
                        From instruments to our first performance — you&apos;re
                        helping us turn an idea into music.
                    </p>
                </div>

            </div>
        </section>
    );
}