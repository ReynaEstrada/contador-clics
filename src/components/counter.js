import React from "react";
import '../css/counter.css'

function counter({ numClics }) {
   return (
      <div className='contador'>
         {numClics}
         
      </div>
   )

}
export default counter;