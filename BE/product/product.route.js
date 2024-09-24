
const express = require('express');
const productRoute = express.Router();
let Product = require('./product.model');
const multer = require("multer");

// Save product
productRoute.route('/saveproduct').post(function(req, res) {
    let product = new Product(req.body);
    console.log(product);
    product.save().then(product => {
        res.status(200).json({"product": "Product saved successfully", product});
    }).catch(err => {
        res.status(400).send("Unable to save product");
    });
});

// Show all products
productRoute.route('/showproduct').get(function(req, res) {
    Product.find()
        .then(product => {
            console.log(product);
            res.send(product);
        }).catch(err => {
            res.status(400).send("Data not found. Something went wrong.");
        });
});

// Show all products by vender
productRoute.route('/showproductbyvender/:vid').get(function(req, res) {
    Product.find({"vid":req.params.vid})
        .then(product => {
            console.log(product);
            res.send(product);
        }).catch(err => {
            res.status(400).send("Data not found. Something went wrong.");
        });
});


productRoute.route('/getmaxpid').get(function(req, res) {
    Product.find()
    .then(product => {
        console.log(product);
        res.send(product);
    }).catch(err => {
        res.status(400).send("Data not found. Something went wrong.");
    });
});
// Save product image
const stv = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "C:/Users/DELL/Desktop/projectbyBS/BE/product/productimages/");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const uploadv = multer({ storage: stv });
productRoute.post("/saveproductimage", uploadv.single("file"), (req, res) => {
    res.json({});
});

// Get product image
productRoute.route("/getproductimage/:picname").get((req, res) => {
    res.sendFile("C:/Users/DELL/Desktop/projectbyBS/BE/product/productimages/" + req.params.picname);
});

module.exports = productRoute;


// const express = require('express');
// const path = require('path');
// const fs = require('fs');
// const multer = require("multer");
// const Product = require('./product.model'); // Adjust the path as needed


// const productRoute = express.Router();

// // Save product
// productRoute.route('/saveproduct').post(function(req, res) {
//     let product = new Product(req.body);
//     console.log(product);
//     product.save()
//         .then(product => {
//             res.status(200).json({ message: "Product saved successfully", product });
//         })
//         .catch(err => {
//             console.error(err);
//             res.status(400).send("Unable to save product");
//         });
// });

// // Show all products
// productRoute.route('/showproduct').get(function(req, res) {
//     Product.find()
//         .then(products => {
//             console.log(products);
//             res.send(products);
//         })
//         .catch(err => {
//             console.error(err);
//             res.status(400).send("Data not found. Something went wrong.");
//         });
// });

// // Show all products by vendor
// productRoute.route('/showproductbyvender/:vid').get(function(req, res) {
//     Product.find({"vid":req.params.vid})
//         .then(product => {
//             console.log(product);
//             res.send(product);
//         }).catch(err => {
//             res.status(400).send("Data not found. Something went wrong.");
//         });
// });

// // Get max product ID
// productRoute.route('/getmaxpid').get(async function(req, res) {
//     try {
//         const product = await Product.find().sort({ pid: -1 }).limit(1);
//         if (product.length > 0) {
//             res.json({ maxPid: product[0].pid });
//         } else {
//             res.status(404).send("No products found.");
//         }
//     } catch (err) {
//         console.error(err);
//         res.status(400).send("Something went wrong.");
//     }
// });

// // Save product image
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, path.join(__dirname, "productimages")); // Use __dirname for relative path
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     },
// });

// const upload = multer({ storage: storage });

// productRoute.post("/saveproductimage", upload.single("file"), (req, res) => {
//     if (req.file) {
//         res.json({ message: "File uploaded successfully", file: req.file });
//     } else {
//         res.status(400).send("No file uploaded.");
//     }
// });

// // Get product image
// productRoute.route("/getproductimage/:picname").get((req, res) => {
//     const filePath = path.join(__dirname, "productimages", req.params.picname);
//     fs.access(filePath, fs.constants.F_OK, (err) => {
//         if (err) {
//             res.status(404).send("File not found.");
//         } else {
//             res.sendFile(filePath);
//         }
//     });
// });

// module.exports = productRoute;
