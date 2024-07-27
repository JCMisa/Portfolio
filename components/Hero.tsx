"use client";

// import { FaLocationArrow } from "react-icons/fa6";

// import MagicButton from "./MagicButton";
import { FaDownload } from "react-icons/fa";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import ShimmerButton from "./ui/ShimmerButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { TextRevealCard } from "./ui/TextRevealCard";
import { downloadResume } from "../data/index";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    if (!copied) {
      downloadResume(); // download the resume
    }
    setCopied((prev) => !prev);
  };

  return (
    <div className="pb-20 pt-36" id="hero">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}

      <div className="h-[40rem] w-full rounded-md bg-transparent flex flex-col items-center justify-center antialiased absolute top-0 left-0">
        <div className="max-w-2xl mx-auto p-4"></div>
        <BackgroundBeams />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Unveil and Explore my Portfolio
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Where Creativity Meets Strategy"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <div className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            {/* <TextRevealCard
              text="Hi! I'm John Carlo"
              revealText="Your Developer "
              className="flex text-center align-middle items-center justify-center"
            /> */}
            <h2 className="text-white font-bold">
              Hi! I&apos;m{" "}
              <span className="colored-text">John Carlo S. Misa</span>
            </h2>
          </div>

          <div className="mt-5 relative">
            <div
              className={`absolute -bottom-5 left-0 ${
                copied ? "block" : "hidden"
              }`}
            >
              <Lottie options={defaultOptions} height={200} width={400} />
            </div>

            <div
              className={`absolute -bottom-5 right-0 ${
                copied ? "block" : "hidden"
              }`}
            >
              <Lottie options={defaultOptions} height={200} width={400} />
            </div>
          </div>

          {/* <ShimmerButton
              title="Download Resume"
              icon={<FaDownload />}
              position="left"
              otherClasses="hover:scale-[0.9] transition-all"
            /> */}
          <MagicButton
            title={copied ? "Resume Downloaded!" : "Download Resume"}
            icon={<FaDownload />}
            position="left"
            handleClick={handleCopy}
            otherClasses="!bg-[#161A31]"
          />

          {/* <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
