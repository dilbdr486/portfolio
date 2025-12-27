"use client";

import Image from "next/image";

type ProjectTheme = {
  primary: string; // main color
  accent: string; // badges / dots
  line: string; // timeline line
  chipBg: string; // subtitle bg
};

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  align: "left" | "right";
  theme?: ProjectTheme;
  image: {
    src: string;
    alt: string;
  };
};

const projects: Project[] = [
  {
    title: "CrawlDocQA",
    subtitle: "AI-Powered Document & Website Q&A App",
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
    theme: {
      primary: "#1f7a8c",
      accent: "#1f7a8c",
      line: "#1f7a8c",
      chipBg: "rgba(31,122,140,0.15)",
    },
    image: { src: "/aiChatBot.png", alt: "ai chatbot project preview" },
  },
  {
    title: "Online Cake Shopping",
    subtitle: "E-Commerce Website",
    description:
      "An online cake shopping platform enables users to conveniently browse, customize, and order a variety of cakes with secure payments and timely delivery for every occasion.",
    tags: [
      "node.js",
      "express.js",
      "mongoDB",
      "mongoDBAtlas",
      "rect.js",
      "tailwindcss",
      "html",
      "css",
      "javascript",
      "bootstrap",
      "figma",
    ],
    align: "right",
    theme: {
      primary: "#ec4899",
      accent: "#ec4899",
      line: "#ec4899",
      chipBg: "rgba(236,72,153,0.15)",
    },
    image: { src: "/cakeShopping.png", alt: "cake shopping project preview" },
  },
  {
    title: "E-LearnVerse",
    subtitle: "Online Learning Platform",
    description:
      "An online learning platform provides flexible access to courses and resources, enabling users to learn new skills anytime, anywhere through a structured and interactive experience.",
    tags: [
      "node.js",
      "express.js",
      "mongoDB",
      "mongoDBAtlas",
      "rect.js",
      "tailwindcss",
      "html",
      "css",
      "javascript",
      "bootstrap",
      "figma",
    ],
    align: "right",
    theme: {
      primary: "#6366f1",
      accent: "#6366f1",
      line: "#6366f1",
      chipBg: "rgba(99,102,241,0.15)",
    },
    image: { src: "/learnVerse.png", alt: "e-learnVerse project preview" },
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden px-6 pt-10 pb-20 sm:px-10 lg:pb-24"
    >
      {/* vertical timeline line – desktop only */}
      <div className="absolute left-1/2 top-0 bottom-0 hidden w-0.5 -translate-x-1/2 bg-[#1f7a8c] lg:block" />

      {/* header */}
      <div className="mb-12 -mt-12 flex justify-center">
        <div className="relative inline-flex items-center justify-center border-[3px] border-[#1f7a8c] bg-white px-10 py-3 shadow-sm sm:px-8 sm:py-2.5 md:px-10 md:py-3 whitespace-nowrap">
          <h2 className="font-extrabold tracking-tight text-[#1f7a8c] text-2xl sm:text-3xl md:text-4xl">
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
                {/* horizontal connecting line – desktop only */}
                <span
                  style={{ backgroundColor: project.theme?.line }}
                  className={`pointer-events-none absolute top-1/2 hidden h-[3px] w-1/2 -translate-y-1/2 lg:block ${
                    isImageLeft ? "right-1/2" : "left-1/2"
                  }`}
                />

                {/* image / computer frame */}
                <div
                  className={`relative flex justify-center ${
                    isImageLeft
                      ? "lg:order-1 lg:justify-start"
                      : "lg:order-2 lg:justify-end"
                  }`}
                >
                  <div className="relative rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/40 backdrop-blur transition-transform duration-500 ease-out hover:scale-[1.10]">
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

                {/* center joining dot – desktop only */}
                <span
                  style={{ borderColor: project.theme?.accent }}
                  className="pointer-events-none absolute left-1/2 top-1/2 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] bg-white shadow-md lg:block"
                />

                {/* content */}
                <div
                  className={`space-y-4 ${
                    isImageLeft
                      ? "lg:order-2 lg:text-left"
                      : "lg:order-1 lg:text-left"
                  }`}
                >
                  <h3
                    style={{ color: project.theme?.primary }}
                    className="text-3xl font-bold sm:text-4xl"
                  >
                    {project.title}
                  </h3>

                  <div
                    style={{ color: project.theme?.primary }}
                    className="inline-flex items-center gap-2 rounded-full py-2 text-sm font-semibold"
                  >
                    ({project.subtitle})
                  </div>

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
