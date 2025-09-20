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
import { ShimmerButton } from "./components/shimmer-button";
import Anchor from "./components/Anchor";
import {useTranslations} from 'next-intl';
import { ContactForm } from "./components/ContactForm";
import {Link} from "@/navigation";
import Lottie from "lottie-react";

// Helper function to safely use the Vibration API
const vibrate = (pattern: number | number[]): void => {
  if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
    try {

      navigator.vibrate(pattern);

    } catch (error) {
      console.log('Vibration API error:', error);
    }
  }
};

interface Article {
  author: string;
  categories: string[];
  content: string;
  description: string;
  enclosure: Record<string, unknown>;
  guid: string;
  link: string;
  pubDate: string;
  thumbnail: string | null;
  title: string;
}

const mediumUrl = "https://medium.com/feed/@osayivictoryeseosa";

export default function HomePage() {
  const {EMAIL} = useAppContext()
  const textToCopy = EMAIL
  const [copyStatus, setCopyStatus] = useState<boolean>(false)
  const [articles, setArticles] = useState<Article[]>([]);

  const handleOnCopy = (text:string, result:any) => {
    if(result){
      setCopyStatus(true)
      // Vibrate when copy is successful - a short pulse
      vibrate(100);
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
      className: "text-blue-500 dark:text-[#f9d339]",
    },
  ];
  
  // useEffect(() => {
  //   try{
  //     fetch(`https://api.rss2json.com/v1/api.json?rss_url=${mediumUrl}` )
  //         .then(res => res.json())
  //         .then(data => {
  //             const items = data.items as Article[];
  //             setArticles(items);
  //         });
  //   }catch(error){
  //     console.log(error)
  //   }
  // }, []);

  return (
  <div className="w-full h-max">
   <HeroHighlight className="w-full px-5 sm:px-8 h-max py-10">
  <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between text-center lg:text-left space-y-4 sm:space-y-6 lg:space-y-0 lg:space-x-8 w-full h-max">
    <div className="flex flex-col max-w-xl w-full text-left">
      <h2 className="pb-4 text-[#e0e0e0] text-sm">{t('moto')}</h2>
      <p className="text-2xl sm:text-4xl font-extrabold pb-8">{t('greeting')}</p>
      <div className="w-max pb-4 lg:px-0">
          <ShimmerButton>
            <Anchor href="https://wa.me/2349155276978" title={t('firstButon')} />
          </ShimmerButton>
  </div>
</div>
<HoverBorderGradient
  containerClassName="rounded-full"
  as="div"
  className="bg-black text-white w-72 h-72 rounded-full relative overflow-hidden"
>
  <Image
    priority
    src="/images/dp.webp"
    fill
    sizes="(max-width: 768px) 320px, 288px"
    alt="mrEseosa"
    className="object-cover"
  />
</HoverBorderGradient>
    </div>
  </HeroHighlight> 
    <div className="px-5 flex flex-wrap gap-10 justify-evenly items-start py-16 sm:py-20 lg:py-28">
    <h2 className="text-[#f9d339] text-2xl font-bold text-left w-full">MY MOTIVATION</h2>
<div className="flex flex-wrap justify-center gap-6 my-10">
  <Link href="/projects">
    <div className="border-2 border-[#333333] w-36 h-36 flex items-center justify-center rounded-full text-sm hover:scale-95 transition-transform cursor-pointer">
      View my work
    </div>
  </Link>
  <Link href="https://wa.me/2349155276978/">
    <div className="border-2 border-[#333333] w-36 h-36 flex items-center justify-center rounded-full text-sm hover:scale-95 duration-500 cursor-pointer">
      Contact me
    </div>
  </Link>
</div>
   <div className="">
    <p className="max-w-[60ch] text-sm text-[#e0e0e0]">{t('MOTIVATION')}</p>
    <br/>
    <p className="text-3xl font-mono font-bold text-[#ad9b4c]">mrEseosa_</p>
   </div>
  </div>
  <div className="w-full py-16 sm:py-20 lg:py-28"> 
    <h2 className="text-3xl font-bold text-[#f9d339] px-5 mb-5">Our Benefits</h2>
    <FeaturesSectionDemo/>
  </div>
  <div className="w-full py-16 sm:py-20 lg:py-28">
  <h2 className="text-3xl font-bold text-[#f9d339] px-5 mb-5">Our Recent Projects</h2>
  <Projects/>
  </div>
  <div className="w-full py-16 sm:py-20 lg:py-28">
  <ContactForm/>
  </div>
  <div className="h-max bg-gradient-to-r from-slate-800 to-slate-500 w-full relative py-16 sm:py-20 lg:py-28">
  <div className="w-full max-w-xl relative px-2 flex sm:justify-between mx-auto flex-col sm:flex-row py-16 sm:py-20 lg:py-28">
    <div className="flex flex-col gap-2 w-full sm:max-w-96 py-5 text-center sm:text-left">
    <h2 className="font-bold text-xl text-neutral-200 sm:text-2xl">{t('ctaTitle')}</h2>
    <p className="text-xs text-neutral-300 max-w-[50ch] mx-auto sm:mx-0 sm:text-sm">{t('ctaDescription')}</p>
    </div>
<div className="flex items-center sm:w-max w-full justify-center ">
<div className={`absolute -bottom-5 right-0`}>
<Lottie 
  animationData={animationData} 
  loop={copyStatus} 
  autoplay={copyStatus} 
  style={{ width: 100, height: 100 }}
/>
</div>
{/* @ts-ignore: react-copy-to-clipboard types are outdated */}
<CopyToClipboard text={textToCopy} onCopy={handleOnCopy}>
<button 
  className="px-6 py-3 rounded-md border border-neutral-300 text-neutral-100 bg-black hover:-translate-y-1 transform transition duration-200 hover:shadow-md text-xs font-medium flex gap-1 items-center"
>
  {copyStatus ? <IconCircleCheck className="w-4"/> : <IconCopy className="w-4"/>}<span>Copy my email</span>
</button>
</CopyToClipboard>
</div>

  </div>
  </div>
</div>
);
}