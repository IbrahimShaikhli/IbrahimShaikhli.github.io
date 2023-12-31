"use client";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaFileDownload } from "react-icons/fa";
import Image from "next/image";
import ProjectCard from "./projectCard";
import Navbar from "./NavBar";

export default function Home() {
  const projectData = [
    {
      title: "Souq Artisan",
      description: "I developed a mobile application called Souq Artisan. This platform is designed to support local artisans by providing them with a space to sell their handcrafted products.",
      thumbnailSrc: "/demo.png",
      githubLink: "https://github.com/IbrahimShaikhli/Souq-Artisan",
    },
    {

      title: "Property Pulse",
      description: "Real estate mobile application that allows users to search for properties and view their details. Users can also save properties to their favorites and view them later.",
      thumbnailSrc: "/propertypulsework.jpg",
      githubLink: "https://github.com/IbrahimShaikhli/propertypulse",
    },
    {

      title: "Coming soon",
      description: "Coming soon",
      thumbnailSrc: "/comingsoon.png",
      githubLink: "",
    },
  ];

 
  return (
    <div>
      <head>
        <title>Ibrahim Khalid</title>
        <link rel="icon" href="/i-logo.png" />
      </head>
      <main className="bg-black text-white px-4">
      <Navbar />


        <section id="about" className="min-h-screen py-20 text-white relative">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/background-image.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div
            className="absolute inset-0 z-0 bg-gradient-to-b from-purple-500 to-transparent"
            style={{
              mixBlendMode: "multiply",
            }}
          />

          <div className="text-center max-w-3xl mx-auto relative z-10">
            <div className="relative mx-auto bg-gradient-to-b text-teal-600 rounded-full w-80 h-80 mt-20 overflow-hidden">
              <Image
                src="/dev-ed-wave.png"
                alt="Dev Ed Wave"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="text-5xl py-2 text-purple-300 font-semibold">Ibrahim AlShaikhli</h2>
            <h3 className="text-2xl py-2">Software Engineer and Flutter Developer</h3>
            <p className="text-lg py-5 leading-7">
              Hey there! I&apos;m Ibrahim, a software engineer with a captivating blend of passions. By day, I&apos;m immersed in Flutter development, crafting mobile apps that elegantly combine imagination and functionality. When I&apos;m not coding, you&apos;ll find me at the gym!

            </p>
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl py-1 font-semibold">My Work</h3>
            <h3 className="text-lg py-2 leading-7">
              Projects.
            </h3>


            <div className="flex flex-wrap justify-start gap-4">
              {projectData.map((project, index) => (
                <ProjectCard className="project-card"
                  key={index}
                  index={index}
                  title={project.title}
                  description={project.description}
                  thumbnailSrc={project.thumbnailSrc}
                  githubLink={project.githubLink}
                />
              ))}
            </div>
          </div>
        </section>


        <section id="contact" className="bg-gray-900 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl py-1 font-semibold">Contact</h3>
            <p className="text-lg py-2 leading-7">
              Feel free to reach out for any inquiries.
            </p>
          </div>
          <div className="text-4xl flex justify-center gap-6 py-3 text-gray-300 transform hover:scale-110 transition-transform">
            <a href="https://www.linkedin.com/in/ibrahim-khalid-8b5692176/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin className="hover:text-purple-300" />
            </a>
            <a href="https://github.com/IbrahimShaikhli/" target="_blank" rel="noopener noreferrer">
              <AiFillGithub className="hover:text-purple-300" />
            </a>
            <a
              href="/cv.pdf"
              download="cv.pdf"
              className="bg-gray-200 border border-gray-300 rounded-md py-0.5 px-1.5 flex items-center text-sm text-gray-600 hover:bg-purple-100 hover:border-purple-300 hover:text-purple-500"
            >
              <span className="mr-1">My Resume</span>
              <FaFileDownload size={16} />
            </a>


          </div>
        </section>
      </main>
    </div>
  );
}
