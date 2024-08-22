import React from 'react'
import Anchor from '../components/Anchor'

interface Animations {
  title: string;
  link: string;
  defaultLink: string;
}

const IframeComponent = ({link, title,defaultLink}:Animations) => {
  return(
    <iframe height="300" style={{width: "100%"}} title={title} src={link} loading="lazy" allowTransparency allowFullScreen>
    See the pen<Anchor href={defaultLink} title="By Eseosa"/>
    </iframe>
  )
}

export default function animations() {
  const animationsArray:Animations[] = [
    {
      title: "Tech guy",
      link: "https://codepen.io/osayieseosa/embed/gONeKER?default-tab=js%2Cresult",
      defaultLink: "https://codepen.io/osayieseosa/embed/gONeKER"
    }
  ]
  return (
    <div className='min-h-screen w-full py-20 px-5'>
      <div className='w-full max-w-lg mx-auto'>
      {animationsArray.map(({title,link,defaultLink}:Animations, index:number) =>{
        return(
          <IframeComponent
          key={index} 
          title={title} 
          link={link}
          defaultLink={defaultLink}
        />
        )

      } 

      )}
      </div>
    </div>
  )
}
