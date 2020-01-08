import React from "react"
import {connect} from "react-redux"
import ExerciseList from "./ExerciseList"

const Dashboard = ({
    history,
    message,

}) => {
    const today = new Date()
    const date = `${(today.getMonth() + 1)}/${today.getDate()}/${today.getFullYear()}`;
    return (
        <div className="dashboard-container">
            <section className="dashboard-top">
                <div>
                    <h4 style={{marginLeft: '10px'}}>{message}</h4>
                    <h4 style={{marginLeft: '10px', letterSpacing: '1.5px'}}>{date}</h4>
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
    message: state.loggedInUsername
  })
  
export default connect(mapStateToProps,{})(Dashboard);
