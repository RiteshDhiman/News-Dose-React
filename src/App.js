import './App.css';

import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import NewsCategories from './components/NewsCategories';
import NewsContainer from './components/NewsContainer';
import Weather from './components/Weather';

export default class App extends Component {

  state = {
    coordi : {},
    name : '...',
    date : '',
    temp : '',
    weather : [],
    mode : true
  }

  finaldata = '';

  APIKEY = '09002a01dc6b344c3e0c16e9f9c737be';

  fetchWeather = async (latitude, longitude) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${this.APIKEY}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    let {name, dt, main, coord} = parsedData;

    this.setState({
      coordi : coord,
      name : name,
      date : dt,
      temp : main.temp,
      weather : parsedData.weather[0],
    })
    // console.log(parsedData);
    // this.finaldata = parsedData;
    // return parsedData;
  }

  render() {

    let lat = 0;
    let long = 0;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          lat = position.coords.latitude;
          long = position.coords.longitude;
          this.fetchWeather(lat, long);
          // console.log(typeof(lat));
        }, (error) => {
          console.log(error.message);
        })
    }


    return (
      <>
        <Navbar />
        <NewsCategories />
        <Weather weather = {this.state.weather} coordinates = {this.state.coordi} city = {this.state.name} date = {this.state.date} temp = {this.state.temp} coord = {this.state.weather}/>
        <Router>
          <Routes>
            <Route path='/' element={<NewsContainer pageSize={12} category='' heading='Top Headlines' />} />
            <Route key='business' path='/business' element={<NewsContainer pageSize={12} category='business' heading='🤑 Business' />} />
            <Route key='entertainment' path='/entertainment' element={<NewsContainer pageSize={12} category='entertainment' heading='🍿 Entertainment' />} />
            <Route key='general' path='/general' element={<NewsContainer pageSize={12} category='general' heading='General' />} />
            <Route key='health' path='/health' element={<NewsContainer pageSize={12} category='health' heading='❤️‍🩹 Health' />} />
            <Route key='science' path='/science' element={<NewsContainer pageSize={12} category='science' heading='🧾 Science' />} />
            <Route key='sports' path='/sports' element={<NewsContainer pageSize={12} category='sports' heading='⚽ Sports' />} />
            <Route key='technology' path='/technology' element={<NewsContainer pageSize={12} category='technology' heading='🔭 Technology' />} />
          </Routes>
        </Router>
      </>
    )
  }
}
