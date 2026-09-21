export default function Footer() {
    return (
        <footer className="bg-black px-6 pb-10 text-white lg:px-8">
            <div className="mx-auto max-w-7xl border-t border-white/15 pt-10">

                <div className="flex flex-col justify-between gap-10 md:flex-row">

                    <div>
                        <h2 className="text-2xl font-black uppercase tracking-[0.15em]">
                            Kirap Pairap
                        </h2>

                        <p className="mt-3 text-sm text-white/40">
                            Papua New Guinea • Wellington • New Zealand
                        </p>
                    </div>

                    <div className="flex gap-6 text-sm text-white/60">
                        <a href="#story" className="transition hover:text-white">
                            Our Story
                        </a>

                        <a href="#journey" className="transition hover:text-white">
                            Journey
                        </a>

                        <a href="#gallery" className="transition hover:text-white">
                            Gallery
                        </a>

                        <a href="#support" className="transition hover:text-white">
                            Support
                        </a>
                    </div>

                </div>

                <div className="mt-16 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/30 md:flex-row">
                    <p>© 2026 Kirap Pairap</p>

                    <p>Music • Culture • Community</p>
                </div>

            </div>
        </footer>
    );
}