"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ProjectsObject } from "@/types";
import dynamic from "next/dynamic"

const PinContainer = dynamic(() => import("./ui/3d-pin").then((mod) => mod.PinContainer),{ssr:false});

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
          <div
          className="text-sm underline text-green-300">Check Live Site</div>
          </div>
          </div>
        </PinContainer>
      </div>
    );
  }

export function Projects() {
  const t = useTranslations('Projects')
  const products = [
    {
      id: 2,
      title: "SBP Hotel - Hotel booking website",
      des: t('sbp'),
      img: "/images/thumbnails/sbphotel.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
      link: "https://sbphotel.com/",
    },
    {
      id: 3,
      title: "Esefabrics - Clothing brand",
      des: t('esefabrics'),
      img: "/images/thumbnails/esefabrics.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
      link: "https://esefabrics.vercel.app/",
    },
    {
      id: 1,
      title:"Norbile Foods - Online Restaurant",
      des: t('norbileFoods'),
      img: "/images/thumbnails/norbilefoods.png",
      iconLists: ["/re.svg", "/tail.svg"],
      link: "https://norbilefoods.vercel.app/",
    }
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
