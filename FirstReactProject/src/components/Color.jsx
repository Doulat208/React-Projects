import React, { useState, useContext } from 'react'
import Red from './Red';

export const ColorContext = React.createContext();

const Color = () => {

    const [color, setColor] = useState([{"red": "#ff0000"}, {"green": "#00ff00"}]);

  return (
    <div>
        <h2>Color Context Component</h2>
      <ColorContext.Provider value={color}>
        <Red/>
      </ColorContext.Provider>
    </div>
  )
}

export default Color
