import React, { useState } from 'react'

const ChangeName = () => {

    let [name, setName] = useState("");
    
    // let [c, setC] = useState("0")
    // const nameChanger = () => {
    //     setName(() => name = c == 0 ? "React" : "Doulat Biswal");
    //     // console.log(name);
    // }

    // const cChanger = () => {
    //     setC(() => c == 0 ? 1 : 0);
    // }

    let is = true;
    const nameChanger = () => {
        if(is){
            setName(() => name = "React");
            is = false;
        }else{
            setName(() => name = "Doulat");
            is = true;
        }
    }

  return (
    <div>
      {/* <button onClick={() => { cChanger(); nameChanger(); }} >Change Name</button> */}
      <button onClick={nameChanger} >Change Name</button>
      <b>{name}</b>
    </div>
  )
}

export default ChangeName
