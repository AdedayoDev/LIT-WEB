import React from 'react'
import Carousel from './Carousel'
import Image1 from "../../../Assets/carousel-image-1-big.jpg"
import Image2 from "../../../Assets/carousel-image-2-big.jpg"
import Image3 from "../../../Assets/carousel-image-3-big.jpg"
import Image4 from "../../../Assets/carousel-image-4-big.jpg"


const Hero = () => {
    const images = [
        Image1, Image2, Image3, Image4
    ]
  return (
    <section className='relative p-5 rounded-xl  mx-auto'>
        <Carousel images={images} />
    </section>
  )
}

export default Hero
