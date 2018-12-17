import React from "react"
import moment from 'moment';

export default class FlightDisplay extends React.Component {

    handleClick = (e) => {

        console.log(e);
    }

    convert = (amount) => {
    let rates = [1.35, 0.0145]

    let EUR = rates[0]
    
    return Math.round(amount * EUR)
    }
        
    
    render(){
        console.log(this.props.price)
        return(
            <div className="main-flight-div">
               {
                   this.props.flights.map(flight => {
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
                           </div>
                       ) 
                   })
                }
            </div>
        )
    }
}