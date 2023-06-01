import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
    const navigate = useNavigate();
    return (
        <div className="Navbar">
            <img
                onClick={() => navigate("/")}
                className="Navbar-logo"
                src="data:image/png;base64,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"
                alt="myKare Logo"
            ></img>
            {!props.currentUser ? (
                <div className="Navbar-login-register">
                    <button
                        onClick={() => navigate("/login")}
                        className="Navbar-LoginBtn"
                    >
                        {" "}
                        Login
                    </button>
                    <button
                        onClick={() => navigate("/register")}
                        className="Navbar-LoginBtn"
                    >
                        {" "}
                        Register
                    </button>
                </div>
            ) : (
                <div className="Navbar-login-register">
                    <p>Hi {props.currentUser.username}!</p>
                    <button
                        onClick={() => props.Logout()}
                        className="Navbar-LoginBtn"
                    >
                        {" "}
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}

export default Navbar;
