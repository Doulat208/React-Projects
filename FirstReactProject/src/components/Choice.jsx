import React from "react";
import { Navigate, NavLink, Outlet } from "react-router-dom";

const Choice = () => {
  return (
    <div>
      <h1>Choice</h1>
      <nav>
        <NavLink to="Fruite"> Fruite </NavLink>
      </nav>
      <Outlet/>
    </div>
  );
};

export default Choice;
