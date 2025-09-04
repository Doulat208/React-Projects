import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Lang = () => {
  return (
    <div style={{height: "80vh"}}>
        <nav>
            <NavLink to="java">Java</NavLink>
            <NavLink to="python">Python</NavLink>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Lang
