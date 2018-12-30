import React from 'react'
// import { isNull } from 'util';
import Flight from './Flight'
import { Link} from 'react-router-dom'

export default class LikedFlights extends React.Component {

    
      state = {
          flights: []
      }



    componentDidMount() {
        fetch('http://localhost:3000/users/1')
        .then(r => r.json())
        .then(json => this.setState({flights: json.data.relationships.flights.data}), () => console.log(this.state.flights))
        // this.getLikedFlights(1)
    }


    render(){
        if (this.state.flights.length > 1){
               return this.state.flights.map(flight => {
                    return(
                    // <NavBar />
                    <Flight flight={flight} flights={this.state.flights} />
                    )
        })
        }      return <div className="loader"></div>
    }
}