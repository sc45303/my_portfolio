"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Send,
  MessageCircle,
  Youtube,
  Facebook,
} from "lucide-react";

import ProfileCard from "@/components/ProfileCard/ProfileCard"; // or wherever your ProfileCard is located
import { useRouter } from "next/navigation"; // ✅ Correct for App Router

interface SimplePortfolioProps {
  onBack: () => void;
}

export default function SimplePortfolio({ onBack }: SimplePortfolioProps) {
  const router = useRouter(); // ✅ Define router using useRouter hook

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Enhanced Animated Back button */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 z-20">
        <button
          onClick={onBack}
          className="group relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 overflow-hidden outline-none bg-transparent cursor-pointer border-0 transition-all duration-500"
        >
          {/* First border circle */}
          <div className="absolute inset-2 rounded-full border-2 border-gray-400 transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] delay-[80ms] group-hover:opacity-0 group-hover:scale-75 group-focus:opacity-0 group-focus:scale-75" />

          {/* Second border circle (hover state) */}
          <div className="absolute inset-2 rounded-full border-4 border-green-500 scale-130 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:opacity-100 group-hover:scale-100 group-focus:opacity-100 group-focus:scale-100" />

          {/* Button content container */}
          <div className="flex absolute top-0 left-0 transition-transform duration-400 ease-out group-hover:-translate-x-12 sm:group-hover:-translate-x-16 group-focus:-translate-x-12 sm:group-focus:-translate-x-16">
            {/* First arrow icon */}
            <span className="block w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mt-3.5 ml-3.5 sm:mt-5 sm:ml-5 md:mt-6 md:ml-6 lg:mt-8 lg:ml-8 rotate-0">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  fill="white"
                  d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                />
              </svg>
            </span>

            {/* Second arrow icon */}
            <span className="block w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mt-3.5 ml-2.5 sm:mt-5 sm:ml-4 md:mt-6 md:ml-5 lg:mt-8 lg:ml-6 rotate-0">
              <svg
                fill="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
              </svg>
            </span>
          </div>
        </button>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Suhail Ali
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 font-light">
                I build & develop modern web applications
              </p>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl">
                I build full-stack web applications and teach others to do the
                same. Currently working with React, Next.js, and Node.js while
                managing multiple projects and contributing to the developer
                community.
              </p>

              <div className="flex items-center text-gray-500 mb-8 sm:mb-12 text-sm sm:text-base">
                <MapPin size={16} className="mr-2 flex-shrink-0" />
                <span>Based in Pakistan 🇵🇰</span>
              </div>

              {/* Social links */}
              <div className="flex flex-wrap gap-4 sm:gap-6 mb-12 sm:mb-16">
                <a
                  href="mailto:sc3078745@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300 p-2"
                  aria-label="Email"
                >
                  <Mail size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://t.me/shaheernaeem"
                  className="text-gray-400 hover:text-white transition-colors duration-300 p-2"
                  aria-label="Telegram"
                >
                  <Send size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/shaheernaeem"
                  className="text-gray-400 hover:text-white transition-colors duration-300 p-2"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://twitter.com/shaheernaeem"
                  className="text-gray-400 hover:text-white transition-colors duration-300 p-2"
                  aria-label="Twitter"
                >
                  <Twitter size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://discord.gg/shaheer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 p-2"
                  aria-label="Discord"
                >
                  <MessageCircle size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://github.com/shaheernaeem"
                  className="text-gray-400 hover:text-white transition-colors duration-300 p-2"
                  aria-label="GitHub"
                >
                  <Github size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://youtube.com/@shaheernaeem"
                  className="text-gray-400 hover:text-white transition-colors duration-300 p-2"
                  aria-label="YouTube"
                >
                  <Youtube size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://facebook.com/shaheernaeem"
                  className="text-gray-400 hover:text-white transition-colors duration-300 p-2"
                  aria-label="Facebook"
                >
                  <Facebook size={20} className="sm:w-6 sm:h-6" />
                </a>
              </div>

              {/* View mode buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button className="px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-medium rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-all duration-300">
                  Simple
                </Button>
                <Button
                  onClick={() => window.location.reload()}
                  className="px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-medium rounded-full bg-transparent text-gray-400 border border-gray-600 hover:bg-gray-800 hover:text-white transition-all duration-300"
                  variant="outline"
                >
                  Detailed
                </Button>
              </div>
            </div>

            {/* Right side - Profile Card */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <ProfileCard
                  name="Suhail Ali"
                  title="Software Engineer"
                  handle="suhailali"
                  status="Online"
                  contactText="Contact Me"
                  avatarUrl="/img1.png"
                  showUserInfo={true}
                  enableTilt={true}
                  onContactClick={() => {
                    router.push("/contact"); // ✅ Navigate to contact page
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
