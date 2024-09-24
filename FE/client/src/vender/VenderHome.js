

import React from "react";
import Product from "../productview/product";
import ReactDOM from "react-dom/client";

function VenderHome(props){      //venderlogin.js m render  obj={ vfname:res.data.VenderName, vpicname:res.data.VPicName,vid:res.data.Vid}
 const handleAddProduct=()=>{
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Product data={props.data.vid}></Product>)
 }
 return(
   <div>
      <h4 style={{backgroundColor:"yellow"}} > Vender Home Page</h4>
      <h5>Vender Id {props.data.vid}</h5>
      <h5>Welcome{props.data.vfname}</h5>
      <img src={"http://localhost:9191/vender/getimage/"+props.data.vpicname} height={100} width={100}/>

      <button onClick={handleAddProduct}>Add Product</button>
   </div>
 );
}export default VenderHome;