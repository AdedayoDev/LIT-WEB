// src/components/Home.js
import React from "react";
import HomeNavBar from "./HomeNav/HomeNavBar";
import Hero from "./Hero/Hero";
import bg from "../../Assets/Background.jpg";
import Method from "./MethodOfDelivery/Method";
import Training from "./Training/Training";
import CourseCategories from "./CourseCategories/CourseCategories";
import EducationServixe from "./Education Service/EducationServixe";
import Patners from "./Our Partners/Patners";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  const overlayColor = "#fff2f2";

  return (
    <section
      className="relative w-full min-h-screen bg-[#fff2f2] bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: overlayColor, opacity: 0.8 }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <HomeNavBar />
        <Hero />
        <Method />
        <Training />
        <CourseCategories />
        <EducationServixe/>
        <Patners />
        <Testimonials />
      </div>
    </section>
  );
};

export default Home;
