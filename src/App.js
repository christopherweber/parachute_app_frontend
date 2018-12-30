import React, { Component } from 'react';
import FlightContainer from './FlightContainer';
import { Route } from 'react-router-dom'
import NavBar from './NavBar'
import LikedFlights from './LikedFlights'
import LoginPage from '/Users/christopherweber/Desktop/mod5/parachute/parachute-project/src/auth/LoginPage.js';
import { Switch } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
        <Route path="/home" component={FlightContainer} />
        <Route path="/yourflights" component={LikedFlights} />
        <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
