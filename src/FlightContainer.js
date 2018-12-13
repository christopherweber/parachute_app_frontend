import React from 'react'
import FlightForm from './FlightForm'

export default class FlightContainer extends React.Component {
    render(){
        return(
            <div>
                <h1>Find Flights</h1>
                <FlightForm />
            </div>
        )
    }
}