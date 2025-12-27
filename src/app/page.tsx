"use client";

import ContactSection from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import { Hero } from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <div className="bg-[#05070d] text-white">
      <Hero />

      {/* Projects on their own background */}
      <section className="relative bg-white">
        <Projects />
        <ContactSection/>
        <Footer/>
      </section>
    </div>
  );
}
