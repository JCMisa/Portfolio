"use client";

import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

type GsapProps = {
  scale: number;
  opacity: number;
  ease: string;
};

const Grid = () => {
  useGSAP(() => {
    gsap.to("#about", {
      scale: 1,
      ease: "power2.inOut",
      duration: 6,
      scrollTrigger: {
        trigger: "#about",
        scrub: 3.8,
      },
    });
  }, []);

  return (
    <section id="about" className="scale-[0.7]">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            video={item.video}
            vidClassName={item.vidClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
