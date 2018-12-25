import React from 'react'
// import { isNull } from 'util';

export default class LikedFlights extends React.Component {

    
      state = {
          flights: []
      }

    //fetch
    // getLikedFlights = (user_id) => {
    //     fetch(`http://localhost:3000/users/${user_id}`,{
    //     method: 'GET'})
    //     .then(res => res.json())
    //     .then(json => {
    //         console.log(json)
    //         this.setState({
    //             flights: json.data.relationships.flights.data
    //             // flights: json
    //         })
    //     })
    // }

    componentDidMount() {
        fetch('http://localhost:3000/users/1')
        .then(r => r.json())
        .then(json => this.setState({flights: json.data.relationships.flights.data}), () => console.log(this.state.flights))
        // this.getLikedFlights(1)
    }

    render(){

        
        console.log(this.state.flights)

    //    this.state.flights.map(flight => {
    //         return <p>{flight.id}</p>
    //     })


        // console.log(mapped)
        // console.log(this.state.flights[0])
        // console.log(this.state.flights[0]["id"])
        // if (this.state.flights) {
        //     let mapped = this.state.flights.map(flight => {
        //         return (
        //             <div>
        //             {flight.cityTo !== undefined ? console.log(flight.cityTo) : null }
        //             </div>
        //         )
        //     })
        // }

        if (this.state.flights.length > 1){
               return this.state.flights.map(flight => {
                    return(
                    <div>
                    <p>hello there</p>
                    <p>{flight.id}</p>
                    <p>{flight.cityTo}</p>

                    </div>
                    )
        })
        }      return <p>loading</p>
    }
}