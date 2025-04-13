"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { LampContainer } from "./ui/lamp";
import Link from "next/link";

const products = [

    {
      id: 2,
      title: "Lavic Medicals - health care app",
      img: "/images/thumbnails/lavicmedicals.png",
      link: "https://lavicmedicals.org/",
    },
    {
      id: 1,
      title:"Norbile Foods - Online Restaurant",
      img: "/images/thumbnails/norbilefoods.png",
      link: "https://norbilefoods.vercel.app/",
    },
    {
      id: 3,
      title: "Esefabrics - Clothing brand",
      img: "/images/thumbnails/esefabrics.png",
      link: "https://esefabrics.vercel.app/",
    },

  ];

  type Product = { id: number; title: string; img: string; link: string; }

export function LampDemo({id}:{id:string}) {
    const [currentProduct, setCurrentProduct] = useState({
        id: 0,
        title: "",
        img: "",
        link: "",
      })

    useEffect(() => {
        if(id){
            setCurrentProduct((prevState) => 
                products.find(
                (product: Product) => product.id === Number(id)) || {...prevState,title:"Product not found"}
        )
        }
    },[id])
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-100 to-slate-300 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        {currentProduct?.title}<br/>
        <Link className="text-base underline text-green-400" href={currentProduct.link}>Click here</Link>
      </motion.h1>
    </LampContainer>
  );
}