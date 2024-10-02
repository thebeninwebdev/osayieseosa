"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ProjectsObject } from "@/types";

export function Project({title,description,img,link, iconLists}:ProjectsObject) {

    return (
      <div className="h-[28rem] w-full sm:w-96 flex items-center justify-center overflow-hidden">
        <PinContainer
          title={link}
          href={link}
        >
          <div className="flex basis-full flex-col p-1 tracking-tight text-slate-100/50 sm:basis-1/2 w-[80vw] h-[24rem] sm:w-[20rem]">
          <Image
            alt={title}
            src={img}
            height={1280}
            width={800}
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl pb-10"
          />
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {title}
          </h3>
          <div className="text-xs !m-0 !p-0 font-normal flex-1">
            <span className="text-slate-300 ">
              {description}
            </span>
          </div>
          <div className="flex justify-between">
          <div className="flex flex-wrap w-max justify-center">

          {
          iconLists.map((src:string,index) => (
              <Image 
                key={index} 
                src={src} 
                width={24} 
                height={24} 
                alt={src} 
                className="border-[1px] p-1 rounded-full"
              />
            ))
          }
          </div>
          <Link href={link} className="text-sm underline text-green-300">Check Live Site</Link>
          </div>

          </div>
        </PinContainer>
      </div>
    );
  }

export function Projects() {
  const t = useTranslations('Projects')
  const products = [
    // {
    //   id: 1,
    //   title: "Jatinz - Ecomerce App",
    //   des: t('jatinz'),
    //   img: "/images/thumbnails/jatinz.png",
    //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    //   link: "https://jatinz.com",
    // },

    {
      id: 1,
      title:"Norbile Foods - Online Restaurant",
      des: t('norbileFoods'),
      img: "/images/thumbnails/norbilefoods.png",
      iconLists: ["/re.svg", "/tail.svg"],
      link: "https://norbilefoods.vercel.app/",
    },

    {
      id: 2,
      title: "Lavic Medicals - health care app",
      des: t('lavic'),
      img: "/images/thumbnails/lavicmedicals.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
      link: "https://www.lavicmedicals.org/",
    },

    {
      id: 3,
      title: "Legit gemini exchange",
      des: t('gemini'),
      img: "/images/thumbnails/legitexchange.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
      link: "https://www.legitgeminiexchange.com/",
    },

  ];
  return (
    <div className="flex flex-wrap w-full p-5 gap-20 justify-center">
     { products.map(
        ({title,des,img,link, iconLists},index) => (
        <Project
          key={index}
          title={title}
          description={des as string}
          iconLists={iconLists}
          img={img}
          link={link}
        />
      ))}
    </div>
  );
}
