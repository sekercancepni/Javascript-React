import React, { Component } from 'react';
import $ from "jquery";
import "./weather.css";
class App extends Component {

  constructor () {
    super();
    this.state = {
      weatherIcon: "",
      city: "",
      temperature: "",
      description: "",
      loader: true
    }
    this.latitude = null;
    this.longitude = null;
  }

  componentWillMount () {
    navigator.geolocation.getCurrentPosition(this.showPosition)
  }

  showPosition = (position) => {
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    this.getWeather(this.latitude, this.longitude)
  };

  getWeather = (lat, lon) => {
    let url = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon;
    $.get(url)
      .done((data) => {
        this.setState({
          weatherIcon: data.weather[0].icon,
          city: data.name,
          temperature: data.main.temp,
          description: data.weather[0].description
        },function (){
          this.setState({
            loader: false
          })
        })
      })
  };

  render() {
    const { weatherIcon, city, temperature, description, loader } = this.state;
    return (
      <div>
        { loader ?
          <div className="loader-wrapper">
            <img className="loader" src="loader.gif"/>
          </div>
        :
        <div className="weather-container">
          <p className="title">Weather Forecast</p>
          <div className="temperature-info">
            <img className="weather-icon" src={weatherIcon} alt=""/>
            <p className="temperature">{temperature} &#8451;</p>
          </div>
          <div>
            <span className="info">{city}</span>
            <span className="info">{description}</span>
          </div>
        </div>
      }
      </div>
    );
  }
}

export default App;
