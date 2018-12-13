import React from "react"

export default class FlightDisplay extends React.Component {
    render(){
        return(

            <div>
                Flight info
               {
                   this.props.flights.map(flight => {
                       return (
                           <div>
                               <p>{flight.cityFrom}</p>
                               <p>{flight.cityTo}</p>
                               {
                                    flight.airlines.map(airline => {
                                            return <p>{airline}</p>
                                })
                              }
                           </div>
                       ) 
                   })
                }
            </div>
        )
    }
}