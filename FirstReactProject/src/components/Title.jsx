import React from 'react'

const Title = ({children}) => {
    console.log("Inside Child")
  return (
    <div>
      <h3>{children}</h3>
    </div>
  )
}

export default React.memo(Title)
