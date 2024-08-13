import React from 'react'

export default function Anchor({href,title,className,icon}:{
    href:string;
    title?:string;
    className?: string;
    icon?: React.JSX.Element | React.ReactNode;
}) {
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
