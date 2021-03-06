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
      {exerciseList.map(item=>{
        isSame=item.date_completed===previousDate;
        previousDate=item.date_completed
        return (
          <div key={item.id}>
            {!isSame && <h4 style={{margin: '20px 0px 10px 10px', letterSpacing: '1.5px'}}>{item.date_completed}</h4>}
            <Exercise exercise={item}/>
          </div>
          
        )
      })}
    </div>
  )
}

const mapStateToProps = state => ({
    exerciseList: state.exerciseList,
    userId: state.userId,
    forceUpdate: state.forceUpdate
  })
  
export default connect(mapStateToProps,{getList})(ExerciseList);