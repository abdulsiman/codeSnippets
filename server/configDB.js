import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    db_username:String,
    db_password:String
});


const userModel = mongoose.model("userDataCollection",userSchema);

export default userModel;