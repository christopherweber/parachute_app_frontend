import React, { Component } from 'react'
import bob from './para-guy.png'
import cloud from './animated-clouds.png'

export default class AnimationHome extends Component {
  render() {
    return (
      <div>
                <img src={cloud} className="cloud-img-1"/>
                <div className="parachute">
                    <img src={bob} className="parachute-guy"/>
                </div>
                <div className="small-cloud-div">
                    <img src={cloud} className="small-cloud-img-2" />
                </div>
                <div className="small-cloud">
                    <img src={cloud} className="small-cloud-img" />
                </div>
      </div>
    )
  }
}
