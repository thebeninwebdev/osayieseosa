'use client'
import { useState } from "react";
import Image from "next/image";
import { HeroHighlight } from "./components/ui/hero-highlight";
import { useAppContext } from "@/context";
import animationData from '@/data/confetti.json'
import { toast } from "sonner";
import { IconCopy, IconCircleCheck } from "@tabler/icons-react";
import { FeaturesSectionDemo } from "./components/ui/feature-section";
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { Projects } from "./components/Projects";
import { HoverBorderGradient } from "./components/ui/hover-border-gradient";
import { TypewriterEffectSmooth } from "./components/ui/typewriter-effect";
import Anchor from "./components/Anchor";
import {useTranslations} from 'next-intl';
import { ContactForm } from "./components/ContactForm";
import Lottie from "react-lottie";
 
export default function HomePage() {
  const {EMAIL} = useAppContext()
  const textToCopy = EMAIL
  const [copyStatus, setCopyStatus] = useState<boolean>(false)

  const handleOnCopy = (text:string, result:any) => {
    if(result){
      setCopyStatus(true)
      setTimeout(() => setCopyStatus(false), 3000)
    }else{
      toast.error("Failed to copy text, try again")
    }
  }


  const t = useTranslations('HomePage');

  const words = [
    {
      text: t('phrase1'),
    },
    {
      text: t('phrase2'),
    },
    {
      text: t('phrase3'),
    },
    {
      text: t('phrase4'),
    },
    {
      text: t('hightlight'),
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
  <div className="w-full h-max">
  <HeroHighlight>
  <div className="flex-grow flex flex-col lg:flex-row items-center justify-center text-center lg:text-left space-y-8 lg:space-y-0 lg:space-x-8 mt-12">
    <div className="flex flex-col items-center lg:items-start max-w-xl">
      <p className="text-md sm:text-lg">{t('greeting')}</p>
      <h1 className="text-[2.5rem] sm:text-5xl font-bold">
        {t('introduction')}</h1>
      <h2 className="text-2xl sm:text-3xl font-semibold text-green-500 mb-4">
        <TypewriterEffectSmooth words={words}/>
      </h2>
      <div className="flex space-x-4 pb-4">
    <button 
    className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <Anchor href="https://wa.link/t148zf" title={t('firstButon')}/>
    </button>
  
    <button 
    className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-white dark:border-green-800 dark:text-slate-200 text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
      <Anchor href="https://teal-rozamond-56.tiiny.site/" title={t('secondButton')}/>
</button>
      </div>
    </div>
    <HoverBorderGradient
    containerClassName="rounded-full"
    as="div"
    className="dark:bg-black text-black dark:text-white w-72 sm:w-80 sm:h-80 rounded-full h-72 relative overflow-clip">
    <Image 
        priority
        src="/images/dp.jpg" 
        fill
        sizes="(max-w:768px) 320px, 288px"
        alt="Eseosa Osayi" 
        className=" object-cover" 
      />
      </HoverBorderGradient>
    </div>
  </HeroHighlight>
  <div className="w-full py-20"> 
    <h2 className="text-3xl font-bold text-green-500 px-5 mb-5">My Skills</h2>
    <FeaturesSectionDemo/>
  </div>
  <div className="w-full py-20">
  <h2 className="text-3xl font-bold text-green-500 px-5 mb-5">My Recent Projects</h2>
  <Projects/>
  </div>
  <div className="px-5 flex flex-wrap gap-10 justify-evenly py-20 items-center">
   <div className="">
    <h2 className="text-green-500 text-2xl font-bold">MY MOTIVATION</h2>
    <div className="relative text-slate-200 w-[21rem] h-44 mx-auto my-10">
    <div
    className="border-2 border-purple-900 w-44 h-44 flex items-center justify-center rounded-full absolute text-sm">View my work</div>
    <div
    className="border-2 border-blue-700 w-44 flex items-center justify-center h-44 rounded-full absolute left-40 text-sm">Contact me</div>
    </div>
   </div>
   <div className="">
    <p className="max-w-[60ch] text-sm text-slate-200">{t('MOTIVATION')}</p>
    <br/>
    <p className="text-3xl font-mono font-bold text-red-600">mrEseosa_</p>
   </div>
  </div>
  <div className="py-20 px-5">
    <h2 className="text-4xl py-16 font-bold text-center text-slate-100">My&nbsp;
      <span className="text-green-600">Stack</span></h2>
      <div className="flex flex-wrap gap-5 justify-evenly">
      <div className="p-5 border-2 border-slate-200 rounded-2xl w-max">
        <Image src="/images/nextjs.svg" alt="nextjs" width={200} height={200} className="w-20 h-auto"/>
      </div>
      <div className="p-5 border-2 border-slate-200 rounded-2xl w-max">
        <Image src="/images/framer.svg" alt="framer" width={200} height={200} className="w-20 h-auto"/>
      </div>
      <div className="p-5 border-2 border-slate-200 rounded-2xl w-max">
        <Image src="/images/mongodb.svg" alt="mongodb" width={200} height={200} className="w-20 h-auto"/>
      </div>
      <div className="p-5 border-2 border-slate-200 rounded-2xl w-max">
        <Image src="/images/typescript.svg" alt="typescript" width={200} height={200} className="w-20 h-auto"/>
      </div>
      <div className="p-5 border-2 border-slate-200 rounded-2xl w-max">
        <Image src="/images/figma.svg" alt="figma" width={200} height={200} className="w-20 h-auto"/>
      </div>
    </div>
  </div>
  <div className="w-full py-20">
  <ContactForm/>

  </div>
  <div className="h-max bg-gradient-to-r from-slate-800 to-slate-500 w-full relative">
  <div className="w-full max-w-xl relative py-20 px-2 flex sm:justify-between mx-auto flex-col sm:flex-row">
    <div className="flex flex-col gap-2 w-full sm:max-w-96 py-5 text-center sm:text-left">
    <h2 className="font-bold text-xl text-neutral-200">{t('ctaTitle')}</h2>
    <p className="text-xs text-neutral-300 max-w-[50ch] mx-auto sm:mx-0">{t('ctaDescription')}</p>
    </div>
<div className="flex items-center sm:w-max w-full justify-center">
<div className={`absolute -bottom-5 right-0`}>
  <Lottie options={{
    loop:copyStatus,
    autoplay:copyStatus,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }}/>
</div>
<CopyToClipboard text={textToCopy} onCopy={handleOnCopy}>
<button className="px-6 py-3 rounded-md border border-neutral-300 text-neutral-100 bg-black hover:-translate-y-1 transform transition duration-200 hover:shadow-md text-xs font-medium flex gap-1 items-center">
{copyStatus?<IconCircleCheck className="w-4"/>:<IconCopy className="w-4"/>}<span>Copy my email</span>
</button>
</CopyToClipboard>
</div>

  </div>
  </div>
</div>
);
}