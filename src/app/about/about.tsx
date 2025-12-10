"use client";

import { useEffect } from "react";
import Image from "next/image";

type AboutOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export default function AboutOverlay({ open, onClose }: AboutOverlayProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-200 flex items-center justify-center bg-black/75 backdrop-blur-sm px-4 py-10">
      <div className="relative flex w-full max-w-6xl flex-col gap-10 rounded-3xl bg-[#0f1116] p-8 text-white shadow-2xl shadow-black/60 ring-1 ring-white/5 sm:p-10">
        <button
          aria-label="Close about"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 6l12 12M18 6 6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#21b1c0]">
                About Me
              </p>
              <h2 className="mt-1 text-3xl font-bold text-white sm:text-4xl">
                I help businesses build memorable web experiences.
              </h2>
            </div>
            <p className="text-base leading-relaxed text-white/80">
              I design and develop creative, high-performance websites that fit
              your vision and attract visitors. From UI polish to scalable MERN
              builds, I focus on user delight and measurable results.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "javascript",
                "react.js",
                "redux",
                "node.js",
                "express.js",
                "mongoDB",
                "mongoose",
                "aws",
                "html",
                "css",
                "tailwind",
                "bootstrap",
                "figma",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#21b1c0]">
                MERN Stack
              </p>
              <div className="flex flex-wrap items-center gap-6 text-xl font-bold">
                <TechBadge label="Mongo" />
                <TechBadge label="Express" />
                <TechBadge label="React" />
                <TechBadge label="Node" />
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-6 rounded-3xl bg-linear-to-br from-white/6 via-white/3 to-white/10 blur-2xl" />
            <div className="relative w-full max-w-xl rounded-3xl border border-white/10 bg-linear-to-b from-[#10131a] to-[#0b0d13] p-6 shadow-xl shadow-black/40">
              <div className="mb-4 flex items-center justify-between text-white/60">
                <div className="flex gap-2">
                  <Dot />
                  <Dot />
                  <Dot />
                </div>
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M12 5v14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-center gap-6">
                <Image
                  src="/globe.svg"
                  alt="Developer illustration"
                  width={320}
                  height={220}
                  className="w-full max-w-sm"
                />
                <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-white/80">
                  Modern UI/UX • Responsive builds • Performance-focused MERN
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TechBadge({ label }: { label: string }) {
  return (
    <span className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white">
      {label}
    </span>
  );
}

function Dot() {
  return <span className="h-2.5 w-2.5 rounded-full bg-white/50" />;
}
