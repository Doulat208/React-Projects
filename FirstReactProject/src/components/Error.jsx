import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()
  return (
    <div className=''>
      <h1 className='Danger'>404 Error: Page not foud</h1>
        <button className='btn btn bg-primary' onClick={()=>navigate("/",{replace:true})}>Go To Home</button>
    </div>
  )
}

export default Error
