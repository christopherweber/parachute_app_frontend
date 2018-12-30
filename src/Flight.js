import React, { Component } from 'react'

export default class Flight extends Component {
    handleClick = (e, obj) => {
        console.log('The id of the flight is ', obj.flight.id)
        this.handleDelete(obj.flight.id)
    }

    handleDelete = (flightId) => {
        console.log(flightId)
        fetch(`http://localhost:3000/flights/${flightId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
   
           
            
    }




  render() {
     

    return (
      <div>
        <p>hello there</p>
        <p>{this.props.flight.id}</p>
        <p>{this.props.flight["city-to"]}</p>
        <button onClick={(e, obj) => this.handleClick(e, this.props)}>Remove Flight</button>
      </div>
    )
  }
}

