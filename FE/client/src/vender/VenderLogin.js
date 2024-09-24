import React,{useState} from "react";
import axios from "axios";
import VenderHome from "./VenderHome";
import ReactDOM from "react-dom/client"

function VenderLogin(){
    const [uid,setUId] =useState("");
    const [upass,setUPass]=useState("");

    const handleUIdText=(evt)=>{
        setUId(evt.target.value);
    }
    const handleUPassText=(evt)=>{
        setUPass(evt.target.value);
    }

    const handleLoginButton=()=>{


        axios.get("http://localhost:9191/vender/login/"+uid+"/"+upass)
        .then((res)=>{
            if(res.data.VUserId!=undefined)
            {
                const root=ReactDOM.createRoot(document.getElementById("root"));
                var obj={
                    vfname:res.data.VenderName,
                    vpicname:res.data.VPicName,
                    vid:res.data.Vid
                }
                root.render(
                    <VenderHome data={obj}></VenderHome>
                )
            }
            else{
                alert("Invalid Id/Password");
            }
        });
    }

return(
    <div>
        <center>
            <h4>Vender LoginForm</h4>
            <table>
                <tr>
                    <td>User Id</td>
                    <td>
                        <input type='text' className='form-control'
                        onChange={handleUIdText}/>
                    </td>
                </tr>

                <tr>
                    <td>Password</td>
                    <td>
                        <input type='password' onChange={handleUPassText}
                        className='form-control'/>
                    </td>
                </tr>

                <tr>
                   <td></td>
                   <td>
                    <button type='submit' className='btn btn-success'
                    onClick={handleLoginButton}>Login</button>
                   </td>
                </tr>
            </table>
        </center>
    </div>
);   
}export default VenderLogin;