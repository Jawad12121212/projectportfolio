import React, { useState } from 'react'

const Split = ({ val }) => {
  const [txt, setTxt] = useState(val)
  const splt = txt.split('')
  return (

    <h1 className='text-[3vw] leading-none'>{splt.map((item, i) => (
      <span key={i} className='inline-block'>{item === ' ' ? '\u00A0' : item}</span>
    ))}</h1>

  )
}

export default Split
