import React, { Component } from 'react';
import FlightContainer from './FlightContainer';
import { Route } from 'react-router-dom'
import Navbar from './NavBar'
import LikedFlights from './LikedFlights'
import LoginPage from '/Users/christopherweber/Desktop/mod5/parachute/parachute-project/src/auth/LoginPage.js';


class App extends Component {
  render() {
    return (
      <div>
        <Route path="/home" component={FlightContainer} />
        <Route path="/yourflights" component={LikedFlights} />
        <Route path="/login" component={LoginPage} />

      </div>
    );
  }
}

export default App;
