import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {

    render(){
        return(
            <nav role="navigation" className="navbar">
                <div id="menuToggle" >
                <input type="checkbox" />

                <span></span>
                <span></span>
                <span></span>

                    <ul id="menu">
                    <a href="#"><li>
                        <Link to={'/home'}>Home</Link>  
                        </li></a>
                        <li>
                            <Link to="login">Login</Link>
                        </li>
                        <li>
                        <Link to={'/yourflights'}>Saved flights</Link>  
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar