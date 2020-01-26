const mongoose = require('mongoose');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const usersSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    username: { type: String, unique: true},
    password: String,
    mobile: Number
    
}) //to create a schema

const User = mongoose.model("Users" , usersSchema);

User.findUsers = function(req, callBack) {
    User.find({},callBack)
      //call find function of mongoose which is same as find of mongodb
}

User.checkForUser = function(req,callBack) {
    let user=req.body;
    User.findOne({username:req.body.username},function(err,user){
        if(user) {
        console.log(user);
        req.session.user=user.username;
        bcrypt.compare(req.body.password,user.password,callBack);
        }
        else
        {
            callBack(err,null);
        }
    })
}

User.addUsers = function(req,callBack) {
    bcrypt.genSalt(10,function(err,salt){

        bcrypt.hash(req.body.password,salt,function(err,hash)
        {
            var newUser={
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                username:req.body.username,
                password:hash,
                mobile:req.body.mobile
            }
            User.create(newUser,callBack)
        })
    })
    //let user=req.body;
    
}

module.exports = User;