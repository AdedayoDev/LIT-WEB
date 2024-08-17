import React from "react";
import TrainingProps from "../Training/TrainingProps";
import Image1 from "../../../Assets/lady-with-pencil-ar-1_6.png";
import Image2 from "../../../Assets/ict-partnership.jpg";
import Image3 from "../../../Assets/oracle-academy.jpg";
import Image4 from "../../../Assets/summer-tech-academy.png";

const EducationServixe = () => {
  return (
    <section className="w-full ">
      <div className="w-11/12 mx-auto flex flex-col items-center gap-16">
        <h2 className="capitalize text-4xl font-semibold text-center">Education Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-6">
          <TrainingProps
            img={Image1}
            header="Learning Management System"
            para="Lampnets learning management system is a robust and feature rich platform designed to make remote learning painless and easy for students and instructors."
            btn="Learn More"
          />
          <TrainingProps
            img={Image2}
            header="ICT Partnership with Schools"
            para="This category presents training in ICT and digital literacy in various sectors from management, intelligence, research methods and much more."
            btn="Learn More"
          />
          <TrainingProps
            img={Image3}
            header="Oracle Academy Summer Bootcamp"
            para="Our coding camp combines courses in Java, C++, Python, and other languages, giving everyone the opportunity to delve into creating games, apps, robots, and more."
            btn="Learn More"
          />
          <TrainingProps
            img={Image4}
            header="Coding Kids Virtual Bootcamp"
            para="Our kids virtual training class is designed to keep kids and teens interested and engaged in tech courses and coding activities from the comfort of their homes."
            btn="Learn More"
          />
        </div>
      </div>
    </section>
  );
};

export default EducationServixe;
