import { useEffect } from "react";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  useEffect(() => {
    document.title = "Jayesh Vyas - Technical Team Lead & Solution Architect";
  }, []);

  return <HeroSection />;
}
