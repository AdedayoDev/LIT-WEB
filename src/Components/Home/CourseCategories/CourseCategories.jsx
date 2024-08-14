import React from "react";
import BG from "../../../Assets/business.jpg"; // Ensure the path is correct

const CourseCategories = () => {
  const overlayColor = "#a53437"; // Overlay color

  return (
    <section className="w-full py-8">
      <div className="flex flex-col items-center gap-12 ">
        <h2 className="text-3xl font-semibold ">Course Categories</h2>
      <div className="w-10/12 mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Other categories */}
        <a
          href="/course-category.html?category=cloud-computing"
          className="bg-[#a53437]/50 rounded-xl w-80 h-auto py-12 px-4 flex flex-col items-center gap-4 justify-center 
          transition-transform transform hover:-translate-y-2 cursor-pointer"
        >
          <h2 className="text-white text-xl font-semibold">
            Cloud Computing & Services
          </h2>
          <p className="text-white text-lg font-normal">2 Courses</p>
        </a>
        <a
          href="/course-category.html?category=data-analytics"
          className="bg-[#a53437]/50 rounded-xl w-80 h-auto py-12 px-4 flex flex-col items-center gap-4 justify-center 
          transition-transform transform hover:-translate-y-2 cursor-pointer"
        >
          <h2 className="text-white text-xl font-semibold">Data Analytics</h2>
          <p className="text-white text-lg font-normal">4 Courses</p>
        </a>
        <a
          href="/course-category.html?category=design"
          className="bg-[#a53437]/50 rounded-xl w-80 h-auto py-12 px-4 flex flex-col items-center gap-4 justify-center 
          transition-transform transform hover:-translate-y-2 cursor-pointer"
        >
          <h2 className="text-white text-xl font-semibold">Design</h2>
          <p className="text-white text-lg font-normal">1 Course</p>
        </a>
        <a
          href="/course-category.html?category=development"
          className="bg-[#a53437]/50 rounded-xl w-80 h-auto py-12 px-4 flex flex-col items-center gap-4 justify-center 
          transition-transform transform hover:-translate-y-2 cursor-pointer"
        >
          <h2 className="text-white text-xl font-semibold">Development</h2>
          <p className="text-white text-lg font-normal">3 Courses</p>
        </a>

        {/* Business category with background image and overlay */}
        <a
          href="/course-category.html?category=business"
          className="relative rounded-xl w-80 h-auto py-12 px-4 bg-cover bg-center 
          transition-transform transform hover:-translate-y-2 cursor-pointer"
          style={{ backgroundImage: `url(${BG})` }}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 rounded-xl"
            style={{ backgroundColor: overlayColor, opacity: 0.8 }}
          ></div>

          {/* Content */}
          <div className="relative flex flex-col items-center gap-4 justify-center h-auto">
            <h2 className="text-white text-xl font-semibold">Business</h2>
            <p className="text-white text-lg font-normal">1 Course</p>
          </div>
        </a>
      </div>
      </div>
    </section>
  );
};

export default CourseCategories;
