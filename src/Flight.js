import React, { Component } from 'react'

export default class Flight extends Component {
    handleClick = (e, obj) => {
        console.log('The id of the flight is ', obj.flight.id)
        this.props.handleDelete(obj.flight.id)
    }



  render() {
     

    return (
        <div>
            <div>
            
            </div>

            <div className="liked-flight-display-divs">
                <p className="liked-flight-cities">{this.props.flight["city-from"]} → {this.props.flight["city-to"]}</p>
                <p className="liked-flight-price">{this.props.flight["price"]}</p>
                <div className="liked-deep-link"><a target="_blank" href={this.props.flight["deep-link"]}>Book Flight</a></div>


                <button className="btn" onClick={(e, obj) => this.props.handleDelete(e, this.props.flight.id)} >
                <a className="btn-a" href="">DELETE</a>
                    <div class="hoverBtn">
                        <p class="hoverText">ARE YOU SURE?</p>
                    </div>
                </button>

            </div>
    </div>
    )
  }
}

