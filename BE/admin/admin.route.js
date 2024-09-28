const express = require("express");
const adminRoute = express.Router();
const bodyParser = require("body-parser");
const Admin = require("./admin.model");
const multer = require("multer");
const fs = require("fs");

// Admin Registration
adminRoute.route("/register").post((req, res) => {
    var admin = new Admin(req.body);
    admin.save().then(admin => {
        if (admin != null) {
            res.send("Registration Successful");
        } else {
            res.send("Registration Failed");
        }
    });
});

// Admin Login
adminRoute.route("/login").post((req, res) => {
    var id = req.body.AUserId;
    var pass = req.body.AUserPass;

    Admin.findOne({ $and: [{ "AUserId": id }, { "AUserPass": pass }] })
    .then(admin => {
        if (admin) {
            res.send(admin); // Sending the admin object if found
        } else {
            res.status(401).send({ message: "Invalid Id/Password" }); // Clear message for invalid login
        }
    })
    .catch(err => {
        res.status(500).send("Something went wrong");
    });

});

// Get Admin Image
adminRoute.route('/getimage/:apicname').get((req, res) => {
    res.sendFile("C:/Users/DELL/Desktop/projectbyBS/BE/admin/adminimages/" + req.params.apicname);
});

// Save Admin Image
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "C:/Users/DELL/Desktop/projectbyBS/BE/admin/adminimages/")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

adminRoute.post('/saveadminimage', upload.single('file'), (req, res) => {
    res.json({});
});

// Get Admin Count
adminRoute.route("/getadmincount").get((req, res) => {
    Admin.find().then(admin => {
        res.send(admin);
        res.end();
    }).catch(err => {
        res.send("Something went wrong");
        res.end();
    });
});

// Get Admin Details by ID
adminRoute.route("/getadmindetails/:aid").get((req, res) => {
    var id = req.params.aid;
    Admin.findOne({ "Aid": id }).then(admin => {
        console.log(admin);
        res.send(admin);
        res.end();
    }).catch(err => {
        res.send("Something went wrong");
        res.end();
    });
});

module.exports = adminRoute;
