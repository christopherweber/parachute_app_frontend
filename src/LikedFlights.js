import React from 'react'
import Flight from './Flight'
import { Link} from 'react-router-dom'


export default class LikedFlights extends React.Component {

    
      state = {
          flights: [],
          flightDeleted: false
      }

      handleDelete = (e, flightId) => {
        console.log(flightId)
        fetch(`http://localhost:3000/flights/${flightId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
            //     this.setState({
            //     flightDeleted: !this.state.flightDeleted
            // }, () => console.log(this.state))
            this.fetchthePlanes()
        })
   
                    
    }


    // handleNewDelete = (e) => {
    //     debugger
    //     const arr = [...this.state.flights]
    //     const idx = arr.indexOf(e.target.value)
    //     if (idx !== -1){
    //         arr.splice(idx, 1)
    //         this.setState({
    //             flights: arr
    //         })
    //     }
    // }

    fetchthePlanes = () => {
        fetch('http://localhost:3000/users/1')
        .then(r => r.json())
        .then(json => this.setState({flights: json.data.relationships.flights.data}), () => console.log(this.state.flights))
    }


    componentDidMount() {
        console.log("hello from did mounty")
        // fetch('http://localhost:3000/users/1')
        // .then(r => r.json())
        // .then(json => this.setState({flights: json.data.relationships.flights.data}), () => console.log(this.state.flights))
        this.fetchthePlanes()
    }


    render(){
        if (this.state.flights.length > 1){
               return this.state.flights.map(flight => {
                    return(
                    <Flight flight={flight} flights={this.state.flights} handleDelete={this.handleDelete} />
                    )
        })
        }      return <div>
                        <h1 className="no-saved-flights">No saved flights </h1>
                        <Link className="redirect" to={'/home'}>Back to search</Link>
                      </div>
    }
}