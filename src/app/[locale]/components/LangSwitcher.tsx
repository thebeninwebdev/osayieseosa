'use client'

import { ChangeEvent, useTransition } from "react"
import { useRouter } from "next/navigation"
import { useLocale } from "next-intl"

export default function LangSwitcher() {
    const [ isPending,startTransition ] = useTransition()
    const router = useRouter()
    const localActive = useLocale()

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value
        startTransition(() => {
            router.replace(`/${nextLocale}`)
        })
    }
  return (
    <label className="w-max flex-1 justify-center flex items-center">
        <p className="sr-only">Change language</p>
        <select 
        defaultValue={localActive} 
        className="bg-black text-slate-200 text-xs underline cursor-pointer outline-none" 
        onChange={onSelectChange}
        disabled={isPending}
        >
            <option value='en'>English</option>
            <option value='ng'>Nigerian Pidgin</option>
        </select>
    </label>
  )
}
