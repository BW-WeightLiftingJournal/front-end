import React, { useState } from "react"
import {connect} from "react-redux"

const Dashboard = props => {

    return (
        <div>
            Dashboard
            <button onClick={() => props.history.push("/add")}>Add New Exercise</button>
        </div>
    )
}

const mapStateToProps = state => ({
    ...state
  })
  
export default connect(mapStateToProps,{})(Dashboard);
