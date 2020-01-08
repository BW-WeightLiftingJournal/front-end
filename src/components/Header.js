import React from "react"
import {Link} from "react-router-dom"
import {FaDumbbell} from 'react-icons/fa'
import AccountMenu from "./AccountMenu"
import {logout} from "../utilities/actions"
import {connect} from "react-redux"

const Header = ({token,logout}) => {
    return (
        <div className='header-container'>
            <FaDumbbell style={{fontSize: '3rem'}}/>
            <div className="navbar">
                <Link to="/dashboard">
                    Home
                </Link>
                <Link to="/about">
                    About
                </Link>
                {!!token ? 
                    <Link to="/login" onClick={logout}>
                        Logout
                    </Link>    
                    : 
                    <Link to="/login">
                        Sign In
                    </Link>
                }
                {!!token ? 
                    <AccountMenu/>
                    :
                    <Link to="/register">
                        Sign Up
                    </Link>
                }
            </div>
            
        </div>
    )
}

const mapStateToProps = state => ({
    token: state.token
})
  
export default connect(mapStateToProps,{logout})(Header);