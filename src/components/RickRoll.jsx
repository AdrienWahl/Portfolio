import React, { useState } from 'react';








export default function RickRoll() {

 const [count, setCount] = useState(0);
 const [messageVisible, setMessageVisible] = useState(false);


    //counter + timing
    const RickRolled = () => { setCount(count + 1);

         setTimeout(() => {
      setMessageVisible(true);
    }, 2000); // 3000ms = 3 secondes

     };

// end counter + timing
return(
        <div className='flex justify-center items-center space-x-4'>
    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"rel="noopener noreferrer" target="_blank" onClick={RickRolled}>Youtube</a>

     {count > 0 && messageVisible && <p className=" text-red-400 font-bold">You got rickrolled {count} time{count > 1 && 's' }</p>}
     {count> 4 && <p>Yes I know how to use counter</p>}

</div>

)

};