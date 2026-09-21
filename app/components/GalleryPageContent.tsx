"use client";

import { motion } from "motion/react";
import { galleryItems } from "../data/gallery";
export default function GalleryPageContent() {
    return (
        <main className="bg-black text-white">

            {/* HERO */}
            <section className="px-6 pb-24 pt-36 md:pb-32 lg:px-8">
                <div className="mx-auto max-w-7xl">

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                        }}
                        className="mb-8 text-xs font-bold uppercase tracking-[0.35em] text-red-500"
                    >
                        Gallery
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
                                Music In Motion.
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
                                Our Story In Pictures.
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
                            The Kirap Pairap journey is something we want to remember.
                            Rehearsals, community gatherings, performances and the moments
                            in between all become part of our story.
                        </p>
                    </motion.div>

                </div>
            </section>


            {/* GALLERY INTRO */}
            <section className="bg-[#f3f0ea] px-6 py-24 text-black md:py-32 lg:px-8">
                <div className="mx-auto max-w-7xl">

                    <div className="grid gap-10 lg:grid-cols-2">

                        <div>
                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-xs font-bold uppercase tracking-[0.35em] text-red-600"
                            >
                                Through The Lens
                            </motion.p>

                            <h2 className="mt-6 text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl">
                                Moments that
                                <span className="block">tell the story.</span>
                            </h2>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                delay: 0.15,
                            }}
                            className="flex items-end"
                        >
                            <p className="max-w-xl text-lg leading-8 text-black/60">
                                This gallery will grow alongside Kirap Pairap. From our first
                                rehearsals to community events and eventually the stage, each
                                image becomes another piece of the journey.
                            </p>
                        </motion.div>

                    </div>


                    {/* FEATURED GRID */}
                    <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
                        {galleryItems.map((item, index) => {
                            const isFeatured = item.featured;

                            return (
                                <motion.article
                                    key={item.id}
                                    initial={{ opacity: 0, y: 35 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{
                                        duration: 0.7,
                                        delay: index * 0.08,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className={`group relative overflow-hidden bg-black/5 ${isFeatured
                                        ? "aspect-[4/3] lg:col-span-8 lg:row-span-2"
                                        : "aspect-square lg:col-span-4"
                                        }`}
                                >
                                    {/* Image or placeholder */}
                                    {item.src ? (
                                        <img
                                            src={item.src}
                                            alt={item.title}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center">
                                                <p
                                                    className={`font-black text-black/10 ${isFeatured ? "text-7xl" : "text-5xl"
                                                        }`}
                                                >
                                                    {String(index + 1).padStart(2, "0")}
                                                </p>

                                                <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.3em] text-black/30">
                                                    Media Coming Soon
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Gradient when image exists */}
                                    {item.src && (
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                                    )}

                                    {/* Information */}
                                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                                        <p
                                            className={`text-xs font-bold uppercase tracking-[0.25em] ${item.src ? "text-red-400" : "text-red-600"
                                                }`}
                                        >
                                            {item.category}
                                        </p>

                                        <h3
                                            className={`mt-2 font-black uppercase ${isFeatured
                                                ? "text-2xl md:text-3xl"
                                                : "text-lg md:text-xl"
                                                } ${item.src ? "text-white" : "text-black"}`}
                                        >
                                            {item.title}
                                        </h3>

                                        <p
                                            className={`mt-2 text-xs ${item.src ? "text-white/60" : "text-black/40"
                                                }`}
                                        >
                                            {item.date}
                                        </p>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>

                </div>
            </section>


            {/* GALLERY CATEGORIES */}
            <section className="bg-white px-6 py-24 text-black md:py-32 lg:px-8">
                <div className="mx-auto max-w-7xl">

                    <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-600">
                        The Collection
                    </p>

                    <div className="mt-10">

                        {[
                            ["01", "Practice", "The work behind the music."],
                            ["02", "Community", "The people and culture around us."],
                            ["03", "Performance", "From rehearsal room to the stage."],
                            ["04", "Behind The Scenes", "The moments between the moments."],
                        ].map(([number, title, description], index) => (
                            <motion.div
                                key={title}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.65,
                                    delay: index * 0.05,
                                }}
                                className="grid gap-5 border-t border-black/20 py-8 md:grid-cols-[0.25fr_0.75fr_1fr] md:items-center"
                            >
                                <p className="text-sm font-black text-red-600">
                                    {number}
                                </p>

                                <h3 className="text-2xl font-black uppercase md:text-4xl">
                                    {title}
                                </h3>

                                <p className="text-black/50">
                                    {description}
                                </p>
                            </motion.div>
                        ))}

                    </div>

                </div>
            </section>


            {/* CLOSING */}
            <section className="bg-red-600 px-6 py-24 text-white md:py-32 lg:px-8">
                <div className="mx-auto max-w-7xl">

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs font-bold uppercase tracking-[0.35em] text-white/70"
                    >
                        More To Come
                    </motion.p>

                    <h2 className="mt-8 max-w-5xl text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl lg:text-8xl">
                        <span className="block">
                            The story is
                        </span>

                        <span className="block text-black">
                            still being written.
                        </span>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7,
                            delay: 0.15,
                        }}
                        className="mt-10 max-w-2xl text-lg leading-8 text-white/80"
                    >
                        As Kirap Pairap grows, so will this collection. New rehearsals,
                        new music, new people and eventually new stages.
                    </motion.p>

                </div>
            </section>

        </main>
    );
}