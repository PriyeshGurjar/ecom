import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../index.css';

function CityMgt() {
    const [ctid, setCtId] = useState();
    const [ctname, setCtName] = useState();
    const [stid, setStId] = useState();
    const [status, setStatus] = useState();
    const [ctlist, setCtlist] = useState([]);
    const [stlist, setStlist] = useState([]);
    var statename="";


    const handleCtIdText=(evt) => {
        setCtId(evt.target.value);
    }

    
    const handleCtNameText = (evt) => {
        setCtName(evt.target.value);
    }

    const handleStIdSelect=(evt) => {
        setStId(evt.target.value);
    }

    const handleStatusText = (evt) => {
        setStatus(evt.target.value);
    }


    useEffect(() => {
        axios.get("http://localhost:9191/state/getall")
            .then((res) => {
                setStlist(res.data);
            })
            .catch((err) => {
                alert("Error fetching states: " + err.message);
            });
    }, []);
    
    // useEffect(()=>{
    //     axios.get("http://localhost:9191/state/show").then((res)=>{
    //         setStlist(res.data);
    //     }).catch((err)=>{
    //         alert(err);
    //     });
    // })

    const handleAddNewButton = () => {
        axios.get('http://localhost:9191/city/getall')
            .then((res) => {
                setStId(res.data.length + 1);
                setStatus(1);
            })
            .catch((err) => {
                alert(err);
            });
    }

    const handleSaveButton = () => {
        if (ctid === "" || ctid === undefined || ctname === "" || ctname === undefined || status === "" || status === undefined) {
            alert("Please fill all fields");
            return;
        } else {
            axios.get(`http://localhost:9191/city/searchbyname/${ctname}`)
                .then((res) => {
                    if (res.data.ctname !== undefined) {
                        alert("State already exists");
                    } else {
                        var obj = {
                            ctid: ctid,
                            ctname: ctname,
                            stid:stid,
                            status: status
                        }
                        axios.post('http://localhost:9191/city/save',obj)
                            .then((res) => {
                                console.log(res.data);
                                alert(res.data);
                                setCtId("");
                                setStId("");
                                setCtName("");
                                setStatus("");
                            })
                            .catch((err) => {
                                alert(err);
                            });
                    }
                })
                .catch((err) => {
                    alert(err);
                });
        }
    }

    const handleShowButton = () => {
        axios.get('http://localhost:9191/city/getall')
            .then((res) => {
                setCtlist(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    }

    const handleSearchButton=()=>{
        if(ctid!=undefined&&ctid!=""){
            axios.get("http://localhost:9191/city/search/"+ctid).then((res)=>{
                if(res.data.stid!=undefined){
                    setCtId(res.data.ctid);
                    setCtName(res.data.ctname);
                    setStId(res.data.stid);
                    setStatus(res.data.status);
                }else{
                    alert("data not found");
                }
            }).catch((err)=>{
                alert(err);
            });
        }
        if(ctname!=undefined&&ctname!=""){
            axios.get("http://localhost:9191/city/searchbyname/"+ctname).then((res)=>{
                if(res.data.stid!=undefined){
                    setCtId(res.data.ctid);
                    setCtName(res.data.ctname);
                    setStId(res.data.stid);
                    setStatus(res.data.status);
                }else{
                    alert("data not found");
                }
            }).catch((err)=>{
                alert(err);
            });
        }
    }


    const handleUpdateButton = () => {
        if (ctid === "" || ctid === undefined || ctname === "" || ctname === undefined || status === "" || status === undefined || stid === "" || stid === undefined) {
            alert("Please fill all fields");
            return;
        } else {
            const obj = {
                ctid:ctid,
                ctname: ctname,
                stid: stid,
                status: status
            };
            axios.put('http://localhost:9191/city/update', obj)
                .then((res) => {
                    alert(res.data);
                    setCtId("");
                    setCtName("");
                    setStId("");
                    setStatus("");
                })
                .catch((err) => {
                    alert(err);
                });
        }
    }

    const handleDeleteButton = () => {
        if (ctid !=undefined && ctid != "" ) {
            axios.delete('http://localhost:9191/city/delete/'+ctid)
                .then((res) => {
                    alert(res.data);
                }).catch((err) => {
                    alert(err);
                });
        }else{
            alert("fill the state id to delete");
        }
    }

    return (
        <div className="city-mgt-container">
            <center><h6>CITY MANAGEMENT</h6></center>
            <div className='form-container'>
                <table>
                    <tbody>
                        <tr>
                            <td>City Id</td>
                            <td><input type='number' onChange={handleCtIdText} value={ctid} /></td>
                        </tr>
                        <tr>
                            <td>City Name</td>
                            <td><input type='text' onChange={handleCtNameText} value={ctname} /></td>
                        </tr>
                        <tr>
                            <td>State Name</td>
                            <td>
                                <select onChange={handleStIdSelect}>
                                    <option value="0">Select State</option>
                                    {stlist.map((item) => (
                                        <option key={item.stid} value={item.stid}>{item.stname}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td><input type='text' onChange={handleStatusText} value={status} /></td>
                        </tr>
                    </tbody>
                </table>
                <center><div className="button-group">
                    <button onClick={handleAddNewButton} className='btn btn-primary'>Add New</button>
                    <button onClick={handleSaveButton} className='btn btn-success'>Save</button>
                    <button onClick={handleShowButton}className='btn btn-secondary'>Show</button>
                    <button onClick={handleSearchButton}className='btn btn-info'>Search</button>
                    <button onClick={handleUpdateButton}className='btn btn-warning'>Update</button>
                    <button onClick={handleDeleteButton}className='btn btn-danger'>Delete</button>
                </div></center>
            </div>
            <div className='table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>City Id</th>
                            <th>City Name</th>
                            <th>State Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ctlist.map((item) => (
                            <tr key={item.ctid}>
                                <td>{item.ctid}</td>
                                <td>{item.ctname}</td>
                                <td>{stlist.find(stitem => item.stid === stitem.stid)?.stname}</td>
                                <td>{item.status === 1 ? "Enable" : "Disable"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CityMgt;