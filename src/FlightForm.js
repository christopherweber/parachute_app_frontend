import React from 'react'
import FlightDisplay from './FlightDisplay';
import InputRange from 'react-input-range';
import { Route } from 'react-router-dom'
import ScrollableAnchor from 'react-scrollable-anchor'
import { goToAnchor } from 'react-scrollable-anchor'
import Autocomplete from './Autocomplete'
import LoadingScreen from './LoadingScreen'
import moment from 'moment'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

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

    convertDate = (inputFormat) => {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(inputFormat);
        return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
      }
    

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    getFlights = () => {
        // let formFrom = this.state.from.split(' ').join('-').toLowerCase
        // let formTo = this.state.from.split(' ').join('-').toLowerCase
        // let depart = this.convertDate(this.state.depart);
        // let return = this.convertDate(this.state.return);


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

    handleDate = (e) => {
        console.log(e)
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

                        
                        <input
                        type="input"
                        name="depart"
                        onChange={(e) => this.handleChange(e)}
                        placeholder="MM/DD/YYY"
                        />

                        <input
                        type="input"
                        name="return"
                        onChange={(e) => this.handleChange(e)}
                        placeholder="MM/DD/YYY"

                        min="2018-06-24" 
                        max="2019-06-23"
                        required
                        />

                    </div>

                    <div className="price-range">
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

                    <div className="checkbox-input"> 
                    Direct:<input type="checkbox" name="tick" id="tick" onChange={this.handleCheck}/>
                    <label for="tick" className="tick_label"></label>
                    </div>
                <button className="submit-button">Submit</button>
                    </div>

                </form>
                <div>
                {/* <LoadingScreen /> */}
                <ScrollableAnchor id={'section1'} className="ok-here">
                    <FlightDisplay flights={this.state.flights} price={this.state.price} direct={this.state.direct} />
                </ScrollableAnchor>
                </div>
            </div>

        )
    }
}

