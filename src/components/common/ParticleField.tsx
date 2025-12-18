"use client";

import { useEffect, useRef } from "react";
import { Body, Bodies, Composite, Engine, Runner, Vector } from "matter-js";

type ParticleBody = Body & {
  customFill?: string;
  customAlpha?: number;
  shape?: "circle" | "poly";
};

type MasterBody = Body & { radius?: number };

export function ParticleField() {
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
          const towardStrength = 0.0014;
          const repelStrength = 0.0016;
          const normalized = Vector.normalise(mDir);
          const force =
            mDist < 90
              ? Vector.mult(normalized, -repelStrength)
              : Vector.mult(normalized, towardStrength);
          Body.applyForce(body, body.position, force);
        }

        const direction = Vector.sub(mouseRef.current, body.position);
        const distance = Math.max(Vector.magnitude(direction), 30);
        const strength = 0.0018 / (distance / 90);
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

      const master = masterRef.current;
      if (master) {
        const target = mouseRef.current;
        const dir = Vector.sub(target, master.position);
        const follow = 0.35;
        const nextPos = {
          x: master.position.x + dir.x * follow,
          y: master.position.y + dir.y * follow,
        };
        Body.setPosition(master, nextPos);
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


