export default function OurStory() {
    return (
        <section
            id="story"
            className="overflow-hidden bg-[#f3f0ea] px-6 py-24 text-black md:py-32 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section label */}
                <div className="mb-12 flex items-center gap-4">
                    <span className="h-[2px] w-10 bg-red-600" />

                    <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-600">
                        Our Story
                    </p>
                </div>

                {/* Main layout */}
                <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

                    {/* Story */}
                    <div>
                        <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-7xl">
                            More Than
                            <br />
                            A Band.
                        </h2>

                        <p className="mt-8 max-w-lg text-lg leading-8 text-black/65">
                            Kirap Pairap is about more than making music. It is about
                            keeping our connection to Papua New Guinea alive through
                            music, culture and community here in Wellington.
                        </p>

                        <p className="mt-5 max-w-lg text-lg leading-8 text-black/65">
                            We want the next generation to grow up hearing the music,
                            seeing the culture and knowing that these stories belong
                            to them too.
                        </p>

                        {/* Cultural journey */}
                        <div className="mt-12 border-t border-black/15 pt-8">
                            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-black/40">
                                Our Connection
                            </p>

                            <div className="flex flex-wrap items-center gap-3 text-sm font-black uppercase tracking-[0.12em] sm:text-base">
                                <span>Papua New Guinea</span>
                                <span className="text-red-600">→</span>
                                <span>Wellington</span>
                                <span className="text-red-600">→</span>
                                <span>Next Generation</span>
                            </div>
                        </div>
                    </div>

                    {/* Photograph */}
                    <div className="relative">
                        <div className="relative aspect-[4/3] overflow-hidden bg-black shadow-2xl">
                            <img
                                src="/kirap-pairap/images/community/kirap-pairap-community.jpg"
                                alt="Papua New Guinean community celebrating culture together"
                                className="h-full w-full object-cover object-center transition duration-700 hover:scale-[1.02]"
                            />

                            {/* Subtle image treatment */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                            {/* Image label */}
                            <div className="absolute bottom-0 left-0 p-6 md:p-8">
                                <p className="text-xs font-bold uppercase tracking-[0.3em] text-white">
                                    Music • Culture • Community
                                </p>
                            </div>
                        </div>

                        {/* Decorative block */}
                        <div className="absolute -bottom-4 -right-4 -z-0 h-24 w-24 bg-red-600 md:-bottom-6 md:-right-6 md:h-32 md:w-32" />

                        {/* Photo number */}
                        <div className="absolute right-5 top-5 bg-black px-4 py-2 text-xs font-bold tracking-[0.2em] text-white">
                            001
                        </div>
                    </div>
                </div>

                {/* Statement */}
                <div className="mt-24 border-t border-black/15 pt-10 md:mt-32">
                    <p className="max-w-5xl text-3xl font-black uppercase leading-tight tracking-tight md:text-5xl">
                        Our music carries where we come from.
                        <span className="text-red-600">
                            {" "}Our community carries it forward.
                        </span>
                    </p>
                </div>

            </div>
        </section>
    );
}