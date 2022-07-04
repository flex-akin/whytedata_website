import React from 'react'

const FloatingDiv = ({image, txt1, txt2}) => {
  return (
    <div style={{top:"-500%", left:"100%"}} className="floatingdiv">
        <img src={image} alt="" />
        <span>
            {txt1}
            <br/>
            {txt2}
        </span>
    </div>
  )
}

export default FloatingDiv