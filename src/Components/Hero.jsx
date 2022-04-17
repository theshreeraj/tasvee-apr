import React from 'react';
import "./Hero.css";
import banner from "../Assets/banner.png";

const Hero = () => (
    <div className="tsv__header section__padding" id="home">
        <div className="tsv__header-content">
            <h1 className="gradient__text-logo">TASVEE!</h1>
            <h1 className="gradient__text">Hire the Perfect photographer for you</h1>
        </div>

        <div className="tsv__header-image">
            <img src={banner} alt="banner" />
        </div>
    </div>
);

export default Hero;

