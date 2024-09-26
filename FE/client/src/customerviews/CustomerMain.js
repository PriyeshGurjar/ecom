import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function CustomerMain() {
    return (
        <div>
            <center>
                <nav>
                    <ul>
                        <li>
                            <Link to="customerlogin">Login</Link>
                        </li>
                        <li>
                            <Link to="customerreg">Register</Link>
                        </li>
                    </ul>
                </nav>
            </center>
        </div>
    );
}

export default CustomerMain;
