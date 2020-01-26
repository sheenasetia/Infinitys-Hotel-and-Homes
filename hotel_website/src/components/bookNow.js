import React from 'react';
import './booknow.css';
import {Navbar} from './navbar';
import {Redirect} from 'react-router-dom';
export class BookNow extends React.Component {
  constructor(){
    super();
    this.state ={
      checkin:"",
      checkout:"",
      rooms:"",
      guest:"",
      submitted:false
    }
    this.handleContinue=this.handleContinue.bind(this);
    this.updatedate=this.updatedate.bind(this);
  }
  async handleContinue(e) {
    e.preventDefault();
    await this.setState({checkin:e.target.checkin.value ,
    checkout:e.target.checkout.value,
    rooms:e.target.rooms.value,
    guest:e.target.guest.value})
    await this.props.confirm((this.props.hotelResp.min_total_price)*(this.state.rooms),
    this.state.rooms,this.state.checkin,this.state.checkout);
    this.setState({submitted:true});

  }

  async updatedate() {
    console.log('update date');
    var firstdate = document.getElementById("checkin").value;
    document.getElementById("checkout").value = "";
    document.getElementById("checkout").setAttribute("min",firstdate);
    console.log(document.getElementById("checkout").getAttribute("min"));
  }
    render() {
      console.log('confirmation rendered');
      let today = new Date();
      let tommorrow = new Date();
      tommorrow.setDate(today.getDate()+1);
      let formatted_date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
      let next_date = tommorrow.getFullYear() + "-" + (tommorrow.getMonth() + 1) + "-" + tommorrow.getDate()
      console.log(formatted_date);
      console.log(next_date);  
      if(this.state.submitted===true)
      return (<Redirect to="/confirmhotel"/>)
        return (
            <div className="booking">
            <Navbar dealLogout={this.props.dealLogout}/>
            <div className="container">
            <form onSubmit={this.handleContinue}>
            <h4>{this.props.hotelResp.hotel_name}</h4>
            <h6>Near {this.props.hotelResp.address}, {this.props.hotelResp.city}</h6>
            <p>Ratings : {this.props.hotelResp.facilities_review_score.rating} - {this.props.hotelResp.facilities_review_score.rating_message}</p>
            <div className="row">
              <div className="col-25">
                <label for="checkin" >Checkin</label>
              </div>
              <div className="col-75">
              <input type="date" name="checkin" id="checkin" min={formatted_date} onChange={this.updatedate} required />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label for="checkout">Checkout</label>
              </div>
              <div className="col-75">
                <input type="date" name="checkout" id="checkout" min={next_date}  required />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label for="guest">Guest Count</label>
              </div>
              <div className="col-75">
                <input type="number" name="guest" min="1" max="10" />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label for="rooms">Rooms Count</label>
              </div>
              <div className="col-75">
                <input type="number" name="rooms" min="1" max={this.props.hotelResp.available_rooms} required />
              </div>
            </div>
            <input type="submit" value="Click here"/> to continue booking...
            </form>
          </div>
          </div>
        )
    }
}

/*
<input type="submit" value="Click here"/> to continue...
*/