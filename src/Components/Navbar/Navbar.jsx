import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='n-wrapper'>
        <div className='n-left'>
            {/* <div className='n-name'> <span style={{fontWeight:"900" , color:"#0571bf"}}>Why</span><span style={{fontWeight:"900" , color:"#02b04b"}}>Te</span><span style={{fontWeight:"900" , color:"#ff0104"}}>Data</span></div> */}
        <div className='n-name' style={{height:"30px"}}> WhyTeData</div>

        </div>
        <div className='n-right'>
            <div className='n-list'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Events</li>
                    <li>Register</li>
                    <li>Contact</li>
                </ul>

            </div>
           

        </div>

    </div>
  )
}

export default Navbar