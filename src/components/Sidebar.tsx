"use client";

import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import { navItems } from "@/data";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Anchor from "./Anchor";


export function SidebarDemo({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row bg-gray-100 dark:bg-black w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
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
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-slate-200 py-1 relative z-20"
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
      <Image
        src="/images/logo.png"
        className="h-7 w-32 flex-shrink-0 rounded-full"
        width={86}
        height={425}
        alt="Avatar"
    />
      </motion.span>
    </Link>
  );
};
