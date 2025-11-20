"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Mail,
  Linkedin,
  Twitter,
  MapPin,
  Calendar,
  Phone,
  Send,
} from "lucide-react";
import Link from "next/link";
import AnimatedBackButton from "@/components/ui/AnimateBackButton";
import Image from "next/image";
import { useEffect } from "react";

interface DetailedPortfolioProps {
  onBack: () => void;
}

export default function DetailedPortfolio({ onBack }: DetailedPortfolioProps) {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header with Animated Back Button */}
        <div className="fixed top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 z-50">
          <AnimatedBackButton onClick={onBack} />
        </div>

        {/* Top Section with Photo and Contact */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12 animate-slide-up">
          <div className="lg:col-span-3">
            <div className="flex items-start space-x-6 mb-8 group">
              <div className="w-24 h-24 rounded-lg overflow-hidden border-2 border-gray-700 flex-shrink-0 transition-all duration-300 group-hover:border-green-500 group-hover:shadow-lg group-hover:shadow-green-500/20 group-hover:scale-105">
                <Image
                  src="/img1.png"
                  alt="Shaheer Naeem - Full Stack Developer"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <div className="transition-all duration-300 group-hover:translate-x-2">
                <h1 className="text-4xl font-bold mb-2 transition-all duration-300 group-hover:text-green-400">
                  Suhail Khan
                </h1>
                <p className="text-xl text-gray-400 mb-4 transition-all duration-300 group-hover:text-gray-300">
                  Full Stack Developer & UI/UX Designer
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="flex items-center transition-all duration-300 hover:text-green-400 hover:scale-105">
                    <MapPin size={14} className="mr-1" />
                    Pakistan
                  </span>
                  <span className="flex items-center transition-all duration-300 hover:text-green-400 hover:scale-105">
                    <Calendar size={14} className="mr-1" />
                    Available for hire
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="bg-gray-900 border-gray-800 transition-all duration-300 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/10 hover:scale-105 hover:-translate-y-2">
              <CardContent className="p-4">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2 transition-all duration-300 hover:text-green-400 hover:translate-x-2">
                    <Mail
                      size={16}
                      className="text-gray-400 transition-colors duration-300"
                    />
                    <span className="text-white">sc3078@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2 transition-all duration-300 hover:text-green-400 hover:translate-x-2">
                    <Phone
                      size={16}
                      className="text-gray-400 transition-colors duration-300"
                    />
                    <span className="text-white">+92 3220472781</span>
                  </div>
                  <div className="flex space-x-2 pt-2">
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                    >
                      <Github size={16} />
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                    >
                      <Linkedin size={16} />
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-blue-500 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                    >
                      <Twitter size={16} />
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                    >
                      <Send size={16} />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* About Section */}
        <section className="mb-12 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-4 transition-all duration-300 hover:text-green-400 hover:translate-x-2">
            About
          </h2>
          <div className="bg-gray-900/30 p-6 rounded-lg border border-gray-800 transition-all duration-300 hover:border-green-500/50 hover:bg-gray-900/50 hover:shadow-lg hover:shadow-green-500/5">
            <p className="text-gray-300 leading-relaxed transition-all duration-300 hover:text-white">
              I am a passionate full-stack developer with over 3 years of
              experience in building modern web applications. I specialize in
              React, Next.js, Node.js, and have extensive experience with cloud
              technologies. I enjoy creating clean, efficient code and
              exceptional user experiences.
            </p>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="mb-12 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-6 transition-all duration-300 hover:text-green-400 hover:translate-x-2">
            Key Highlights
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-gray-900 border-gray-800 transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 hover:-translate-y-2 group">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-300">
                  50+
                </div>
                <div className="text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                  Projects
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800 transition-all duration-300 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20 hover:scale-105 hover:-translate-y-2 group">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-400 mb-1 transition-all duration-300 group-hover:scale-110 group-hover:text-green-300">
                  3+
                </div>
                <div className="text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                  Years Experience
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800 transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 hover:-translate-y-2 group">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1 transition-all duration-300 group-hover:scale-110 group-hover:text-purple-300">
                  100+
                </div>
                <div className="text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                  Happy Clients
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800 transition-all duration-300 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105 hover:-translate-y-2 group">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-orange-400 mb-1 transition-all duration-300 group-hover:scale-110 group-hover:text-orange-300">
                  24/7
                </div>
                <div className="text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                  Support
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-6 transition-all duration-300 hover:text-green-400 hover:translate-x-2">
            Experience
          </h2>
          <div className="space-y-6">
            <Card className="bg-gray-900 border-gray-800 transition-all duration-300 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/10 hover:scale-[1.02] hover:-translate-y-1 group">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="transition-all duration-300 group-hover:translate-x-2">
                    <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-green-400">
                      Senior Full Stack Developer
                    </h3>
                    <p className="text-blue-400 transition-colors duration-300 group-hover:text-blue-300">
                      TechCorp Solutions
                    </p>
                    <p className="text-gray-500 text-sm transition-colors duration-300 group-hover:text-gray-400">
                      2022 - Present • Remote
                    </p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-green-900 text-green-300 transition-all duration-300 group-hover:bg-green-800 group-hover:scale-105"
                  >
                    Current
                  </Badge>
                </div>
                <p className="text-gray-300 mb-3 transition-colors duration-300 group-hover:text-white">
                  Lead development of scalable web applications serving 100k+
                  users. Mentored junior developers and implemented CI/CD
                  pipelines.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-gray-600 text-gray-300 transition-all duration-300 hover:border-green-500 hover:text-green-400 hover:scale-105"
                  >
                    React
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-gray-600 text-gray-300 transition-all duration-300 hover:border-blue-500 hover:text-blue-400 hover:scale-105"
                  >
                    Next.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-gray-600 text-gray-300 transition-all duration-300 hover:border-yellow-500 hover:text-yellow-400 hover:scale-105"
                  >
                    Node.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-gray-600 text-gray-300 transition-all duration-300 hover:border-orange-500 hover:text-orange-400 hover:scale-105"
                  >
                    AWS
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 hover:scale-[1.02] hover:-translate-y-1 group">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="transition-all duration-300 group-hover:translate-x-2">
                    <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-blue-400">
                      Frontend Developer
                    </h3>
                    <p className="text-blue-400 transition-colors duration-300 group-hover:text-blue-300">
                      StartupXYZ
                    </p>
                    <p className="text-gray-500 text-sm transition-colors duration-300 group-hover:text-gray-400">
                      2021 - 2022 • San Francisco, CA
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 mb-3 transition-colors duration-300 group-hover:text-white">
                  Built responsive web applications using React and TypeScript.
                  Collaborated with design team to implement pixel-perfect UIs.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-gray-600 text-gray-300 transition-all duration-300 hover:border-green-500 hover:text-green-400 hover:scale-105"
                  >
                    React
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-gray-600 text-gray-300 transition-all duration-300 hover:border-blue-500 hover:text-blue-400 hover:scale-105"
                  >
                    TypeScript
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-gray-600 text-gray-300 transition-all duration-300 hover:border-pink-500 hover:text-pink-400 hover:scale-105"
                  >
                    SASS
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-12 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-6 transition-all duration-300 hover:text-green-400 hover:translate-x-2">
            Work Experience
          </h2>
          <div className="space-y-4">
            <div className="border-l-2 border-gray-700 pl-4 transition-all duration-300 hover:border-green-500 hover:translate-x-2 hover:shadow-lg hover:shadow-green-500/5 group">
              <h3 className="font-semibold transition-colors duration-300 group-hover:text-green-400">
                Lead Developer - E-commerce Platform
              </h3>
              <p className="text-gray-400 text-sm mb-2 transition-colors duration-300 group-hover:text-gray-300">
                2023 - Present
              </p>
              <p className="text-gray-300 text-sm transition-colors duration-300 group-hover:text-white">
                Leading a team of 5 developers in building a modern e-commerce
                platform with advanced features.
              </p>
            </div>
            <div className="border-l-2 border-gray-700 pl-4 transition-all duration-300 hover:border-blue-500 hover:translate-x-2 hover:shadow-lg hover:shadow-blue-500/5 group">
              <h3 className="font-semibold transition-colors duration-300 group-hover:text-blue-400">
                Full Stack Developer - SaaS Application
              </h3>
              <p className="text-gray-400 text-sm mb-2 transition-colors duration-300 group-hover:text-gray-300">
                2022 - 2023
              </p>
              <p className="text-gray-300 text-sm transition-colors duration-300 group-hover:text-white">
                Developed and maintained a SaaS application serving over 10,000
                active users.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-6 transition-all duration-300 hover:text-green-400 hover:translate-x-2">
            Education
          </h2>
          <Card className="bg-gray-900 border-gray-800 transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 hover:scale-[1.02] hover:-translate-y-1 group">
            <CardContent className="p-6">
              <div className="transition-all duration-300 group-hover:translate-x-2">
                <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-purple-400">
                  Entermidiate
                </h3>
                <p className="text-blue-400 mb-1 transition-colors duration-300 group-hover:text-blue-300">
                  Mehran degree college
                </p>
                <p className="text-gray-500 text-sm transition-colors duration-300 group-hover:text-gray-400">
                  2018 - 2022 • karachi, Pakistan
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Skills */}
        <section className="mb-12 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-6 transition-all duration-300 hover:text-green-400 hover:translate-x-2">
            Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gray-900 border-gray-800 transition-all duration-300 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/10 hover:scale-105 hover:-translate-y-2 group">
              <CardHeader>
                <CardTitle className="text-lg transition-colors duration-300 group-hover:text-green-400">
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "Vue.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "SASS",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-gray-800 text-gray-300 text-xs transition-all duration-300 hover:bg-green-900 hover:text-green-300 hover:scale-110 hover:-translate-y-1 cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 hover:scale-105 hover:-translate-y-2 group">
              <CardHeader>
                <CardTitle className="text-lg transition-colors duration-300 group-hover:text-blue-400">
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Node.js",
                    "Python",
                    "Express",
                    "FastAPI",
                    "PostgreSQL",
                    "MongoDB",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-gray-800 text-gray-300 text-xs transition-all duration-300 hover:bg-blue-900 hover:text-blue-300 hover:scale-110 hover:-translate-y-1 cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 hover:scale-105 hover:-translate-y-2 group">
              <CardHeader>
                <CardTitle className="text-lg transition-colors duration-300 group-hover:text-purple-400">
                  DevOps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["AWS", "Docker", "Kubernetes", "CI/CD", "Git", "Linux"].map(
                    (skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-gray-800 text-gray-300 text-xs transition-all duration-300 hover:bg-purple-900 hover:text-purple-300 hover:scale-110 hover:-translate-y-1 cursor-pointer"
                      >
                        {skill}
                      </Badge>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-6 transition-all duration-300 hover:text-green-400 hover:translate-x-2">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "E-Commerce Platform",
                description:
                  "Modern e-commerce solution with payment processing",
                tech: ["Next.js", "Stripe", "PostgreSQL"],
                github: "#",
                demo: "/",
                color: "green",
              },
              {
                title: "Task Management App",
                description:
                  "Collaborative task management with real-time updates",
                tech: ["React", "Node.js", "Socket.io"],
                github: "#",
                demo: "#",
                color: "blue",
              },
              {
                title: "Analytics Dashboard",
                description: "Advanced analytics platform with ML insights",
                tech: ["Python", "FastAPI", "React"],
                github: "#",
                demo: "#",
                color: "purple",
              },
              {
                title: "Social Media App",
                description: "Full-featured social media platform",
                tech: ["React Native", "Node.js", "MongoDB"],
                github: "#",
                demo: "#",
                color: "pink",
              },
              {
                title: "Learning Management System",
                description: "Complete LMS with video streaming",
                tech: ["Next.js", "AWS", "PostgreSQL"],
                github: "#",
                demo: "#",
                color: "orange",
              },
              {
                title: "Crypto Trading Bot",
                description: "Automated trading bot with ML algorithms",
                tech: ["Python", "TensorFlow", "APIs"],
                github: "#",
                demo: "#",
                color: "yellow",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className={`bg-gray-900 border-gray-800 transition-all duration-300 hover:border-${project.color}-500 hover:shadow-lg hover:shadow-${project.color}-500/20 hover:scale-105 hover:-translate-y-2 group cursor-pointer`}
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3
                      className={`font-semibold text-white transition-colors duration-300 group-hover:text-${project.color}-400`}
                    >
                      {project.title}
                    </h3>
                    <div className="flex space-x-2">
                      <a
                        href={project.github}
                        className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                      >
                        <Github size={16} />
                      </a>
                      <a
                        href={project.demo}
                        className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-3 transition-colors duration-300 group-hover:text-gray-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-gray-600 text-gray-300 text-xs transition-all duration-300 hover:border-gray-500 hover:scale-105 hover:-translate-y-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
