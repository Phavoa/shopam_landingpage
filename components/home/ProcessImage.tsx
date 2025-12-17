import React from "react";
import Image from "next/image";

interface ProcessImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  gradientColor?: "green" | "orange";
  rotation?: "none" | "-rotate-6" | "rotate-6";
}

export default function ProcessImage({
  src,
  alt,
  width = 500,
  height = 350,
  gradientColor = "orange",
  rotation = "none",
}: ProcessImageProps) {
  const gradientClass =
    gradientColor === "green"
      ? "from-green-400/20 to-green-600/20"
      : "from-orange-400/20 to-[#ED8123]/90/20";

  return (
    <div className="relative w-full max-w-sm">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradientClass} blur-3xl rounded-full transform ${rotation}`}
      ></div>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className="relative z-10 w-full h-auto rounded-t-2xl shadow-2xl"
      />
    </div>
  );
}
