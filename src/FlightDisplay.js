import React from "react"
import moment from 'moment';
import FlightCard from "./FlightCard"

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

    
    
    render(){
        let flightThere = false;
        let hasChecked = false
        console.log(this.props.direct)
        return(
            <div className="main-flight-div">
               {  
                   this.props.flights.slice(0, 15).map(flight => {
                       hasChecked = true
                       if (this.props.price > this.convert(flight.conversion["EUR"])){
                        flightThere = true;
                           return (
                               <div className="flight-display-divs">
                        
                                <div onClick={(e) => this.handleClick(flight.route.length)} className="flight-details">
                                        
                                        {
                                            flight.airlines.map(airline => {
                                                
                                                return <img className="airline" src={`https://images.kiwi.com/airlines/64/${airline}.png`} alt=""/>
                                            })
                                        }
                                        
                                    <div className="flying">{flight.cityFrom} → {flight.cityTo} </div>
                                    <div className="fly-duration">{flight.fly_duration} </div>
                                    <div className="price">${this.convert(flight.conversion["EUR"])}</div>
                                    <div className="time">
                                        <div>{moment.unix(flight.dTime).format('LLL')}</div>
                                        <div>{moment.unix(flight.aTime).format('LLL')}</div>
                                    </div>
                                    <div>{flight.has_airport_change}</div>
                                    <div>{flight.route.length === 1 ? <p>Direct</p> : <p>Non-Direct</p>}</div>
                                    <div><a target="_blank" href={flight.deep_link}>Select Flight</a></div>
                             

                              </div>

                              {/* <FlightCard key={flight} flightObj={flight} /> */}
                           </div>
                       ) 
                    } 
                })
            } 
            {flightThere === false && hasChecked === true ? <p>nada here puta</p>: null}
            </div>
        )
    }
}