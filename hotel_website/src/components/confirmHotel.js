import React, {Component} from 'react';
import {StripeProvider, injectStripe} from 'react-stripe-elements';
import StripeCheckout from 'react-stripe-checkout';
import {Navbar} from './navbar';
import {Redirect } from 'react-router-dom';
import "./confirmBooking.css";
require('dotenv').config();

export class ConfirmHotel extends Component{
    constructor() {
        super();
        this.state={
            redirectToThankyou:false
        }
        this.handleToken=this.handleToken.bind(this);
    }
    async handleToken(token)
    {
        let obj={
            hotelname:this.props.hotelResp.hotel_name,
            rooms:this.props.rooms,
            checkin:this.props.checkin,
            checkout:this.props.checkout
        }

        const response=await fetch("http://localhost:8081/bookings/add",{
        method:"POST",
        headers: {
            "Content-Type" : "application/json" ,
        },
        body: JSON.stringify(obj)
        })
        console.log(response)
        if(response.ok) {
            this.setState({redirectToThankyou:true})
        }
        else
        {
            alert("Error");
        }

        /*console.log(token);
        var name=this.props.hotelResp.hotel_name;
        var amt=this.props.prc;
        let obj={
            product :{
                name:name,
                price:amt 
            },
            token:token           
        }

        const response=await fetch("http://localhost:8081/checkout",{
        method:"POST",
        headers: {
            "Content-Type" : "application/json" ,
        },
        body: JSON.stringify(obj)
        })
        console.log(response)
        if(response.ok) {
            this.setState({redirectToThankyou:true})
        }
        else
        {
            alert("Error");
        }*/
    }
    render() {
        if(this.state.redirectToThankyou===true)
        {
            return (<Redirect to="/thankyou"/>)
        }
        return (
            <div className="confirmBooking">
            <Navbar dealLogout={this.props.dealLogout}/>
            <div className="outsideContainer">
            <div style={{textAlign:"center"}}>
            <label align="center">Booking Details</label>
            </div>
            <div className="insideContainer">
            <h4>{this.props.hotelResp.hotel_name}</h4>
            <h5>Near {this.props.hotelResp.address}, {this.props.hotelResp.city}</h5>
            <p>Ratings : {this.props.hotelResp.facilities_review_score.rating} - {this.props.hotelResp.facilities_review_score.rating_message}</p>
            <p>Rooms Booked : {this.props.rooms}</p>
            <p>Dated : {this.props.checkin} to {this.props.checkout}</p>
            <h4 style={{color:"red"}}>Total Amount : {this.props.prc.toFixed(2)} INR</h4>
            <div style={{textAlign:"center"}} >
            <StripeCheckout stripeKey={process.env.REACT_APP_STRIPE_API_KEY} token={this.handleToken} 
            amount={this.props.prc.toFixed(2)*100}
             currency='inr' 
             name='INFINITY HOTELS'
             description= 'Make Your Payment'
             label= 'Make Payment' />
            </div>
            </div>
            
            </div>
            </div>
            
        )
    }
}

//pk_test_Kx3kJTWhGpcMyY3Jc6UsHnWZ006B2y9bvO




















































