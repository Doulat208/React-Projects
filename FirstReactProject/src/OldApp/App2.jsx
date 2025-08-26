import React from 'react'
import Counter from '../components/Counter';
import ChangeName from '../components/ChangeName';

const App2 = () => {
    let count = 0;
    return (
        <div>
            {/* <Counter/>      // here this Components are Full Fledged/ Single handed Components as they are managing there own state management  */}
            <ChangeName/>
            {/* <Counter initialValue = {4} /> */}
        </div>
    )
}

export default App