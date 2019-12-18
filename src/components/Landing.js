import React from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux"

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

const mapStateToProps = state => ({
    ...state
  })
  
export default connect(mapStateToProps,{})(Landing);