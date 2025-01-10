import React from 'react'

const Nav = () => {
    return (
        <ul className='flex gap-[2vw] items-center max-lg:flex-col'>
            {['Home', 'About', 'Work', 'Contact'].map((item, i) => (
                <a key={i} className='link max-lg:text-[50px]' href={`#${item.toLowerCase()}`}>{item}</a>
            ))}
        </ul>
    )
}

export default Nav
