// import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden bg-black text-white">

            {/* Hero photograph */}
            <div className="absolute inset-0 lg:left-[48%]">
                <img
                    src="/kirap-pairap/images/hero/kirap-pairap.jpg"
                    alt="Kirap Pairap community musicians performing together"
                    className="h-full w-full object-cover object-center lg:object-[center_35%]"
                />

                {/* Desktop gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />

                {/* Mobile darkening */}
                <div className="absolute inset-0 bg-black/30 lg:bg-transparent" />

                {/* Bottom fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
            </div>

            {/* Red atmosphere */}

            <div className="absolute left-[40%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-red-700/15 blur-[150px]" />

            {/* Main content */}
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

                    <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
                        Six people. One community. Building a band to ignite,
                        preserve and pass on Papua New Guinea&apos;s musical and
                        cultural heritage.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="#story"
                            className="rounded-full bg-white px-7 py-3 text-sm font-bold text-black transition hover:bg-red-500 hover:text-white"
                        >
                            Our Story
                        </a>

                        <a
                            href="#support"
                            className="rounded-full border border-white/30 bg-black/20 px-7 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-black"
                        >
                            Support the Band
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom message */}
            <div className="absolute bottom-8 right-6 z-10 hidden text-right md:block lg:right-8">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">
                    Our Music
                    <br />
                    Our Culture
                    <br />
                    Our Story
                </p>
            </div>

            {/* Vertical accent */}
            <div className="absolute bottom-0 left-6 z-10 h-16 w-[2px] bg-red-500 md:left-8" />
        </section>
    );
}