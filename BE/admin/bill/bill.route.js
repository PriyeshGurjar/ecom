const express=require ("express");
const billRoute=express.Router();
let Bill=require ("./bill.model");

// Save Bill
billRoute.route("/billsave").post((req,res)=>{
    let bill=new Bill(req.body);
    //  console.log("billsave="+req.body.billid);
    bill.save().then((bill)=>{
        res.send({'bill':'bill added successfully'})
    }).catch((err)=>{
        res.send(err);
    })
})

billRoute.route("/billshowbillids/:cid").get((req,res)=>{
    Bill.distinct("billid",{"cid":req.params.cid}).then((bill)=>{
        res.send(bill);
        res.end();
    }).catch((err)=>{
        res.send(err);
        res.end();
    })
})

// show bill by costomer id
billRoute.route('/billshow/:cid').get ((req,res)=>{
    Bill.find({"cid":req.params.cid}).then((bill)=>{
        res.send(bill);
        res.end();
    }).catch((err)=>{
        res.send(err);
        res.end();
    });
});


// get id of last entered bill to generate Id for next Bill
billRoute.route("/getbillid").get((req,res)=>{
    Bill.find().sort({"billid":-1}).limit(1).then((bill)=>{
        console.log(bill);
        res.send(bill);
        res.end();
    }).catch((err)=>{
        res.send(err);
        res.send();
    })
})

// get bill details by Billid
billRoute.route('/showbillbyid/:billid').get((req,res)=>{
    Bill.find({"billid":req.params.billid}).then(bill=>{
        res.send(bill);
        res.end();
    }).catch((err)=>{
        res.send(err);
        res.end()
    })
})

module.exports=billRoute;