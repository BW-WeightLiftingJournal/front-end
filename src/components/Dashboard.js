import React from "react"
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
                <p>Welcome {username}</p>
                <p>{date}</p>
                <BlackButton onClick={()=>history.push('/AddExercise')}>Add new exercise</BlackButton>
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