import React from "react"
import moment from 'moment';

class SingleFlight extends React.Component {

    handleLike = (e,flight) => {

        fetch("http://localhost:3000/flights/", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({user_id: 1, cityTo: flight.cityTo, deep_link: flight.deep_link, cityFrom: flight.cityFrom})
        }).then(r => console.log(r))
    }

    render(){

        let flight = this.props.flight

        return (
            <div>
                 <div className="flight-display-divs">
                        
                        <div className="flight-details">
                                
                                {
                                    flight.airlines.map(airline => {
                                        
                                        return <img className="airline" src={`https://images.kiwi.com/airlines/64/${airline}.png`} alt=""/>
                                    })
                                }
                                
                            <div className="flying">{flight.cityFrom} → {flight.cityTo} </div>
                            
                            <div className="fly-duration">{flight.fly_duration} </div>
                            <div className="price">${this.props.convert(flight.conversion["EUR"])}</div>
                            <div className="time">
                                <div>{moment.unix(flight.dTime).format('LLL')}</div>
                                <div>{moment.unix(flight.aTime).format('LLL')}</div>
                            </div>
                            <div className="direct-option">{flight.route.length === 1 ? <p>Direct</p> : <p>Non-Direct</p>}</div>
                            <div className="deep-link"><a target="_blank" href={flight.deep_link}>Book Flight</a></div>
                            <button className="liked-button" onClick={(e) => this.handleLike(e,flight)}>
                                
                            </button>
                     

                      </div>

                   </div>
            </div>
        )
    }
}

export default SingleFlight