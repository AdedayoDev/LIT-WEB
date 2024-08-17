import React from "react";
import TrainingProps from "./TrainingProps";

const Training = () => {
  return (
    <section className="space-y-10 w-full my-12">
      <div className="w-11/12 mx-auto flex flex-col items-center">
        {/* Offered Training */}
        <div className="flex flex-col items-center lg:space-y-12">
          <h3 className="font-semibold text-3xl">Our Training Offers</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3  lg:gap-16">
            <TrainingProps
              header="In-Person Training"
              para="Thanks to Virtual Live Learning our live classes are fully interactive. Our instructors can monitor your class progress and are easily accessible to provide direct assistance. You can ask questions, ask for help, participate in class discussions all just by speaking up, as our live Instructor-Led Training classes are highly practical and interactive."
              btn="Enroll for courses"
            />
            <TrainingProps
              header="Group/Corporate Training"
              para="Thanks to Virtual Live Learning our live classes are fully interactive. Our instructors can monitor your class progress and are easily accessible to provide direct assistance. You can ask questions, ask for help, participate in class discussions all just by speaking up, as our live Instructor-Led Training classes are highly practical and interactive."
              btn="Enroll for courses"
            />
            <TrainingProps
              header="E Learning"
              para="Thanks to Virtual Live Learning our live classes are fully interactive. Our instructors can monitor your class progress and are easily accessible to provide direct assistance. You can ask questions, ask for help, participate in class discussions all just by speaking up, as our live Instructor-Led Training classes are highly practical and interactive."
              btn="Enroll for courses"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
