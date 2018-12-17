import React, { Component } from 'react';
import FlightContainer from './FlightContainer';
import { Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div>
        {/* <Route path="/home" component={FlightContainer} /> */}
        <FlightContainer />
      </div>
    );
  }
}

export default App;
