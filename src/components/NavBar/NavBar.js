import React from "react";
import '../NavBar/NavBar.css'

function NavBar(props) {
return(
    <div className="contatiner"> 
        <nav className="navbar navbar-primary bg-primary justify-content-between">
            <span className="navbar-brand mb-0 h1" id="heading"> Employee Directory!</span>
            <form className="form-inline">
                <input 
                className="form-control mr-sm-2" 
                type="search" 
                placeholder="Search Locations" 
                aria-label="Search"
                name="location"
                value={props.location}
                onChange={props.handleInputChange}
                />

            </form>
        </nav>
    </div>
)
}

export default NavBar;