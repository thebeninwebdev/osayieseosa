"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import { products } from "@/data";

export function Project({title,description,img,link}:{
    title:string;
    description:string;
    img:string;
    link:string;
}) {
    return (
      <div className="h-[28rem] w-max flex items-center justify-center ">
        <PinContainer
          title={link}
          href={link}
        >
          <div className="flex basis-full flex-col p-1 tracking-tight text-slate-100/50 sm:basis-1/2 w-[25rem] h-[25rem]">
          <Image
                alt={title}
                src={img}
                height="1280"
                width="800"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl pb-10"
            
            />
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              {title}
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                {description}
              </span>
            </div>

          </div>
        </PinContainer>
      </div>
    );
  }

export function Projects() {
  return (
    <div className="flex flex-wrap w-full p-5 gap-20 justify-center">
     { products.map(
        ({title,des,img,link},index) => (
        <Project
            key={index}
            title={title}
            description={des}
            img={img}
            link={link}
        />
      ))}
    </div>
  );
}
