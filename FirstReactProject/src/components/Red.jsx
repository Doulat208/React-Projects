import React, { useContext } from 'react'
import RedGreen from './RedGreen'
import { ColorContext } from './Color'

const Red = () => {

    const color = useContext(ColorContext);

  return (
    <div>
      <h1 >Red</h1>
      <RedGreen/>
    </div>
  )
}

export default Red
