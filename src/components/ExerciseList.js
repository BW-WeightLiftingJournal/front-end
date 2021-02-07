import React, { useEffect } from "react"
import {connect} from "react-redux"
import Exercise from "./Exercise"
import {getList} from "../utilities/actions"

const ExerciseList = ({
  exerciseList,
  getList,
  userId,
  forceUpdate
}) => {

  useEffect(()=> {
    getList(userId)
    // eslint-disable-next-line
  }, [forceUpdate])
  
  let isSame=true;
  let previousDate=''
  return (
    <div className="exercise-list-container">
      {exerciseList && exerciseList.map(item=>{
        isSame=item.date_completed===previousDate;
        previousDate=item.date_completed
        return (
          <div key={item.id}>
            {!isSame && <h4 style={{margin: '20px 0px 10px 10px', letterSpacing: '1.5px'}}>{item.date_completed}</h4>}
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