"use client";

import React, { useEffect, useState } from "react";

const WORD = "DIGITALAX";
const MIDDLE = "IGITALA";
const DOMAIN = ".COMPUTER";

export default function Type() {
  const [phase, setPhase] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const tick = setInterval(() => {
      const next = index + 1;
      const u = phase;

      if (u === 0 && next <= WORD.length) setIndex(next);
      else if (u === 1 && next <= 60) setIndex(next);
      else if (u === 2 && next <= MIDDLE.length) setIndex(next);
      else if (u === 3 && next <= DOMAIN.length) setIndex(next);
      else if (u === 4 && next <= 60) setIndex(next);
      else if (u === 5 && next <= DOMAIN.length) setIndex(next);
      else if (u === 6 && next <= MIDDLE.length) setIndex(next);
      else if (u === 7 && next <= 60) setIndex(next);
      else {
        setPhase((phase + 1) % 8);
        setIndex(0);
      }
    }, 80);

    return () => clearInterval(tick);
  }, [phase, index]);

  const u = phase;
  const text: string =
    u === 0
      ? WORD.slice(0, index)
      : u === 1
      ? WORD
      : u === 2
      ? "D" + MIDDLE.slice(0, Math.max(0, 7 - index)) + "X"
      : u === 3
      ? "DX" + DOMAIN.slice(0, index)
      : u === 4
      ? "DX" + DOMAIN
      : u === 5
      ? "DX" + DOMAIN.slice(0, Math.max(0, DOMAIN.length - index))
      : u === 6
      ? "D" + MIDDLE.slice(0, index) + "X"
      : u === 7
      ? WORD
      : "";

  const maxShrink = 0.25;
  let scale = 1;

  if (u === 3) {
    const p = Math.min(1, index / DOMAIN.length);
    scale = 1 - maxShrink * p;
  } else if (u === 4) {
    scale = 1 - maxShrink;
  } else if (u === 5) {
    const p = Math.max(0, 1 - index / DOMAIN.length);
    scale = 1 - maxShrink * p;
  }

  return (
    <h1
      className="flex items-center justify-center relative w-fit h-fit cursor-sewingHS"
      onClick={() => window.open("https://dx.computer")}
    >
      <span
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "center",
          display: "inline-block",
        }}
      >
        {text}
      </span>
      <span className="ml-1 animate-blink">|</span>
    </h1>
  );
}
