import React from 'react'
import { useTranslations } from 'next-intl'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "mrEseosa - Courses",
  description: "I use my expertise gathered over the years to simplify key concepts and techniques and grow the tech community.",
};

export default function Courses() {
  const t = useTranslations('Course')
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <div className='w-full max-w-lg text-center space-y-5 px-5'>
        <h1 className='text-5xl font-semibold text-slate-100'>{t('title')}</h1>
        <p className='text-slate-200'>{t('description')}</p>
        </div>
    </div>
  )
}
