import React from 'react';
import {Navbar} from './navbar';
import { BookNow } from './bookNow';
export class HotelDetails extends React.Component {
  constructor() {
    super();
    this.state = {
        descrip:"",
        facilities:[],
        reviews:[],
        map:""
    }
  }

  componentDidMount() {
    console.log(this.props.hotelResp.hotel_id)
    
    /*description*/
    fetch(`https://apidojo-booking-v1.p.rapidapi.com/properties/get-description?hotel_ids=${this.props.hotelResp.hotel_id}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "apidojo-booking-v1.p.rapidapi.com",
        "x-rapidapi-key": "9f8ad6c750mshf0b1f680b88141ep1deb54jsndb7cd93136e0"
      }
    })
    .then((response)=> {
      return response.json()
    })
    .then(res => {
      console.log(JSON.stringify(res));
      this.setState({descrip:res[1].description})  
    })
    .catch(err => {
      console.log(err);
    });


    /*facilities*/
    fetch(`https://apidojo-booking-v1.p.rapidapi.com/properties/get-facilities?languagecode=en-us&hotel_ids=${this.props.hotelResp.hotel_id}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "apidojo-booking-v1.p.rapidapi.com",
        "x-rapidapi-key": "9f8ad6c750mshf0b1f680b88141ep1deb54jsndb7cd93136e0"
      }
    })
    .then((response)=> {
      return response.json()
    })
    .then(res => {
      console.log(JSON.stringify(res));
      var arr=[];
      for(let i=0;i<3;i++)
      {
        arr[i]=res[i].facilitytype_name;
      }
      this.setState({facilities:arr})  
    })
    .catch(err => {
      console.log(err);
    });

    /*Reviews*/
    fetch(`https://apidojo-booking-v1.p.rapidapi.com/properties/get-featured-reviews?languagecode=en-us&hotel_id=${this.props.hotelResp.hotel_id}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "apidojo-booking-v1.p.rapidapi.com",
        "x-rapidapi-key": "9f8ad6c750mshf0b1f680b88141ep1deb54jsndb7cd93136e0"
      }
    })
    .then((response)=> {
      return response.json()
    })
    .then(res => {
      console.log(JSON.stringify(res));
      var arr=[];
      for(let i=0;i<2;i++)
      {
        arr[i]=res.vpm_featured_reviews[i].pros;
      }
      this.setState({reviews:arr})  
    })
    .catch(err => {
      console.log(err);
    });

    /*Maps*/

    /*fetch(`https://apidojo-booking-v1.p.rapidapi.com/properties/get-static-map?currency_code=USD&languagecode=en-us&width=720&longitude=${this.props.hotelResp.longitude}&zoom=18&latitude=${this.props.hotelResp.latitude}&height=280`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "apidojo-booking-v1.p.rapidapi.com",
        "x-rapidapi-key": "9f8ad6c750mshf0b1f680b88141ep1deb54jsndb7cd93136e0"
      }
    })
    .then((res) => {console.log('resp of map :',res);
    return res.json()})
      .then((data) => {
        console.log('img resp :',data);
          var base64Flag = 'data:image/jpeg;base64,';
          var imageStr =
              this.arrayBufferToBase64(data.img.data.data);
          this.setState({
              map: base64Flag + imageStr
          })
      })
      */
  }

  
    render() {
        return (
            <div>
            <Navbar dealLogout={this.props.dealLogout} />
<div id="h_d">
<div className="leftDiv">
    <h2>About Hotel </h2>
    <img src={this.props.hotelResp.main_photo_url}/>
    <p>{this.state.descrip}</p>
    <h2>Amenties</h2>
        {this.state.facilities.map((fac,id)=>(
          <div key={id}>->{fac}</div>
        ))}
        <br/>
    <h2>Reviews</h2>
        {this.state.reviews.map((rev,id)=>(
          <div key={id}>->{rev}</div>
        ))}
</div>
<div className="rightDiv"> 
    <BookNow hotelResp={this.props.hotelResp} confirm={(x)=>this.props.confirm(x)}/>
</div>
</div>
</div>
        )
    }
}