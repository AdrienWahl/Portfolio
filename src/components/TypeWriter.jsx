import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterComponent = () => {
  return (
    <div className="flex justify-center items-center  ">
      <div className="text-white text-4xl font-[Poppins]">
        <Typewriter
          options={{
            strings: ['Fullstack developper', 'Javascript', 'REACT.JS ', 'Node.js','liquid'],
            autoStart: true,  
            loop: true,       
            delay: 100,       
          }}
        />
      </div>
    </div>
  );
};

export default TypewriterComponent;
