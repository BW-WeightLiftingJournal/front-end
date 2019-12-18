import React from "react"
import {Link} from "react-router-dom"

const Landing = props=> {
    return (
        <div>
            <Link to="/login">
                <p>Login</p>
            </Link>
            <br/>
            <Link to="/register">
                <p>Sign up</p>
            </Link>
        </div>
    )
}

export default Landing