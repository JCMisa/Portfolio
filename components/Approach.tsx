"use client";

import React from "react";
import { EvervaultCard, Icon } from "./ui/EvervaultCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Approach() {
  useGSAP(() => {
    gsap.to("#skills", {
      opacity: 1,
      ease: "power2.inOut",
      duration: 4,
      scrollTrigger: {
        trigger: "#skills",
        scrub: 3.8,
      },
    });
  }, []);
  return (
    <div className="w-full py-20">
      <h1 className="heading opacity-0" id="skills">
        My <span className="text-purple"> Soft Skills </span>
      </h1>
      <section className="flex lg:flex-row flex-col sm:gap-9 lg:gap-3 mt-8">
        <div className="border border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative sm:h-[25rem] lg:h-[30rem]">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

          <EvervaultCard text="Communication" />

          <h2 className="text-white mt-4 text-sm font-light">
            Aside from writing code, I also clearly explain complex technical
            concepts to non-technical audiences. I actively listen to client
            needs and ensure everyone involved in the project is on the same
            page through open communication and collaboration.
          </h2>
          <p className="text-sm border font-light border-white/[0.2] rounded-full mt-4 text-white px-2 py-0.5">
            Effective Communication
          </p>
        </div>

        <div className="border  border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative sm:h-[25rem] lg:h-[30rem]">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

          <EvervaultCard text="Empathy" />

          <h2 className="text-white mt-4 text-sm font-light">
            I understand the importance of user experience. I can put myself in
            the user&apos;s shoes to design intuitive and user-friendly
            interfaces that are easy to navigate and fulfill their needs.
            I&apos;m always open to user feedback and willing to iterate on my
            designs to create the best possible user experience.
          </h2>
          <p className="text-sm border font-light border-white/[0.2] rounded-full mt-4 text-white px-2 py-0.5">
            Empathy & User-Centric Design
          </p>
        </div>

        <div className="border  border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative sm:h-[25rem] lg:h-[30rem]">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />

          <EvervaultCard text="Problem-Solving" />

          <h2 className="text-white  mt-4 text-sm font-light">
            I approach challenges with a calm and analytical mind. I can break
            down complex problems into smaller steps, think creatively to find
            innovative solutions, and adapt my approach when faced with
            unexpected hurdles or changes.
          </h2>
          <p className="text-sm border font-light border-white/[0.2] rounded-full mt-4  text-white px-2 py-0.5">
            Problem-Solving & Critical Thinking
          </p>
        </div>
      </section>
    </div>
  );
}
