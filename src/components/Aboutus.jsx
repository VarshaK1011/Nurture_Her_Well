import React from "react";
const About = () => {
    return ( 
        <div className="about">

<div className=" bg-white flex-col flex  md:flex-row justify-between items-center h-full py-5 ">
      
      <img src="./images/courses8.jpg" 
      className="flex flex-row mt-20 md:ml-16 px-10 py-14 w-[350px] h-[350px] md:w-[500px] md:h-[500px] " />
      <div className="mt-20" >
       
        <div className="md:w-[50%] md:ml-64">
        <p className="text-black  md:text-sm py-3  font-sans ">
        <span className="text-Teal  font-bold text-xl">Common Problems We Address:</span>
            <br />
            - Postpartum Challenges: We understand the unique mental health struggles women face during the postpartum period, and our platform offers specialized resources to support new mothers.
            <br />
            -Depression: Depression affects millions of women worldwide. Our platform provides a safe space for women to access tools, guidance, and community support to navigate their journey towards mental wellness.
            <br />
            - Domestic Violence: We offer resources and guidance for women experiencing domestic violence, empowering them to seek help, establish safety plans, and regain control of their lives.
            <br />
            
          </p>
          <p className="text-black  md:text-sm py-3 font-sans ">
        <span className="text-Teal font-bold  text-xl">Features We Offer:</span>
            <br />
            - Tailored Resources: Our platform offers personalized mental health resources curated specifically for women, addressing their unique needs and experiences.
            <br />
            -Supportive Community: Connect with other women facing similar challenges, share experiences, and offer mutual support in a safe and welcoming environment.
            <br />
           
            Wellness Tools: Explore a range of wellness tools including meditation exercises, self-care tips, and coping strategies designed to enhance mental well-being.
          </p>

         
       
        </div>
        </div>

    </div>
      
      </div>
     );
}
 
export default About;