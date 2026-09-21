export default function OurPurpose() {
    return (
        <section
            id="story"
            className="bg-white px-6 py-24 text-black md:py-32 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">

                <p className="mb-8 text-xs font-bold uppercase tracking-[0.35em] text-red-600">
                    Why Kirap Pairap
                </p>

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

                    <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl">
                        Music keeps
                        <br />
                        our story
                        <br />
                        alive.
                    </h2>

                    <div className="flex flex-col justify-end">
                        <p className="max-w-xl text-lg leading-8 text-black/65 md:text-xl">
                            Kirap Pairap is a six-member Papua New Guinean music group
                            based in Wellington, New Zealand. We are coming together
                            through music to ignite interest in our culture, preserve
                            our heritage, and pass it on to future generations.
                        </p>
                    </div>

                </div>

                <div className="mt-20 grid border-t border-black/15 md:grid-cols-3">

                    <Purpose
                        number="01"
                        title="Ignite"
                        description="Create excitement and renewed interest in Papua New Guinean music and culture."
                    />

                    <Purpose
                        number="02"
                        title="Preserve"
                        description="Keep our musical traditions, stories and cultural identity alive within our community."
                    />

                    <Purpose
                        number="03"
                        title="Pass On"
                        description="Share our heritage with our children, young people and generations still to come."
                    />

                </div>
            </div>
        </section>
    );
}

function Purpose({
    number,
    title,
    description,
}: {
    number: string;
    title: string;
    description: string;
}) {
    return (
        <div className="border-b border-black/15 py-10 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
            <span className="text-xs font-bold text-red-600">{number}</span>

            <h3 className="mt-6 text-3xl font-black uppercase">
                {title}
            </h3>

            <p className="mt-4 max-w-sm leading-7 text-black/60">
                {description}
            </p>
        </div>
    );
}