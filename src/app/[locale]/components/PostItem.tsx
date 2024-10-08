import { PostItemProps } from '@/types';
import {Link} from '@/navigation';
import { BsCalendarEvent } from 'react-icons/bs';
import {formatDate} from "@/lib/utils"
import Image from 'next/image';

export default function PostItem({slug, title, description, date, image}: PostItemProps){
    return <article className='flex flex-col gap-2 w-[300px]'>
        <div className="relative w-[300px] h-[200px]">        
        <Image 
        src={image} 
        width={300} 
        height={200}
        alt={title}
        className='m-0 overflow-hidden rounded object-cover w-full h-full'
        />
        <div className='absolute bottom-0 flex justify-between items-center mt-4 z-10 w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-4'>
            <dl>
                <dt className='sr-only'>Published On</dt>
                <dd className='text-xs font-medium flex items-center gap-1'>
                    <BsCalendarEvent className='w-4' />
                    <time dateTime={date} >{formatDate(date)}</time>
                </dd>
            </dl>
            <Link href={slug} className='text-xs'>
            Read post
            </Link>
        </div>
        </div>

        <div>
            <h2 className='text-sm font-bold underline w-full text-slate-200'>
                <Link href={slug}>
                    {title}
                </Link>
            </h2>
        </div>
        <div className='text-xs w-full text-slate-300'>{description}</div>

    </article>
}