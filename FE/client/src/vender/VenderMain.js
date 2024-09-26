import React from "react";
import { Link } from "react-router-dom";
import venderpic from "../venderpic.jpg";
import "../index.css";

function VenderMain() {
    return (
        <div>
            <center>
                <img src={venderpic} height={200} width={200} />
                <nav>
                    <ul>
                        <li>
                            <Link to="venderlogin">Login</Link>
                        </li>
                        <li>
                            <Link to="venderreg">Register</Link>
                        </li>
                    </ul>
                </nav>
            </center>
        </div>
    );
}

export default VenderMain;
