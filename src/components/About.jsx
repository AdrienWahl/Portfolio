import React from "react";
import Typewriter from "./TypeWriter"; 
import cvimg from "../assets/cvimg.jpg";

const About = () => {
  return (
    <div className="flex-grow flex items-center justify-center px-4 md:px-8 py-8">
      <div className="flex flex-col md:flex-row items-center md:items-start w-full md:w-[80%] lg:w-[55%] gap-6 md:gap-10">
        
        
        <div className="w-full md:w-[40%] flex justify-center md:justify-start p-2">
          <img 
            src={cvimg} 
            className="h-48 w-48 md:h-72 md:w-72 rounded-full border-2 border-gray-200 object-cover" 
            alt="Adrien Wahl" 
          />
        </div>
        
        
        <div className="w-full md:w-[70%] flex flex-col justify-center items-center md:items-start text-center md:text-left p-2">
          <h1 className="mb-4 text-white text-xl md:text-2xl font-semibold">
            <Typewriter />
          </h1>
          
          <p className="font-[Poppins] text-base md:text-lg leading-relaxed text-gray-200 tracking-wide justify-text-left">
            Hi, I’m Adrien, a React.js, Node.js, and JavaScript developer.<br/>
            I specialize in building dynamic, interactive web applications 
            with a focus on seamless user experiences and robust back-end solutions.
            Passionate about coding and always learning, I aim to deliver efficient, 
            scalable solutions. Check out my website and get in touch if you want to collaborate!
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
