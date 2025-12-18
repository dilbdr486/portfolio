"use client";

import { useState } from "react";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import { ParticleField } from "@/components/common/ParticleField";
import AboutOverlay from "@/components/sections/AboutOverlay";

type IconProps = {
  className?: string;
};

const socials = [
  {
    label: "LinkedIn",
    icon: <LinkedInIcon className="h-6 w-6" />,
    href: "https://www.linkedin.com/in/dil123/",
  },
  { label: "Twitter", icon: <TwitterIcon className="h-6 w-6" />, href: "#" },
  {
    label: "Instagram",
    icon: <InstagramIcon className="h-6 w-6" />,
    href: "#",
  },
  { label: "Mail", icon: <MailOutlineIcon className="h-6 w-6" />, href: "#" },
  { label: "GitHub", icon: <GitHubIcon className="h-6 w-6" />, href: "#" },
];

export function Hero() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ParticleField />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(51,94,129,0.2),transparent_38%),radial-gradient(circle_at_75%_35%,rgba(45,103,168,0.2),transparent_35%),radial-gradient(circle_at_50%_70%,rgba(19,41,66,0.3),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <Image
          src="/logo11.svg"
          alt="center star logo"
          width={900}
          height={900}
          className="w-[750px] max-w-[90vw] opacity-80"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col px-6 py-10 sm:px-10">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo11.svg"
              alt="logo"
              width={120}
              height={120}
              className="h-24 w-24 object-contain bg-transparent"
              priority
            />
          </div>
          <div className="rounded-full border border-white/20 bg-white/5 p-3 backdrop-blur-md transition hover:border-white/50 hover:bg-white/10">
            <PaperPlaneIcon className="h-5 w-5" />
          </div>
        </header>

        <main className="relative mt-16 flex w-full flex-1 flex-col items-start gap-12 lg:flex-row lg:items-start lg:pr-40">
          <div className="flex w-full max-w-xl flex-col gap-8 lg:max-w-lg">
            <div className="space-y-4">
              <h1 className="text-5xl font-black leading-tight sm:text-6xl">
                Dil Bahadur Tharu
              </h1>
              <p className="text-lg font-semibold text-white/85">
                MERN Stack Developer
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setAboutOpen(true)}
                className="inline-flex items-center gap-3 rounded-full bg-linear-to-r from-[#d8b054] via-[#c9972b] to-[#b07916] px-6 py-3 text-lg font-semibold text-[#1a1205] shadow-lg shadow-amber-900/40 transition delay-150 duration-300 ease-in-out hover:translate-x-2 hover:scale-110 hover:from-[#e2c067] hover:via-[#d1a33a] hover:to-[#b8831b]"
              >
                About Me
                <ArrowRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </main>

        <div className="flex flex-col items-center gap-4 pb-8">
          <a
            className="inline-flex items-center gap-3 rounded-full bg-linear-to-r from-[#d8b054] via-[#c9972b] to-[#b07916] px-6 py-3 text-lg font-semibold text-[#1a1205] shadow-lg shadow-amber-900/40 transition delay-150 duration-300 ease-in-out hover:translate-y-2 hover:scale-110 hover:from-[#e2c067] hover:via-[#d1a33a] hover:to-[#b8831b]"
            href="#projects"
          >
            Latest Works
          </a>
          <ArrowDownIcon className="h-6 w-6 text-white/70 animate-bounce" />
        </div>
      </div>

      <div className="fixed right-7 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-6">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            className="group rounded-full border border-white/15 bg-white/5 p-3 text-white/80 shadow-lg shadow-black/40 backdrop-blur-md transition hover:border-white/50 hover:bg-white/15 hover:text-white"
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>

      <div className="fixed bottom-6 right-6 z-20 flex items-end gap-4">
        <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/40 backdrop-blur-md">
          Chat with us
        </div>
        <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-white/60 shadow-lg shadow-black/50">
          <img
            alt="Support avatar"
            className="h-full w-full object-cover"
            src="/avatar.jpg"
          />
        </div>
      </div>

      <AboutOverlay open={aboutOpen} onClose={() => setAboutOpen(false)} />
    </section>
  );
}

function PaperPlaneIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 12.5 20.5 3.5l-5.5 17-4.2-5.1-5.8-2.9 4.6-1.6 5.4 4.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowDownIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4v16m0 0-5-5m5 5 5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
