import React from 'react'
import FlightForm from './FlightForm'
import NavBar from "./NavBar"
import { Route } from "react-router-dom"

export default class FlightContainer extends React.Component {
    render(){
        return(
            <div className="navbar">
                <NavBar />
                <h1>Parachute</h1>
                <FlightForm />
            </div>
        )
    }
}