'use client'
import gsap from 'gsap';
import React, { useState } from 'react'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import Nav from './Nav';

const Navbar = () => {
  const [icn, setIcn] = useState();
  const handleClick = () => {
    setIcn(!icn);
    gsap.to('.nav', {
      height: icn ? '0vh' : '80vh',
    })
  }
  return (
    <div className="fixed z-[999] w-[90%] left-[50%] top-[2%] -translate-x-[50%]">
      <header className='flex justify-between py-[1vw] w-full items-center bg-zinc-200 rounded-xl px-[3vw]'>
        <h1 className='lg:text-[2vw] max-lg:text-[25px]'>Portfolio</h1>
        <nav className='lg:block xl:block 2xl:block hidden'>
          <Nav />
        </nav>
        <span onClick={() => { handleClick() }} className='lg:hidden block cursor-pointer max-lg:text-[4vw]'>{icn ? <IoMdClose /> : <IoMdMenu />}</span>
      </header>
      <div className="nav absolute top-[50%] bg-zinc-200 z-[-1] h-[0vh] w-full rounded-xl flex justify-center items-center lg:hidden overflow-hidden">
        <Nav/>
      </div>
    </div>
  )
}

export default Navbar
