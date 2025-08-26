import React, { useState } from 'react'

const Table = (props) => {

  // let [count,setCout] = useState(1);
  // let mul = []
  
  // const multiplesNum =()=> {
    //     for(let i=1; i<= 10; i++){
      //         mul[i-1] = num * i;
    //     }
    // }
    
    let {num} = props;
    // let table = Array(10).fill(0);


  return (
    <div>
      Table
      {/* {
        table.map((_, index) => (
          <li key={index+1}> {`${num} x ${index+1} = ${num * (index+1)}` }</li>
        ))
      } */}

      {/* {
        Array.form({length:10},((_, index) => (
          <li key={index+1}> {`${num} x ${index+1} = ${num * (index+1)}` }</li>
        ))
      } */}
    </div>
  )
}

export default Table
