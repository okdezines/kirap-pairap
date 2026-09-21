export default function CommunityCTA() {
    return (
        <section className="bg-black px-6 py-24 text-white md:py-32 lg:px-8">
            <div className="mx-auto max-w-7xl">

                <p className="mb-8 text-xs font-bold uppercase tracking-[0.35em] text-red-500">
                    Music • Culture • Community
                </p>

                <div className="grid gap-12 lg:grid-cols-2">

                    <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl">
                        Be part
                        <br />
                        of the
                        <br />
                        journey.
                    </h2>

                    <div className="flex flex-col justify-end">
                        <p className="max-w-xl text-lg leading-8 text-white/60">
                            Kirap Pairap is being built by people who believe in the
                            power of music to bring our community together and keep
                            Papua New Guinean culture alive in Wellington.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="#support"
                                className="rounded-full bg-white px-7 py-3 text-sm font-bold text-black transition hover:bg-white/80"
                            >
                                Support the Band
                            </a>

                            <a
                                href="#gallery"
                                className="rounded-full border border-white/30 px-7 py-3 text-sm font-bold transition hover:border-white"
                            >
                                Follow Our Journey
                            </a>
                        </div>
                    </div>

                </div>

                <div className="mt-24 border-t border-white/15 pt-8">
                    <p className="max-w-4xl text-2xl font-bold leading-relaxed text-white/80 md:text-4xl">
                        From Papua New Guinea to Wellington —
                        our music carries our story with us.
                    </p>
                </div>

            </div>
        </section>
    );
}