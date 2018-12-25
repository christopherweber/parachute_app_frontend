import React from 'react'
import FlightDisplay from './FlightDisplay';
import InputRange from 'react-input-range';
import { Route } from 'react-router-dom'
import ScrollableAnchor from 'react-scrollable-anchor'
import { goToAnchor } from 'react-scrollable-anchor'
import Autocomplete from './Autocomplete'

export default class FlightForm extends React.Component{

    state = {
        to: "",
        from: "",
        depart: "",
        return: "",
        flights: [],
        price: "",
        direct: false
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
        // let formFrom = this.state.from.split(' ').join('-').toLowerCase
        // let formTo = this.state.from.split(' ').join('-').toLowerCase
        fetch(`https://api.skypicker.com/flights?&flyFrom=${this.state.from}&to=${this.state.to}&dateFrom=${this.state.depart}&dateTo=${this.state.return}&partner=picky`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            this.setState({
                flights: json.data
            })
            goToAnchor("section1")
            
        })
    }

    handleCheck = (e) => {
        this.setState({direct: e.target.checked})
    }
    
    
    
    
    render(){
        console.log('STATE', this.state)
        
        
        console.log(this.state.flights)
        
        return (
            <div className="form-style-5">

                <form onSubmit={(e) => this.handleSubmit(e)}>
                    
                    <input 
                    className="origin-field"
                    type="text"
                    name="from"
                    value={this.state.from}
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

                    <div className="calendars">
                        <lable></lable>
                        <input
                        type="input"
                        name="depart"
                        data-date-format="DD MM YYYY"
                        onChange={(e) => this.handleChange(e)}
                        required
                        />

                        <lable></lable>
                        <input
                        type="input"
                        name="return"
                        onChange={(e) => this.handleChange(e)}
                        placeholder="MM/DD/YYY"
                        required
                        />
                    </div>

                    <div className="price-range">
                    <label>Price Range</label>
                    <input
                    type="range" 
                    id="start" 
                    name="price"
                    min="0"
                    max="1500"
                    placeholder="0"
                    onChange={(e) => this.handleChange(e)}
                    
                    />

                    <div>
                    <output> {this.state.price} USD</output>
                    </div>

                    <p className="checkbox-input">Direct:</p>
                    <input type="checkbox" name="tick" id="tick" onChange={this.handleCheck}/>
                    <label for="tick" className="tick_label"></label>
                    
                    </div>

                <button className="submit-button">Submit</button>
                </form>
                <div>
                <ScrollableAnchor id={'section1'} className="ok-here">
                    <FlightDisplay flights={this.state.flights} price={this.state.price} direct={this.state.direct} />
                </ScrollableAnchor>
                </div>
            </div>

        )
    }
}

