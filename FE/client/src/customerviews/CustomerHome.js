import React from "react";
import ProductList from "../productview/ProductList";
import ReactDOM from "react-dom/client";
import BillByID from "./BillByID";

function CustomerHome(props){   //CustomerLogin.js m render   var obj = {  cfname: res.data.CustomerName, cpicname: res.data.CPicName, cid: res.data.Cid};
    
    const handleShoppingButton=()=>{
        const root=ReactDOM.createRoot(document.getElementById("root"));
        var cid=props.data.cid;
        root.render(<ProductList data={cid}></ProductList>);
    }
    const handleShowButton=()=>{
        const root=ReactDOM.createRoot(document.getElementById("root"));
        var cid=props.data.cid;
        root.render(<BillByID data={cid}></BillByID>);
    }
    return(
        <div>
            customer id {props.data.cid}
            <h4 style={{backgroundColor:"yellow"}}>Customer Home Page</h4>
            <h5>
                Welcome {props.data.cfname}
            </h5>
          <img src={"http://localhost:9191/customer/getimage/"+props.data.cpicname} height={100} width={100}/>
            
            <button type="submit" onClick={handleShoppingButton}>Shopping</button>

            <button type="submit" onClick={handleShowButton}>Show Bills</button>
            
        </div>
    )
}
export default CustomerHome;