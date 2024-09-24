
const express=require ("express");
const venderRoute=express.Router();
const bodyParser=require ("body-parser");
const Vender=require ("./vender.model");
var fs=require ("fs");
const multer=require ("multer");

// vender registration code

venderRoute.route("/register").post((req,res)=>{
    var vender=new Vender(req.body);
    vender.save().then((vender)=>{
        if(vender!=null){
            res.send("Registration Successfull");
            res.end();
        }
        else{
            res.send("Registration Failed");
            res.end();
        }
    }).catch((err)=>{
        res.status(400).send('Registration Failed Error'+err);
        
    });
});

// Loogin
venderRoute.route("/login/:vuid/:vpass").get((req,res)=>{
    var id=req.params.vuid;
    var pass=req.params.vpass;
    Vender.findOne({$and:[{"VUserId":id},{"VUserPass":pass}]}).then((vender)=>{
        res.send(vender);
        res.end();
    }).catch((err)=>{
        res.send("Something went wrong");
        res.end();
    });
});

// get Images  
venderRoute.route("/getimage/:vpicname").get((req,res)=>{
    res.sendFile("C:/Users/DELL/Desktop/projectbyBS/BE/vender/venderImages/"+req.params.vpicname);
});

// Image Save
const st=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"C:/Users/DELL/Desktop/projectbyBS/BE/vender/venderImages/")
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    },
})
const upload=multer({storage:st});

venderRoute.post("/savevenderimage",upload.single('file'),(req,res)=>
    {
    res.json({})
    })


// get Vender count 
venderRoute.route("/getvendercount").get((req,res)=>{
    Vender.find().then((vender)=>{
        res.send(vender);
        res.end();
    }).catch((err)=>{
        res.send("something went wrong");
        res.end();
    });
});
//UNABLE DISABLE BY ADMIN 

venderRoute.route('/vendermanage/:vid/:status').put((req,res)=>{
    Vender.updateOne({"Vid":req.params.vid},{"Status":req.params.status}).then((vender)=>{
        res.send("vender status updated");
        res.end();
    }).catch((err)=>{
        res.send((err)=>{
            res.send(err);
            res.end();
        })
    })
})


module.exports=venderRoute