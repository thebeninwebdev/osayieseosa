import React from 'react'
import { Link } from '@/navigation'

export default function Footer() {
    const today = new Date()
  return (
    <div className="py-20 px-5 text-center w-full text-sm text-slate-300 border-t-2 border-[#f9d339] relative">
  <Link href="/privacy">Privacy Policy</Link>
  <p>&copy; {today.getFullYear()} mrEseosa. All rights reserved.</p>
</div>
  )
}
