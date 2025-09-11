import React, { useState } from 'react'
import A from './A'
// import B from './B'

// Here we create a context which can store multiple values 
// We export it so that we can import and then just use it where ever we want
export const NameContext = React.createContext();

const UseContexInfo = () => {

    const [name, setName] = useState("React JS");
    
    // const NameContext = React.createContext();

  return (
    <div style={{height: "80vh"}}>
      <h1>use context</h1>
      {/* Here we provide the details which component can use that context "NameContext" using Provider and 
      then share the value */}
      <NameContext.Provider value={name}>
        <A/>
      </NameContext.Provider>
    </div>
  )
}

export default UseContexInfo
