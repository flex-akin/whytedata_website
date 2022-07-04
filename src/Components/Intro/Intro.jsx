import React from 'react'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import "./Intro.css"
import Crown from '../../img/crown.png'
import '../FloatingDiv/FloatingDiv.css'
import thumbsup from '../../img/thumbup.png'



const Intro = () => {
  return (
    <div className="intro">
    <div className="i-left">
        <div className="i-name">
            <span> WhyTeData </span> 
            <span>Limited</span>
            
            <span>Complete workshop and business improvement</span>
              <span> with over 100% performance and profit boost
            </span>
            <button className=' i-button'>
                Register
            </button>

            


        </div>

    </div>
    <div className="i-right">
    <img src={require('../../img/introd-min.png')} alt=""></img>
   
  

        
    </div>
  
</div>
  )
}

export default Intro