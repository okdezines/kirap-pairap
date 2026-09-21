"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const closeMenu = () => setMenuOpen(false);


    return (
        <>
            <header
                className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${scrolled
                    ? "border-b border-white/10 bg-black/85 backdrop-blur-md"
                    : "bg-transparent"
                    }`}
            >
                <nav
                    className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 lg:px-8 ${scrolled ? "py-4" : "py-7"
                        }`}
                >

                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-xl font-black uppercase tracking-[0.15em] text-white"
                    >
                        Kirap Pairap
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 md:flex">
                        <Link
                            href="/story/"
                            className="text-sm text-white/70 transition-colors hover:text-white"
                        >
                            Our Story
                        </Link>
                        <Link
                            href="/band/"
                            className="text-sm text-white/70 transition-colors hover:text-white"
                        >
                            The Band
                        </Link>

                        <Link
                            href="/#journey"
                            className="text-sm text-white/70 transition-colors hover:text-white"
                        >
                            Journey
                        </Link>

                        <Link
                            href="/#gallery"
                            className="text-sm text-white/70 transition-colors hover:text-white"
                        >
                            Gallery
                        </Link>

                        <Link
                            href="/#support"
                            className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black"
                        >
                            Support Us
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen(true)}
                        className="flex flex-col gap-[5px] md:hidden"
                        aria-label="Open navigation menu"
                        aria-expanded={menuOpen}
                    >
                        <span className="h-[2px] w-7 bg-white" />
                        <span className="h-[2px] w-7 bg-white" />
                        <span className="h-[2px] w-7 bg-white" />
                    </button>
                </nav>
            </header>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-[100] bg-black text-white transition-all duration-300 md:hidden ${menuOpen
                    ? "visible opacity-100"
                    : "invisible opacity-0 pointer-events-none"
                    }`}
            >
                <div className="flex min-h-screen flex-col px-6 py-7">

                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between">
                        <Link
                            href="/"
                            onClick={closeMenu}
                            className="text-xl font-black uppercase tracking-[0.15em]"
                        >
                            Kirap Pairap
                        </Link>

                        <button
                            type="button"
                            onClick={closeMenu}
                            className="flex h-10 w-10 items-center justify-center text-3xl font-light"
                            aria-label="Close navigation menu"
                        >
                            ×
                        </button>
                    </div>

                    {/* Mobile Links */}
                    <nav className="flex flex-1 flex-col justify-center">
                        <p className="mb-8 text-xs font-bold uppercase tracking-[0.35em] text-red-500">
                            Navigate
                        </p>

                        <div className="flex flex-col">
                            <Link
                                href="#story"
                                onClick={closeMenu}
                                className="border-t border-white/15 py-5 text-4xl font-black uppercase tracking-tight transition hover:text-red-500"
                            >
                                Our Story
                            </Link>
                            <Link
                                href="/band/"
                                onClick={closeMenu}
                                className="..."
                            >
                                The Band
                            </Link>

                            <Link
                                href="#journey"
                                onClick={closeMenu}
                                className="border-t border-white/15 py-5 text-4xl font-black uppercase tracking-tight transition hover:text-red-500"
                            >
                                Journey
                            </Link>

                            <Link
                                href="#gallery"
                                onClick={closeMenu}
                                className="border-t border-white/15 py-5 text-4xl font-black uppercase tracking-tight transition hover:text-red-500"
                            >
                                Gallery
                            </Link>

                            <Link
                                href="#support"
                                onClick={closeMenu}
                                className="border-y border-white/15 py-5 text-4xl font-black uppercase tracking-tight text-red-500"
                            >
                                Support Us
                            </Link>
                        </div>
                    </nav>

                    {/* Mobile Menu Footer */}
                    <div className="border-t border-white/15 pt-6">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">
                            Papua New Guinea • Wellington • New Zealand
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}