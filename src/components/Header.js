import React from "react"
import {Link} from "react-router-dom"
import {FaDumbbell} from 'react-icons/fa'

const Header = props => {
    return (
        <div className='header-container'>
            <FaDumbbell style={{fontSize: '2rem'}}/>
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