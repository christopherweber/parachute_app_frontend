import React from 'react'
import moment from 'moment';
import SingleFlight from './SingleFlight'


class FlightCard extends React.Component {

    render(){
        let flightThere = false;
        let hasChecked = false
        return (
            <div className="main-flight-div">
               {this.props.flights.slice(0, 15).map(flight => {
                //    console.log(flight.id)
                   return (
                       <SingleFlight flight={flight} convert={this.props.convert}/>
                    //    <div className="flight-display-divs">
                        
                    //             <div onClick={(e) => this.props.handleClick(flight.route.length)} className="flight-details">
                                        
                    //                     {
                    //                         flight.airlines.map(airline => {
                                                
                    //                             return <img className="airline" src={`https://images.kiwi.com/airlines/64/${airline}.png`} alt=""/>
                    //                         })
                    //                     }
                                        
                    //                 <div className="flying">{flight.cityFrom} → {flight.cityTo} </div>
                                    
                    //                 <div className="fly-duration">{flight.fly_duration} </div>
                    //                 <div className="price">${this.props.convert(flight.conversion["EUR"])}</div>
                    //                 <div className="time">
                    //                     <div>{moment.unix(flight.dTime).format('LLL')}</div>
                    //                     <div>{moment.unix(flight.aTime).format('LLL')}</div>
                    //                 </div>
                    //                 {/* <div>{flight.has_airport_change}</div> */}
                    //                 <div>{flight.route.length === 1 ? <p>Direct</p> : <p>Non-Direct</p>}</div>
                    //                 <div><a target="_blank" href={flight.deep_link}>Select Flight</a></div>
                    //                 <button onClick={(e) => this.handleLike(e)}>Like</button>
                             

                    //           </div>

                    //        </div>
                           ) 
                     })
                }
                </div>
        )
    }
}

export default FlightCard