import { allDocs } from 'contentlayer/generated'
import Mdx from '../../components/MdxComponent'
import Image from 'next/image'

interface PostPageProps{params:{slug:string}}

export const generateMetadata = ({ params }: PostPageProps) => {
  const post = allDocs.find((post) => post.slugAsParams == params.slug)
  if (!post){
    throw new Error(`Post not found for slug: ${params.slug},${allDocs}`)
  }
  return { 
    title: post.title,
    description: post.description,
    openGraph: post.image
      ?{
         images: [
          {
            url: new URL(post.image, process.env.URL).href,
            width: 1920,
            height: 1080,
            alt: post.title,
          },
         ],
      }
      : undefined
   }
}

export default async function Postpage({ params}:PostPageProps) {
  const post = allDocs.find((post) => post._raw.flattenedPath.includes(params.slug))
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  const {title, description, image, body} = post

  return (
    <article className="px-5 pb-20">
      <div className='text-sm py-10 space-y-5 max-w-xl text-slate-200 mx-auto'>
      <div className=' pb-5'>
      <h1 className="text-3xl text-green-500 py-2 font-sans font-bold">{title}</h1>
      <h2 className='text-sm ml-1 text-slate-100'>{description}</h2>
      </div>
      {
      image &&
      (<Image 
        src={image} 
        width={720} 
        height={480}
        alt={post.title} 
        className='m-0 w-full overflow-hidden rounded object-cover py-10' 
        priority />
      )
      }
      <Mdx code={body.code}/>
      </div>
     
    </article>
  )   
}
