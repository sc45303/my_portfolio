"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Lanyard from "@/components/ui/lanyard";

interface PortfolioLandingProps {
  onModeSelect: (mode: "simple" | "detailed") => void;
}

export default function PortfolioLanding({
  onModeSelect,
}: PortfolioLandingProps) {
  const [selectedMode, setSelectedMode] = useState<"simple" | "detailed">(
    "simple"
  );

  const handleModeSelect = (mode: "simple" | "detailed") => {
    setSelectedMode(mode);
    setTimeout(() => onModeSelect(mode), 300);
  };

  return (
    <div className="min-h-screen bg-[#000000] relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Lanyard in full screen fixed container */}
      <Lanyard position={[15, 5, 10]} gravity={[0, -45, 0]} />

      {/* Main content */}
      <div className="relative z-20 flex items-start justify-center min-h-screen bg-[#8a4b4b00] px-4 pt-20 md:pt-24 lg:pt-28">
        <div className="text-center  max-w-2xl mx-auto">
          {/* Personal branding */}
          <div className="mb-8">
            <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-2 border-gray-700">
              <Image
                src="/image.jpg"
                width={96}
                height={96}
                alt="suhail khan"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl text-gray-300 font-light mb-2">
              Suhail Khan
            </h2>
            <p className="text-gray-500 text-sm">
              Full Stack Developer & UI/UX Designer
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            How would you like to view my portfolio?
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-12 font-light">
            Choose a view mode to continue
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={() => handleModeSelect("simple")}
              className={`px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 min-w-[120px] ${
                selectedMode === "simple"
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "bg-transparent text-gray-400 border border-gray-600 hover:bg-gray-800 hover:text-white"
              }`}
              variant={selectedMode === "simple" ? "default" : "outline"}
            >
              Simple
            </Button>

            <Button
              onClick={() => handleModeSelect("detailed")}
              className={`px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 min-w-[120px] ${
                selectedMode === "detailed"
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "bg-transparent text-gray-400 border border-gray-600 hover:bg-gray-800 hover:text-white"
              }`}
              variant={selectedMode === "detailed" ? "default" : "outline"}
            >
              Detailed
            </Button>
          </div>

          {/* Contact links */}
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:shaheer@example.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://github.com/shaheernaeem"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/shaheernaeem"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com/shaheernaeem"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none z-10" />
    </div>
  );
}
