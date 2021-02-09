import React, { useEffect } from "react"
import {connect} from "react-redux"
import Exercise from "./Exercise"
import {getList} from "../utilities/actions"
import moment from "moment"

const ExerciseList = ({
  exerciseList,
  getList,
  userId,
  forceUpdate
}) => {

  useEffect(()=> {
    console.log('updating list')
    getList(userId)
    // eslint-disable-next-line
  }, [forceUpdate])
  
  let isSame=true;
  let previousDate=''
  return (
    <div className="exercise-list-container">
      <div className="exercise-container table-header">
        <div className="single-exercise-data">
          <h4 className="single-exercise-title">Name</h4>
          <p>Weight (lbs)</p>
          <p>Reps</p>
          <p>Sets</p>
        </div>
        <span style={{width: "100px", textAlign: "center"}}>Options</span>
      </div>
      
      {exerciseList && exerciseList.map(item=>{
        isSame=item.date_completed===previousDate;
        previousDate=item.date_completed
        return (
          <div key={item.id}>
            {!isSame && <h4 style={{margin: '20px 0px 10px 10px', letterSpacing: '1.5px'}}>{moment(item.date_completed).format("MMM DD, YYYY")}</h4>}
            <Exercise exercise={item}/>
          </div>
          
        )
      })}
      {exerciseList && exerciseList.length <1 && 
      <p style={{color: "white", textAlign: "center", fontWeight: "bold", marginTop: "15px"}}>Looks like you don't have any workouts recorded yet.  
        Not to worry, just click the big + button at the top to get started!</p>}
  
    </div>
  )
}

const mapStateToProps = state => ({
    exerciseList: state.exerciseList,
    userId: state.userId,
    forceUpdate: state.forceUpdate
  })
  
export default connect(mapStateToProps,{getList})(ExerciseList);