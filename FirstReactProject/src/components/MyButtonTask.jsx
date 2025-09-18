import React from 'react'

const MyButtonTask = ({myClick, children}) => {
        console.log("Inside My Button");

  return (
    <div>
      <button className='btn btn-primary' onClick={myClick}> {children} </button>
    </div>
  )
}

export default React.memo(MyButtonTask)
