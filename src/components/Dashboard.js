import React from "react"
import {connect} from "react-redux"
import ExerciseList from "./ExerciseList"
import AddIcon from '@material-ui/icons/Add';

const Dashboard = ({
    history,
    message

}) => {

    const today = new Date()
    const date = `${(today.getMonth() + 1)}/${today.getDate()}/${today.getFullYear()}`;
    return (
        <div className="dashboard-container">
            <section className="dashboard-top">
                <div>
                    <h4 style={{marginLeft: '10px'}}>{message}</h4>
                    <h4 style={{marginLeft: '10px', letterSpacing: '1.5px'}}>Today's Date: {date}</h4>
                </div>
                <div>
                    <div title="Add new workout" className="add-button-dashboard" onClick={()=>history.push('/add')}><AddIcon fontSize='large'/></div>
                </div>
            </section>
            <section className="dashboard-body">
                <h2 style={{color: 'white', textAlign: 'center', marginBottom: '10px'}}>My Workouts</h2>
                <ExerciseList/>
            </section>
        </div>
    )
}

const mapStateToProps = state => ({
    message: state.loggedInUsername,
    forceUpdate: state.forceUpdate
  })
  
export default connect(mapStateToProps,{})(Dashboard);
