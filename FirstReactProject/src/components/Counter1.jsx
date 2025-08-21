import { useState } from "react";

const Counter = () => {
    // let count = 0;       Its a normal js variable
    let [count, setCount] = useState(0);    // Its a  react state varible 
    // Its alwys take a intial value , which is 0
    // and return one variable here count and a function which is setCount
    // only the setCount can change the value of count
    // setCount here is a dispatch which prform some action whenever its called

    // useState is a hook that is used for state management

    // let [varname, setVarname] = useState(());

    // Its a function for decement but we will use arrow function 
    function decrement(){
        // count--;
        setCount(() => count--);
        console.log(count);
    }
    
    // Its a arrow func to increament count value
    const increment = () => {
        // count++;
        setCount(() => count++);
        console.log(count);
    }
    return (
      <div>
        <button onClick={decrement}>Decrement</button>
            <b> {count} </b>
        <button onClick={increment}>Increment</button>
      </div>
    )
}

export default Counter
