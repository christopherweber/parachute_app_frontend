import React, { Component } from 'react'
import bob from './para-guy.png'
import cloud from './animated-clouds.png'
import plane from './plane.png'

export default class AnimationHome extends Component {

  render() {
    return (
      <div>
                <img src={cloud} className="cloud-img-1"/>
                <img src={plane} className="plane" />
                <div ref="dude" className="parachute"
                  onKeyDown={(e) => {
                    if (e.key === "ArrowUp") {
                      debugger
                    } else if (e.key === "ArrowDown") {

                    } else if (e.key === "ArrowLeft") {

                    } else if (e.key === "ArrowRight") {

                    }
                  }}
                  tabIndex="0">
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
