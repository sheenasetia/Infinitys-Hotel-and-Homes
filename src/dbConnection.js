const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/users' , {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

var db=mongoose.connection;     //instance of connection
db.on('error',function() {      //error handler method
    console.log("Error connecting to db")
})

db.once('open', function() {    //success method
    console.log("Connected to db") 
})