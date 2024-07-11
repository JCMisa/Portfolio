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
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: ".",
    },
    {
      text: "Delivered",
    },
    {
      text: "Results",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <>
      <TypewriterEffect words={words} className="mb-5" />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </>
  );
};

export default ProjectHighlights;
