'use client';

import React, { useState, useEffect } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Anchor from "./Anchor";
import {IconTimeline,IconArticle, IconBrandInstagram,IconBrandWhatsapp,IconPhone, IconHome2} from "@tabler/icons-react"
import { useTranslations } from "next-intl";
import LangSwitcher from "./LangSwitcher";

export function SidebarDemo({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false);
  const t = useTranslations('NavbarItems')
  const [date, setDate] = useState(new Date());
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])

const navItems = [
    { 
      name: "+234 915 527 6978", 
      link: "tel:+2349155276978",
    },
    { 
      name: "hello@mreseosa.com", 
      link: "mailto:hello@mreseosa.com",
    },
    { 
      name: t('home'), 
      link: "/",
      icon:(<IconHome2 className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />) 
    },
    { 
      name: t('projects'), 
      link: "/projects",
      icon:(<IconTimeline className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />) 
    },
    // { 
    //   name: t('animations'), 
    //   link: "/animations",
    //   icon:(<IconKeyframes className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />)
    // },
    { 
      name: t('blogs'), 
      link: "https://blog.mreseosa.com",
      icon:(<IconArticle className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />)
    },
    // {
    //   name: t('courses'), 
    //   link: "/courses",
    //   icon:(<IconCertificate className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />)
    // },
    {
      name: "Social media", 
      links: [
      {
        name:"Instagram", 
        link: "https://www.instagram.com/thebeninwebdesigner/",
        icon:(<IconBrandInstagram className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />)
      },
      {
        name:"WhatsApp", 
        link:"https://wa.link/a2ssmy",
        icon:(<IconBrandWhatsapp className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />)
      },
      {
        name:"Tel", 
        link:"tel:+2349155276978",
        icon:(<IconPhone className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />)
      }
    ]}
  ];
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row bg-gray-100 dark:bg-black w-full flex-1 max-w-8xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <><Logo /></>
            <div 
              className="mt-8 flex flex-col gap-2">
              {navItems.map((item, idx) => {
                if(item.name === "Social media") return
                return(
                  <SidebarLink key={idx} link={item} />
                )
                
              })}
            </div>

          </div> 
          <div className="flex justify-between">
  <span className="text-neutral-200 text-xs bg-[#b19832] p-1">{date.toLocaleTimeString()}</span>
  <LangSwitcher/>
  </div>
          <div className="flex gap-3 w-full justify-evenly text-xs flex-wrap">
              {navItems.find((item) => item.name === "Social media")?.links?.map((item, idx) => (
                <Anchor href={item.link} icon={item.icon} key={idx} className="w-max underline"/>
              ))}

            </div>
        </SidebarBody>
      </Sidebar>
      {children}
    </div>
  );
}
export const Logo = () => {
  return (
    <div className="font-normal flex space-x-2 items-center w-max py-1 relative z-20">
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Link href='/' className="w-max">
          <Image
            src="/images/mreseosa-logo.png"
            className="w-44 flex-shrink-0"
            width={300}
            height={150}
            alt="mreseosa logo"
          />
        </Link>
      </motion.span>
    </div>
  );
};
