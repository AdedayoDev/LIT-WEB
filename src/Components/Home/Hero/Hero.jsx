import React from 'react'
import Carousel from './Carousel'
import Image1 from "../../../Assets/carousel-image-1-big.jpg"
import Image2 from "../../../Assets/carousel-image-2-big.jpg"
import Image3 from "../../../Assets/carousel-image-3-big.jpg"
import Image4 from "../../../Assets/carousel-image-4-big.jpg"
import Image5 from "../../../Assets/carousel-image-5-big.jpg"
import Image6 from "../../../Assets/carousel-image-6-big.jpg"
import Image7 from "../../../Assets/carousel-image-7-big.jpg"
import Image8 from "../../../Assets/carousel-image-8-big.jpg"
import Image9 from "../../../Assets/carousel-image-9-big.jpg"

const Hero = () => {
    const images = [
        Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9
    ]
  return (
    <section className='relative p-5 rounded-xl'>
        <Carousel images={images} />
    </section>
  )
}

export default Hero
