import React from 'react'
import FlightForm from './FlightForm'
import AnimationHome from './AnimationHome'

export default class FlightContainer extends React.Component {
    render(){
        return(
            <div id="main-page">
                <h1>Parachute</h1>
                <AnimationHome />
                <FlightForm />
            </div>
        )
    }
}
