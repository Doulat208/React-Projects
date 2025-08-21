import { useState } from "react";

// Now Counter is a controlled components as it is manage by App.jsx here
// Counter is not managing any of its State
const Counter = (props) => {
    // let count = 0;       Its a normal js variable
    // let [count, setCount] = useState(probs.initialValue);    // Its a  react state varible 
    let {count, onIncrement, onDecrement} = props   // this is called destructuring to get the varibale from the object so that we dont have to write props multiple times

    const checkCSS =()=> {
      // return count === 0 ? {color: "red"} : count < 0 ? {color: "blue"} : {color: "green"}
      if( count === 0){
        return {color : "red"}
      }else if(count < 0){
        return {color : "blue"}
      }else{
        return {color : "green"}
      }
    }
    
    const buttonCSS =()=> {
      return {backgroundColor : "black", color : "yellow"}
    }

    return (
      <div>
        <button style={buttonCSS()} onClick={onDecrement}>Decrement</button>
            <b style={checkCSS()}> {count === 0 ? "Zero" : count} </b>
        <button style={buttonCSS()} onClick={onIncrement}>Increment</button>
      </div>
    )
}

export default Counter
