const mongoose = require('mongoose');
const session = require('express-session');

const bookingsSchema = new mongoose.Schema({
    username: String ,
    hotelname: String,
    rooms: String,
    checkin: Date,
    checkout: Date,
    
}) //to create a schema

const Booking = mongoose.model("Bookings" , bookingsSchema);

Booking.findBookings = function(req,callBack) {
    Booking.find({username:req.session.user}, callBack)
}

Booking.addBookings = function(req,callBack) {
    console.log(req.session.user);
    var newBooking={
        username:req.session.user,
        hotelname:req.body.hotelname,
        rooms:req.body.rooms,
        checkin:req.body.checkin,
        checkout:req.body.checkout
    }
    Booking.create(newBooking,callBack)
    
}

module.exports = Booking;