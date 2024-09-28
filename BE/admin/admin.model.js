const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Admin = new Schema({
    AUserId: { type: String },         // Admin User ID
    AUserPass: { type: String },       // Admin Password
    AdminName: { type: String },       // Admin Name
    AContact: { type: Number },        // Admin Contact Number
    AEmail: { type: String },          // Admin Email
    aPicName: { type: String },        // Admin Profile Picture
    Aid: { type: Number }              // Admin ID
}, {
    collection: 'Admin'                // Collection name in MongoDB
});

module.exports = mongoose.model('Admin', Admin);
