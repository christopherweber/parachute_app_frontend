import React from 'react'
import FlightDisplay from './FlightDisplay';

export default class FlightForm extends React.Component{

    state = {
        to: "",
        from: "",
        depart: "",
        return: "",
        flights: []
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
            console.log(json.data)
            this.setState({
                flights: json.data
            })
        })
    }
    
    
    render(){

        // const data = this.state.flights.map(data){

        // }

        console.log(this.state.flights)

        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <lable>Fly From: </lable>
                    <input
                    type="text"
                    name="from"
                    onChange={(e) => this.handleChange(e)}
                    
                    
                    />

                    <lable>Fly to: </lable>
                    <input
                    type="text"
                    name="to"
                    onChange={(e) => this.handleChange(e)}
                    
                    />

                    <lable> Depart: </lable>
                    <input
                    type="text"
                    name="depart"
                    onChange={(e) => this.handleChange(e)}
                    placeholder="MM/DD/YYY"
                    />

                    <lable> Return: </lable>
                    <input
                    type="text"
                    name="return"
                    onChange={(e) => this.handleChange(e)}
                    placeholder="MM/DD/YYY"
                    />
                    

                <button>Submit</button>
                </form>
                <FlightDisplay flights={this.state.flights}/>
            </div>

        )
    }
}

