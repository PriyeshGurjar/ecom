import React,{useState} from 'react';
import axios from "axios";
import CustomerHome from "./CustomerHome";
import ReactDOM from 'react-dom/client';

function CustomerLogin()
{
    const[uid,setUId]=useState();
    const[upass,setUPass]=useState();

    const handleUIdText=(evt)=>{
        setUId(evt.target.value);
    }
    const handleUPassText=(evt)=>{
        setUPass(evt.target.value);
    }

    const handleLoginButton=()=>{
        var obj={
            CUserId:uid,
            CUserPass:upass
        }

        axios.post("http://localhost:9191/customer/login",obj)
        .then((res)=>{
            if(res.data.CUserId!=undefined)
            {
                const root=ReactDOM.createRoot(document.getElementById("root"));
                var obj={
                    cfname:res.data.CustomerName,
                    cpicname:res.data.CPicName,
                    cid:res.data.Cid
                }
                root.render(
                    <CustomerHome data={obj}></CustomerHome>
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
            <h4>Customer LoginForm</h4>
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
}export default CustomerLogin;