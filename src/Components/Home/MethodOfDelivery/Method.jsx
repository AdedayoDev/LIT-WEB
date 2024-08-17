import React from "react";
import MethodProps from "./MethodProps";
import Classroom from "../../../Assets/classroom-training.jpg"
import Virtual from "../../../Assets/online-training.jpg"
import OnSite from "../../../Assets/extended-classes.jpg"
import Elearning from "../../../Assets/e-learning.jpg"

const Method = () => {
  return (
    <div className="w-full py-10 ">
      <div className="w-11/12 mx-auto  flex flex-col space-y-6">
        <h1 className="text-center text-3xl lg:text-4xl font-semibold">Our Delivery Services</h1>
        <div className="grid  items-center md:grid-cols-2 lg:grid-cols-4">
          <MethodProps 
            img ={Classroom} 
            h1 = "Classroom Learning"         
            p = "This option allows our students choose to be physical participants and/ or active listeners & participate in the learning environment. Facilitators and Tutors would be physically present to teach and guide throughout the classroom session."
          />
            <MethodProps 
              img ={Virtual} 
              h1 = "Virtual Learning"         
              p = "This option allows our students to be virtual participants over remote collaborative platforms such as Slack, Zoom, Google Meet and Microsoft Teams. These classes take place on fixed dates and time."
            />
          <MethodProps 
            img ={OnSite} 
            h1 = "Onsite Learning"         
            p = "Onsite training is training delivered to an organization's employees at its site or another location arranged for by the organization. This option allows our students schedule for physical training with tutors at their preferred location."
          />
          <MethodProps 
            img ={Elearning} 
            h1 = "E-Learning"         
            p = "This method lets our students choose learning utilizing our learning management system to access educational curriculum and courses outside of a traditional classroom, up till the certification stage."
          />
        </div>
      </div>
    </div>
  );
};

export default Method;
