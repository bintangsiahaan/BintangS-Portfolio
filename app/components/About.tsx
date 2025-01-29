"use client";
import { motion } from "framer-motion";
import { slideIn } from "../styles/animations";

const AboutMe = () => (
  <section id="about" className="sectionReverse bg-dark flex flex-col md:flex-row justify-between">
    {/* Bagian Kiri */}
    <motion.div
      className="sectionInfo flex flex-col justify-center w-full md:w-1/2"
      variants={slideIn("right", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h3 
        className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-2xl font-extrabold mb-2 uppercase tracking-wide">
        Who am I?
      </h3>
      <h2 className="text-white text-[28px] sm:text-[32px] md:text-[36px] max-w-[470px] leading-[1.2] font-semibold">
        I'm Bintang Siahaan, a passionate Web Developer
      </h2>
      <p className="paragraph text-dimWhite mt-4 max-w-[470px]">
      I'm a Computer Engineering student at the University of Indonesia with a strong passion for
 technology and innovation. I specialize in programming, system design, and problem-solving, with
 experience in web development, mobile applications, and IoT projects. I believe that technology is
 not just a tool but a bridge to create meaningful change and inspire progress.
      </p>
      <div className="grid grid-cols-2 gap-4 mt-6 text-dimWhite">
        <div>
          <p className="font-bold">Name:</p>
          <p>Bintang Siahaan</p>
        </div>
        <div>
          <p className="font-bold">From:</p>
          <p>Depok, Indonesia</p>
        </div>
        <div>
          <p className="font-bold">Age:</p>
          <p>20</p>
        </div>
        <div>
          <p className="font-bold">Email:</p>
          <p>bintang.siahaan21@ui.ac.id</p>
        </div>
      </div>
      <a 
        href="/CV_BintangSiahaan.pdf" 
        download
        className="bg-green-500 text-white px-6 py-3 rounded-md mt-6 hover:bg-green-600 transition-all"
      >
        Download CV
      </a>
    </motion.div>
    
    {/* Bagian Kanan: Hard Skills & Soft Skills */}
    <div className="w-full md:w-1/2 flex flex-col gap-6 mt-10 md:mt-0">
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-white text-lg font-semibold mb-2">Hard Skills</h3>
        <ul className="text-dimWhite list-disc list-inside">
          <li>React.js & Next.js</li>
          <li>Tailwind CSS</li>
          <li>JavaScript & TypeScript</li>
          <li>Node.js & Express.js</li>
          <li>Database (PostgreSQL, MongoDB)</li>
          <li>UI/UX Design (Figma)</li>
        </ul>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-white text-lg font-semibold mb-2">Soft Skills</h3>
        <ul className="text-dimWhite list-disc list-inside">
          <li>Communication</li>
          <li>Teamwork</li>
          <li>Problem-solving</li>
          <li>Adaptability</li>
          <li>Critical Thinking</li>
        </ul>
      </div>
    </div>
  </section>
);

export default AboutMe;
