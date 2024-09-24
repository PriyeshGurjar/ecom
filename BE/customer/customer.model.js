var mongoose =require('mongoose');
const Schema=mongoose.Schema;
var Customer= new Schema({
    CUserid:{type: String},
    CUserPass:{type: String},
    CustomerName:{type: String},
    StId:{type: Number},
    CtId:{type:Number},
    CAddress:{type:String},
    CContact:{type:Number},
    CEmail:{type:String},
    cPicName:{type: String},
    Cid:{type: Number},
 },
 {
collection:'Customer'
 }
);
module.exports = mongoose.model('Customer',Customer);