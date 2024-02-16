import React, { useState } from 'react'
import Monthly from './Monthly';
import Annual from './Annual';

function Pricing() {
    const [activeButton, setActiveButton] = useState('button1');
    const [packag,setPackag]=useState("button1")
    const handleButtonClick = (buttonId) => {
      setActiveButton(buttonId);
      setPackag(buttonId)
    };
  
  return (
    <div className='container mt-5 pt-5'>
        <h3 className='text-center'>Choose your plan...</h3>
        <div className='row p-2 rounded-pill  mx-auto col-3 col-sm-7 col-md-4 col-lg-3 mt-3 border  justify-content-around '>
        <button
            type="button"
            className={`btn btn-outline-dark rounded-pill col-3 col-sm-5 col-lg-5 ${activeButton === 'button1' ? 'active' : ''}`}
            onClick={() => handleButtonClick('button1')}
          >
            Monthly
          </button>
           <button  className={`btn btn-outline-dark rounded-pill col-3 col-sm-5 col-lg-5 ${activeButton === 'button2' ? 'active' : ''}`}
          onClick={() => handleButtonClick('button2')} >Annual
           </button>
        </div>
        {packag=="button1"?<Monthly/>:<Annual/>}
      

    </div>
  )
}

export default Pricing
