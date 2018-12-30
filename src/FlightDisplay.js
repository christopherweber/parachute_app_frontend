import React from "react"
import moment from 'moment';
import FlightCard from "./FlightCard"
import SingleFlight from './SingleFlight'


export default class FlightDisplay extends React.Component {

    handleClick = (e) => {

        console.log(e);
    }

    convert = (amount) => {
    let rates = [1.35, 0.0145]

    let EUR = rates[0]
    
    return Math.round(amount * EUR)
    }

    priceRange = () => {
        
    }

    isDirectFlight = (flight) => {
        if (this.props.direct && flight.route.length === 1){
            return true
        } else if (!this.props.direct) {
            return true
        } else if (this.props.direct && flight.route.length > 1) {
            return false
        }
    }

    render(){
    //    true / false
        const filteredFlights = this.props.flights.slice(0,50).filter(flight => {
            return (this.props.price > this.convert(flight.conversion["EUR"]) && this.isDirectFlight(flight) )
        })
        //if the price of the flight is less than or equal to entered price
        //return that flight
        //if the route.length is equal to 1 && direct
        console.log(this.props.price)
        
            // this.props.flights.map(flight => {
            //     console.log(flight.route.length)
            // })
            return (

                    <div className="main-flight-div"> 
                        {filteredFlights.slice(0,15).map(flight => {
                                // const hasChecked = true
                                // console.log(hasChecked)
                                // const flightThere = true;
                                return ( <SingleFlight flight={flight} convert={this.convert}/>)
                        })}
                    {/* {flightThere === false && hasChecked === true ? <p>Shoot! No matching flights.</p>: null} */}
                    </div>           
            )

    }
}

// <FlightCard flights={this.props.flights} convert={this.convert} handleClick={this.handleClick}/>
   