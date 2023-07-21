import React,{useEffect,useState} from 'react';
import {Link} from "react-router-dom";
import '../modules/landing.css';

const LandingComponent=()=>{
    return (
        <div className="landing-page">
      <header className="header">
        <img src ={require("../image/logo2.png")} alt="logo"/>
      </header>
      <p>
        PrismPort is a Portfolio Management Application that streamlines the process of project and task management for
        portfolio managers. Manage your projects, tasks, and resources efficiently in one place.
      </p>
      <section className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">Your Path to Project Success</h2>
          <p className="hero-description">
            Are you looking to elevate your project management skills and streamline your portfolio like never before?
            Look no further! PrismPort is your ultimate solution for efficient project management, designed with your
            success in mind.
          </p>
          <div className="cta-buttons">
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
            <Link to="/signup">
              <button className="btn btn-secondary">Sign Up</button>
            </Link>
          </div>
        </div>
        {/* Add your hero image here */}
      </section>
      <section className="features-section">
        <div className="feature">
          {/* Add a feature image here */}
          <h3 className="feature-title">Simplify Portfolio Management</h3>
          <p className="feature-description">
            Seamlessly manage your portfolio of projects with our intuitive and user-friendly platform. Organize, track,
            and monitor your projects effortlessly.
          </p>
        </div>
        <div className="feature">
          {/* Add a feature image here */}
          <h3 className="feature-title">Efficient Task Management</h3>
          <p className="feature-description">
            Stay on top of your tasks with precision and ease. Assign resources, set deadlines, and track progress to
            ensure projects are executed flawlessly.
          </p>
        </div>
        <div className="feature">
          {/* Add a feature image here */}
          <h3 className="feature-title">Resource Allocation Made Easy</h3>
          <p className="feature-description">
            Allocate resources to tasks efficiently, optimizing productivity and maximizing results. PrismPort's resource
            management ensures you never waste a valuable asset.
          </p>
        </div>
        <div className="feature">
          {/* Add a feature image here */}
          <h3 className="feature-title">Advanced Project Analytics</h3>
          <p className="feature-description">
            Make data-driven decisions with confidence! Our comprehensive analytics provide valuable insights into your
            project performance, enabling you to identify opportunities for improvement.
          </p>
        </div>
      </section>
      <footer className="footer">
        <p className='foot'>&copy; {new Date().getFullYear()} PrismPort. All rights reserved.</p>
      </footer>
      </div>
    )

}

export default LandingComponent