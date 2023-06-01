import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register(props) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [submit, setSubmit] = useState(true);

    const userlists = props.userlist;
    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleUserlist({ username: username, password: password });
        setUsername("");
        setPassword("");
        navigate("/login");
    };
    const handleUsername = (e) => {
        setUsername(e.target.value);
        for (let i = 0; i < 3; i++) {
            if (
                userlists[i].username.trim().toLowerCase() ===
                e.target.value.trim().toLowerCase()
            ) {
                return setSubmit(false);
            } else {
                setSubmit(true);
            }
        }
    };
    return (
        <div className="Register">
            <div className="card">
                <div className="card-body">
                    {/* <h5 class="card-title">Login</h5> */}
                    <form onSubmit={handleSubmit} className="form-signin">
                        <h1 className="h3 mb-3 font-weight-normal">
                            Please Register
                        </h1>
                        <h6 className="Register-label">Username</h6>
                        <input
                            value={username}
                            onChange={handleUsername}
                            name="username"
                            type="text"
                            id="inputEmail"
                            className=" mb-3 form-control"
                            placeholder="User Name"
                            required
                            autoFocus
                        ></input>
                        {!submit && <p>username already exist</p>}
                        <h6 className="Register-label">Password</h6>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            name="password"
                            type="password"
                            id="inputPassword"
                            className="form-control"
                            placeholder="Password"
                            required
                        ></input>

                        <button
                            disabled={!submit}
                            className=" mt-3 btn btn-lg btn-primary btn-block"
                            type="submit"
                        >
                            Sign Up
                        </button>
                        <p className="mt-auto mb-auto text-muted">
                            &copy; 01-06-2023
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
