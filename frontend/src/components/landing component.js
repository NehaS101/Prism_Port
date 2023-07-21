import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../modules/landing.css";

const LandingComponent = () => {
  return (
    <div className="landing-page">
      {/* <div className="main-logo">
        <div className="div1">
          <img src={require("../image/logo.png")} alt="logo" />
        </div>
        <div className="div2">
          <h3>
            PrismPort is a Portfolio Management Application that streamlines the
            process of project and task management for portfolio managers.
            Manage your projects, tasks, and resources efficiently in one place.
          </h3>
        </div>
      </div> */}

      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Your Path to Project Success</h1>
          <p className="hero-description">
            Are you looking to elevate your project management skills and
            streamline your portfolio like never before? Look no further!
            <b>PrismPort</b> is your ultimate solution for efficient project
            management, designed with your success in mind.
          </p>
          <img className="hero-image" src={require("../image/background.jpg")} alt="hero" />
          <div className="cta-buttons">
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
            <Link to="/signup">
              <button className="btn">Sign Up</button>
            </Link>
          </div>
        </div>
        
      </section>
      
      <section className="features-section">
        <div className="feature">
          <h2 className="feature-title">Simplify Portfolio Management</h2>
          <p className="feature-description">
            Seamlessly manage your portfolio of projects with our intuitive and
            user-friendly platform. Organize, track, and monitor your projects
            effortlessly.
          </p>
        </div>
        <div className="feature">
          <h2 className="feature-title">Efficient Task Management</h2>
          <p className="feature-description">
            Stay on top of your tasks with precision and ease. Assign resources,
            set deadlines, and track progress to ensure projects are executed
            flawlessly.
          </p>
        </div>
        <div className="feature">
          <h2 className="feature-title">Resource Allocation Made Easy</h2>
          <p className="feature-description">
            Allocate resources to tasks efficiently, optimizing productivity and
            maximizing results. PrismPort's resource management ensures you
            never waste a valuable asset.
          </p>
        </div>
        <div className="feature">
          <h2 className="feature-title">Advanced Project Analytics</h2>
          <p className="feature-description">
            Make data-driven decisions with confidence! Our comprehensive
            analytics provide valuable insights into your project performance,
            enabling you to identify opportunities for improvement.
          </p>
        </div>
      </section>
      <footer className="footer">
        <p className="foot">
          &copy; {new Date().getFullYear()} PrismPort. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingComponent;
