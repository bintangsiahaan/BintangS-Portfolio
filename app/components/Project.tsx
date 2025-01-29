"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Definisi type untuk project
interface Project {
  title: string;
  description: string;
  images: string[];
  github: string;
}

const projects: Project[] = [
  {
    title: "QuakeRangers!",
    description: "An educational website for children under 12 to raise awareness about earthquakes, featuring interactive courses and quizzes on earthquake science and preparedness.",
    images: ["/quake1.png", "/quake2.png", "/quake3.png", "/quake4.png", "/quake5.png", "/quake6.png", "/quake7.png", "/quake8.png", "/quake9.png", "/quake10.png", "/quake11.png", "/quake12.png", "/quake13.png", "/quake14.png"],
    github: "https://github.com/rizkyAlya/QuakeRangers"
  },
  {
    title: "YourVerse",
    description: "A personalized platform where you can express your mood, organize your schedule, and share your favorite music, photos, and quotes, all in one place.",
    images: ["/bintang1.png", "/bintang2.png", "/bintang3.png", "/bintang4.png", "/bintang5.png", "/bintang6.png", "/bintang7.png", "/bintang8.png", "/bintang9.png", "/bintang10.png", "/bintang11.png"],
    github: "https://github.com/bintangsiahaan/YourVerse"
  },
  {
    title: "Retroactive",
    description: "An online shopping website for unique retro items, primarily music-related products like CDs, vinyl, and cassettes.",
    images: ["/retro1.png", "/retro2.png", "/retro3.png", "/retro4.png", "/retro5.png", "/retro6.png", "/retro7.png", "/retro8.png", "/retro9.png", "/retro10.png", "/retro11.png", "/retro12.png"],
    github: "https://github.com/SistemBasisData2024/Retroactive-SBD"
  },
  {
    title: "Hotel Booking System",
    description: "A VHDL-based system that enables hotel room reservations, calculating the payment based on room type, number of guests, and duration of stay.",
    images: ["/hotel1.png", "/hotel2.png", "/hotel3.png"],
    github: "https://github.com/auli-aziz/Hotel-Booking-System"
  },
  {
    title: "Automated Plant Watering",
    description: "An assembly program that automatically waters plants using a timer to prevent water wastage.",
    images: ["/plant1.png", "/plant2.png"],
    github: "https://github.com/christopherSuts/Automated-Plant-Watering"
  },
  {
    title: "Air Quality and Machine Safety Monitoring",
    description: "An IoT system that monitors air quality in factories with an MQ-135 sensor and controls machinery safety based on gas levels and proximity to employees.",
    images: ["/air1.png", "/air2.png", "/air3.png", "/air4.png", "/air5.png"],
    github: "https://github.com/bintangsiahaan/air-quality-and-machine-safety-monitoring"
  },
  {
    title: "JBus",
    description: "An Android application developed in Java, designed to facilitate bus bookings and rentals, offering users a seamless and efficient way to manage their transportation needs.",
    images: ["/jbus1.png", "/jbus2.png", "/jbus3.png", "/jbus4.png"],
    github: "https://github.com/bintangsiahaan/JBus"
  }
];

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  github: string;
  onClick: () => void;
}

const ProjectCard = ({ title, description, images, github, onClick }: ProjectCardProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, images.length]);

  return (
    <motion.div 
      className="bg-gray-800 p-4 rounded-lg shadow-lg text-white relative cursor-pointer hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.05 }} // Efek hover dengan Framer Motion
    >
      <div className="relative w-full h-48 overflow-hidden">
        <Image 
          src={images[currentImage]} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-lg"
        />
      </div>
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-sm text-gray-300 mt-2">{description}</p>
    </motion.div>
  );
};

interface ModalProps {
  project: Project;
  onClose: () => void;
}

const Modal = ({ project, onClose }: ModalProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-gray-900 p-6 rounded-lg text-white max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="relative w-full h-60">
          <Image 
            src={project.images[currentImage]} 
            alt={project.title} 
            layout="fill" 
            objectFit="contain"
          />
        </div>
        <div className="flex justify-between mt-4">
          <button 
            className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={prevImage}
          >
            Prev
          </button>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            View on GitHub
          </a>
          <button 
            className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={nextImage}
          >
            Next
          </button>
        </div>
        <button 
          className="absolute top-2 right-2 text-white text-xl"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-10 px-6 bg-dark">
      <h2 className="text-3xl font-bold text-white text-center mb-6">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} onClick={() => setSelectedProject(project)} />
        ))}
      </div>

      {selectedProject && <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
};

export default Projects;
