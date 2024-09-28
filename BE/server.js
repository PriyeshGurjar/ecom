const express= require('express');
const app= express();
const bodyParser= require('body-parser');
const PORT= 9191;
const cors= require('cors');
const mongoose= require('mongoose');
const config= require('./admin/DB.js');
const stateRoute= require('./admin/state.route.js');
const cityRoute= require('./admin/city.route.js');
const ProductCatgRoute=require("./admin/productcatg.route.js");
const productRoute=require("./product/product.route.js");
const customerRoute=require("./customer/customer.route.js");
const payment=require("./payment.js");
const venderRoute = require('./vender/vender.route.js');
const billRoute = require('./admin/bill/bill.route.js');
// const paymentdetails=require("./admin/billpayment/paymentdetails.route.js");
const paymentDetailsRoute = require('./admin/billpayment/billpayment.route.js');
const adminRoute = require('./admin/admin.route.js');

app.use(cors());
app.use(bodyParser.urlencoded ({extended:true}));
app.use(bodyParser.json());
app.use('/state', stateRoute);
app.use('/city', cityRoute);
app.use('/productcatg', ProductCatgRoute);
app.use("/product",productRoute);
app.use("/customer",customerRoute);
app.use("/payment",payment);
app.use("/vender",venderRoute);
app.use("/bill",billRoute);
app.use("/paymentdetails",paymentDetailsRoute);
app.use('/admin', adminRoute);

mongoose.connect(config.URL,
{ useNewUrlParser:true }).then(
()=> {console.log('Database is connected'+config.URL)},
err=> {console.log('Can not connect to the database'+ err)}
);
app.listen(PORT, function(){
    console.log('Server is running on Port:',PORT);
 });