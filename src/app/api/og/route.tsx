// Next.js OpenGraph Route
import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
    try{
       const { searchParams } = request.nextUrl
       const title = searchParams.get("title")


       if(!title){
            return new Response("No title Provided", {status: 500})
       }

       const heading = title.length > 140? `${title.substring(0, 140)}...`: title

       return new ImageResponse((
        (
<div
  style={{
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    letterSpacing: '-.02em',
    fontWeight: 700,
    background: 'white',
  }}
>
  <div
    style={{
      left: 42,
      top: 42,
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <span
      style={{
        width: 24,
        height: 24,
        background: 'black',
      }}
    />
    <span
      style={{
        marginLeft: 8,
        fontSize: 20,
      }}
    >
      mreseosa.com
    </span>
  </div>
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: '20px 50px',
      margin: '0 42px',
      fontSize: 40,
      width: 'auto',
      maxWidth: 550,
      textAlign: 'center',
      backgroundColor: 'black',
      color: 'white',
      lineHeight: 1.4,
    }}
  >
    {heading}
  </div>
</div>
                )
       ),
       {
         width: 1200,
         height: 630,
       })
    }catch(error){
        return new Response("Failed to genereate image", {status: 500})
    }
}
