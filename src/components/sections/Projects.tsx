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
    title: "AI Chat Bot",
    subtitle: "CrawlDocQA",
    description:
      "CrawlDocQA is a smart app that crawls documents and websites to let users ask questions and get instant, accurate answers.It turns scattered content into a simple, searchable knowledge experience.",
    tags: [
      "react.js",
      "express.js",
      "node.js",
      "LLM",
      "mongoDB",
      "Langchain",
      "Vector Database",
      "RAG Model",
      "NLP",
    ],
    align: "left",
    image: { src: "/aiChatBot.png", alt: "Harigurus project preview" },
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
    align: "right",
    image: { src: "/window.svg", alt: "EazyGrad project preview" },
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden px-6 pt-10 pb-20 sm:px-10 lg:pb-24"
    >
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-[#1f7a8c]" />
      <div className="mb-12 -mt-12 flex justify-center">
        <div className="relative inline-flex items-center justify-center border-[3px] border-[#1f7a8c] bg-white px-10 py-3 shadow-sm">
          <h2 className="text-4xl font-extrabold tracking-tight text-[#1f7a8c]">
            Latest Works
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="flex flex-col gap-24">
          {projects.map((project, idx) => {
            const isImageLeft = idx % 2 === 0;

            return (
              <div
                key={project.title}
                className="relative grid items-center gap-10 lg:grid-cols-2"
              >
                <span
                  className={`pointer-events-none absolute top-1/2 hidden h-[3px] w-1/2 -translate-y-1/2 bg-[#f6a192] lg:block ${
                    isImageLeft ? "right-1/2" : "left-1/2"
                  }`}
                />

                <div
                  className={`relative flex justify-center ${
                    isImageLeft
                      ? "lg:order-1 lg:justify-start"
                      : "lg:order-2 lg:justify-end"
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
                        <div className="relative flex items-center justify-center p-2">
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
                </div>

                <span className="pointer-events-none absolute left-1/2 top-1/2 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white bg-[#f9735b] shadow-md lg:block" />

                <div
                  className={`space-y-4 ${
                    isImageLeft
                      ? "lg:order-2 lg:text-left"
                      : "lg:order-1 lg:text-left"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#f2994a]/15 px-4 py-2 text-sm font-semibold text-[#f2994a]">
                    {project.subtitle}
                  </div>
                  <h3 className="text-3xl font-bold text-black sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="text-base leading-relaxed text-black/75">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 py-1.5 text-sm font-semibold text-black"
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
