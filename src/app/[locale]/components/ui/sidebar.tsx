"use client";
import { cn } from "@/lib/utils";
import {LinkProps} from 'next/link'
import { Link, usePathname } from "@/navigation";
import React, { useState, createContext, useContext, useEffect } from "react";
import { IconKeyframes } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Image from "next/image";
import LangSwitcher from "../LangSwitcher";

interface Links {
  name: string;
  link?: string;
  links?: Links[];
  icon?: React.JSX.Element | React.ReactNode;
}


interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);
  const pathName = usePathname()

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  useEffect(() => {
    setOpen(false)
  },[pathName, setOpen])

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate: animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<"div">)} />
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { open, setOpen, animate } = useSidebar();
  return (
    <>
      <motion.div
        className={cn(
          "h-full px-4 py-4 hidden md:flex md:flex-col bg-neutral-100 dark:bg-black w-[250px] flex-shrink-0 border-r-[1px] border-neutral-500",
          className
        )}
        animate={{
          width: animate ? (open ? "250px" : "60px") : "250px",
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        {...props}
      >
        {children}
      </motion.div>
    </>
  );
};


export const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const { open, setOpen } = useSidebar();
  return (
      <div
        className={cn(
          "h-16 px-5 flex flex-row md:hidden items-center justify-between bg-neutral-100 dark:bg-black border-b border-neutral-200 dark:border-neutral-800 shadow-sm"
        )}
        {...props}
      >
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="flex-shrink-0"> 
        <Image
          src="/images/mreseosa-logo.png"
          className="w-40 h-auto"
          width={300}
          height={150}
          alt="Logo"
          priority
        /></Link>
        <div className="flex items-center gap-3">
          <Link href="tel:09155276978" className="text-nowrap">Call Now</Link>
        <button 
         onClick={() => setOpen(!open)}
        className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
        aria-label="Toggle menu"
         >
            <IconMenu2
            className="text-neutral-800 dark:text-neutral-200 w-5 h-5"
            
          />
          </button>
        </div>
        

        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={cn(
                "fixed h-full  w-full inset-0 bg-white dark:bg-black px-5 py-10 sm:p-10 z-[100] flex flex-col justify-between",
                className
              )}
            >
              <div
                className="absolute right-10 top-10 z-50 text-neutral-800 dark:text-slate-200"
                onClick={() => setOpen(!open)}
              >
                <div className="cursor-pointer"><IconX /></div>
              </div>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
  );
};

export const SidebarLink = ({
  link,
  className,
  ...props
}: {
  link: Links;
  className?: string;
  props?: LinkProps;
}) => {
  const { open, animate } = useSidebar();
  return (
    <Link
      href={link.link as string}
      className={cn(
        "flex items-center justify-start gap-2  group/sidebar py-2",
        className
      )}
      {...props}
    >
      {link.icon?link.icon:<IconKeyframes className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />}
      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
      >
        {link.name}
      </motion.span>
    </Link>
  );
};
