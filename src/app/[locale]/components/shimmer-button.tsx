"use client"

import { cn } from "@/lib/utils"
import type React from "react"

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export const ShimmerButton = ({ children, className, ...props }: ShimmerButtonProps) => {
  return (
    <button
      className={cn(
        "inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-yellow-600 bg-[linear-gradient(110deg,#000103,45%,#fbbf24,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-yellow-400 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-yellow-50 text-sm w-72 lg:w-[20rem] hover:text-yellow-300 hover:border-yellow-500",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
