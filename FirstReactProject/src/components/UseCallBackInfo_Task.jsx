import React, { useCallback, useState } from 'react'
import MyNameTask from './MyNameTask'
import MyButtonTask from './MyButtonTask';

const UseCallBackInfo_Task = () => {
    console.log("Inside Call Back");
    const [name , setName] = useState("Doulat");
    const [color, setColor] = useState("#000000");
    const [size, setSize] = useState("30px");

    const changeSize = useCallback(()=> {
        let rsize = Math.floor(Math.random() * 60) + 30 + "px";
        setSize(rsize);
    }, [size]);

    const changeColor = useCallback(()=> {
        let rcolor = "#" + Math.floor(Math.random() * 616161).toString(16);
        setColor(rcolor);
    }, [color]);

  return (
    <div style={{height: "80vh"}}>
      <h2>Use Call Back Task</h2>
        <input type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <div style={{color: color, fontSize: size}}>
            <MyNameTask> {name} </MyNameTask>
        </div>
        <div className='m-2'>
            <MyButtonTask myClick={changeSize}> Change Size </MyButtonTask>
        </div>
        <div className='m-2'>
            <MyButtonTask myClick={changeColor}> Change Color </MyButtonTask>
        </div>
    </div>
  )
}

export default UseCallBackInfo_Task
