import React from 'react'

const EverythingBox = ({getRandomAll,randomColor}) => {
   
    const backGC ={
        backgroundColor: randomColor
    }
  return ( 
    
     <button  style={backGC} className="card_button" onClick={getRandomAll} >&#62;</button>
  )
}

export default EverythingBox