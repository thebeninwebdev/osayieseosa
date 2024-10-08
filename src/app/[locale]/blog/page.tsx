
import { allDocs } from 'contentlayer/generated'
import { Metadata } from 'next';
import { sortPosts } from '@/lib/utils';
import PostItem from '../components/PostItem';

export const metadata: Metadata = {
    title: "Eseosa Osayi - Blog",
    description: "Building a better web, one line of code at a time. Explore my insights and expertise.",
  };

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
                    <ul className='flex flex-wrap w-full mx-auto gap-4 justify-evenly'>
                       { sortedPosts.map(({slug, date, title, description, image}) => {
                        return <li key={slug}>
                            <PostItem slug={slug} date={date} title={title} description={description} image={image as string}/>
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
