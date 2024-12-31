  `import React from 'react'
  import Anchor from '../components/Anchor'
  import { Animations } from '@/types'
  import { useTranslations } from 'next-intl'
  import { Metadata } from 'next'

  export const metadata: Metadata = {
    title: "Eseosa Osayi - Animations",
    description: "Some of my favourite animations.",
  };

  const IframeComponent = ({link, title,defaultLink}:Animations) => {
    return(
      <iframe 
      height="300" 
      style={{width: "100%"}} 
      title={title} 
      src={link} 
      loading="lazy" 
      allowTransparency
      allowFullScreen
      >
      See the pen
      <Anchor 
      href={defaultLink} 
      title="By Eseosa"
      />
      </iframe>
    )
  }

  export default function Animation() {
    const t = useTranslations('animations')
    const animationsArray:Animations[] = [
      {
        title: "Tech guy",
        link: "https://codepen.io/osayieseosa/embed/gONeKER?default-tab=result&editable=false",
        defaultLink: "https://codepen.io/osayieseosa/embed/gONeKER"
      },
      {
        title: "Ripple animation",
        link: "https://codepen.io/osayieseosa/embed/ExBLvrQ?default-tab=result&editable=false",
        defaultLink: "https://codepen.io/osayieseosa/pen/ExBLvrQ"
      },
      {
        title: "Ball animation",
        link: "https://codepen.io/osayieseosa/embed/zYVjdbp?default-tab=result&editable=false",
        defaultLink: "https://codepen.io/osayieseosa/pen/zYVjdbp"
      },
      {
        title: "Disc animation",
        link: "https://codepen.io/osayieseosa/embed/OJeZjrL?default-tab=result&editable=false",
        defaultLink: "https://codepen.io/osayieseosa/pen/OJeZjrL"
      },
    ]
    return (
      <div className='min-h-screen w-full py-20 px-5'>
        <h1 className='pb-10 text-xl font-bold text-green-500'>{t('title')}</h1>
        <div className='w-full max-w-lg mx-auto space-y-20'>
        {animationsArray.map(({title,link,defaultLink}:Animations, index:number) =>{
          return(
            <IframeComponent
            key={index} 
            title={title} 
            link={link}
            defaultLink={defaultLink}
          />
          )})}
        </div>
      </div>
    )
  }
`