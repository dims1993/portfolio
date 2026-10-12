import DATA from "../data/webData";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import AnimatedDescription from "../components/AnimatedDescription";

const HEX_SIZE = 30;
const TRAIL_DURATION = 800;

function HexagonBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = canvas?.parentElement;

    if (!canvas || !section) {
      return undefined;
    }

    const context = canvas.getContext("2d");
    const pointer = { x: -Infinity, y: -Infinity };
    const trailMap = new Map();
    const supportsHover = window.matchMedia("(hover: hover)").matches;
    let animationFrame;
    let isAnimating = false;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;

    const resize = () => {
      const bounds = section.getBoundingClientRect();
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      draw();
    };

    const movePointer = (event) => {
      const bounds = section.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
      if (!isAnimating) {
        isAnimating = true;
        animationFrame = window.requestAnimationFrame(render);
      }
    };

    const resetPointer = () => {
      pointer.x = -Infinity;
      pointer.y = -Infinity;
    };

    const drawHexagon = (x, y, opacity, active) => {
      context.beginPath();
      for (let index = 0; index < 6; index += 1) {
        const angle = (Math.PI / 180) * (60 * index - 30);
        const pointX = x + HEX_SIZE * Math.cos(angle);
        const pointY = y + HEX_SIZE * Math.sin(angle);
        if (index === 0) context.moveTo(pointX, pointY);
        else context.lineTo(pointX, pointY);
      }
      context.closePath();
      context.strokeStyle = active
        ? `rgba(203, 213, 225, ${opacity})`
        : `rgba(255, 255, 255, ${opacity})`;
      context.lineWidth = active ? 1.15 : 0.65;
      context.stroke();
    };

    const draw = (timestamp = 0) => {
      context.clearRect(0, 0, width, height);
      const horizontalDistance = HEX_SIZE * Math.sqrt(3);
      const verticalDistance = HEX_SIZE * 1.5;

      for (let row = -1; row <= height / verticalDistance + 1; row += 1) {
        const y = row * verticalDistance;
        const offset = row % 2 === 0 ? 0 : horizontalDistance / 2;

        for (
          let column = -1;
          column <= width / horizontalDistance + 1;
          column += 1
        ) {
          const x = column * horizontalDistance + offset;
          const distance = Math.hypot(x - pointer.x, y - pointer.y);
          const influence = Math.max(0, 1 - distance / 135);
          const cellId = `${row}:${column}`;
          const trail =
            influence > 0 ? timestamp + TRAIL_DURATION * influence : 0;
          const storedTrail = Math.max(trailMap.get(cellId) || 0, trail);

          if (storedTrail > timestamp) {
            trailMap.set(cellId, storedTrail);
          } else {
            trailMap.delete(cellId);
          }

          const remaining = Math.max(
            0,
            (storedTrail - timestamp) / TRAIL_DURATION,
          );
          const active = influence > 0 || remaining > 0;
          drawHexagon(x, y, active ? 0.035 + remaining * 0.26 : 0.045, active);
        }
      }
    };

    const render = (timestamp) => {
      draw(timestamp);
      resetPointer();
      if (trailMap.size > 0) {
        animationFrame = window.requestAnimationFrame(render);
      } else {
        isAnimating = false;
      }
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(section);
    if (supportsHover) {
      section.addEventListener("pointermove", movePointer, { passive: true });
      section.addEventListener("pointerleave", resetPointer);
    }

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      if (supportsHover) {
        section.removeEventListener("pointermove", movePointer);
        section.removeEventListener("pointerleave", resetPointer);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}

function Hero() {
  const { t } = useTranslation();
  const description = t("hero.description");

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-[#000000] flex flex-col justify-center items-center overflow-hidden px-6 text-center"
    >
      <HexagonBackground />

      {/* 3. CONTENIDO (Z-10 para estar sobre el fondo) */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl">
        {/* Role */}
        <p
          className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent-silver)] mb-4 fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          {DATA.role}
        </p>

        {/* Name: Estilo Proyectos con degradado y padding para la "g" */}
        <h1
          className="text-6xl md:text-8xl font-bold tracking-tighter leading-[1.1] bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent py-4 fade-up priority"
          style={{ animationDelay: "0.6s" }}
        >
          {DATA.name.split(" ")[0]} <br />
          <span className="italic font-light text-zinc-500">
            {DATA.name.split(" ")[1]}
          </span>
        </h1>

        {/* Description */}
        <AnimatedDescription
          text={description}
          className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl mt-6 leading-relaxed mx-auto"
          delay={0.3}
          animateOnView={false}
          isActive={true}
        />

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full mt-12 fade-up"
          style={{ animationDelay: "1s" }}
        >
          <a
            href="#projects"
            className="w-full sm:w-auto min-w-[200px] py-4 px-8 rounded-full bg-white text-black font-bold text-sm hover:scale-105 transition-all active:scale-95 shadow-xl shadow-white/5"
          >
            {t("hero.btn_projects")}
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto min-w-[200px] py-4 px-8 rounded-full border border-white/10 text-white font-medium text-sm hover:bg-white/5 transition-all"
          >
            {t("hero.btn_contact")}
          </a>
        </div>
        {/* Availability Badge */}
        <div
          className="status-badge fade-up mb-8"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="status-dot" />
          {t("hero.availability")}
        </div>
      </div>

      {/* Parche inferior para suavizar la unión con la siguiente sección */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#08090a] to-transparent z-[5]"></div>
    </section>
  );
}

export default Hero;
