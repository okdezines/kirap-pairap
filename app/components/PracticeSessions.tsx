// import Image from "next/image";
import { galleryItems } from "../data/gallery";

export default function PracticeSessions() {
    return (
        <section
            id="gallery"
            className="bg-neutral-100 px-6 py-24 text-black md:py-32 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="grid gap-10 lg:grid-cols-2">
                    <div>
                        <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-red-600">
                            Practice Sessions
                        </p>

                        <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl">
                            Finding
                            <br />
                            our sound.
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="max-w-xl text-lg leading-8 text-black/60">
                            Every practice is part of the Kirap Pairap story. We are
                            documenting the rehearsals, conversations and moments
                            that take us from an idea to a performing band.
                        </p>
                    </div>
                </div>

                {/* Gallery */}
                <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {galleryItems.map((item) => (
                        <article key={item.id} className="group">

                            {/* Image */}
                            <div className="relative aspect-[4/5] overflow-hidden bg-neutral-300">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/30">
                                            Kirap Pairap
                                        </p>

                                        <p className="mt-2 text-sm text-black/40">
                                            Photo coming soon
                                        </p>
                                    </div>
                                </div>

                                <div className="absolute left-5 top-5">
                                    <span className="rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
                                        {item.type}
                                    </span>
                                </div>
                            </div>

                            {/* Information */}
                            <div className="pt-5">
                                <div className="flex items-center justify-between gap-4">
                                    <h3 className="text-xl font-black uppercase">
                                        {item.title}
                                    </h3>

                                    <span className="text-xs font-semibold text-black/40">
                                        {item.date}
                                    </span>
                                </div>

                                <p className="mt-3 leading-7 text-black/55">
                                    {item.description}
                                </p>
                            </div>

                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}