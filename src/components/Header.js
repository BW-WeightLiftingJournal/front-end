import React from "react"
import FitnessCenterRoundedIcon from '@material-ui/icons/FitnessCenter';
import {Link} from "react-router-dom"

const Header = props => {
    return (
        <div className='header-container'>
            <FitnessCenterRoundedIcon fontSize="large"/>
            <div className="navbar">
                <Link to="/dashboard">
                    Home
                </Link>
                <Link to="/about">
                    About
                </Link>
                <Link to="/login">
                    Sign In
                </Link>
                <Link to="/register">
                    Sign Up
                </Link>
            </div>
            
        </div>
    )
}

export default Header