import React from 'react'
import { Anchors } from '@/types'

export default function Anchor({href,title,className,icon}:Anchors) {
  return (
    <a
    target="_blank"
    className={`w-full ${className}`} href={href}
    rel="noopener noreferrer"
    >
        {icon?icon:title}
    </a>
  )
}
