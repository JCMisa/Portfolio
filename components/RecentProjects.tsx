/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3dCard";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { FaGithub } from "react-icons/fa";
// import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  const [des, setDes] = useState(false);
  const showDes = () => {
    setDes((prevState) => !prevState);
  };

  return (
    <div className="py-20 container mx-auto flex flex-col items-center justify-center">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center justify-center p-4 lg:gap-x-60 lg:gap-y-32 sm:gap-y-32 mt-12">
        {projects.map((item) => (
          <div
            className="sm:h-[41rem] sm-[570px] lg:min-h-[32.5rem] lg:h-[32rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <CardContainer className="inter-var">
              <CardBody className="relative group/card sm:w-[570px]  dark:hover:shadow-2xl dark:hover:shadow-pink-600/[0.1] dark:bg-[#13162d] dark:border-purple/[1] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-purple"
                >
                  {item.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {item.des.slice(0, 85)}{" "}
                  <span className={`${des ? "" : "hidden"}`}>
                    {item.des.slice(86, item.des.length)}
                  </span>{" "}
                  <span onClick={showDes} className="cursor-pointer underline">
                    {des ? "show less" : "show more"}
                  </span>
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={item.img}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-10">
                  {item.iconLists.map((icon) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full"
                    >
                      <img
                        src={icon}
                        alt={icon}
                        className="p-2 w-14 h-14 rounded-full"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={50}
                    as={Link}
                    href={item.github}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white flex flex-row gap-2 cursor-pointer hover:scale-[1.10] hover:shadow-pink-600/[0.1]"
                  >
                    Github <FaGithub />
                  </CardItem>
                  <CardItem
                    translateZ={50}
                    as={Link}
                    href={item.live}
                    target="_blank"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold cursor-pointer hover:scale-[1.10] hover:shadow-pink-600/[1.3] flex gap-2 justify-center items-center"
                  >
                    Visit Live <FaLocationArrow />
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
