
import { allDocs } from 'contentlayer/generated'
import { Metadata } from 'next';
import {Link} from '@/navigation';
import { BsCalendarEvent } from 'react-icons/bs';
import { formatDate, sortPosts } from '@/lib/utils';

interface PostItemProps {
    slug: string;
    title: string;
    description?: string;
    date: string;
}

export const metadata: Metadata = {
    title: "Eseosa Osayi - Blog",
    description: "Building a better web, one line of code at a time. Explore my insights and expertise.",
  };

function PostItem({slug, title, description, date}: PostItemProps){
    return <article className='flex flex-col gap-2 border-neutral-400 border-b-[0.5px] py-5 '>
        <div>
            <h2 className='text-lg font-old underline'>
                <Link href={slug}>
                    {title}
                </Link>
            </h2>
        </div>
        <div className=' text-sm max-w-[50ch]'>{description}</div>
        <div className='flex justify-between items-center mt-4'>
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
    </article>
}

export default async function page() {
    const sortedPosts = sortPosts(allDocs)
  return (
    <div className='mx-auto container max-w-4xl py-6 lg:py-10 w-full px-5 min-h-screen'>
        <div className='flex flex-col items-start gap-4 md:justify-between md:gap-8'>
            <div className="flex-1 space-y-4 w-full">
                <div className='py-10 space-y-3 text-center'>
                <h1 className='text-3xl lg:text-4xl font-bold text-green-500'>Blogs</h1>
                <p className='text-xs sm:text-sm max-w-[50ch] mx-auto'>
                    Building a better web, one line of code at a time. Explore my insights and expertise.
                </p>
                </div>
                <div className="">
                {sortedPosts?.length > 0 ? (
                    <ul className='flex flex-col'>
                       { sortedPosts.map(({slug, date, title, description}) => {
                        return <li key={slug}>
                            <PostItem slug={slug} date={date} title={title} description={description}/>
                        </li>
                       })
                       }
                    </ul>
                ):<p>Nothing to see here yet</p>}
                </div>
            </div>
        </div>
    </div>
  )
}
