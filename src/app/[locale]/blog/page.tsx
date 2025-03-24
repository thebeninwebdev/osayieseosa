"use client"

import {useState, useEffect} from 'react'

interface Article {
    author: string;
    categories: string[];
    content: string;
    description: string;
    enclosure: Record<string, unknown>;
    guid: string;
    link: string;
    pubDate: string;
    thumbnail: string | null;
    title: string;
}

const mediumUrl = "https://medium.com/feed/@osayivictoryeseosa";

export default function Blog() 
{
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        fetch(`https://api.rss2json.com/v1/api.json?rss_url=${mediumUrl}` )
            .then(res => res.json())
            .then(data => {
                const items = data.items as Article[];
                setArticles(items);
            });
    }, []);

  return (
<div className="w-full">
    <div className="flex flex-wrap justify-center gap-3  w-full p-4 ">
        {articles.map((article, index) => (
            <div
                key={index}
                className=" w-full max-w-sm border border-gray-200 rounded-lg shadow relative"
            >
                <a href="#" className="relative">
                    <img
                        className="h-44 w-full object-cover rounded-t-lg"
                        src={article.description.match(/<img[^>]+src="([^">]+)"/)?.[1]}
                        alt={article.title}
                    />
                    <div className="absolute w-full bottom-0 h-10 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 justify-between px-3 flex items-center">
                    <div>
                        {article.author}
                    </div>
                    <a
                        href={article.link}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white"
                    >
                        Read more
                        <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </a>
                    </div>
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                            {article.title}
                        </h5>
                    </a>
                </div>
            </div>
        ))}
    </div>
</div>
  )
};
