/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
// import { TestimonialForm } from "./TestemonialForm";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20 w-full">
      <h1 className="heading">
        Testimonials from
        <span className="text-purple"> satisfied clients</span>
      </h1>

      <div className="flex md:flex-row sm:flex-col items-center max-lg:mt-10">
        {/* <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 w-[80rem]">
          <TestimonialForm />
        </div> */}

        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
