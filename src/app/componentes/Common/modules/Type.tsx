"use client";

import React, { useEffect, useState } from "react";

const WORD = "DIGITALAX";
const MIDDLE = "IGITALA";
const DOMAIN = ".COMPUTER";

export default function Type() {
  const [phase, setPhase] = useState(0);
  const [index, setIndex] = useState(0);
  const [cursorOn, setCursorOn] = useState(true);

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

  useEffect(() => {
    const id = setInterval(() => {
      setCursorOn((v) => !v);
    }, 450);
    return () => clearInterval(id);
  }, []);

  const u = phase;

  let text = "";
  let cursorPos = 0;

  if (u === 0) {
    text = WORD.slice(0, index);
    cursorPos = text.length;
  } else if (u === 1) {
    text = WORD;
    cursorPos = text.length;
  } else if (u === 2) {
    const mid = MIDDLE.slice(0, Math.max(0, 7 - index));
    text = "D" + mid + "X";
    cursorPos = text.length - 1;
  } else if (u === 3) {
    const domPart = DOMAIN.slice(0, index);
    text = "DX" + domPart;
    cursorPos = text.length;
  } else if (u === 4) {
    text = "DX" + DOMAIN;
    cursorPos = text.length;
  } else if (u === 5) {
    const domPart = DOMAIN.slice(0, Math.max(0, DOMAIN.length - index));
    text = "DX" + domPart;
    cursorPos = text.length;
  } else if (u === 6) {
    const mid = MIDDLE.slice(0, index);
    text = "D" + mid + "X";
    cursorPos = text.length;
  } else if (u === 7) {
    text = WORD;
    cursorPos = text.length;
  }

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

  const before = text.slice(0, cursorPos);
  const after = text.slice(cursorPos);

  return (
    <h1
      className="flex items-center justify-center relative w-fit h-fit cursor-sewingHS"
      onClick={() => window.open("https://dx.computer")}
    >
      <span
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "center",
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        {before}
        <span
          style={{
            marginLeft: "0.05em",
            marginRight: "0.05em",
            opacity: cursorOn ? 1 : 0,
          }}
        >
          |
        </span>
        {after}
      </span>
    </h1>
  );
}
