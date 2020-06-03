import React from 'react';
import './App.css';
import GetLocation from './GetLocation'


const key = 'AIzaSyDLBm-g5esokD5x2NLshJ-Io5lCqK_nrtM'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        latitude : null,
        longitude: null,
        userAddress:""
    };
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
  }
  getLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.getCoordinates);
    }else{
      alert("No geolocation data")
    }
  }

  getCoordinates(position){
    console.log(position)
    this.setState({
      latitude:position.coords.latitude,
      longitude:position.coords.longitude
    })
  }

   handleError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.")
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.")
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.")
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.")
        break;
        default:
        alert("Unknown error")
    }
  }
  render(){
    return(
      <div className = "App"> 
        <h2>
          Testing Location
        </h2>
        <button onClick = {this.getLocation}> Get Location</button>
        <h4>Coordinates</h4>
        <p>Latitude : {this.state.latitude}</p>
        <p>Longitude : {this.state.longitude}</p>
        <h4>User Address is : {this.state.userAddress}</h4>
        {
          this.state.latitude && this.state.longitude ?
          <img src = {`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=14&size=400x300&sensor=false&key=${key}&markers=color:red%7C${this.state.latitude},${this.state.longitude}`} alt = '' />
          :
          null
        }
      </div>
      

    );
  }
}

export default App;
