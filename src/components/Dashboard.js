import React from "react"
import {connect} from "react-redux"
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
                    <div className="add-button-dashboard" onClick={()=>history.push('/add')}>Add new workout</div>
                </div>
            </section>
            <section className="dashboard-body">
                <h1 style={{color: 'white', textAlign: 'center', marginBottom: '10px'}}>Previous Workouts</h1>
                <ExerciseList/>
            </section>
        </div>
    )
}

const mapStateToProps = state => ({
    username: state.loggedInUsername
  })
  
export default connect(mapStateToProps,{})(Dashboard);
