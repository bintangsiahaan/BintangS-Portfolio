import { logo } from "../../public";
import { footerLinks, socialMedia } from "../constants";
import Image from "next/image";

const Footer = () => (
  <section id="contact" className="flexCenter paddingY flex-col">
    <div className="flexStart md:flex-row flex-col mb-8 w-full">
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <h2 className="text-white text-2xl font-bold">Stay Connected</h2>
        <p className="paragraph mt-4 max-w-[312px]">
          Follow me on social media and stay updated with the latest projects and insights.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h1 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h1>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary transition-colors delay-150 cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2025 Bintang Siahaan. All Rights Reserved.
      </p>
    </div>
  </section>
);

export default Footer;
