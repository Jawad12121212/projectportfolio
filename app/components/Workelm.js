import React, { useState } from 'react'
import { BsArrowUpRight } from "react-icons/bs";

const Workelm = ({ val, img }) => {
    const [txt, setTxt] = useState(val);
    const split = txt.split('');
    return (
        <div className="relative elm py-[2vw] border-b-[1px] border-zinc-600 cursor-pointer group">
            <img className='h-[20vw] w-[20vw] scale-0 absolute right-0 top-[50%] -translate-y-[50%] object-cover object-center rounded-2xl max-lg:hidden' src={img} />
            <span className='absolute right-0 top-[50%] -translate-y-[50%] text-[3vw] lg:hidden group-hover:rotate-45 duration-500'><BsArrowUpRight /></span>
            <div className="h-[5vw] md:h-[5vw] w-full overflow-hidden">
                <h1 className='text-[5vw] leading-none'>{split.map((item, i) => (
                    <span key={i} className='lg:inline-block'>{item === ' ' ? '\u00A0' : item}</span>
                ))}</h1>
                <h2 className='max-lg:hidden text-[5vw] leading-none'>{split.map((item, i) => (
                    <span key={i} className='inline-block'>{item === ' ' ? '\u00A0' : item}</span>
                ))}</h2>
            </div>
        </div>
    )
}

export default Workelm
