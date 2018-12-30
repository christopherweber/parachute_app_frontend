import React from 'react'
// import { isNull } from 'util';
import Flight from './Flight'

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
                    //<div className="liked-flights">
                    //<p>hello there</p>
                    //<p>{flight.id}</p>
                    //<p>{flight["city-to"]}</p>
                    //<button>Remove Flight</button>
                    //</div>
                    <Flight flight={flight} flights={this.state.flights} />
                    )
        })
        }      return <p>loading</p>
    }
}