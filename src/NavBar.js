import React from 'react'

class NavBar extends React.Component {

    render(){
        return(
            <div>
            <header></header>
            <input type="checkbox" id="openSideMenu" className="openSideMenu guy" />
            <label for="openSideMenu" class="menuIconToggle">
                <div className="hamb-line dia p-1"></div>
                <div className="hamb-line hor"></div>
                <div className="hamb-line dia p-2"></div>
            </label>    
        <div className="hamburger-nav">
        <ul>
            {/* <li><a href="#">Menu Item 1</a></li>
            <li><a href="#">Menu Item 2</a></li>
            <li><a href="#">Menu Item 3</a></li>
            <li><a href="#">Menu Item 4</a></li>
            <li><a href="#">Menu Item 5</a></li> */}
        </ul>
        </div>
        </div>
        )
    }
}

export default NavBar