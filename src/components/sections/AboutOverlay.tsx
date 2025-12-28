"use client";

import { useEffect } from "react";
import Image from "next/image";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";

type AboutOverlayProps = {
  open: boolean;
  onClose: () => void;
};

type Tech = {
  label: string;
  full: string;
  Icon: React.ElementType;
  iconColor: string;
  bgColor: string;
  hoverTextColor: string;
  hoverBgColor: string;
  labelTextColor: string;
};

const techs: Tech[] = [
  {
    label: "M",
    full: "MongoDB",
    Icon: DiMongodb,
    iconColor: "#09ad4e",
    bgColor: "bg-green-50",
    hoverTextColor: "#ffffff",
    hoverBgColor: "#09ad4e",
    labelTextColor: "#09ad4e",
  },
  {
    label: "E",
    full: "Express.js",
    Icon: SiExpress,
    iconColor: "white",
    bgColor: "white",
    hoverTextColor: "#000000",
    hoverBgColor: "white",
    labelTextColor: "white",
  },
  {
    label: "R",
    full: "React.js",
    Icon: FaReact,
    iconColor: "#09ada7",
    bgColor: "bg-teal-50",
    hoverTextColor: "#ffffff",
    hoverBgColor: "#09ada7",
    labelTextColor: "#09ada7",
  },
  {
    label: "N",
    full: "Node.js",
    Icon: FaNodeJs,
    iconColor: "#7ead09",
    bgColor: "bg-lime-50",
    hoverTextColor: "#ffffff",
    hoverBgColor: "#7ead09",
    labelTextColor: "#7ead09",
  },
];

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
    <div className="fixed inset-0 z-200 flex items-center justify-center bg-black/75 backdrop-blur-sm px-4 py-6 overflow-auto">
      <div className="relative w-full max-w-6xl flex flex-col gap-6 sm:gap-10 rounded-3xl bg-[#0f1116] p-4 sm:p-10 text-white shadow-2xl shadow-black/60 ring-1 ring-white/5">
        {/* Close Button */}
        <button
          aria-label="Close about"
          onClick={onClose}
          className="absolute right-3 top-3 sm:right-4 sm:top-4 rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
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

        {/* Content Grid */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.3fr_1fr]">
          {/* Left Section */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <p className="text-2xl sm:text-2xl font-semibold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[#21b1c0]">
                About Me
              </p>
              <h2 className="mt-1 text-xl sm:text-3xl lg:text-4xl font-bold text-white">
                I help businesses build memorable web experiences.
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-white/80">
              I design and develop creative, high-performance websites that fit
              your vision and attract visitors. From UI polish to scalable MERN
              builds, I focus on user delight and measurable results.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {[
                "javascript",
                "react.js",
                "redux",
                "node.js",
                "express.js",
                "mongoDB",
                "mongoose",
                "html",
                "css",
                "tailwind",
                "bootstrap",
                "langchain",
                "openaiAPI",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold text-white/80"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="space-y-2 sm:space-y-3">
              <p className="text-2xl sm:text-2xl font-semibold uppercase tracking-[0.12em] sm:tracking-[0.14em] text-[#21b1c0]">
                MERN Stack
              </p>
              <div className="flex flex-nowrap sm:flex-wrap gap-3 sm:gap-4 justify-between sm:justify-start mt-12">
                {techs.map(
                  ({
                    label,
                    full,
                    Icon,
                    iconColor,
                    hoverBgColor,
                    hoverTextColor,
                  }) => (
                    <div
                      key={label}
                      className="flex flex-col items-center flex-1 sm:flex-1 min-w-0 group"
                    >
                      <Icon
                        className="w-9 h-9 sm:w-12 sm:h-12 mb-1 sm:mb-2"
                        style={{ color: iconColor }}
                      />
                      <TechBadge
                        label={label}
                        full={full}
                        hoverTextColor={hoverTextColor}
                        hoverBgColor={hoverBgColor}
                        labelTextColor={iconColor}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right Section (Card) */}
          <div className="relative items-center justify-center mt-6 sm:mt-0 hidden sm:flex">
            <div className="absolute inset-4 sm:inset-6 rounded-3xl bg-linear-to-br from-white/6 via-white/3 to-white/10 blur-2xl" />
            <div className="relative w-full max-w-xs sm:max-w-xl rounded-3xl border border-white/10 bg-linear-to-b from-[#10131a] to-[#0b0d13] p-3 sm:p-6 shadow-xl shadow-black/40">
              <div className="mb-3 flex items-center justify-between text-white/60">
                <div className="flex gap-2">
                  <Dot />
                  <Dot />
                  <Dot />
                </div>
                {/* <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M12 5v14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg> */}
              </div>
              <div className="flex flex-col items-center gap-3 sm:gap-6">
                <Image
                  src="/coder.svg"
                  alt="Developer illustration"
                  width={320}
                  height={220}
                  className="w-full max-w-[180px] sm:max-w-sm"
                />
                <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-2 sm:p-4 text-center text-xs sm:text-sm text-white/80">
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

function TechBadge({
  label,
  full,
  hoverTextColor,
  hoverBgColor,
  labelTextColor,
}: {
  label: string;
  full: string;
  hoverTextColor: string;
  hoverBgColor: string;
  labelTextColor: string;
}) {
  return (
    <span className="group relative inline-flex flex-col items-center justify-center">
      <span
        className="py-1 px-4 whitespace-nowrap rounded transition-colors duration-150"
        style={{ backgroundColor: "transparent", color: "white" }}
      >
        <span
          className="group-hover:text-white"
          style={{
            color: labelTextColor,
            transition: "all 0.2s",
            backgroundColor: "transparent",
          }}
        >
          {label}
        </span>
      </span>
      <span
        className="pointer-events-none absolute -top-24 left-1/2 w-max -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold opacity-0 shadow-lg shadow-black/40 transition-opacity duration-150 group-hover:opacity-100"
        style={{
          color: hoverTextColor,
          backgroundColor: hoverBgColor,
        }}
      >
        {full}
        <span
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-10 border-r-10 border-t-10 border-l-transparent border-r-transparent"
          style={{ borderTopColor: hoverBgColor }}
          aria-hidden="true"
        />
      </span>
    </span>
  );
}

function Dot() {
  return <span className="h-2.5 w-2.5 rounded-full bg-white/50" />;
}
