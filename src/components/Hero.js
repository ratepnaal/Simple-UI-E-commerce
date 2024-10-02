import React from "react";
import photo1 from "../images/image 25.png";
export default function Hero(){
    return(
        <section className="hero">
            <img src={photo1} className="photo1" className = "hero-logo"></img>
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}