import { Pathnames,LocalePrefix } from "next-intl/routing";

export const defaultLocale = 'en' as const
export const locales = ['en', 'ng'] as const

export const pathnames: Pathnames<typeof locales> = {
    '/':'/',
    '/pathnames':{
        en: '/pathnames',
        ng: '/pfadnamen'
    }
}

export const localePrefix: LocalePrefix<typeof locales> = 'always'

export const port = process.env.PORT || 3000
export const host = process.env.URL?
`https://${process.env.URL}`:
`http:/localhost:${port}`