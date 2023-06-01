import React from "react";
import "./HeroSection.css";

function HeroSection(props) {
    return (
        <div className="HeroSection">
            {props.currentUser ? (
                <div>
                    <h3>Hlo {props.currentUser.username}</h3>
                    <h1>Welcome To MyKare Health </h1>
                </div>
            ) : (
                <h1>pls login to Mykare app</h1>
            )}
        </div>
    );
}

export default HeroSection;
