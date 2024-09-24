const express=require('express');
const paymentDetailsRoute=express.Router();
let PaymentDetails=require("./paymentdetails.model")

// save payment details
paymentDetailsRoute.route
("/paymentdetailsave").post((req,res)=>{
    let paymentdetails=new PaymentDetails(req.body);
    paymentdetails.save().then(bill=>{
        res.send("payment saved");
        res.end();
    }).catch(err=>{
        res.send(err);
        res.end();
    });
});

// get payment details
paymentDetailsRoute.route
("/showpaymentdetails").get((req,res)=>{
    PaymentDetails.find().then(pd=>{
        res.send(pd);
        res.end();
    }).catch(err=>{
        res.send(err);
        res.end();
    });
});

module.exports=paymentDetailsRoute;