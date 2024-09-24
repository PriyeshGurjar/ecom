import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import cart from "./cart.png";
import ReactDOM from "react-dom/client";
import Bill from "../customerviews/Bill";

function ProductList(props) {
    const [itemcount, setItemCount] = useState(0);
    const [selitems, setSelItems] = useState([]);
    const [pcatglist, setPCatgList] = useState([]);
    const [plist, setPList] = useState([]);
    let cname = "";

    useEffect(() => {
        axios.get("http://localhost:9191/product/showproduct").then((res) => {
            setPList(res.data);
        }).catch((err) => {
            alert(err);
        });
    }, []);

    const handleBuyButton = (evt) => {
        setItemCount(itemcount + 1);
        const selectedItem = plist.find(item => item.pid === evt);
        if (selectedItem) {
            setSelItems([...selitems, selectedItem]);
        }
    };

    const handleCheckOutButton = () => {
        const root = ReactDOM.createRoot(document.getElementById("root"));
        const ccid = props.data;

        var obj = {
            selitems: selitems,
            cid: ccid
        };

        root.render(<Bill data={obj}></Bill>)
    };

    return (
        <div>
            <p style={{ color: "blue" }}>PRODUCT FORM</p>
            <h6>Customer Id: {props.data}</h6>
            <div>
                <img src={cart} height="50" width="50" alt="Cart" />
                <label>{itemcount}</label>
                <button type="button" onClick={handleCheckOutButton}>Checkout</button>
            </div>
            <center>
                <p style={{ backgroundColor: "green", color: "white" }}>
                    Product List
                </p>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Offer Price</th>
                            <th>Category Id</th>
                            <th>Category Name</th>
                            <th>Photo</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plist.map((item) => (
                            <tr key={item.pid}>
                                <td>{item.pid}</td>
                                <td>{item.pname}</td>
                                <td>{item.pprice}</td>
                                <td>{item.oprice}</td>
                                <td>{item.pcatgid}</td>
                                <td>
                                    {
                                        pcatglist.map((citem) => {
                                            if (item.pcatgid === citem.pcatgid) {
                                                cname = citem.pcatgname;
                                            }
                                            return null;
                                        })
                                    }
                                    {cname}
                                </td>
                                <td>
                                    <img src={"http://localhost:9191/product/getproductimage/" + item.ppicname} height="100" width="100" alt={item.pname} />
                                </td>
                                <td>
                                    <button type="button" onClick={() => handleBuyButton(item.pid)}>Buy</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </center>
        </div>
    );
}

export default ProductList;
