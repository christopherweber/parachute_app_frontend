import React from 'react'

class FlightCard extends React.Component {
    render(){
        return (
            <div>
                <p>{this.props.flightObj}</p>
            </div>
        )
    }
}

export default FlightCard