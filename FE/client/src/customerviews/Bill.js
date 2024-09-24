// import React,{useEffect ,useState} from "react";
// import axios from "axios";

// function Bill(props)
// {
//     const [mydate,setMyDate]=useState('');
//     const [custdata,setCustData]=useState([]);
//     const [cname,setCname]=useState('');
//     const [caddress,setCAddress]=useState('');
//     const [ccontact,setCContact]=useState('');
//     const [sitems,setSItem]=useState([]);
//     var total=0;
//     var cid=props.data.cid;
//     useEffect(()=>
//     {
//         for (var i=0 ;i<props.data.selitems.length;i++)
//         {
//            sitems.push(props.data.selitems[i]);
             
//         }
//         //alert ("item count in sitem="+sitems.length")
//         sitems.push(props.data.selitems);
//         //alert ("item count ="+props.data.selitems.length);
//         axios.get("http://localhost:9191/customer/getcustomerdetails/"+props.data.cid).then((res)=>
//         {   setCustData(res.data);
//             setCname(res.data.CustomerName);
//             setCAddress(res.data.CAddress);
//             setCContact(res.data.CContact);
           
//             mydateFun();

//         }).catch((err)=>
//         {
//             alert(err);
//         })

//     },[]);

//     function mydateFun()
//     {
//         const date =new Date();
//         let day = date.getDate();
//         let month= date.getMonth()+1;
//         let year =date.getFullYear();
//         let currentDate ='${day}-${month}-${year}';
//         setMyDate(currentDate);

//     }
//     function refreshPage()
//     {
//         window.location.reload(false);
//     }
//     const handleRemoveButton=(pid)=>{
//         alert('selected item will remove from cart'+pid)
//         for (var i=0;i<sitems.length;i++)
//         {
//             if (sitems[i].pid==pid)
//             {
//                 sitems.splice(i,1);
//             }
//         }
//         /* alert ("remaining items "+props.data.selitems,length)
//         for (var i=0;i<props.data.selitems.length;i++)
//         {
//         alert(props.data.selitems[i].pname);
//         }
//         //refreshPage();
        
//         */
//     }
// //const  [selitems,setSelitems]=useState([]);
// //var total=0;
// function loadScript(src)
// {
//     return new Promise((resolve)=>
//     {
//       const script =document.createElement('script');
//       script.src=src;
//       script.onload=()=>
//       {
//         resolve(true);
//       };
//       script.onerror=()=>
//         {
//           resolve(false);
//         }
//         document.body.appendChild(script);
//     });
// }
// async function displayRazorpay()
// {
//     const res = await loadScript(
//         "https://checkout.razorpay.com/v1/checkout.js"
//     );
//     if (!res)
//     {
//         alert("Razorpay SDK failed to load .Are you online ?");
//         return ;
//     }
//     var myamount=total*100;
//     //creating a new order 
//     const result =await axios.post("http://localhost:9191/payment/orders/"+myamount);
//     if (!result)
//     {
//         alert("server error.are you online ?");
//         return;

//     }
//     //getting the order detAIL back
//     const {amount ,id:order_id,currency}=result.data;
//     const options={
//         key:"rzp_test_8CxHBNuMQt1Qn8",// enter key id generated from the dashboard
//         amount:amount.toString(),
//         currency:currency,
//         name:"shyam's shoping site",
//         description:"Test Transsaction ",
//         image:{},
//         order_id:order_id,
//         handler:async function (response)
//         {
//             const data={
//                 orderCreationId:order_id,
//                 razorpayPaymentId:response.razorpay_payment_id,
//                 razorpayOrderId:response.razorpay_signature,
//             };
//             alert(data.razorpayPaymentId)
//             const result =await axios.post("http://localhost:9191/payment/success",data);
//             alert(result.data);
//         },
//         prefill:{
//             name:"shyam's shop",
//             email:"yshyam1400@gmail.com",
//             contact:"1234567890",
//         },notes:{
//             addrress:"u info",

//         },
//         theme:{
//             colors:"#61dafb",
//         }
//     };

//       const payementObject= new window.Razorpay(options);
//       payementObject.open();

   
// }
// return(
//     <div>
//     <table>
//     <tr> 
//     <td> Customer Id</td>
//     <td>{cid}</td>
//     </tr>
//     <tr>
//     <td> Address</td> 
//       <td>{caddress}</td>    
//     </tr>
//     <tr>
//     <td> Coantact</td> 
//       <td>{ccontact}</td>    
//     </tr>
//     <tr>
//     <td> BillDate</td> 
//       <td>{mydate}</td>    
//     </tr>
    
//     </table>
//     <center>
//     <h4 style={{backgroundColor:"green"}}>Bill</h4>
//     <table border="1">
//     <tr> 
//     <th>ID</th>
//     <th>product</th>
//     <th>price</th>
//     <th>photo</th>
//     </tr>
//     {
//         props.data.selitems.map((item)=>(
//             <tr>
//             <td> {item.pid}</td>
//             <td> {item.pname}</td>
//             <td> {item.oprice}</td>
//             <img src={"http://localhost:9191/product/getproductimage/"+item.ppicname} height={"50"} width={50} />
//             <button type="submit" onClick={handleRemoveButton}>remove</button>
//             </tr>
//         ))
//     }
    
//     </table>
    
//     {
//         props.data.selitems.map((item)=>{
            
//             total=total+item.oprice
           
//     })
//     }

//     <h4 style={{backgroundColor:"green"}}> total amount={total}</h4>
//     <button type="submit" onClick={displayRazorpay}>Pay Now</button>
//     </center>

    
//     </div>
// )

// }export default Bill;



// npm install razorpay  --save library provides payemnets  gateway,is used tp implenet online paymnet functionality
// payement gateway is used to implement online payement functionality.
import React ,{ useEffect,useState} from "react";
import axios from "axios";
// import logo from "../logo.svg"


function  Bill(props){       //ProductList.js m render  obj={selitems:selitems, cid:ccid};
    const [mydate,setMydate]=useState();
    const [custdata,setcusdata]=useState();
    const [cname,setCName]=useState();
    const [caddress,setCAddress]=useState();
    const [ccontact,setCContact]=useState();
    const [sitems,setSItems]=useState([]);
    var total=0;
    var nextbillid="";
   
    useEffect(()=>{
        alert("props length="+props.data.selitems.length+" selitems" +"cid="+props.data.cid);
        for(var i=0;i<props.data.selitems.length;i++)
        {
            sitems.push(props.data.selitems[i]);
        }
        alert ("item count in sitenm="+sitems.length)
       

        axios.get("http://localhost:9191/customer/getcustomerdetails/"+props.data.cid).then((res)=>{
            setCName(res.data.CustomerName);
            setCAddress(res.data.CAddress);
            setCContact(res.data.CContact);
            mydateFun();
        }).catch((err)=>{
            alert(err);
        })
    },[]);

    function mydateFun()
    {
       const date =new Date();
       let day=date.getDate();
       let month=date.getMonth()+1;
       let year=date.getFullYear();
       let currentDate="${day}-${month}-${year}";
       console.log(currentDate);
       setMydate(currentDate);
    }

    //  function refreshpage() {
    //      window.location.reload(false);
    //  }

    //  const handleRemoveButton=(pid)=>{
    //     alert("selected item will remove from cart"+pid)
    //     for(var i=0;i<sitems.length;i++)
    //     {
    //         if(sitems[i].pid==pid)
    //         {
    //             sitems.splice(i,1);
    //         }
    //     }
    //  }

     function loadscript(src){
        return new Promise ((resolve)=>{
            const script=document.createElement("script");
            script.src=src;
            script.onload=()=>{
                resolve(true);
            };
            script.onerror=()=>{
                resolve(false);
            };
            document.body.appendChild(script);
        });
     }
    
    //  BE bill.route.js
    function SaveBill()
    {   
      alert("sellitem length:="+sitems.length);
        // var nextbillid="";
        axios.get("http://localhost:9191/bill/getbillid/").then((res)=>{
          
            nextbillid=parseInt(res.data[0].billid)+1;

       const date=new Date();
       let day=date.getDate();
       let month=date.getMonth()+1;
       let year=date.getFullYear();
       let currentDate="${day}-${month}-${year}";
    //    setMydate(currentDate);     

       sitems.map((item)=>{
        alert("pid:="+item.pid)
        var billobj={
            billid:nextbillid,
            billdate:currentDate,
            cid:props.data.cid,
            pid:item.pid,
        }
   
        axios.post("http://localhost:9191/bill/billsave",billobj).then((res)=>{
            
            alert(res.data);
        })
        }).catch((err)=>{
            alert("inner"+err);
       });
    }).catch((err)=>{
        alert("outer"+err);
    })
    }
     

     async function displayRazorypay(){
        SaveBill();
        // 
        const res=await loadscript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );
        if(!res){
            alert("razorpay sdk failed to load are you online");
            return;
        }
      var myamount=total*100;
    //   creatin a new order
     const result =await axios.post("http://localhost:9191/payment/orders/"+myamount);
     if(!result){
        alert("server error are you online?");
        return;
     }
    //  getting the order details back
    const {amount,id:order_id,currency}=result.data;
      
    const options={
        key:"rzp_test_8CxHBNuMQt1Qn8",//enter the key id generated from  the dashbord
        amount:amount.toString(),
        currency:currency,
        name:"universal informatics Pvt.ltd.indore",
        description:"test transaction ",
        // image:{logo},
        order_id: order_id,
        handler: async function (response) {
            const data={
                orderCreationId: order_id,
                razorpayPaymentId:response.razorpay_payment_id,
                razorpayOrderId:response.razorpay_order_id,
                razorpaySignature:response.razorpay_signature,
            };
            alert(data.razorpayPaymentId)
            const result =await axios.post("http://localhost:9191/payment/success",data);
            alert(result.data);

         // save payment details
            const paydetlobjdata={
                orderCreationId: order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId:response.razorpay_order_id,
                razorpaySignature:response.razorpay_signature,
                cid:props.data.cid,
                billid:nextbillid,
                amount:amount
            };
            axios.post("http://localhost:9191/paymentdetails/paymentdetailsave",paydetlobjdata).then((res)=>{
                alert(res.data);
            }).catch((err)=>{
                alert(err);
            })

        },
        prefille:{
            name:"universal informatics" ,
            email:"universal@gmail.com",
            contact:7895526655,
        },
        notes:{
            address:" universal informatics indore pvt  ltd",
        },
        theme:{
            color:"#61dafb",
        }, 
    }
    const paymentObject=new window.Razorpay(options);
    paymentObject.open();
    }

    return(
        <div>
            <table>
                <tr>
                    <td>Customer id</td>
                    <td>{props.data.cid}</td>
                </tr>

                <tr>
                    <td>Customer name</td>
                    <td>{cname}</td>
                </tr>

                <tr>
                    <td>address</td>
                    <td>{caddress}</td>
                </tr>
                   
                <tr>
                    <td>Contact </td>
                    <td>
                        {ccontact}
                    </td>
                </tr>
                <tr>
                    <td>Bill Date</td>
                    <td>
                        {mydate}
                    </td>
                </tr>
            </table>

            <center>
                <h4 style={{backgroundcolor:"green"}}>Bill</h4>
             <table border="1">
                <tr>
                    <th>id</th>
                    <th>product name</th>
                    <th>price</th>
                    <th>Photo</th>
                </tr>
                {
                    props.data.selitems.map((item)=>(
                        <tr>
                            <td>{item.pid}</td>
                            <td>{item.pname}</td>
                            <td>{item.oprice}</td>
                            <img src={"http://localhost:9191/product/getproductimage/"+item.ppicname} height={50} width={50}/>
                        </tr>
                    ))
                }
             </table>
             {
                props.data.selitems.map((item)=>{
                    total=total+item.oprice;
                })
             }
             <h4 style={{backgroundColor:"grren"}}>Total Amount {total}</h4>
             <button type=" submit"  onClick={displayRazorypay}>pay now </button>
            </center>
        </div>
    );
}export default Bill;