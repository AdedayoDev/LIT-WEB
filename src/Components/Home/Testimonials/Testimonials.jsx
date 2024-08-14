import React, { useState, useEffect } from "react";
import Image1 from "../../../Assets/testimonial-1.jpg";
import Image2 from "../../../Assets/testimonial-2.jpg";

const testimonials = [
  {
    img: Image1,
    name: "Adaeze",
    text: "I couldn't have made a better choice of academy. In depth data science training and value for time and money.",
  },
  {
    img: Image2,
    name: "Susan Alozie",
    text: "Given how complex I thought Business Intelligence was, the training was simplified and I'm looking forward to a master class.",
  },
  {
    img: Image2,
    name: "Ajayi Louis",
    text: "I came across LIT in my quest to boost my career in IT. Learning UI/UX designs in addition to my web development skills was a great boost.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000); // 3 seconds for staying and 3 seconds for sliding out

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full">
      <div className="flex flex-col gap-10">
        <h2 className="capitalize text-4xl font-semibold text-center">
          What People Say
        </h2>
        <div className="relative h-80 overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col items-center gap-10 py-10 transition-transform duration-1000 ease-in-out ${
                index === current ? "transform translate-x-0" :
                index < current ? "transform -translate-x-full" :
                "transform translate-x-full"
              }`}
            >
              <img src={testimonial.img} alt="" className="w-28 h-28 rounded-full" />
              <h2 className="uppercase text-xl text-[#33] font-bold">{testimonial.name}</h2>
              <p className="w-6/12 mx-auto text-center text-lg">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
