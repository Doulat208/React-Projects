import React, { Children } from 'react'

const MyButton = ({myClick, children}) => {
    console.log("Inside MyButton");
  return (
    <div>
      <button className='btn btn-danger' onClick={myClick}> {children} </button>
    </div>
  )
}

export default React.memo(MyButton)
