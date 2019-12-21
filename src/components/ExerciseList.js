import React from "react"
import {connect} from "react-redux"
import Exercise from "./Exercise"

const ExerciseList = ({
  exerciseList
}) => {
  return (
    <div classList="exercise-list-container">
      {exerciseList.map(item=>{
        return (
          <Exercise key={item.id} exercise={item}/>
        )
      })}
    </div>
  )
}

const mapStateToProps = state => ({
    exerciseList: state.exerciseList
  })
  
export default connect(mapStateToProps,{})(ExerciseList);