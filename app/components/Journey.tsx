import { milestones } from "../data/milestones";

export default function Journey() {
    return (
        <section
            id="journey"
            className="bg-black px-6 py-24 text-white md:py-32 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="grid gap-10 lg:grid-cols-2">
                    <div>
                        <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-red-500">
                            Our Journey
                        </p>

                        <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl">
                            From an idea
                            <br />
                            to a band.
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="max-w-xl text-lg leading-8 text-white/60">
                            Kirap Pairap is still at the beginning of its story.
                            Every milestone represents another step toward building
                            our band, strengthening our community and sharing our
                            culture through music.
                        </p>
                    </div>
                </div>

                {/* Timeline */}
                <div className="mt-24">
                    {milestones.map((milestone, index) => (
                        <article
                            key={milestone.id}
                            className="grid border-t border-white/20 py-10 md:grid-cols-[120px_1fr_2fr] md:gap-10 md:py-14"
                        >
                            {/* Number */}
                            <div>
                                <span className="text-sm font-bold text-white/30">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>

                            {/* Title */}
                            <div className="mt-4 md:mt-0">
                                <p
                                    className={`text-xs font-bold uppercase tracking-[0.25em] ${milestone.status === "current"
                                            ? "text-red-500"
                                            : "text-white/40"
                                        }`}
                                >
                                    {milestone.date}
                                </p>

                                <h3 className="mt-3 text-2xl font-black uppercase md:text-3xl">
                                    {milestone.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <div className="mt-5 md:mt-0">
                                <p className="max-w-2xl leading-7 text-white/60">
                                    {milestone.description}
                                </p>

                                <div className="mt-6">
                                    <Status status={milestone.status} />
                                </div>
                            </div>
                        </article>
                    ))}

                    <div className="border-t border-white/20" />
                </div>

            </div>
        </section>
    );
}

function Status({
    status,
}: {
    status: "completed" | "current" | "future";
}) {
    const labels = {
        completed: "Completed",
        current: "In Progress",
        future: "Coming Up",
    };

    return (
        <span
            className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${status === "current"
                    ? "border-red-500 text-red-500"
                    : "border-white/20 text-white/40"
                }`}
        >
            {labels[status]}
        </span>
    );
}