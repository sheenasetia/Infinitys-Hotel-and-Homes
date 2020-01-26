import React from 'react';
import { CitiesDropdown } from './cities_dropdown';
import { Carousel } from './carousel';
import { Advertisement} from './advertisement';
import { SearchDiv } from './searchDiv';
import {Navbar} from './navbar';
export class Main extends React.Component {
    render() {
        return (
            <div>
            <Navbar dealLogout={this.props.dealLogout} />
            <div>
            <CitiesDropdown getResponse={this.props.getResponse} response={this.props.response} getSecondResponse={this.props.getSecondResponse} />
            <SearchDiv getResponse2={this.props.getResponse2} cityResponse={this.props.cityResponse}/>
            <Advertisement setHotelResp={this.props.setHotelResp}/>
            </div>
            </div>
        )
    }
}