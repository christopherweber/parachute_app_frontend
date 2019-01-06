import React from 'react'
import FlightDisplay from './FlightDisplay';
import ScrollableAnchor from 'react-scrollable-anchor'
import { goToAnchor } from 'react-scrollable-anchor'
import LoadingScreen from './LoadingScreen'
import parseDate from './time'
import DatePicker from "react-datepicker";
import calendar from "./calendar.png"
import "react-datepicker/dist/react-datepicker.css";



export default class FlightForm extends React.Component{

    state = {
        to: "",
        from: "",
        depart: "",
        return: "",
        flights: [],
        price: "",
        startDate: "",
        endDate: "",
        isLoading: false,
        direct: false
    }

    handleStartDateChange = (e) => {
        this.setState({
            startDate: parseDate(e.toString())
        })
    }

    handleEndDateChange = (e) => {
        this.setState({
            endDate: parseDate(e.toString())
        })
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
            let formFrom = ""
            let formTo = ""
            if (this.state.to.length === 3){
                formFrom = this.state.from.split(' ').join('-').toUpperCase()
                formTo = this.state.to.split(' ').join('-').toUpperCase()

            } else {
                formFrom = this.state.from.split(' ').join('-').toLowerCase()
                formTo = this.state.to.split(' ').join('-').toLowerCase()
            }
        // let depart = this.convertDate(this.state.depart);
        // let return = this.convertDate(this.state.return);

        this.setState({ isLoading: true });
        fetch(`https://api.skypicker.com/flights?&flyFrom=${formFrom}&to=${formTo}&dateFrom=${this.state.startDate}&dateTo=${this.state.endDate}&partner=picky`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            this.setState({
                flights: json.data,
                isLoading: false
            })
            // if (this.state.flights.length > 1){
            goToAnchor("section1")
            // } return  <div class="loader"></div>
        })
    
    }

  

    handleCheck = (e) => {
        this.setState({direct: e.target.checked})
    }

    handleDate = (e) => {
        console.log(e)
    }
    
    
    render(){
    
        console.log(this.state)
        console.log('Flights:', this.state.flights)
        console.log(this.state.startDate)
        
        console.log(this.state.endDate)

        return (
            
            <div className="form-style-5">
                <form onSubmit={(e) => this.handleSubmit(e)}>

                    
                    <input 
                    className="origin-field"
                    type="text"
                    name="from"
                    value={this.state.from}
                    onChange={(e) => this.handleChange(e)}
                    placeholder="🛫 City of origin"
                    required
                    
                    />

                    
                    <input
                    type="text"
                    name="to"
                    onChange={(e) => this.handleChange(e)}
                    placeholder="🛬 City of destination"
                    required
                    
                    />

                    <div className="calendars">

                    <div>  
                        <img src={calendar}/>
                    </div>

                        <DatePicker
                            className="departing"
                            dateFormat="dd/MM/yyyy"
                            value={this.state.startDate}
                            onChange={this.handleStartDateChange}
                            required
                        />

                    <div>  
                        <img src={calendar}/>
                    </div>

                        <DatePicker
                            dateFormat="dd/MM/yyyy"
                            value={this.state.endDate}
                            onChange={this.handleEndDateChange}
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
                    <p className="direct">Direct:</p>
                    <input type="checkbox" name="tick" id="tick" onChange={this.handleCheck}/>
                    <label for="tick" className="tick_label"></label>
                    </div>
                <button className="submit-button">Search</button>
                    </div>

                </form>
                <div>
                    {this.state.isLoading && <LoadingScreen />}
                <ScrollableAnchor id={'section1'} className="ok-here">
                    <FlightDisplay flights={this.state.flights} price={this.state.price} direct={this.state.direct} />
                </ScrollableAnchor>
                    

                    </div>
            </div>

        )
    }
}

