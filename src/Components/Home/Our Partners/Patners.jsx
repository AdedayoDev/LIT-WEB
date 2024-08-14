import React from "react";
import Image1 from "../../../Assets/our_partners.png"

const Patners = () => {
  return (
    <section className="w-full ">
      <div className="w-10/12 mx-auto flex flex-col items-center gap-10 py-12">
        <h1 className="capitalize text-4xl font-semibold text-center">Our Partners</h1>
        <img src={Image1} alt="" className="w-full rounded" />
      </div>
    </section>
  );
};

export default Patners;
