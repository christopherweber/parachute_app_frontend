import React from 'react'
import FlightForm from './FlightForm'
import NavBar from "./NavBar"
import { Route } from "react-router-dom"
import bob from './para-guy.png'
import cloud from './animated-clouds.png'
import AnimationHome from './AnimationHome'

export default class FlightContainer extends React.Component {
    render(){
        return(
            <div id="main-page">
                <NavBar />
                <h1>Parachute</h1>
                <AnimationHome />
                <FlightForm />
            </div>
        )
    }
}
