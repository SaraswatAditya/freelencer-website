import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import Portfolio from "./Portfolio";
import "./styles.css";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import Copyright from "./Copyright";
import Modal from "./Modal";
const App = () => (
    <div>
        <NavBar/>
        <HeroSection/>
        <Portfolio/>
        <AboutSection/>
        <ContactSection/>
        <Footer/>
        <Copyright/>
        <Modal title="Log Cabin" imagePath="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cabin.png" target="portfolioModal1"/>
        <Modal title="Tasty Cake" imagePath="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cake.png" target="portfolioModal2"/>
        <Modal title="Circus Tent" imagePath="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/circus.png" target="portfolioModal3"/>
        <Modal title="Controller" imagePath="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/game.png" target="portfolioModal4"/>
        <Modal title="Locked Safe" imagePath="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/safe.png" target="portfolioModal5"/>
        <Modal title="Submarine" imagePath="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/submarine.png" target="portfolioModal6"/>
    </div> 
);




export default App;