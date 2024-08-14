'use client'

import { useLocale } from "next-intl"
import { ChangeEvent, useTransition } from "react"
import { useParams } from "next/navigation"
import {useRouter, usePathname} from '@/navigation'
import { Locale } from "@/types"

export default function LangSwitcher({className}:{className?:string}) {
    const locale = useLocale()
    const [ isPending,startTransition ] = useTransition()
    const router = useRouter()
    const pathname = usePathname()
    const params = useParams()

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value as Locale
        startTransition(() => {
            router.replace(
                {
                    pathname,
                    // @ts-expect-error -- TypeScript will validate that only known `params` are used in combination with a given `pathname`. Since the two will alwalys match for the current route, we can skip runtime checks.
                    params
                } ,
                {locale: nextLocale}
            )
        })
    }
  return (
    <label className={`w-max justify-center flex items-center ${className}`}>
        <p className="sr-only">Change language</p>
        <select 
        defaultValue={locale} 
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
