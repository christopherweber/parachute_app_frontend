import React from 'react'
import FlightDisplay from './FlightDisplay';
import InputRange from 'react-input-range';
import { Route } from 'react-router-dom'

export default class FlightForm extends React.Component{

    state = {
        to: "",
        from: "",
        depart: "",
        return: "",
        flights: [],
        price: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.getFlights()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    getFlights = () => {
        fetch(`https://api.skypicker.com/flights?flyFrom=${this.state.from}&to=${this.state.to}&dateFrom=${this.state.depart}&dateTo=${this.state.return}&partner=picky`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            this.setState({
                flights: json.data
            })
        })
    }

    
    render(){


        console.log(this.state.price)

        return (
            <div className="flight-form">
                <form className="main-form" onSubmit={(e) => this.handleSubmit(e)}>
                    
                    <input
                    className="origin-field"
                    type="text"
                    name="from"
                    onChange={(e) => this.handleChange(e)}
                    placeholder="🛫 Origin"
                    required
                    
                    
                    />

                    
                    <input
                    type="text"
                    name="to"
                    onChange={(e) => this.handleChange(e)}
                    placeholder="🛬 Destination"
                    required
                    
                    />

                    <lable> Depart: </lable>
                    <input className="departing-date"
                    type="text"
                    name="depart"
                    onChange={(e) => this.handleChange(e)}
                    placeholder="MM/DD/YYY"
                    required
                    />

                    <lable> Return: </lable>
                    <input
                    type="text"
                    name="return"
                    onChange={(e) => this.handleChange(e)}
                    placeholder="MM/DD/YYY"
                    required
                    />

                    <div className="price-range">
                    <label>Price Range</label>
                    <input
                    type="range" 
                    id="start" 
                    name="price"
                    min="0"
                    max="3000"
                    placeholder="0"
                    onChange={(e) => this.handleChange(e)}
                    
                    />
                    </div>

                    <div>
                    <output> {this.state.price} </output>
                    </div>
                <button className="submit-button">Submit</button>
                </form>
                <FlightDisplay flights={this.state.flights} price={this.state.price} />
            </div>

        )
    }
}

