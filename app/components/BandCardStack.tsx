"use client";

import { useRef, useState } from "react";
import {
    motion,
    useScroll,
    useTransform,
} from "motion/react";
import { bandMembers } from "../data/members";

export default function BandCardStack() {
    const [isSpread, setIsSpread] = useState(false);
    const [hoveredMember, setHoveredMember] = useState<number | null>(null);
    const [activeMobileIndex, setActiveMobileIndex] = useState(0);

    /*
     * Parallax background
     */
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const backgroundY = useTransform(
        scrollYProgress,
        [0, 1],
        ["-8%", "8%"]
    );

    /*
     * Desktop card positions
     */
    const rotations = [-10, -6, -2, 2, 6, 10];
    const xOffsets = [-30, -18, -7, 7, 18, 30];

    const spreadX = [-475, -285, -95, 95, 285, 475];
    const spreadRotation = [-8, -5, -2, 2, 5, 8];

    return (
        <section
            ref={sectionRef}
            className="
                relative
                min-h-screen
                overflow-hidden
                bg-black
                px-6
                py-24
                text-white
            "
        >
            {/* ===================================== */}
            {/* PARALLAX BACKGROUND                   */}
            {/* ===================================== */}

            <motion.div
                style={{ y: backgroundY }}
                className="
                    absolute
                    -inset-y-[10%]
                    inset-x-0
                    bg-[url('/kirap-pairap/images/hero/fire.jpg')]
                    bg-cover
                    bg-center
                    bg-no-repeat
                    will-change-transform
                "
            />

            {/* Dark layer keeps text/cards readable */}
            <div className="absolute inset-0 bg-black/65" />

            {/* Crimson / sunset atmosphere */}
            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-b
                    from-black/65
                    via-[#450a0a]/25
                    to-black/85
                "
            />

            {/* Slight horizontal vignette */}
            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-black/55
                    via-transparent
                    to-black/55
                "
            />

            {/* ===================================== */}
            {/* CONTENT                               */}
            {/* ===================================== */}

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* Section heading */}
                <div className="mb-16">
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-red-500">
                        Kirap Pairap
                    </p>

                    <h2 className="text-5xl font-black uppercase tracking-tight md:text-7xl">
                        Meet the Band
                        <span className="text-red-600">.</span>
                    </h2>

                    <p className="mt-6 max-w-xl text-base leading-7 text-white/60">
                        One Community. One sound. One story. Meet the people helping
                        carry Papua New Guinea&apos;s music and culture forward.
                    </p>
                </div>

                {/* ===================================== */}
                {/* MOBILE VERTICAL WHEEL                 */}
                {/* ===================================== */}

                <div className="flex min-h-[580px] items-center justify-center md:hidden">
                    <div className="relative h-[500px] w-full max-w-[320px]">

                        {bandMembers.map((member, index) => {
                            /*
                             * Calculate each card's position relative
                             * to the currently selected member.
                             */
                            let offset = index - activeMobileIndex;

                            /*
                             * Wrap around so the carousel behaves
                             * like a continuous wheel.
                             */
                            const total = bandMembers.length;

                            if (offset > total / 2) {
                                offset -= total;
                            }

                            if (offset < -total / 2) {
                                offset += total;
                            }

                            const isActive = offset === 0;

                            /*
                             * Only show the active member and
                             * the two nearest cards on either side.
                             */
                            const isVisible = Math.abs(offset) <= 2;

                            return (
                                <motion.article
                                    key={member.id}
                                    drag={isActive ? "y" : false}
                                    dragConstraints={{
                                        top: 0,
                                        bottom: 0,
                                    }}
                                    dragElastic={0.18}
                                    onDragEnd={(_, info) => {
                                        if (info.offset.y < -50) {
                                            setActiveMobileIndex(
                                                (activeMobileIndex + 1) % total
                                            );
                                        }

                                        if (info.offset.y > 50) {
                                            setActiveMobileIndex(
                                                (activeMobileIndex - 1 + total) % total
                                            );
                                        }
                                    }}
                                    onClick={() => {
                                        if (!isActive) {
                                            setActiveMobileIndex(index);
                                        }
                                    }}
                                    animate={{
                                        y: offset * 105,

                                        x: isActive
                                            ? 0
                                            : offset * 8,

                                        scale: isActive
                                            ? 1
                                            : 0.88 - Math.abs(offset) * 0.04,

                                        rotate: isActive
                                            ? 0
                                            : offset * 2,

                                        opacity: isVisible
                                            ? isActive
                                                ? 1
                                                : 0.45
                                            : 0,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 220,
                                        damping: 24,
                                    }}
                                    style={{
                                        zIndex: isActive
                                            ? 50
                                            : 20 - Math.abs(offset),

                                        pointerEvents: isVisible
                                            ? "auto"
                                            : "none",
                                    }}
                                    className={`
                                        absolute
                                        left-1/2
                                        top-1/2
                                        h-[390px]
                                        w-[260px]
                                        -translate-x-1/2
                                        -translate-y-1/2
                                        cursor-pointer
                                        rounded-[24px]
                                        p-[6px]
                                        shadow-2xl
                                        transition-all
                                        duration-300

                                        ${isActive
                                            ? "bg-gradient-to-br from-[#7f1d1d] via-[#dc2626] to-[#f59e0b]"
                                            : "bg-gradient-to-br from-[#450a0a]/80 via-[#991b1b]/70 to-[#d97706]/60"
                                        }
                                    `}
                                >
                                    {/* Inner card */}
                                    <div className="h-full overflow-hidden rounded-[18px] bg-[#12100f]">

                                        {/* Member portrait */}
                                        <div className="relative h-[245px] overflow-hidden bg-neutral-800">
                                            <img
                                                src={member.image}
                                                alt={`${member.name} — ${member.role}`}
                                                className={`
                                                    h-full
                                                    w-full
                                                    object-cover
                                                    object-center
                                                    transition-all
                                                    duration-500

                                                    ${isActive
                                                        ? "scale-105 brightness-110"
                                                        : "scale-100 brightness-75"
                                                    }
                                                `}
                                            />

                                            {/* Sunset image overlay */}
                                            <div
                                                className={`
                                                    absolute
                                                    inset-0
                                                    bg-gradient-to-t
                                                    from-[#450a0a]/50
                                                    via-transparent
                                                    to-[#f59e0b]/10
                                                    transition-opacity
                                                    duration-500

                                                    ${isActive
                                                        ? "opacity-70"
                                                        : "opacity-40"
                                                    }
                                                `}
                                            />
                                        </div>

                                        {/* Member information */}
                                        <div className="bg-gradient-to-br from-[#170b0b] via-[#18100f] to-[#21150d] p-5">

                                            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#fb7185]">
                                                0{member.id}
                                            </p>

                                            <h3 className="mt-2 text-2xl font-black uppercase tracking-tight text-white">
                                                {member.name}
                                            </h3>

                                            <p className="mt-1 text-[9px] font-bold uppercase leading-4 tracking-[0.14em] text-white/55">
                                                {member.role}
                                            </p>

                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })}

                    </div>
                </div>

                {/* Mobile carousel hint */}
                <div className="mt-3 text-center md:hidden">

                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">
                        Swipe to explore
                    </p>

                    <div className="mt-4 flex justify-center gap-2">

                        {bandMembers.map((member, index) => (
                            <button
                                key={member.id}
                                type="button"
                                onClick={() => setActiveMobileIndex(index)}
                                aria-label={`View ${member.name}`}
                                className={`
                                    h-1.5
                                    rounded-full
                                    transition-all
                                    duration-300

                                    ${activeMobileIndex === index
                                        ? "w-6 bg-red-600"
                                        : "w-1.5 bg-white/25"
                                    }
                                `}
                            />
                        ))}

                    </div>
                </div>

                {/* ===================================== */}
                {/* DESKTOP BAND STACK                    */}
                {/* ===================================== */}

                <div className="hidden min-h-[560px] items-center justify-center md:flex">

                    <div
                        className="relative h-[420px] w-[280px] cursor-pointer"
                        onMouseEnter={() => setIsSpread(true)}
                        onMouseLeave={() => {
                            setIsSpread(false);
                            setHoveredMember(null);
                        }}
                    >

                        {bandMembers.map((member, index) => {
                            const isHovered =
                                hoveredMember === member.id;

                            const spreadY =
                                Math.abs(index - 2.5) * 12;

                            return (
                                <motion.article
                                    key={member.id}
                                    initial={{
                                        opacity: 0,
                                        y: 40,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                    }}
                                    viewport={{ once: true }}
                                    onMouseEnter={() => {
                                        if (isSpread) {
                                            setHoveredMember(member.id);
                                        }
                                    }}
                                    onMouseLeave={() => {
                                        setHoveredMember(null);
                                    }}
                                    animate={{
                                        x: isSpread
                                            ? spreadX[index]
                                            : xOffsets[index],

                                        y: isSpread
                                            ? isHovered
                                                ? spreadY - 28
                                                : spreadY
                                            : 0,

                                        rotate: isSpread
                                            ? isHovered
                                                ? 0
                                                : spreadRotation[index]
                                            : rotations[index],

                                        scale:
                                            isSpread && isHovered
                                                ? 1.08
                                                : 1,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 190,
                                        damping: 20,
                                        delay:
                                            isSpread && !isHovered
                                                ? index * 0.025
                                                : 0,
                                    }}
                                    style={{
                                        zIndex: isHovered
                                            ? 50
                                            : index + 1,
                                    }}
                                    className={`
                                        absolute
                                        inset-0
                                        rounded-[24px]
                                        p-[6px]
                                        shadow-2xl
                                        transition-all
                                        duration-300

                                        ${isHovered
                                            ? "bg-gradient-to-br from-[#7f1d1d] via-[#dc2626] to-[#f59e0b]"
                                            : "bg-gradient-to-br from-[#450a0a]/80 via-[#991b1b]/70 to-[#d97706]/60"
                                        }
                                    `}
                                >
                                    <div className="h-full overflow-hidden rounded-[18px] bg-[#12100f]">

                                        {/* Member portrait */}
                                        <div className="relative h-[270px] overflow-hidden bg-neutral-800">

                                            <img
                                                src={member.image}
                                                alt={`${member.name} — ${member.role}`}
                                                className={`
                                                    h-full
                                                    w-full
                                                    object-cover
                                                    object-center
                                                    transition-all
                                                    duration-500

                                                    ${isHovered
                                                        ? "scale-105 brightness-110"
                                                        : "scale-100 brightness-100"
                                                    }
                                                `}
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                        </div>

                                        {/* Member information */}
                                        <div className="bg-gradient-to-br from-[#170b0b] via-[#18100f] to-[#21150d] p-6">

                                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#fb7185]">
                                                0{member.id}
                                            </p>

                                            <h3 className="mt-2 text-2xl font-black uppercase tracking-tight">
                                                {member.name}
                                            </h3>

                                            <p className="mt-1 max-w-[190px] text-[10px] font-bold uppercase leading-4 tracking-[0.14em] text-white/50">
                                                {member.role}
                                            </p>

                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })}

                    </div>
                </div>

            </div>
        </section>
    );
}