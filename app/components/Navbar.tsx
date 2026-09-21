import Link from "next/link";

export default function Navbar() {
    return (
        <header className="absolute left-0 top-0 z-50 w-full">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-8">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-black uppercase tracking-[0.15em] text-white"
                >
                    Kirap Pairap
                </Link>

                {/* Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    <Link href="#story" className="text-sm text-white/70 transition hover:text-white">
                        Our Story
                    </Link>

                    <Link href="#journey" className="text-sm text-white/70 transition hover:text-white">
                        Journey
                    </Link>

                    <Link href="#gallery" className="text-sm text-white/70 transition hover:text-white">
                        Gallery
                    </Link>

                    <Link
                        href="#support"
                        className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
                    >
                        Support Us
                    </Link>
                </div>
            </nav>
        </header>
    );
}