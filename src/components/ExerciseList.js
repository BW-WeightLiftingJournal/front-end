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
      {console.log(exerciseList)}
      {exerciseList.map(item=>{
        isSame=item.date===previousDate;
        previousDate=item.date
        return (
          <>
            {!isSame && <h4 style={{margin: '20px 0px 10px 10px', letterSpacing: '1.5px'}}>{item.date}</h4>}
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