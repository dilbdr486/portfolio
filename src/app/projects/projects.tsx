"use client";

import Image from "next/image";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  align: "left" | "right";
  image: {
    src: string;
    alt: string;
  };
};

const projects: Project[] = [
  {
    title: "Harigurus",
    subtitle: "Event Booking",
    description:
      "A one-stop-shop for Hindu religious, customs and traditional requirements. Built the complete site end-to-end.",
    tags: [
      "react.js",
      "express.js",
      "node.js",
      "swiper.js",
      "mongoDB",
      "mongoose",
      "css",
      "javascript",
      "figma",
    ],
    align: "right",
    image: { src: "/globe.svg", alt: "Harigurus project preview" },
  },
  {
    title: "EazyGrad",
    subtitle: "EdTech Startup",
    description:
      "Revamped the site into a highly responsive, interactive experience. Led new feature delivery with PM and UX partners.",
    tags: [
      "node.js",
      "express.js",
      "mongoDB",
      "mongoDBAtlas",
      "ejs",
      "swiper.js",
      "html",
      "css",
      "javascript",
      "lighthouse",
      "figma",
    ],
    align: "left",
    image: { src: "/window.svg", alt: "EazyGrad project preview" },
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:py-24"
    >
      <div className="mb-12 text-center">
        <h2 className="inline-flex items-center gap-3 rounded-full border border-[#36a5b5]/30 bg-[#36a5b5]/10 px-6 py-2 text-lg font-bold text-[#1f7a8c]">
          <span className="h-2 w-2 rounded-full bg-[#1f7a8c]" />
          Latest Works
          <span className="h-2 w-2 rounded-full bg-[#1f7a8c]" />
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-linear-to-b from-transparent via-white/20 to-transparent" />

        <div className="flex flex-col gap-24">
          {projects.map((project, idx) => {
            const isRight = project.align === "right";
            return (
              <div
                key={project.title}
                className={`relative grid items-center gap-10 lg:grid-cols-2 ${
                  isRight ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div
                  className={`relative flex justify-center ${
                    isRight ? "lg:justify-end" : "lg:justify-start"
                  }`}
                >
                  <div className="relative rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/40 backdrop-blur">
                    <div className="absolute inset-4 rounded-3xl bg-linear-to-br from-white/5 via-white/10 to-white/5 blur-2xl" />
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f1116]">
                      <div className="flex items-center justify-between bg-white/5 px-4 py-3 text-white/60">
                        <div className="flex gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                        </div>
                        <span className="text-xs uppercase tracking-[0.2em]">
                          preview
                        </span>
                      </div>
                      <div className="relative bg-[#0b0d13]">
                        <div className="absolute inset-0 bg-linear-to-br from-[#0b0d13] via-[#0f121c] to-[#0b0d13]" />
                        <div className="relative flex items-center justify-center p-8">
                          <Image
                            src={project.image.src}
                            alt={project.image.alt}
                            width={500}
                            height={320}
                            className="w-full max-w-[520px] object-contain drop-shadow-2xl"
                            priority={idx === 0}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="absolute left-1/2 top-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/60 bg-[#0f1116] lg:block" />
                </div>

                <div
                  className={`space-y-4 ${
                    isRight ? "lg:text-left" : "lg:text-left"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#f2994a]/15 px-4 py-2 text-sm font-semibold text-[#f2994a]">
                    {project.subtitle}
                  </div>
                  <h3 className="text-3xl font-bold text-white sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="text-base leading-relaxed text-white/75">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-semibold text-white/80"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
