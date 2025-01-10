import React, { useState } from 'react';
import Split from './Split';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const About = ({ val }) => {
  const [para, setPara] = useState(
    "A passionate and creative Frontend Developer with a strong focus on crafting seamless and visually appealing web experiences. With a keen eye for design and a deep understanding of frontend technologies, I specialize in transforming ideas into interactive, user-friendly websites. I have expertise in HTML, CSS, JavaScript, and modern frameworks such as React, enabling me to build responsive and dynamic web applications that function flawlessly across all devices. My goal is not only to write clean, maintainable code but also to ensure that every project I work on provides an engaging and intuitive experience for the user. Whether it's creating pixel-perfect layouts, optimizing performance, or integrating innovative features, I thrive on solving complex challenges with simple, effective solutions. I am continually learning and adapting to new technologies and best practices to stay at the forefront of the frontend development landscape. If you're looking for someone who can bring your vision to life through exceptional front-end design and development, let's connect! I'm always excited about new opportunities to collaborate and innovate."
  );
  const pSplit = para.split('');
  useGSAP(() => {
    gsap.from('.aboutH h1 span', {
      y: '100%',
      stagger: '0.03',
      scrollTrigger: {
        trigger: '.about',
        start: 'top 80%',
      }
    }),
      gsap.to('.about .left p span', {
        color: '#27272a',
        stagger: .5,
        scrollTrigger: {
          trigger: '.about',
          start: 'top 0%',
          end: 'top -100%',
          scrub: 1,
          pin: true
        }
      })
  })
  return (
    <section id='about' className='about h-[110vh] w-full px-[5vw] flex flex-col bg-zinc-300'>
      <div className='aboutH flex items-center overflow-hidden h-[20vh]'>
        <Split val='About Me' />
      </div>
      <div className="lg:h-[85vh] lg:w-full flex lg:flex-row gap-[3vw] max-sm:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse">
        <div className="left lg:h-full lg:w-[50%] max-sm:w-full max-sm:h-[20vh] sm:h-[43vh] sm:w-full md:h-[43vh] md:w-full">
          <h2 className='leading-none md:text-[3vw]'>Hi, Everyone. <br /> My name is <span className='text-blue-800 uppercase lg:text-[2vw]'>Jawad Ahmad</span>.</h2>
          <p className='mt-[2vw] max-sm:text-[2vw] sm:text-[2vw] leading-none md:text-[1.5vw] lg:text-[1.2vw]'>
            {pSplit.map((item, i) => (
              <span className='text-zinc-400' key={i}>{item}</span>
            ))}
          </p>
        </div>
        <div className="right lg:h-full lg:w-[50%] max-sm:w-full max-sm:h-[42vh] sm:h-[42vh] sm:w-[100%] md:h-[42vh] md:w-[100%] sm:flex sm:justify-center sm:items-center md:flex md:justify-center md:items-center">
            <img className='h-[100%] duration-1000 hover:saturate-100 saturate-0 max-sm:w-full sm:w-[50%] md:w-full lg:w-full object-center object-cover rounded-lg' src="https://plus.unsplash.com/premium_photo-1683147716541-6af3be6bf9e1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        </div>
      </div>
    </section>
  )
}

export default About
