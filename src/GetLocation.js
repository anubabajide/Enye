import React, { Component } from 'react';

class GetLocation extends Component{

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(function(position) {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
        });
      }
      
    
    
    render(){
        return(
            <div> Current Location coordinates are ... </div>

        )
    }
}

export default GetLocation