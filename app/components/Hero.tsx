export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden bg-black text-white">

            {/* Subtle glow */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-700/15 blur-[150px]" />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">

                <div className="max-w-5xl">

                    <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-red-400 md:text-sm">
                        Papua New Guinea • Wellington • New Zealand
                    </p>

                    <h1 className="text-6xl font-black uppercase leading-[0.85] tracking-tight sm:text-7xl md:text-8xl lg:text-[9rem]">
                        Kirap
                        <br />
                        Pairap.
                    </h1>

                    <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/65 md:text-xl">
                        Six people. One community. Building a band to ignite,
                        preserve and pass on Papua New Guinea&apos;s musical and
                        cultural heritage.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">

                        <a
                            href="#story"
                            className="rounded-full bg-white px-7 py-3 text-sm font-bold text-black transition hover:bg-white/80"
                        >
                            Our Story
                        </a>

                        <a
                            href="#support"
                            className="rounded-full border border-white/30 px-7 py-3 text-sm font-bold text-white transition hover:border-white"
                        >
                            Support the Band
                        </a>

                    </div>
                </div>
            </div>

            {/* Bottom message */}
            <div className="absolute bottom-8 right-6 hidden text-right md:block lg:right-8">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                    Our Music
                    <br />
                    Our Culture
                    <br />
                    Our Story
                </p>
            </div>

        </section>
    );
}