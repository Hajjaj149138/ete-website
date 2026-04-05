"use client";
import { Sparkles, Phone } from "lucide-react";
import { useConsultation } from "@/lib/ConsultationContext";

interface Props {
  label?:    string;
  variant?:  "primary" | "accent" | "outline" | "ghost-inv";
  size?:     "sm" | "md" | "lg";
  showIcon?: boolean;
  className?: string;
}

export default function ConsultationButton({ label = "Book Free Consultation", variant = "accent", size = "md", showIcon = true, className = "" }: Props) {
  const { openConsultation } = useConsultation();
  const sizeClass = size === "lg" ? "ete-btn-lg" : size === "sm" ? "ete-btn-sm" : "";
  const varClass  = `ete-btn-${variant}`;
  return (
    <button onClick={openConsultation} className={`ete-btn ${varClass} ${sizeClass} ${className}`.trim()}>
      {showIcon && <Sparkles size={12} />}
      {label}
    </button>
  );
}
