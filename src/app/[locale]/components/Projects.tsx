"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import { products } from "@/data";
import Link from "next/link";

export function Project({title,description,img,link, iconLists}:{
    title:string;
    description:string;
    img:string;
    link:string;
    iconLists:string[];
}) {
    return (
      <div className="h-[28rem] w-max flex items-center justify-center">
        <PinContainer
          title={link}
          href={link}
        >
          <div className="flex basis-full flex-col p-1 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[24rem]">
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
          <div className="text-sm !m-0 !p-0 font-normal flex-1">
            <span className="text-slate-300 ">
              {description}
            </span>
          </div>
          <div className="flex justify-between">
          <div className="flex flex-wrap w-max justify-center">
            {iconLists.map((src:string) => (
              <Image src={src} width={24} height={24} alt={src} className="border-[1px] p-1 rounded-full"/>
            ))}
          </div>
          <Link href={link} className="text-sm underline text-green-300">Check Live Site</Link>
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
        ({title,des,img,link, iconLists},index) => (
        <Project
            key={index}
            title={title}
            description={des}
            iconLists={iconLists}
            img={img}
            link={link}
        />
      ))}
    </div>
  );
}
