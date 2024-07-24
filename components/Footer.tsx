/* eslint-disable @next/next/no-img-element */
"use client";
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Footer = () => {
  useGSAP(() => {
    gsap.to("#footer-head", {
      opacity: 1,
      ease: "power2.inOut",
      duration: 4,
      scrollTrigger: {
        trigger: "#footer-head",
        scrub: 3.8,
      },
    });
  }, []);
  return (
    <footer className="w-full pt-20 mb-[80px]" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1
          className="heading lg:max-w-[45vw] opacity-0 text-white"
          id="footer-head"
        >
          Ready to turn your <span className="text-purple">ideas</span> into{" "}
          <span className="text-purple">reality</span>?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Don&apos;t wait! Get in touch today and see how I can help you🤗
        </p>
        <a href="mailto:johncarlomisa399@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 JC Misa
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-5">
          {socialMedia.map((info) => (
            <a href={info.link} target="_blank" key={info.id}>
              <span className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <img src={info.img} alt="icons" width={20} height={20} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
