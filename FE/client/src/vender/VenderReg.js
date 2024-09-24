import React,{useEffect,useState} from "react";
import axios from "axios";

function VenderReg(){
    const [vuserid,setVUserId]=useState();
    const [vuserpass,setVUserPass]=useState();
    const [vendername,setVenderName]=useState();
    const [vaddress,setVAddress]=useState();
    const [vcontact,setVContact]=useState();
    const [vemail,setVEmail]=useState();
    const [vpicname,setVPicName]=useState();
    const [vid,setVId]=useState();
    const [image,setImage]=useState({preview:"",data:""});
    const [status,setStatus]=useState('');

    const handleVUserIdText=(evt)=>{
        setVUserId(evt.target.value);
    }

    const handleVUserPass=(evt)=>{
        setVUserPass(evt.target.value);
    }

    const handleVenderNameText=(evt)=>{
        setVenderName(evt.target.value);
    }

    const handleAddressText=(evt)=>{
        setVAddress(evt.target.value);
    }

    const handleVContactText=(evt)=>{
        setVContact(evt.target.value);
    }

    const handleVEmailText=(evt)=>{
        setVEmail(evt.target.value);
    }
    const handleVidText=(evt)=>{
        setVId(evt.target.value);
    }

    useEffect(()=>{
        axios.get("http://localhost:9191/vender/getvendercount/").then((res)=>{
            setVId(res.data.length+1);
        }).catch((err)=>{
            alert(err);
        })
    })

    // Registration of Vender
    const handleRegistrationButton=()=>{
        var obj={
            VUserId:vuserid,
            VUserPass:vuserpass,
            VenderName:vendername,
            VAddress:vaddress,
            VContact:vcontact,
            VEmail:vemail,
            VPicName:vpicname,
            Vid:vid,
            Status:"Inactive"  
        }
        axios.post("http://localhost:9191/vender/register/",obj).then((res)=>{
            alert(res.data);
        }).catch((err)=>{
            alert(err);
        });
    }
      
    // browse and save image code 
    const handleSubmit=async(evt)=>{
        evt.preventDefault()
        let formdata=new FormData()
        formdata.append("file",image.data);
        const response=await fetch('http://localhost:9191/vender/savevenderimage',{
            method:'POST',
            body:formdata,
        })
        if(response){
            if(response.statusText=="ok"){
                setStatus("File Uploaded successfully");
            }else{
                setStatus("Failed to Upload file");
            }
        }
    }

    const handleFileChange=(evt)=>{
         const img={
            preview:URL.createObjectURL(evt.target.files[0]),
            data: evt.target.files[0]
         }
         setImage(img);
         setVPicName(evt.target.files[0].name);
    }

    return(
        <div>
            <center>
                <p style={{color:"blue"}}>Vender Registration Form</p>
                <table>
                    <tr>
                        <td>
                            Vender Id
                        </td>
                        <td>
                            {vid}
                        </td>
                    </tr>
                    <tr>
                        <td>User Id</td>
                        <td>
                            <input type="text" onChange={handleVUserIdText} className="form-control"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>
                            <input type="text" onChange={handleVUserPass} className="form-control"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Vender Name</td>
                        <td>
                            <input type="text" onChange={handleVenderNameText} className="form-control"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>
                            <input type="text" onChange={handleAddressText} className="form-control"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Contact</td>
                        <td>
                            <input type="number" onChange={handleVContactText} className="form-control"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>
                            <td>
                                <input type="email" onChange={handleVEmailText} className="form-control"/>
                            </td>
                        </td>
                    </tr>
                    <tr>
                        <td>Select Photo</td>
                        <td>
                            <input type="file" onChange={handleFileChange} name='file'/>
                            <img src={image.preview} width='100' height='100'/>
                        </td>
                    </tr>
                    <tr>
                        <td>Click to upload vender photo</td>
                        <td>
                            <button type="submit" onClick={handleSubmit} className="btn btn-primary">Upload</button>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button type="submit" onClick={handleRegistrationButton} className="btn btn-secondary">Register</button>
                        </td>
                    </tr>
                </table>
            </center>
        </div>
    );
}export default VenderReg;