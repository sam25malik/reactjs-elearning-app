import React, { Component } from 'react';
import { Redirect } from 'react-router';
import StarRatings from 'react-star-ratings';
import './popup.css';

class Popup extends Component {
    
  routeChange(){
      let path = this.props.popUpData.url;
      console.log(path);
      window.location.replace(path);
  }

  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
            <button onClick={this.props.closePopup} id="close"><i className="fa fa-close"></i> Close</button>
            <div className="col-md-12 popover_title"><h2 className="title underline">{this.props.popUpData.title}</h2></div>
            <div className="col-md-6 left_side">
            <div className="left_inner_content">
              <div className="description">
                <div className="desc_title"><strong>Description:</strong></div> {this.props.popUpData.description_short}
              </div>
              <div><div className="desc_title"><strong>Rating: </strong></div>
              <StarRatings
                rating={this.props.popUpData.rating.stars}
                starRatedColor="blue"
                starDimension="30px"
                starSpacing="5px"
                numberOfStars={5}
                name='rating'
              />
          </div> 
        </div>
      </div>
      <div className="col-md-6 right_side">
        <div className="right_inner_content">
          <div><div className="desc_title"><strong>Age: </strong></div>{this.props.popUpData.age['min']} to {this.props.popUpData.age['max']}</div>
          <div><div className="desc_title"><strong>Provider: </strong></div>{this.props.popUpData.provider_name}</div>
          <div><div className="desc_title"><strong>Location: </strong></div>{this.props.popUpData.location}</div>
          <div><div className="desc_title"><strong>Package: </strong></div> {this.props.popUpData.packages[0]['price']} {this.props.popUpData.packages[0]['currency']}</div>
      </div>
    </div>
    <center><button type="button" className="detailsBtn" onClick={this.routeChange.bind(this)}>View All Details</button></center>
    </div>
    </div>
    );
  }
}

export default Popup;