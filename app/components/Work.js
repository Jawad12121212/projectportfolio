import React, { useEffect, useState } from 'react'
import Split from './Split'
import gsap from 'gsap';
import Workelm from './Workelm';

const Work = ({val, img}) => {
  useEffect(() => {
    let elem = document.querySelectorAll('.elm');
    elem.forEach((item, i) => {
      let h1Span = item.querySelectorAll('h1 span');
      let h2Span = item.querySelectorAll('h2 span');
      let img = item.querySelectorAll('img');
      item.addEventListener('mouseover', function () {
        let tl = gsap.timeline();
        gsap.to(img, {
          scale: 1,
        })
        tl.to(h1Span, {
          y: '-100%',
          stagger: .03
        }, 'a')
        tl.to(h2Span, {
          y: '-100%',
          stagger: .03
        }, 'a')
      })
      item.addEventListener('mouseleave', function () {
        let h1Span = item.querySelectorAll('h1 span');
        let h2Span = item.querySelectorAll('h2 span');
        let img = item.querySelectorAll('img');
        let tl = gsap.timeline()
        gsap.to(img, {
          scale: 0,
        })
        tl.to(h2Span, {
          y: '0%',
          stagger: .03
        }, 'i')
        tl.to(h1Span, {
          y: '0%',
          stagger: .03
        }, 'i')
      })
    })
  }, [])
  return (
    <section id='work' className='h-[150vh] max-lg:h-[48vw] w-full px-[5vw] flex flex-col justify-between bg-zinc-300 z-[2]'>
      <div className="">
        <Split val='Selected Works' />
      </div>
      <div className="h-[130vh] max-lg:h-[38vw] flex flex-col w-full">
        <Workelm val = 'Luminous Labs' img = '/img/1.png'/>
        <Workelm val = 'Personal Portfolio' img = '/img/2.png'/>
        <Workelm val = 'Third' img = '/img/3.jpg'/>
        <Workelm val = 'Forth' img = '/img/4.jpg'/>
      </div>
    </section>
  )
}

export default Work
