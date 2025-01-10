'use client'
import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Work from './components/Work'
import Quotes from './components/Quotes'
import Form from './components/Form'
import Footer from './components/Footer'
import Realfooter from './components/Realfooter'

const page = () => {
  return (
    <main className='font-Gilroy font-bold relative text-zinc-800 selection:bg-zinc-800 selection:text-zinc-300'>
      <Navbar />
      <Hero />
      <About />
      <Work/>
      <Quotes/>
      <Form/>
      <Footer/>
      {/* <Realfooter/> */}
    </main>
  )
}

export default page
