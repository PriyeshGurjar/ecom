import React, { useEffect, useState } from "react";
import axios from "axios";

function Product(props) {
    const [pid, setPId] = useState();
    const [pname, setPName] = useState();
    const [pprice, setPPrice] = useState();
    const [oprice, setOPrice] = useState();
    const [ppicname, setPPicname] = useState();
    const [pcatgid, setPCatgId] = useState();
    const [pcatglist, setPCatgList] = useState([]);
    const [image, setImage] = useState({ preview: "", data: "" });
    const [status, setStatus] = useState("");
    const [plist, setPList] = useState([]);
    let cname = "";
    var catgname="";

    const handlePidText = (evt) => {
        setPId(evt.target.value);
    };
    const handlePNameText = (evt) => {
        setPName(evt.target.value);
    };
    const handlePPriceText = (evt) => {
        setPPrice(evt.target.value);
    };
    const handleOPriceText = (evt) => {
        setOPrice(evt.target.value);
    };
    const handlePCatgSelect = (evt) => {
        setPCatgId(evt.target.value);
    };

    useEffect(() => {
        axios.get("http://localhost:9191/product/getmaxpid").then((res) => {
            setPId(res.data.length + 1);
        }).catch((err) => {
            alert(err);
        });

        axios.get("http://localhost:9191/productcatg/showproductcatg").then((res) => {
            setPCatgList(res.data);
        }).catch((err) => {
            alert(err);
        });
    }, []);

    const handleSaveButton = () => {
        const obj = {
            pid: pid,
            pname: pname,
            pprice: pprice,
            oprice: oprice,
            ppicname: ppicname,
            pcatgid: pcatgid,
            vid:props.data
        };
        axios.post("http://localhost:9191/product/saveproduct/", obj).then((res) => {
            alert("Product saved");
        }).catch((err) => {
            alert(err);
        });
    };

    const handleShowButton = () => {
        axios.get("http://localhost:9191/product/showproductbyvender/"+props.data).then((res) => {
            setPList(res.data);
        }).catch((err) => {
            alert(err);
        });
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        let formData = new FormData();
        formData.append("file", image.data);
        const response = await fetch("http://localhost:9191/product/saveproductimage", {
            method: "POST",
            body: formData,
        });

        if (response) {
            if(response.statusText=="ok"){
            setStatus("File uploaded successfully");
        }
        else {
            setStatus("Failed to upload file");
        }
     }
    };

    const handleFileChange = (evt) => {
        const img = {
            preview: URL.createObjectURL(evt.target.files[0]),
            data: evt.target.files[0]
        };
        setImage(img);
        setPPicname(evt.target.files[0].name);
    };

    const handleNewButton=()=>{
        axios.get("http://localhost:9191/product/getmaxpid").then((res)=>{
            setPId(res.data.length+1);
            setPName("");
            setPCatgId("");
            setPPrice("");
            setPPicname("");
            setImage("");
        }).catch((err)=>{
            alert(err);
        })
        
    }

    return (
        <div>
            <center>
            <p>Vender Id{props.data}</p>
                <p style={{ color: "blue" }}>PRODUCT FORM</p>
                <table>
                        <tr>
                            <td>Product Id</td>
                            <td>{pid}</td>
                        </tr>
                        <tr>
                            <td>Product Name</td>
                            <td><input type="text" onChange={handlePNameText} /></td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td><input type="number" onChange={handlePPriceText} /></td>
                        </tr>
                        <tr>
                            <td>Offer Price</td>
                            <td><input type="number" onChange={handleOPriceText} /></td>
                        </tr>
                        <tr>
                            <td>Select Photo</td>
                            <td>
                                <input type="file" onChange={handleFileChange} name="file" />
                                <img src={image.preview} width="100" height="100" alt="Preview" />
                            </td>
                        </tr>
                        <tr>
                            <td>Click to Upload Photo</td>
                            <td><button type="button" onClick={handleSubmit}>Upload</button></td>
                        </tr>
                        <tr>
                            <td>Category</td>
                            <td>
                                <select onChange={handlePCatgSelect}>
                                    {pcatglist.map((item) => (
                                        <option key={item.pcatgid} value={item.pcatgid}>
                                            {item.pcatgname}
                                        </option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><button type="button" onClick={handleNewButton}>New</button></td>
                            <td><button type="button" onClick={handleSaveButton}>Save</button></td>
                            <td><button type="button" onClick={handleShowButton}>Show</button></td>
                        </tr>
                </table>
                <p style={{ backgroundColor: "green", color: "white" }}>
                    Product List
                </p>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Offer Price</th>
                            <th>Category Id</th>
                            <th>Category Name</th>
                            <th>Photo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plist.map((item) => (
                            <tr key={item.pid}>
                                <td>{item.pid}</td>
                                <td>{item.pname}</td>
                                <td>{item.pprice}</td>
                                <td>{item.oprice}</td>
                                <td>
                                    {
                                        pcatglist.map((citem) => {
                                            if (item.pcatgid === citem.pcatgid) {
                                                cname = citem.pcatgname;
                                            }
                                           
                                        })
                                    }
                                    {cname}
                                </td>
                                <td>
                                    <img src={"http://localhost:9191/product/getproductimage/" + item.ppicname} height="100" width="100" alt={item.pname} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </center>
        </div>
    );
}
export default Product;
