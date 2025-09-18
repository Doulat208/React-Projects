import React, { useCallback, useState } from 'react'
import Title from './Title'
import MyButton from './MyButton'

const UseCallBackInfo = () => {
    console.log("Inside CallBack");
    const [color, setColor]  = useState("#000000");
    const [size, setsize]  = useState("30px");

    const changeColor = useCallback(()=> {
        let color = "#" + Math.floor(Math.random() * 166766).toString(16);
        setColor(color);
    },[color]);

    const changeSize = useCallback(() => {
        let size = Math.floor(Math.random() * 60) + 30 + "px";
        setsize(size);
    }, [size]);

  return (
    <div style={{height: "80vh"}}>
      {/* <h2>Use Call Back Info</h2> */}
      <Title>Hello Title</Title>
      <h3 style={{color: color, fontSize: size}}> Welcome to call back hook1 </h3>
      <div className='m-2'>
        <MyButton myClick={changeColor}> Change Color </MyButton>
      </div>
      <div className='m-2'>
        <MyButton myClick={changeSize}> Change Size </MyButton>
      </div>
    </div>
  )
}

export default UseCallBackInfo
