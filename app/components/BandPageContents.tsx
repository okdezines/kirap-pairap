"use client";

import { motion } from "motion/react";
import { bandMembers } from "../data/members";

export default function BandPageContent() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="px-6 pb-24 pt-36 md:pb-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-xs font-bold uppercase tracking-[0.35em] text-red-500"
          >
            The Band
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
                Six People.
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
                One Sound.
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
              Kirap Pairap • Wellington
            </p>

            <p className="max-w-xl text-lg leading-8 text-white/65">
              Different voices, instruments and experiences brought together
              by a shared connection to Papua New Guinea, music and community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MEMBERS */}
      <section className="bg-[#f3f0ea] px-6 py-24 text-black md:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-600">
                Meet Kirap Pairap
              </p>

              <h2 className="mt-6 text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl">
                The people
                <span className="block">behind the music.</span>
              </h2>
            </div>

            <div className="flex items-end">
              <p className="max-w-xl text-lg leading-8 text-black/60">
                Every member brings something different to Kirap Pairap.
                Together, those individual sounds become part of one musical
                journey.
              </p>
            </div>
          </div>

          {/* Member profiles */}
          <div className="grid gap-x-6 gap-y-20 md:grid-cols-2 lg:gap-x-10">
            {bandMembers.map((member, index) => (
              <motion.article
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: (index % 2) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group"
              >
                {/* Portrait */}
                <div className="relative aspect-[4/5] overflow-hidden bg-black/5">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={`${member.name} — ${member.role}`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-7xl font-black text-black/10 md:text-8xl">
                          {String(index + 1).padStart(2, "0")}
                        </p>

                        <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-black/30">
                          Portrait Coming Soon
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="absolute left-5 top-5 bg-black px-4 py-3 text-xs font-bold tracking-[0.2em] text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Details */}
                <div className="grid gap-5 border-t border-black/20 pt-6 sm:grid-cols-[1fr_1.2fr]">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
                      {member.role}
                    </p>

                    <h3 className="mt-3 text-3xl font-black uppercase tracking-tight md:text-4xl">
                      {member.name}
                    </h3>
                  </div>

                  <p className="text-base leading-7 text-black/55">
                    {member.bio}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* BAND IDENTITY */}
      <section className="bg-red-600 px-6 py-24 text-white md:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.35em] text-white/70"
          >
            Together
          </motion.p>

          <h2 className="mt-8 max-w-5xl text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl lg:text-8xl">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block"
              >
                Different voices.
              </motion.span>
            </span>

            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block"
              >
                Different sounds.
              </motion.span>
            </span>

            <span className="block overflow-hidden text-black">
              <motion.span
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block"
              >
                One Kirap Pairap.
              </motion.span>
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="mt-12 max-w-2xl text-lg leading-8 text-white/80"
          >
            The sound of Kirap Pairap is something we are building together —
            through rehearsal, collaboration and our shared connection to
            culture and community.
          </motion.p>
        </div>
      </section>

      {/* NEXT STEP */}
      <section className="bg-black px-6 py-24 text-white md:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-500">
            Follow the Journey
          </p>

          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl">
              We're only
              <span className="block text-red-600">getting started.</span>
            </h2>

            <div className="flex items-end">
              <a
                href="/kirap-pairap/#gallery"
                className="rounded-full bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-black transition-transform hover:-translate-y-1"
              >
                Follow Our Journey
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}