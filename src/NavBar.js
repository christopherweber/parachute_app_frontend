import React from 'react'
import { Link} from 'react-router-dom'

class NavBar extends React.Component {

    render(){
        return(
            <div className="navbar">
                <ul>
                    <li>
                    <Link to={'/home'}>Home</Link>  
                    </li>
                    <li>
                        <Link to="login">Profile</Link>
                    </li>
                    <li>
                    <Link to={'/yourflights'}>Your flights</Link>  
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavBar