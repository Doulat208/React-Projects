import React, {useState} from 'react'
import Counter from './components/Counter';
import ChangeName from './components/ChangeName';

const App = () => {
    let [count, setCount] = useState(0);

    function decrement(){
        setCount(() => count--);
        console.log(count);
    }
    
    // Its a arrow func to increament count value
    const increment = () => {
        // count++;
        setCount(() => count++);
        console.log(count);
    }

    // here one count is property which is in the left and another is variable    
    return (
        <div>
            <Counter 
                count = {count} 
                onIncrement = {increment}
                onDecrement = {decrement}
            /> 
        </div>
    )
}

export default App