import React from 'react';

const TrainingProps = (props) => {
  return (
    <section className='p-4 lg:w-[450px] space-y-10 flex flex-col items-center md:items-start mx-auto'>
      <img src={props.img} alt="" />
      <h2 className='text-2xl font-semibold'>{props.header}</h2>
      <p className='text-justify text-black/70'>{props.para}</p>
      <a 
        href='/course-catalogue' 
        className='px-8 py-2 bg-[#a53437] rounded-full text-xl text-white font-semibold flex items-center transition-transform transform hover:scale-105 duration-200'
      >
        {props.btn}
        <svg className='ml-2 w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7'></path>
        </svg>
      </a>
    </section>
  );
};

export default TrainingProps;
