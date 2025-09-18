import React from 'react'

const MyNameTask = ({children}) => {
        console.log("Inside My name");
  return (
    <div>
      <h2>{children}</h2>
    </div>
  )
}

export default React.memo(MyNameTask)
