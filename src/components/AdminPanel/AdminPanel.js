import React from "react";
import "./AdminPanel.css";
import { Navigate } from "react-router-dom";

function AdminPanel(props) {
    if (props.currentUser.username !== "admin") {
        alert("Access Denide");
        return <Navigate to="/" />;
    }
    return (
        <div className="AdminPanel">
            <div className="adminPanel-cont">
                <h1>User Lists</h1>
                <div className="AdminPanel-userlist">
                    {props.userlist.map((ele) => (
                        <div key={ele.id} className="AdminPanel-user">
                            {ele.username}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AdminPanel;
