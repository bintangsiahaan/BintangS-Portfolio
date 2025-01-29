"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn } from "../styles/animations";
import profilePicture from "../../public/profile.png"; 

const Hero = () => {
  return (
    <section id="home" className="flex md:flex-row flex-col paddingY">
      {/* Bagian Kiri (Teks dan Informasi Pribadi) */}
      <motion.div
        className="flex-1 flexStart flex-col xl:px-0 paddingX"
        variants={slideIn("left", "tween", 0.2, 1.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-[10px] mb-2">
          <p className="paragraph ml-2 text-white">
            Welcome to My Portfolio!
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[48px] text-[40px] text-white ss:leading-[60px] leading-[50px]">
            Hello, I’m <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Bintang Siahaan</span>{" "}
          </h1>
        </div>

        <p className="paragraph max-w-[470px] mt-5 text-gray-400">
        I specialize in building responsive, user-friendly websites and crafting efficient server-side systems to ensure seamless performance. Let’s collaborate to turn your ideas into stunning and functional web experiences.
        </p>
        <div className="flex mt-5">
          <a
            href="#projects"
            className="bg-blue-500 text-white px-6 py-2 rounded-full mr-4 hover:bg-blue-600"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-800"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Bagian Kanan (Foto atau Ilustrasi) */}
      <motion.div
        className="flex-1 flexCenter md:my-0 my-10 relative"
        variants={slideIn("right", "tween", 0.2, 1.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Image
          src={profilePicture}
          alt="profile"
          width={300}
          height={300}
          className="rounded-full border-4 border-blue-500 shadow-lg object-cover aspect-square"
          style={{ objectPosition: "center top" }}
          priority={true}
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </motion.div>
    </section>
  );
};

export default Hero;
