import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "gradient" | "gray";
}

export default function SectionWrapper({
  children,
  className = "",
  background = "white",
}: SectionWrapperProps) {
  const backgroundClass =
    background === "gradient"
      ? "bg-gradient-to-br from-gray-50 to-white"
      : background === "gray"
      ? "bg-gray-50"
      : "bg-white";

  return (
    <section className={`${backgroundClass} ${className}`}>
      <div className="container mx-auto px-4 md:px-6 md:pt-10 relative z-10">
        {children}
      </div>
    </section>
  );
}
