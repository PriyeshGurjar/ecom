const express = require('express');
const productcatgRoute = express.Router();
let ProductCatg = require('./productcatg.model');

// Save data
productcatgRoute.route('/addproductcatg').post(function(req, res) {
    var productcatg = new ProductCatg({
        pcatgid: req.body.pcatgid,
        pcatgname: req.body.pcatgname
    });
    productcatg.save().then(productcatg => {
        res.send("Product category Saved successfully");
    }).catch(err => {
        res.status(400).send("Unable to save product category");
    });
});

// Show all product categories
productcatgRoute.route('/showproductcatg').get(function(req, res) {
    ProductCatg.find()
        .then(productcatg => {
            res.send(productcatg);
        }).catch(err => {
            res.status(400).send(err);
        });
});

productcatgRoute.route
('/searchproductcatg/:pcatgid').get(function(req,res){
    ProductCatg.findOne({"pcatgid":req.params.pcatgid})
    .then(pcatgname=>{
        res.send(pcatgname);
        res.end();
    }).catch(err=>{
        res.send(err);
        res.end();
    })
});

productcatgRoute.route
('/searchproductcatgid/:pcatgname').get(function(req,res){
    ProductCatg.findOne({"pcatgname":req.params.pcatgname})
    .then(pcatgid=>{
        res.send("pcatgid");
        res.end();
    }).catch(err=>{
        res.send(err);
        res.end();
    })
});

//update
productcatgRoute.route
('/updateproductid/:pcatgid/:pcatgname').put(function(req,res){
    ProductCatg.updateOne({"pcatgid":req.params.pcatgid},{"pcatgid":req.params.pcatgid, "pcatgname":req.params.pcatgname})
    .then(()=>{
        res.send("updated successfully");
        res.end();
    }).catch(err=>{
        res.send(err);
        res.end();
    })
});

//delete
productcatgRoute.route
('/deleteproduct/:pcatgid').delete(function(req,res){
    ProductCatg.deleteOne({"pcatgid":req.params.pcatgid})
    .then(()=>{
        res.send("deleted successfully");
        res.end();
    }).catch(err=>{
        res.send(err);
        res.end();
    })
});

module.exports = productcatgRoute;
