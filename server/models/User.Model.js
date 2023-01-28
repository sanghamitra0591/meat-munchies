const mongoose= require("mongoose");

const userSchema= mongoose.Schema({})

const UserModel= mongoose.Model("user", userSchema);

module.exports= {
    UserModel
}