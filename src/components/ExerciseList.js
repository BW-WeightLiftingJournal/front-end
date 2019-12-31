import React from "react"
import {connect} from "react-redux"
import Exercise from "./Exercise"

const ExerciseList = ({
  exerciseList
}) => {
  let isSame=true;
  let previousDate=''
  return (
    <div classList="exercise-list-container">
      {exerciseList.map(item=>{
        isSame=item.date===previousDate;
        previousDate=item.date
        return (
          <>
            {!isSame && <h4>{item.date}</h4>}
            <Exercise key={item.id} exercise={item}/>
          </>
          
        )
      })}
    </div>
  )
}

const mapStateToProps = state => ({
    exerciseList: state.exerciseList
  })
  
export default connect(mapStateToProps,{})(ExerciseList);