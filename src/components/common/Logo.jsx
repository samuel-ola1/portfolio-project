import React from "react";
import { Link } from "react-router-dom";
//
import INFO from "../../data/user";
// import logo from "../../assets/logo.png";

import "./styles/logo.css";

const Logo = ({ width, link }) => {
  if (link === undefined) {
    link = true;
  }

  const imageElement = (
    <img src={INFO.main.logo} alt="logo" className="logo" width={width} />
  );

  return (
    <React.Fragment>
      {link ? <Link to="/">{imageElement}</Link> : imageElement}
    </React.Fragment>
  );
};

export default Logo;
