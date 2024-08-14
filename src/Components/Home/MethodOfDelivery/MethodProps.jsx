import React from 'react'

const MethodProps = (props) => {
  return (
    <section className='min-w-80  p-4 h-auto space-y-7'>
      <img src={props.img} alt='' />
      <h1 className='text-center text-xl text-black font-semibold'>{props.h1}</h1>
      <p className='max-w-full text-justify'>{props.p}</p>
    </section>
  )
}

export default MethodProps
