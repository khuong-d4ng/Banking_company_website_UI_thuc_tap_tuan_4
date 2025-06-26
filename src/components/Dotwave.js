import React from "react";

export default function DotWave() {
  const cols = 50;
  const rows = 40;
  const spacing = 16;

  const dots = [];

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const offsetX = Math.sin(x * 0.2 + y * 0.3) * 10;
      const offsetY = Math.cos(x * 0.2 + y * 0.3) * 10;
      const scale = 1 + Math.sin((x + y) * 0.15) * 0.8;
      const blur = Math.max(0, 3 - scale * 1.5);
      const size = 3 * scale;

      dots.push(
        <div
          key={`${x}-${y}`}
          className="rounded-full absolute"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            background: `rgba(0, 255, 0, 0.8)`,
            top: `${y * spacing + offsetY}px`,
            left: `${x * spacing + offsetX}px`,
            filter: `blur(${blur}px) brightness(${0.6 + scale / 1.5})`,
            transform: `scale(${scale})`,
          }}
        />
      );
    }
  }

  return (
    <div className="relative w-[570px] h-[440px] bg-black overflow-hidden">
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          transform: `rotateX(10deg) rotateZ(20deg) perspective(100px)`,
        }}
      >
        {dots}
      </div>
    </div>
  );
}
