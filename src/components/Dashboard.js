import React, { useState } from "react"
import {connect} from "react-redux"
import {BlackButton} from "../utilities/styles"
import ExerciseList from "./ExerciseList"

const Dashboard = ({
    history,
    username,

}) => {
    const today = new Date()
    const date = `${(today.getMonth() + 1)}/${today.getDate()}/${today.getFullYear()}`;
    return (
        <div className="dashboard-container">
            <section className="dashboard-top">
                <div>
                    <p>Welcome {username}</p>
                    <p>{date}</p>
                </div>
                <div>
                    <BlackButton style={{width:'100%'}} onClick={()=>history.push('/add')}>Add new workout</BlackButton>
                </div>
            </section>
            <section className="dashboard-body">
                <h1 style={{color: 'white', textAlign: 'center'}}>Previous Workouts</h1>
                <ExerciseList/>
            </section>
        </div>
    )
}

const mapStateToProps = state => ({
    username: state.loginCredentials.username
  })
  
export default connect(mapStateToProps,{})(Dashboard);
