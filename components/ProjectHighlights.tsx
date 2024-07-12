"use client";
import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { TypewriterEffect } from "./ui/TypewriterEffect";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const ProjectHighlights = () => {
  const words = [
    {
      text: "Leveraged",
    },
    {
      text: "Skills",
      className: "text-purple dark:text-purple",
    },
    {
      text: ".",
    },
    {
      text: "Delivered",
    },
    {
      text: "Results",
      className: "text-purple dark:text-purple",
    },
  ];
  return (
    <div id="projects">
      <TypewriterEffect words={words} className="mb-5" />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default ProjectHighlights;
