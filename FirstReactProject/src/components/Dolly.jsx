import React, { useState } from 'react'

const Dolly = () => {

    // const [num, setNum] = useState(2);
    const [color, setColor] = useState("#000000")
    const [b, setB] = useState(false);

    const MyColor = () => {
        setB(!b)
        setColor( b ? "#000000" : "#00ff00" );
    }

  return (
    <div style={{height: "80vh"}}>
      <h2 style={{color: color}}>dolly</h2>
        <button className='btn btn-primary' onClick={MyColor}> Change </button>
    </div>
  )
}

export default Dolly
