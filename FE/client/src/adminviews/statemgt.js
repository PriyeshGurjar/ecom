import React, { useState } from 'react';
import axios from 'axios';
import '../statemgt.css';  // New stylesheet for updated design
import statemap from '../statemap.jpeg'; 
function StateMgt() {
    const [stid, setStId] = useState('');
    const [stname, setStName] = useState('');
    const [status, setStatus] = useState('');
    const [stlist, setStlist] = useState([]);

    const handleStIdText = (evt) => setStId(evt.target.value);
    const handleStNameText = (evt) => setStName(evt.target.value);
    const handleStatusText = (evt) => setStatus(evt.target.value);

    const handleAddNewButton = () => {
        axios.get('http://localhost:9191/state/getall')
            .then((res) => {
                setStId(res.data.length + 1);
                setStatus(1);
            })
            .catch((err) => {
                alert(err);
            });
    };

    const handleSaveButton = () => {
        if (!stid || !stname || !status) {
            alert("Please fill all fields");
            return;
        }
        axios.get(`http://localhost:9191/state/searchbyname/${stname}`)
            .then((res) => {
                if (res.data.stname) {
                    alert("State already exists");
                } else {
                    const obj = { stid, stname, status };
                    axios.post('http://localhost:9191/state/save', obj)
                        .then((res) => {
                            alert(res.data);
                            setStId('');
                            setStName('');
                            setStatus('');
                        })
                        .catch((err) => {
                            alert(err);
                        });
                }
            })
            .catch((err) => {
                alert(err);
            });
    };

    const handleShowButton = () => {
        axios.get('http://localhost:9191/state/getall')
            .then((res) => {
                setStlist(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    };

    const handleSearchButton = () => {
        if (stid) {
            axios.get("http://localhost:9191/state/search/" + stid)
                .then((res) => {
                    if (res.data.stid) {
                        setStId(res.data.stid);
                        setStName(res.data.stname);
                        setStatus(res.data.status);
                    } else {
                        alert("Data not found");
                    }
                }).catch((err) => {
                    alert(err);
                });
        } else if (stname) {
            axios.get("http://localhost:9191/state/searchbyname/" + stname)
                .then((res) => {
                    if (res.data.stid) {
                        setStId(res.data.stid);
                        setStName(res.data.stname);
                        setStatus(res.data.status);
                    } else {
                        alert("Data not found");
                    }
                }).catch((err) => {
                    alert(err);
                });
        }
    };

    const handleUpdateButton = () => {
        if (!stid || !stname || !status) {
            alert("Please fill all fields");
            return;
        }
        const obj = { stid, stname, status };
        axios.put('http://localhost:9191/state/update', obj)
            .then((res) => {
                alert(res.data);
                setStId('');
                setStName('');
                setStatus('');
            })
            .catch((err) => {
                alert(err);
            });
    };

    const handleDeleteButton = () => {
        if (stid) {
            axios.delete('http://localhost:9191/state/delete/' + stid)
                .then((res) => {
                    alert(res.data);
                }).catch((err) => {
                    alert(err);
                });
        } else {
            alert("Please provide the State ID to delete");
        }
    };

    return (
        <div className="state-mgt-container">
            <div className="form-image-section">
                <div className="form-container">
                    <h1 className="heading">State Management System</h1>
                    <p className="description">Manage your states effectively. Add, update, or delete states as needed.</p>
                    <form>
                        <label>State ID</label>
                        <input type="number" onChange={handleStIdText} value={stid} placeholder="Enter State ID" />
                        
                        <label>State Name</label>
                        <input type="text" onChange={handleStNameText} value={stname} placeholder="Enter State Name" />
                        
                        <label>Status</label>
                        <input type="text" onChange={handleStatusText} value={status} placeholder="Enter Status (1 for Enable, 0 for Disable)" />
                        
                        <div className="button-group">
                            <button type="button" onClick={handleAddNewButton} className="btn btn-primary">Add New</button>
                            <button type="button" onClick={handleSaveButton} className="btn btn-success">Save</button>
                            <button type="button" onClick={handleShowButton} className="btn btn-info">Show</button>
                            <button type="button" onClick={handleSearchButton} className="btn btn-secondary">Search</button>
                            <button type="button" onClick={handleUpdateButton} className="btn btn-warning">Update</button>
                            <button type="button" onClick={handleDeleteButton} className="btn btn-danger">Delete</button>
                        </div>
                    </form>
                </div>

                <div className="image-container">
                <img src={statemap} alt="State Map" className='state-image' />
                </div>
            </div>

            <div className="state-list-container">
                <h2>State List</h2>
                <table className="state-list-table">
                    <thead>
                        <tr>
                            <th>State Id</th>
                            <th>State Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stlist.map((item) => (
                            <tr key={item.stid}>
                                <td>{item.stid}</td>
                                <td>{item.stname}</td>
                                <td>{item.status === 1 ? "Enable" : "Disable"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StateMgt;
