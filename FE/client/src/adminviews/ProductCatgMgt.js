import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../index.css';

function ProductCatgMgt() {
    const [pcatgid, setPCatgId] = useState(0); // Initialize with a default value
    const [pcatgname, setPCatgName] = useState("");
    const [pcatgList, setPCatgList] = useState([]);

        const handlePCatgIdText = (evt) => {
        setPCatgId(evt.target.value);
    }

    const handlePCatgNameText = (evt) => {
        setPCatgName(evt.target.value);
    }

    useEffect(() => {
        axios.get("http://localhost:9191/productcatg/showproductcatg")
            .then((res) => {
                setPCatgList(res.data);
                setPCatgId(res.data.length + 1); // Ensure this works correctly
            })
            .catch((err) => {
                alert("Error fetching product categories: " + err.message);
            });
    }, []);

    const handleSaveButton = () => {
        const obj = {
            pcatgid: pcatgid,
            pcatgname: pcatgname
        };
        axios.post('http://localhost:9191/productcatg/addproductcatg', obj)
            .then((res) => {
                alert(res.data);
                handleShowButton(); // Refresh list after adding
            })
            .catch((err) => {
                alert("Error saving product category: " + err.message);
            });
    }

    const handleShowButton = () => {
        axios.get('http://localhost:9191/productcatg/showproductcatg')
            .then((res) => {
                setPCatgList(res.data);
            })
            .catch((err) => {
                alert("Error fetching product categories: " + err.message);
            });  
    }

    const handleUpdateButton = () => {
        axios.put("http://localhost:9191/productcatg/updateproductid/"+pcatgid+"/"+pcatgname).then((res)=>{
            alert(res.data);
        }).catch(err=>{
            alert(err);
        });
    };

   

    const handleDeleteButton = () => {
        axios.delete("http://localhost:9191/productcatg/deleteproduct/"+pcatgid)
            .then((res) => {
                alert(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    };

    const handleSearchButton = () => {

        if(pcatgid!=undefined && pcatgid!=""){
        axios.get("http://localhost:9191/productcatg/searchproductcatg/"+pcatgid)
            .then((res) => {
                if(res.data.pcatgid!=undefined)
                {
                    setPCatgName(res.data.pcatgname);
                    
                    // setPCatgId(res.data.pcatgid);
                    // setPCatgName(res.data.pcatgname);
                    // setPCatgList(res.data.pcatglist);
                }
                else{
                    alert("Data not Found");
                }
            })
            .catch((err) => {
                alert(err);
            });
    }
    else{
        if(pcatgname!=undefined && pcatgname!=""){
            axios.get("http://localhost:9191/productcatg/searchproductcatgid/"+pcatgname)
                .then((res) => {
                    if(res.data.pcatgname!=undefined)
                    {
                        setPCatgId(res.data.pcatgid);
                        
                        // setPCatgId(res.data.pcatgid);
                        // setPCatgName(res.data.pcatgname);
                        // setPCatgList(res.data.pcatglist);
                    }
                    else{
                        alert("Data not Found");
                    }
                })
                .catch((err) => {
                    alert(err);
                });
        }
    }
}
    return (
        <div>
            <center>
                <h6>Product Category Form</h6>
                <table>
                    <tbody>
                        <tr>
                            <td>Product Id</td>
                            <td>{pcatgid}</td>
                        </tr>
                        <tr>
                            <td>Category Name</td>
                            <td>
                                <input
                                    type='text'
                                    onChange={handlePCatgNameText}
                                    className='form-control'
                                    value={pcatgname} // Ensure the input reflects the state
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={handleSaveButton} className='btn btn-success'>Save</button>
                            </td>
                            <td>
                                <button onClick={handleShowButton} className='btn btn-secondary'>Show</button>
                            </td>
                            <td>
                                <button onClick={handleSearchButton} className='btn btn-info'>Search</button>
                            </td>
                            <td>
                                <button onClick={handleUpdateButton} className='btn btn-warning'>Update</button>
                            </td>
                            <td>
                                <button onClick={handleDeleteButton} className='btn btn-danger'>Delete</button>
                            </td>
                           
                            
                        </tr>
                    </tbody>
                </table>
                <p>Product Category List</p>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Category Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pcatgList.map((item) => (
                            <tr key={item.pcatgid}>
                                <td>{item.pcatgid}</td>
                                <td>{item.pcatgname}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </center>
        </div>
    );
}

export default ProductCatgMgt;
