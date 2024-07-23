import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate=useNavigate();
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="section" id="home">
      <div className="md:flex items-center justify-center mr-8 mt-16">
        <div>
          <div className="sm:text-[2.5rem] text-[1.2rem] font-bold text-Teal mb-4">
            {" "}
            Empower Her:
          </div>
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            Your Path to <br /> Mental Wellness
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm">
            Welcome to Empower Her, your go-to digital hub for tailored mental
            health support for women. We address common challenges like
            postpartum, depression, domestic violence, and workplace stress,
            offering personalized resources, community support, expert guidance,
            and wellness tools. Join us to access a safe space for empowerment,
            resilience, and mental well-being.
          </p>
          <div className="mt-6">
          <button className="px-6 py-3 font-bold text-sm rounded-lg mr-4 bg-slate-300 border-black" onClick={() =>  navigate( '/helpline')} >
              Get Help
            </button>
            <button className="px-6 py-3 font-bold border border-solid text-white bg-Teal rounded-lg text-sm " onClick={() =>  navigate( '/blogs')}>
            Read more
            </button>
            
          </div>
        </div>
        <div className="md:w-[60%]">
          <img
            className="md:w-[350px] md:h-[500px] w-[350px] h-[500px] mt-5 md:mt-0 md:ml-44"
            src="https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW58ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </div>
      </div>
      {/* <div>
        <p className="text-center text-xl">
          We collaborate with{" "}
          <span className="text-Teal">
            100+ leading universities ans companies
          </span>
        </p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-8 p-2"
        >
          {logos.map((logo, index) => (
            <motion.div variants={item} className="w-28" key={index}>
              <img src={logo} alt="" className="w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div> */}
    </div>
  );
};

export default Home;
