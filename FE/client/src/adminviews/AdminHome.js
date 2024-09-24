import React from "react";
import StateMgt from "./statemgt";
import CityMgt from "./citymgt";
import ProductCatgMgt from "./ProductCatgMgt";
import VenderMgt from "./VenderMgt";
import Product from "../productview/product";

import { Link,Route,Routes } from "react-router-dom";
import "../index.css";

function AdminHome()
{
    return(
        <div>
            <center>
                <h4>Admin Home Page</h4>
                <nav>
                    <ul>
                        <li>
                            <Link to="/statemgt">State</Link>
                        </li>
                        <li>
                            <Link to="/citymgt">City</Link>
                        </li>
                        <li>
                            <Link to="/productcatg">Product Category</Link>
                        </li>
                        <li>
                            <Link to="/vendermgt">Vender Management</Link>
                        </li>
                        <li>
                            <Link to="/product">Product Management</Link>
                        </li>
                    </ul>
                </nav>
            </center>
        </div>
    );
}export default AdminHome;