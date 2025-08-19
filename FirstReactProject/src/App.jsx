import React from 'react'
import Counter from './components/Counter';
import ChangeName from './components/ChangeName';

const App = () => {
    let count = 0;
    return (
        <div>
            <Counter/>
            <ChangeName/>
        </div>
    )
}

export default App