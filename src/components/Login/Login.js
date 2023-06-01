import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
function Login(props) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const userlists = props.userlist;
    const handleSubmit = (e) => {
        e.preventDefault();
        let error = true;

        for (let i = 0; i < userlists.length; i++) {
            if (
                userlists[i].username === username &&
                userlists[i].password === password
            ) {
                // console.log(userlists[i].username);
                props.userLogin(userlists[i]);
                error = false;
                if (userlists[i].username === "admin") {
                    console.log(true);
                    navigate("/admin");
                } else navigate("/");
                break;
            }
        }
        setPassword("");
        setUsername("");
        error && alert("incorrect user details");
    };
    if (props.currentUser.id) {
        return navigate("/");
    }
    return (
        <div className="Login">
            <div className="card">
                <div className="card-body">
                    {/* <h5 class="card-title">Login</h5> */}
                    <form onSubmit={handleSubmit} className="form-signin">
                        <h1 className="h3 mb-3 font-weight-normal">
                            Please sign in
                        </h1>
                        <label htmlFor="inputEmail" className="sr-only">
                            Username
                        </label>
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            name="username"
                            type="text"
                            id="inputEmail"
                            className="mb-3 form-control"
                            placeholder="User Name"
                            required
                            autoFocus
                        ></input>
                        <label htmlFor="inputPassword" className="sr-only">
                            Password
                        </label>
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
                            className=" mt-3 btn btn-lg btn-primary btn-block"
                            type="submit"
                        >
                            Sign in
                        </button>
                        <p className="mt-3 mb-3 text-muted">&copy; 2023</p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
