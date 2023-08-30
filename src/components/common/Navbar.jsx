import React from 'react';
import { Link } from "react-router-dom";

import "./styles/navbar.css"

const Navbar = (props) => {
  const { active} = props;

  return (
    <React.Fragment>
        <div className="nav-container">
            <nav className="navbar">
                <div className="nav-background">
                    <ul className="nav-list">
                      <li
                        className={
                          active === "home"
                            ? "nav-item active"
                            : "nav-item" 
                        }
                      >
                        <Link to="/">Home</Link>
                      </li>
                      <li
                        className={
                          active === "about"
                            ? "nav-item active"
                            : "nav-item" 
                        }
                      >
                        <Link to="/">About</Link>
                      </li>
                      <li
                        className={
                          active === "projects"
                            ? "nav-item active"
                            : "nav-item" 
                        }
                      >
                        <Link to="/">Projects</Link>
                      </li>
                      <li
                        className={
                          active === "articles"
                            ? "nav-item active"
                            : "nav-item" 
                        }
                      >
                        <Link to="/">Articles</Link>
                      </li>
                      <li
                        className={
                          active === "contact"
                            ? "nav-item active"
                            : "nav-item" 
                        }
                      >
                        <Link to="/">Contact</Link>
                      </li>
                    </ul>
                </div>
            </nav>
        </div>
    </React.Fragment>
  )
}

export default Navbar;