import { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import HeroSection from "./components/HeroSection/HeroSection";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import Register from "./components/Register/Register";
import { Routes, Route } from "react-router-dom";

function App() {
    const [userlist, setUserlist] = useState(
        JSON.parse(window.localStorage.getItem("userlist")) || [
            { username: "lami", password: "lami", id: uuidv4() },
            { username: "admin", password: "admin", id: uuidv4() },
            { username: "Mershed", password: "admin", id: uuidv4() },
        ]
    );
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(window.localStorage.getItem("currentuser")) || ""
    );

    // handlefunctions
    const handleUserlist = (newuser) => {
        let error = false;
        userlist.map((ele) => {
            if (
                ele.username.trim().toLowerCase() ===
                newuser.username.trim().toLowerCase()
            ) {
                alert("username already exist");
                error = true;
            }
            return error;
        });
        if (!error) {
            setUserlist([...userlist, { ...newuser, id: uuidv4() }]);
            alert("user created successful");
        }
    };
    const handleUserLogin = async (loginuser) => {
        await setCurrentUser((st) => loginuser);
    };
    const handleLogout = (loginuser) => {
        setCurrentUser("");
    };
    useEffect(() => {
        window.localStorage.setItem("currentuser", JSON.stringify(currentUser));
        window.localStorage.setItem("userlist", JSON.stringify(userlist));
    }, [currentUser, userlist]);

    return (
        <div className="App">
            <Navbar
                currentUser={currentUser ? currentUser : null}
                Logout={handleLogout}
            />
            <Routes>
                <Route
                    active
                    path="/"
                    element={<HeroSection currentUser={currentUser} />}
                />
                <Route
                    exact
                    path="/login"
                    element={
                        <Login
                            userLogin={handleUserLogin}
                            userlist={userlist}
                            currentUser={currentUser}
                        />
                    }
                />
                <Route
                    exact
                    path="/register"
                    element={
                        <Register
                            handleUserlist={handleUserlist}
                            userlist={userlist}
                        />
                    }
                />
                <Route
                    path="/admin"
                    element={
                        <AdminPanel
                            currentUser={currentUser}
                            userlist={userlist}
                        />
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
