"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const demoImages = [
    {
        id: 1,
        src: "/kirap-pairap/images/gallery/practice-01.jpg",
        title: "Practice Sessions",
        caption: "The journey begins together.",
    },
    {
        id: 2,
        src: "/kirap-pairap/images/gallery/practice-02.jpg",
        title: "Finding Our Sound",
        caption: "Learning, creating and growing together.",
    },
    {
        id: 3,
        src: "/kirap-pairap/images/gallery/practice-03.jpg",
        title: "Music & Community",
        caption: "Sharing music, stories and culture.",
    },
    {
        id: 4,
        src: "/kirap-pairap/images/gallery/practice-04.jpg",
        title: "Building the Band",
        caption: "Every session moves the journey forward.",
    },
    {
        id: 5,
        src: "/kirap-pairap/images/gallery/practice-05.jpg",
        title: "Keeping Culture Alive",
        caption: "Our heritage carried through music.",
    },
    {
        id: 6,
        src: "/kirap-pairap/images/gallery/practice-06.jpg",
        title: "Kirap Pairap",
        caption: "Music • Culture • Community",
    },
];

export default function CircularGallery() {
    const [activeIndex, setActiveIndex] = useState(1);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const total = demoImages.length;

    const previousSlide = () => {
        setActiveIndex((current) =>
            current === 0 ? total - 1 : current - 1
        );
    };

    const nextSlide = () => {
        setActiveIndex((current) =>
            current === total - 1 ? 0 : current + 1
        );
    };

    const getPosition = (index: number) => {
        const difference =
            (index - activeIndex + total) % total;

        if (difference === 0) return "center";
        if (difference === 1) return "right";

        return "left";
    };

    const cardVariants = {
        center: {
            x: "0%",
            y: -70,
            scale: 1,
            rotate: 0,
            opacity: 1,
            zIndex: 30,
        },

        left: {
            x: "-115%",
            y: 45,
            scale: 0.72,
            rotate: -8,
            opacity: 0.42,
            zIndex: 10,
        },

        right: {
            x: "115%",
            y: 45,
            scale: 0.72,
            rotate: 8,
            opacity: 0.42,
            zIndex: 10,
        },
    };

    const activeImage = demoImages[activeIndex];

    return (
        <>
            <section className="relative overflow-hidden bg-black py-24 text-white md:py-32">
                <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">

                    {/* ======================================================
                    HEADING
                ====================================================== */}
                    <div className="mb-16 md:mb-24">
                        <p className="mb-5 text-xs font-black uppercase tracking-[0.4em] text-red-500">
                            The Moments
                        </p>

                        <h2 className="max-w-4xl text-[clamp(3.5rem,8vw,8rem)] font-black uppercase leading-[0.82] tracking-[-0.055em]">
                            Our Journey

                            <span className="block text-red-600">
                                In Pictures.
                            </span>
                        </h2>

                        <div className="mt-8 h-[2px] w-16 bg-red-600" />
                    </div>

                    {/* ======================================================
                    CIRCULAR GALLERY
                ====================================================== */}
                    <div className="relative h-[600px] md:h-[720px]">

                        {/* Circular / wheel guide */}
                        <div
                            className="
                            pointer-events-none
                            absolute
                            left-1/2
                            top-[46%]
                            h-[440px]
                            w-[760px]
                            -translate-x-1/2
                            rounded-[50%]
                            border
                            border-white/10

                            md:h-[560px]
                            md:w-[1100px]

                            lg:h-[650px]
                            lg:w-[1400px]
                        "
                        />

                        {/* Secondary inner guide */}
                        <div
                            className="
                            pointer-events-none
                            absolute
                            left-1/2
                            top-[53%]
                            h-[330px]
                            w-[620px]
                            -translate-x-1/2
                            rounded-[50%]
                            border
                            border-white/[0.04]

                            md:h-[430px]
                            md:w-[900px]

                            lg:h-[520px]
                            lg:w-[1150px]
                        "
                        />

                        {/* ==================================================
                        IMAGE WHEEL
                    ================================================== */}
                        <div className="absolute inset-x-0 top-0 flex h-[470px] items-center justify-center md:h-[560px]">

                            {demoImages.map((image, index) => {
                                const position = getPosition(index);

                                return (
                                    <motion.article
                                        key={image.id}
                                        variants={cardVariants}
                                        animate={position}
                                        transition={{
                                            type: "spring",
                                            stiffness: 110,
                                            damping: 18,
                                            mass: 0.9,
                                        }}
                                        onClick={() => {
                                            if (index === activeIndex) {
                                                setIsLightboxOpen(true);
                                            } else {
                                                setActiveIndex(index);
                                            }
                                        }}
                                        className="
                                        absolute
                                        w-[190px]
                                        cursor-pointer
                                        sm:w-[220px]
                                        md:w-[280px]
                                        lg:w-[330px]
                                    "
                                    >
                                        <div
                                            className={`
                                            relative
                                            aspect-[4/5]
                                            overflow-hidden
                                            bg-white/5
                                            transition-all
                                            duration-500

                                            ${position === "center"
                                                    ? "shadow-2xl shadow-black/60"
                                                    : ""
                                                }
                                        `}
                                        >
                                            <img
                                                src={image.src}
                                                alt={image.title}
                                                className="
                                                h-full
                                                w-full
                                                object-cover
                                                transition-transform
                                                duration-700
                                                hover:scale-105
                                            "
                                            />
                                            {/* View image cue — active image only */}
                                            {position === "center" && (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.35, duration: 0.4 }}
                                                    className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            z-20
            flex
            justify-center
            bg-gradient-to-t
            from-black/80
            via-black/25
            to-transparent
            px-4
            pb-5
            pt-16
        "
                                                >
                                                    <span
                                                        className="
                text-[9px]
                font-black
                uppercase
                tracking-[0.32em]
                text-[#FFF5EE]/80
                transition-colors
                duration-300
                md:text-[10px]
            "
                                                    >
                                                        View Image ↗
                                                    </span>
                                                </motion.div>
                                            )}

                                            {/* subtle image overlay */}
                                            <div
                                                className={`
                                                absolute
                                                inset-0
                                                transition-colors
                                                duration-500

                                                ${position === "center"
                                                        ? "bg-black/5"
                                                        : "bg-black/35"
                                                    }
                                            `}
                                            />
                                        </div>
                                    </motion.article>
                                );
                            })}
                        </div>

                        {/* ==================================================
                        ACTIVE IMAGE INFORMATION
                    ================================================== */}
                        <div
                            className="
                            absolute
                            left-1/2
                            top-[410px]
                            z-40
                            w-full
                            max-w-md
                            -translate-x-1/2
                            text-center

                            md:top-[500px]
                        "
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeImage.id}
                                    initial={{
                                        opacity: 0,
                                        y: 15,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: -15,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                    }}
                                >
                                    <p className="text-xs font-black uppercase tracking-[0.3em] text-red-500">
                                        {String(activeIndex + 1).padStart(2, "0")} /{" "}
                                        {String(total).padStart(2, "0")}
                                    </p>

                                    <h3 className="mt-3 text-2xl font-black uppercase md:text-3xl">
                                        {activeImage.title}
                                    </h3>

                                    <p className="mt-2 font-semibold text-[#FFF5EE]/80">
                                        {activeImage.caption}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* ==================================================
                        CONTROLS
                    ================================================== */}
                        <div
                            className="
                            absolute
                            bottom-0
                            left-1/2
                            z-50
                            flex
                            -translate-x-1/2
                            items-center
                            gap-6
                        "
                        >
                            <button
                                type="button"
                                onClick={previousSlide}
                                aria-label="Previous image"
                                className="
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-white/25
                                text-xl
                                transition
                                duration-300
                                hover:border-red-500
                                hover:bg-red-600
                            "
                            >
                                ←
                            </button>

                            <p className="whitespace-nowrap text-[10px] font-black uppercase tracking-[0.35em] text-white/45">
                                Explore
                            </p>

                            <button
                                type="button"
                                onClick={nextSlide}
                                aria-label="Next image"
                                className="
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-white/25
                                text-xl
                                transition
                                duration-300
                                hover:border-red-500
                                hover:bg-red-600
                            "
                            >
                                →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================================
    FULLSCREEN LIGHTBOX
========== */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="
                fixed
                inset-0
                z-[9999]
                flex
                items-center
                justify-center
                bg-black/95
                p-4
                md:p-8
            "
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        {/* Close button */}
                        <button
                            type="button"
                            onClick={() => setIsLightboxOpen(false)}
                            aria-label="Close image"
                            className="
                    absolute
                    right-5
                    top-5
                    z-50
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    text-2xl
                    text-white
                    transition
                    hover:border-red-500
                    hover:bg-red-600
                    md:right-8
                    md:top-8
                "
                        >
                            ×
                        </button>

                        {/* Full image */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.9,
                                y: 30,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.95,
                            }}
                            transition={{
                                duration: 0.35,
                                ease: "easeOut",
                            }}
                            className="
                    flex
                    max-h-[95vh]
                    max-w-[95vw]
                    flex-col
                    items-center
                "
                            onClick={(event) => event.stopPropagation()}
                        >
                            <img
                                src={activeImage.src}
                                alt={activeImage.title}
                                className="
                        max-h-[82vh]
                        max-w-[92vw]
                        object-contain
                    "
                            />

                            {/* Image information */}
                            <div className="mt-5 text-center">
                                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-red-500">
                                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                                    {String(total).padStart(2, "0")}
                                </p>

                                <h3 className="mt-2 text-xl font-black uppercase text-white md:text-2xl">
                                    {activeImage.title}
                                </h3>

                                <p className="mt-1 font-semibold text-[#FFF5EE]/70">
                                    {activeImage.caption}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>

    );
}