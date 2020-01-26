import React from 'react';
import {Navbar} from './navbar'; 

export class MyBooking extends React.Component {
  constructor() {
    super();
   this.state={
       booking_history:[]
   }
   this.fetchBookings=this.fetchBookings.bind(this);
  }
  async fetchBookings() {
    const res= await fetch("http://localhost:8081/bookings",{
      method:"GET",
      headers: {
          "Content-Type" : "application/json"
      }
      })
      let json=await res.json();
      this.setState({booking_history:json})
      let demo=JSON.stringify(json);
      console.log(json);
      console.log(demo)
  }
  componentDidMount() {
    this.fetchBookings();
  }
  render() {
      return (
          <div>
            <Navbar dealLogout={this.props.dealLogout} />
                {this.state.booking_history.map((res,index)=> {
                    return (
                    <div key={index}>
                      <ul>
                        <li>Hotel Name: {res.hotelname}</li>
                        <li>Hotel Rooms: {res.rooms}</li>
                        <li>Checkin: {res.checkin}</li>
                        <li>Checkout: {res.checkout}</li>
                      </ul>
                      <hr/>
                    </div>)
                  })
                }
          </div>
      )
  }
}