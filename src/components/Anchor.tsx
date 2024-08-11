import React from 'react'

export default function Anchor({href,title}:{
    href:string;
    title:string;
}) {
  return (
    <a
    target="_blank"
    className="w-full" href={href}
    rel="noopener noreferrer"
    >
        {title}
    </a>
  )
}
