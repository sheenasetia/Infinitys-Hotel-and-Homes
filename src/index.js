const express = require("express"); //import
const bodyParser = require("body-parser");
require('./dbConnection');
var app=express(); //call constructor
var users = require('./routes/users');
var bookings = require('./routes/bookings');
var path = require('path'); 
const router = express.Router();
const session = require('express-session');
const stripe = require("stripe")("sk_test_mPcsAk5pOxgeGFdTcf0pillp00L49Bgxt5");



app.use(bodyParser.json());

app.use(session({
    key: "hotel",
    secret: "hotelsecret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 6*60*1000
    }
}))

//app.use(express.static(path.join(__dirname, './public')));
app.use(express.static('public'))
app.use("*",(req,res,next) => {
    console.log("Middleware is called");
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Access-Control-Allow-Headers,Authorisation,X-Requested-With')
    res.setHeader('Access-Control-Allow-Methods','*')
    res.setHeader('Access-Control-Allow-Credentials',true)

    next();
})


app.use('/users',users);
app.use('/bookings',bookings);
app.use("*",(req,res)=>{
    res.sendFile(path.join(__dirname,'../hotel_website','build','index.html'))
})
/*app.post("/checkout",(req,res)=>{
    console.log(req.body);

    let error;
    let status;
    try {
        const { product,token } = req.body;

        const customer = stripe.customers.create({
            email:token.email,
            source: token.id
        })

        const charge = stripe.charges.create(
            {
                amount: product.price * 100, 
                currency: 'inr',
                customer: customer.id,
                receipt_email:token.email,
                description:`Purchased the ${product.name}`,
            }
        )
        console.log(`Charge : ${charge}`);
        return res.status(200).send('success');
    }
    catch(error) {
        console.log(`Error : ${error}`);
        return res.status(400).send('bad request');
    }
})*/

app.listen(8081,()=> {
    console.log('Server is listening to port 8081');
});