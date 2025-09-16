import React, { useReducer } from 'react'

const UseReducerInfo = () => { 

  const initialState = {
    color: "#000000",
    size: "30px"
  }

  const reducer = (state, action) => {
    const key = `${action.color}_${action.size}`
    switch(key){
      case "red": return {...state, color: action.color}
      case "green": return {...state, color: action.color}
      case "blue": return {...state, color: action.color}
      case "40px": return {...state, size: action.color}
      case "20px": return {...state, size: action.size}
      case "reset": return {size: "30px", color: "#000000"}
      default: return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{height: "80vh"}}>
      <h2 style={{color: state.color, fontSize: state.size}}>Use Reducer Example</h2>
      <button className='btn btn-primary m-2' onClick={() => dispatch({size: "30px", color: "#00000"})}>Red</button>
      <button className='btn btn-primary m-2' onClick={() => dispatch({size: "30px", color: "#00ff00"})}>Green</button>
      <button className='btn btn-primary m-2' onClick={() => dispatch({size: "30px", color: "#0000ff"})}>Blue</button>
      <button className='btn btn-primary m-2' onClick={() => dispatch({size: "20px", color: "#000000"})}>20px</button>
      <button className='btn btn-primary m-2' onClick={() => dispatch({size: "30px", color: "#000000"})}>30px</button>
      <button className='btn btn-primary m-2' onClick={() => dispatch({size: "40px", color: "#000000"})}>40px</button>
      <button className='btn btn-primary m-2' onClick={() => dispatch({size: "30px", color: "#000000"})}>Reset</button>
    </div>
  )
}

export default UseReducerInfo
