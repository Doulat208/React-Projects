import React from "react";
import { NavLink } from "react-router-dom";


const HeaderTask = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid bg-primary">
          <NavLink className="navbar-brand text-light" href="#">
            MyApp
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink 
                    className="nav-link"
                    to="/" 
                    style={({isActive}) => ({
                        color: isActive ? "yellow" : "white",
                        fontWeight: isActive ? "bold" : "normal",
                    })}
                    >
                    Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                    className="nav-link"
                    to="/table" 
                    style={({isActive}) => ({
                        color: isActive ? "yellow" : "white",
                        fontWeight: isActive ? "bold" : "normal",
                    })}
                    >
                    Table
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" 
                to="/Choice"
                style={({isActive}) => ({
                        color: isActive ? "yellow" : "white",
                        fontWeight: isActive ? "bold" : "normal",
                    })}
                >
                  Choice
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" 
                    to="/ContactUs"
                    style={({isActive}) => ({
                        color: isActive ? "yellow" : "white",
                        fontWeight: isActive ? "bold" : "normal",
                    })}
                >
                    
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" 
                    to="/query"
                    style={({isActive}) => ({
                        color: isActive ? "yellow" : "white",
                        fontWeight: isActive ? "bold" : "normal",
                    })}
                >
                    Query
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" 
                    to="/AboutUs"
                    style={({isActive}) => ({
                        color: isActive ? "yellow" : "white",
                        fontWeight: isActive ? "bold" : "normal",
                    })}
                >
                    
                  AboutUs
                </NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderTask;
