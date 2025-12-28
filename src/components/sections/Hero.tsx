"use client";

import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Image from "next/image";
import { useState } from "react";
// import TwitterIcon from "@mui/icons-material/Twitter";
import { ParticleField } from "@/components/common/ParticleField";
import AboutOverlay from "@/components/sections/AboutOverlay";
import {
  FaArrowDownLong,
  FaArrowRightLong,
  FaLinkedinIn,
} from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";

const socials = [
  {
    label: "LinkedIn",
    icon: <FaLinkedinIn className="h-6 w-6" />,
    href: "https://www.linkedin.com/in/dil123/",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    label: "Instagram",
    icon: <InstagramIcon className="h-6 w-6" />,
    href: "https://www.instagram.com/dilbahadur143/",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    label: "Mail",
    icon: <MailOutlineIcon className="h-6 w-6" />,
    href: "mailto:dtharu486@gmail.com",
  },
  {
    label: "GitHub",
    icon: <GitHubIcon className="h-6 w-6" />,
    href: "https://github.com/dilbdr486",
    target: "_blank",
    rel: "noopener noreferrer",
  },
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
          className="w-[520px] sm:w-[650px] lg:w-[750px] max-w-[90vw] opacity-80"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col px-4 sm:px-10 py-6 sm:py-10">
        <header className="flex items-center justify-between">
          <Image
            src="/logo11.svg"
            alt="logo"
            width={120}
            height={120}
            className="h-16 w-16 sm:h-24 sm:w-24 object-contain"
            priority
          />

          <div className="rounded-full border border-white/20 bg-white/5 p-2 sm:p-3 backdrop-blur-md transition hover:border-white/50 hover:bg-white/10">
            <a
              href="https://t.me/dilbahadurtharu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PiTelegramLogo className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>
        </header>

        <main className="relative mt-12 sm:mt-16 flex w-full flex-1 flex-col items-start gap-10 lg:flex-row lg:items-start lg:pr-40">
          <div className="flex w-full max-w-xl flex-col gap-6 sm:gap-8 lg:max-w-lg">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                Dil Bahadur Tharu
              </h1>
              <p className="text-base sm:text-lg font-semibold text-white/85">
                MERN Stack Developer
              </p>
            </div>

            <button
              type="button"
              onClick={() => setAboutOpen(true)}
              className="inline-flex w-fit items-center gap-2 sm:gap-3 rounded-full bg-linear-to-r from-[#d8b054] via-[#c9972b] to-[#b07916] px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-lg font-semibold text-[#1a1205] shadow-lg shadow-amber-900/40 transition hover:scale-105"
            >
              About Me
              <FaArrowRightLong className="h-5 w-5" />
            </button>
          </div>
        </main>

        <div className="flex flex-col items-center gap-3 pb-6 sm:pb-8">
          <a
            className="inline-flex items-center gap-3 rounded-full bg-linear-to-r from-[#d8b054] via-[#c9972b] to-[#b07916] px-5 sm:px-6 py-3 text-base sm:text-lg font-semibold text-[#1a1205] shadow-lg shadow-amber-900/40 transition hover:scale-105"
            href="#projects"
          >
            Latest Works
          </a>
          <FaArrowDownLong className="h-5 w-5 sm:h-6 sm:w-6 text-white/70 animate-bounce" />
        </div>
      </div>

      {/* Social icons – always right side, smaller on mobile */}
      <div className="absolute right-4 sm:right-7 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-3 sm:gap-6">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target={social.target}
            rel={social.rel}
            className="group rounded-full border border-white/15 bg-white/5 p-2 sm:p-3 text-white/80 shadow-lg shadow-black/40 backdrop-blur-md transition hover:border-white/50 hover:bg-white/15 hover:text-white"
            aria-label={social.label}
          >
            {/* icon size controlled via padding container */}
            <span className="block scale-90 sm:scale-100">{social.icon}</span>
          </a>
        ))}
      </div>

      <div className="absolute bottom-6 right-6 z-20 hidden sm:flex items-end gap-4">
        <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur-md">
          Chat with us
        </div>
        <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-white/60">
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
