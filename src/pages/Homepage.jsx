import React from 'react';
import { Helmet } from 'react-helmet';


import Navbar from "../components/common/Navbar";


import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";

const Homepage = () => {


  const currentSEO = SEO.find((item) => item.page === "home");


  return (
    <React.Fragment>
      <Helmet>
          <title>{INFO.main.title}</title>
          <meta name="description" content={currentSEO.description} />
          <meta name="keywords"  content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <Navbar active="home"/>
      </div>
      
      <div className="content-wrapper">
          <div className="homepage-logo-container">
            <div></div>
          </div>
      </div>
    </React.Fragment>

  )
}

export default Homepage