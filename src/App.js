import React from 'react';
import './App.css';
import GetLocation from './GetLocation'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        latitude : null,
        longitude: null,
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
  render(){
    return(
      <div>
      <div>Testing Location</div>
      <h2>
        <button onClick = {this.getLocation}> go</button>
        <p>Latitude : {this.state.latitude}</p>
        <p>Longitude : {this.state.longitude}</p>
      </h2>
      <GetLocation /></div>

    );
  }
}

export default App;
