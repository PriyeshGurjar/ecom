var mongoose=require ("mongoose");
var Schema=mongoose.Schema;
var Vender=new Schema({
    VUserId:{type:String},
    VUserPass:{type:String},
    VenderName:{type:String},
    VAddress:{type:String},
    VContact:{type:String},
    VEmail:{type:String},
    VPicName:{type:String},
    Vid:{type:String} ,
    status:{type:String}  // unique id for every vender start from one
},{collection:"Vender"});
module.exports=mongoose.model("Vender",Vender);