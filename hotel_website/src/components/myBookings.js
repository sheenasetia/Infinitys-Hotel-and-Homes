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
            <div className="BookingsContainer">
              <h2>Booking History</h2>
              <hr/>
                {this.state.booking_history.map((res,index)=> {
                    return (
                    <div key={index}>
                      {new Date(res.checkin.slice(0,10)).getTime() < new Date().getTime()?
                      <h6>(past)</h6>:<h6>(active)</h6>}
                      <ul>
                        <li><h5><div className="headin">Hotel Name: </div><div className="content"> {res.hotelname}</div></h5></li>
                        <li><h5><div className="headin">Hotel Rooms: </div><div className="content"> {res.rooms}</div></h5></li>
                        <li><h5><div className="headin">Checkin: </div><div className="content"> {res.checkin.slice(0,10)}</div></h5></li>
                        <li><h5><div className="headin">Checkout: </div><div className="content"> {res.checkout.slice(0,10)}</div></h5></li>
                      </ul>
                      <hr/>
                    </div>)
                  })
                }
            </div>
          </div>
      )
  }
}