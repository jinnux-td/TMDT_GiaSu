
const mongoose = require('mongoose');
reqString = {
    type: String,
    required: true
}
reqNumber = {
    type: Number,
    required: true
}
const userSchema = new mongoose.Schema(
    {
        username: reqString,
        password: reqString,
        phone_number: reqString,
        name: reqString,
        address: reqString,
        gender: Boolean,
        dob: Date,
        email: reqString,
        balance: reqNumber
    }
)
module.exports = mongoose.model("User", userSchema)