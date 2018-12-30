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

        console.log(this.props.price)

            return (

                    <div className="main-flight-div"> 
                        {filteredFlights.slice(0,15).map(flight => {
                                return ( <SingleFlight flight={flight} convert={this.convert} />)
                        })}
                    </div>           
            )

    }
}


   