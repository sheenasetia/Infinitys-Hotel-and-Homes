const express = require('express');
const router = express.Router();
const session = require ('express-session');
const Booking = require('./../models/bookings')


router.get('/' , (req,res)=> {
    Booking.findBookings(req, (error,response)=>{
        if(error) {
            console.log('Error : ',error);
           
        }
        if(response) {
            console.log('Success Response is : ',response);
            res.send(response);
        }
    });
})


router.post('/add',(req,res)=>{
   
    Booking.addBookings(req,(error,response)=>{
        if(error) 
        {
            console.log('Error : ',error);
            return res.status(500).send();
        }
        if(response) {
            console.log('Success Response is: ',response);
            res.send(response)
        }
    });       
})


module.exports = router;