import React, { useContext } from 'react'
import { NameContext } from './UseContexInfo'
const C = () => {
  // let {name} = props;
  const name = useContext(NameContext);
  return (
    <div>
      <h1>C Component</h1>
      <h1>name: {name} </h1>
    </div>
  )
}

export default C
