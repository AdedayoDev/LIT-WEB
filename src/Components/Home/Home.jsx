// src/components/Home.js
import React from "react";
import HomeNavBar from "./HomeNav/HomeNavBar";
import Hero from "./Hero/Hero";
import Method from "./MethodOfDelivery/Method";
import Training from "./Training/Training";
import CourseCategories from "./CourseCategories/CourseCategories";
import EducationServixe from "./Education Service/EducationServixe";
import Patners from "./Our Partners/Patners";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <section>
      {/* Content */}
      <div>
        <HomeNavBar />
        <Hero />
        <Method />
        <Training />
        <CourseCategories />
        <EducationServixe />
        <Patners />
        <Testimonials />
      </div>
    </section>
  );
};

export default Home;
