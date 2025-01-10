import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Quotes = () => {
  useGSAP(()=>{
    gsap.from('.quoates h1', {
      y: '100%',
      rotateX: -90,
      stagger: 0.5,
      scrollTrigger: {
        trigger: '.quoatesP',
        start: 'top 30%',
      }
    })
  })
  return (
    <section className='quoatesP h-screen max-lg:h-[50vw] w-full bg-zinc-950 flex justify-center items-center px-[5vw]'>
        <div className="font-MM quoates">
            {['NEED A DESIGN? I COLABORATE', 'WITH TALENTED DESIGNERS AND 3D', 'ARTISTS TO CREATE UNIQUE', 'SOLUTION FOR YOUR PROJECT.'].map((item, i)=>(
                <div style={{perspective: '1000px'}} key={i} className="overflow-hidden text-center">
                    <h1 className='text-[8vw] tracking-wide font-medium text-zinc-300 leading-[7.5vw]'>{item}</h1>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Quotes
