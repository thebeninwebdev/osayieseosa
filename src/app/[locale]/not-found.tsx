import { Link } from "@/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function NotFoundPage() {
    const t = useTranslations('404')
    return(
        <div className="w-full min-h-full py-10 px-5 sm:px-10 flex justify-center items-center">
            <div className="w-full max-w-lg text-center space-y-5">
            <h2 className="font-bold text-2xl text-slte-100">{t('title')}</h2>
            <p className="text-sm">{t('description')} <Link href="/" className="underline text-green-400">{t('link')} </Link></p>
            <div className="w-72 sm:w-96 h-max mx-auto">
            <Image
            src='/404.svg'
            alt='404'
            width={600}
            height={600}
            className="w-full h-auto object-cover"
            priority
            />
            </div>
 
            </div>

        </div>

    )
}
