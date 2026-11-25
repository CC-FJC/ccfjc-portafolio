"use client";

import { useEffect, useRef } from "react";

import styles from "./ScrollCanvas.module.css";

// PRNG deterministico para que el "scatter plot" sea estable entre cargas
function mulberry32(a: number) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const INK = "22,22,53"; // #161635
const ACCENT = "226,45,69"; // #e22d45

export default function ScrollCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;

    // El primer nodo vive en el centro del logo del Hero
    // (el canvas es fixed, asi que las coords del viewport son validas)
    let logoPos = { x: 0, y: 0 };
    const readLogoPos = () => {
      const logo = document.querySelector<HTMLElement>(
        "#hero img[class*='logo']"
      );
      if (logo) {
        const r = logo.getBoundingClientRect();
        logoPos = { x: r.left + r.width / 2, y: r.top + r.height / 2 };
      } else {
        logoPos = { x: w / 2, y: h / 2 };
      }
    };

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      readLogoPos();
    };
    resize();
    window.addEventListener("resize", resize);

    // Puntos del scatter (deterministicos)
    const rand = mulberry32(20261111);
    const N = 90;
    const INITIAL_CONNECTED = 0; // sin lineas en la parte superior; la primera nace del logo
    const INITIAL_VISIBLE = 12; // nodos visibles desde el inicio
    const LEAD = 14; // nodos visibles por delante de la punta de la linea
    const pts = Array.from({ length: N }, () => ({
      x: rand(),
      y: rand(),
      r: 3 + rand() * 5,
      filled: rand() < 0.12, // pocos data marks en rojo institucional
    }));

    // Progreso de scroll: 0 al inicio, 1 al final de la pagina
    let target = 0;
    let current = 0;
    const readScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      target = max > 0 ? window.scrollY / max : 0;
    };
    window.addEventListener("scroll", readScroll, { passive: true });
    readScroll();

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let t = 0; // reloj para la respiracion de los nodos

    const px = (p: { x: number; y: number }) => 60 + p.x * (w - 120);
    const py = (p: { x: number; y: number }) => 60 + (1 - p.y) * (h - 120);

    // posicion de un nodo: el nodo 0 es el centro del logo
    const P = (i: number): { x: number; y: number } =>
      i === 0 ? logoPos : { x: px(pts[i]), y: py(pts[i]) };

    const draw = () => {
      t += 1 / 60;
      // Interaccion con el scroll: la linea se dibuja siguiendo el avance
      if (reduced) {
        current = target;
      } else {
        current += (target - current) * 0.08;
        if (Math.abs(target - current) < 0.0005) current = target;
      }

      ctx.clearRect(0, 0, w, h);

      // Grid punteado
      ctx.fillStyle = `rgba(${INK},0.10)`;
      for (let gx = 100; gx < w; gx += 80) {
        for (let gy = 100; gy < h; gy += 80) {
          ctx.fillRect(gx, gy, 1.5, 1.5);
        }
      }

      // La linea avanza con el scroll desde los nodos iniciales
      const linePos = Math.min(
        N - 1,
        current * (N - INITIAL_CONNECTED) + INITIAL_CONNECTED
      );
      const full = Math.floor(linePos);
      const frac = linePos - full;

      // Ventana de visibilidad: desde el inicio solo un grupo, luego la linea
      // siempre tiene LEAD nodos visibles por delante a los que ira uniendose
      const visibleCount = Math.max(
        INITIAL_VISIBLE,
        Math.min(N, linePos + LEAD)
      );

      // Timeline: conecta los nodos revelados en orden; en el top (progress 0)
      // no hay lineas: solo el moveTo del nodo logo, que no dibuja nada
      {
        ctx.strokeStyle = `rgba(${INK},0.35)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        const last = Math.min(full, N - 1);
        for (let i = 0; i <= last; i++) {
          const c = P(i);
          if (i === 0) ctx.moveTo(c.x, c.y);
          else ctx.lineTo(c.x, c.y);
        }
        if (frac > 0.02 && full < N - 1) {
          const a = P(full);
          const b = P(full + 1);
          ctx.lineTo(
            a.x + (b.x - a.x) * frac,
            a.y + (b.y - a.y) * frac
          );
        }
        ctx.stroke();
      }

      // Nodos visibles: solo la ventana actual; cada nodo hace fade-in al
      // entrar y permanece dibujado (unido o por unirse)
      const lastVisible = Math.min(N - 1, Math.floor(visibleCount));
      for (let i = 0; i <= lastVisible; i++) {
        const p = pts[i];
        const c = P(i);
        const X = c.x;
        const Y = c.y;
        ctx.globalAlpha = Math.min(1, (visibleCount - i) / 2);
        if (p.filled) {
          // halo suave (rol "muted sage" -> tinte rojo institucional)
          ctx.fillStyle = `rgba(${ACCENT},0.08)`;
          ctx.beginPath();
          ctx.arc(X, Y, p.r * 2.4, 0, Math.PI * 2);
          ctx.fill();
          // marca llena
          ctx.fillStyle = `rgba(${ACCENT},0.9)`;
          ctx.beginPath();
          ctx.arc(X, Y, p.r * 0.8, 0, Math.PI * 2);
          ctx.fill();
          // inner dot (timeline node)
          ctx.fillStyle = "rgba(255,255,255,0.9)";
          ctx.beginPath();
          ctx.arc(X, Y, Math.max(1, p.r * 0.25), 0, Math.PI * 2);
          ctx.fill();
        } else {
          // efecto de respiracion: cada nodo inhala/exhala con su propia fase
          const breathe = reduced ? 0 : Math.sin(t * 1.6 + i * 0.9);
          const r = p.r * (1 + breathe * 0.13);
          ctx.fillStyle = "rgba(255,255,255,0.9)";
          ctx.strokeStyle = `rgba(${INK},${0.55 - breathe * 0.15})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(X, Y, r, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }

      // Punta de la linea: el nodo al que se acerca lleva el anillo accent
      if (full < N - 1 && frac > 0.02) {
        const p = pts[full + 1];
        const c = P(full + 1);
        ctx.globalAlpha = frac;
        ctx.strokeStyle = `rgba(${ACCENT},0.8)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(c.x, c.y, p.r + 3, 0, Math.PI * 2);
        ctx.stroke();
        ctx.strokeStyle = `rgba(${INK},0.55)`;
        ctx.beginPath();
        ctx.arc(c.x, c.y, p.r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
    };

    let raf = 0;
    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", readScroll);
    };
  }, []);

  return <canvas ref={ref} className={styles.canvas} aria-hidden="true" />;
}
