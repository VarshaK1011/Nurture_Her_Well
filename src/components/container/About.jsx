import React from "react";
import about from "../../assets/About.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate=useNavigate();
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Teal rounded-lg">
          <img src={about} alt="" className="p-4" />
        </div>
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            We provide the <br /> best{" "}
            <span className="text-Teal">Professionals</span>
          </div>
          <p className="text-sm text-gray leading-7 mb-4">
          Our platform offers personalized mental health professionals curated specifically for women, addressing their unique needs and experiences.
          </p>
          <button className=" py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold" onClick={() =>  navigate( '/professionals')}>
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
