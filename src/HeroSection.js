import React from "react";
import "./assets/img/avataaars.svg";

const HeroSection = () => (
    <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                {/* <img className="masthead-avatar mb-5" src="avataaars.svg" alt="..." /> */}
                <img src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/avataaars.svg"  width="240px" alt=""/>
                <h1 className="masthead-heading text-uppercase mb-0">Start Bootstrap</h1>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </header>
);






export default HeroSection;