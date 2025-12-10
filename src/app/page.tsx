"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Body, Bodies, Composite, Engine, Runner, Vector } from "matter-js";
import Projects from "./projects/projects";

type IconProps = {
  className?: string;
};

type ParticleBody = Body & {
  customFill?: string;
  customAlpha?: number;
  shape?: "circle" | "poly";
};
type MasterBody = Body & { radius?: number };

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

export default function Home() {
  return (
    <div className="bg-[#05070d] text-white">
      {/* Hero section stays fixed visually; content scrolls over its own background */}
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
                <a
                  className="inline-flex items-center gap-3 rounded-full bg-linear-to-r from-[#d8b054] via-[#c9972b] to-[#b07916] px-6 py-3 text-lg font-semibold text-[#1a1205] shadow-lg shadow-amber-900/40 transition delay-150 duration-300 ease-in-out hover:translate-x-2 hover:scale-110 hover:from-[#e2c067] hover:via-[#d1a33a] hover:to-[#b8831b]"
                  href="#about"
                >
                  About Me
                  <ArrowRightIcon className="h-5 w-5" />
                </a>
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
      </section>

      {/* Projects on their own background */}
      <section className="relative bg-[#0a0d14]">
        <Projects />
      </section>
    </div>
  );
}

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const engineRef = useRef<Engine | null>(null);
  const runnerRef = useRef<Runner | null>(null);
  const particlesRef = useRef<ParticleBody[]>([]);
  const wallsRef = useRef<Body[]>([]);
  const mouseRef = useRef<Vector>({ x: 0, y: 0 });
  const masterRef = useRef<MasterBody | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const engine = Engine.create({ gravity: { x: 0, y: 0 } });
    const runner = Runner.create();
    engineRef.current = engine;
    runnerRef.current = runner;

    const colors = [
      "#0f131a",
      "#161c24",
      "#1c2430",
      "#223040",
      "#26384a",
      "#2b4256",
      "#3a536a",
    ];

    const createWalls = () => {
      const { innerWidth: width, innerHeight: height } = window;
      const thickness = 200;
      const walls = [
        Bodies.rectangle(width / 2, -thickness / 2, width, thickness, {
          isStatic: true,
        }),
        Bodies.rectangle(width / 2, height + thickness / 2, width, thickness, {
          isStatic: true,
        }),
        Bodies.rectangle(-thickness / 2, height / 2, thickness, height, {
          isStatic: true,
        }),
        Bodies.rectangle(width + thickness / 2, height / 2, thickness, height, {
          isStatic: true,
        }),
      ];
      if (wallsRef.current.length) {
        Composite.remove(engine.world, wallsRef.current);
      }
      wallsRef.current = walls;
      Composite.add(engine.world, walls);
    };

    const createParticles = () => {
      const { innerWidth: width, innerHeight: height } = window;
      const particles = Array.from({ length: 90 }, () => {
        const radius = 12 + Math.random() * 36;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const alpha = 0.35 + Math.random() * 0.3;
        const shapeType = Math.random() > 0.45 ? "poly" : "circle";
        const sides = [4, 5, 6, 8][Math.floor(Math.random() * 4)];
        const body =
          shapeType === "circle"
            ? (Bodies.circle(
                Math.random() * width,
                Math.random() * height,
                radius,
                {
                  frictionAir: 0.03,
                  restitution: 0.75,
                }
              ) as ParticleBody)
            : (Bodies.polygon(
                Math.random() * width,
                Math.random() * height,
                sides,
                radius,
                {
                  frictionAir: 0.03,
                  restitution: 0.75,
                  angle: Math.random() * Math.PI,
                }
              ) as ParticleBody);

        Body.setVelocity(body, {
          x: (Math.random() - 0.5) * 2.4,
          y: (Math.random() - 0.5) * 2.4,
        });
        body.customFill = color;
        body.customAlpha = alpha;
        body.shape = shapeType;
        return body;
      });
      particlesRef.current = particles;
      Composite.add(engine.world, particles);

      // Master black ball that pushes others
      const master = Bodies.circle(width * 0.65, height * 0.35, 52, {
        frictionAir: 0.02,
        restitution: 0.9,
        density: 0.015,
      }) as MasterBody;
      master.radius = 30;
      masterRef.current = master;
      Composite.add(engine.world, master);
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createWalls();
      // keep master in view on resize
      const master = masterRef.current;
      if (master) {
        Body.setPosition(master, {
          x: Math.min(Math.max(master.position.x, 60), window.innerWidth - 60),
          y: Math.min(Math.max(master.position.y, 60), window.innerHeight - 60),
        });
      }
      particlesRef.current.forEach((body) => {
        Body.setPosition(body, {
          x: Math.min(Math.max(body.position.x, 40), window.innerWidth - 40),
          y: Math.min(Math.max(body.position.y, 40), window.innerHeight - 40),
        });
      });
    };

    const handlePointer = (event: PointerEvent) => {
      mouseRef.current = { x: event.clientX, y: event.clientY };
    };

    createWalls();
    createParticles();
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointer);

    Runner.run(runner, engine);

    let rafId: number;
    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      particlesRef.current.forEach((body) => {
        const master = masterRef.current;
        if (master) {
          const mDir = Vector.sub(master.position, body.position);
          const mDist = Math.max(Vector.magnitude(mDir), 30);
          // Pull toward master so swarm follows, but gently repel when too close.
          const towardStrength = 0.0014; // stronger follow toward master
          const repelStrength = 0.0016;
          const normalized = Vector.normalise(mDir);
          const force =
            mDist < 90
              ? Vector.mult(normalized, -repelStrength) // push away if overlapping the master
              : Vector.mult(normalized, towardStrength);
          Body.applyForce(body, body.position, force);
        }

        const direction = Vector.sub(mouseRef.current, body.position);
        const distance = Math.max(Vector.magnitude(direction), 30);
        const strength = 0.0018 / (distance / 90); // much faster response toward cursor path
        const force = Vector.mult(Vector.normalise(direction), strength);
        Body.applyForce(body, body.position, force);

        ctx.save();
        ctx.globalAlpha = body.customAlpha ?? 0.5;
        ctx.fillStyle = body.customFill || "#1c2430";
        ctx.shadowColor = "rgba(0, 0, 0, 0.45)";
        ctx.shadowBlur = 10;

        if (body.shape === "circle" || body.circleRadius) {
          const radius = body.circleRadius ?? 12;
          ctx.beginPath();
          ctx.arc(body.position.x, body.position.y, radius, 0, Math.PI * 2);
        } else {
          ctx.beginPath();
          const verts = body.vertices;
          ctx.moveTo(verts[0].x, verts[0].y);
          for (let i = 1; i < verts.length; i += 1) {
            ctx.lineTo(verts[i].x, verts[i].y);
          }
          ctx.closePath();
        }

        ctx.fill();
        ctx.restore();
      });

      // Draw master ball
      const master = masterRef.current;
      if (master) {
        // actively move master toward cursor (lerped setPosition for responsiveness)
        const target = mouseRef.current;
        const dir = Vector.sub(target, master.position);
        const follow = 0.35; // snappier follow
        const nextPos = {
          x: master.position.x + dir.x * follow,
          y: master.position.y + dir.y * follow,
        };
        Body.setPosition(master, nextPos);
        // keep velocity near zero so it sticks to the cursor
        Body.setVelocity(master, { x: 0, y: 0 });

        ctx.save();
        ctx.fillStyle = "rgba(0,0,0,0.9)";
        ctx.shadowColor = "rgba(0,0,0,0.4)";
        ctx.shadowBlur = 18;
        ctx.beginPath();
        ctx.arc(
          master.position.x,
          master.position.y,
          master.radius ?? 52,
          0,
          Math.PI * 2
        );
        ctx.fill();
        ctx.restore();
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointer);
      Runner.stop(runner);
      Composite.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full"
      style={{ filter: "saturate(1.2)", opacity: 0.9 }}
    />
  );
}

function LogoMark({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 46.5 32 17l24 29.5H38.5L32 38.5 25.5 47H8Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M22.5 47 32 34.5 41.5 47"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
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
