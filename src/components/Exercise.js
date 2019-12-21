import React from "react"
import {connect} from "react-redux"

const Exercise = ({exercise}) => {
    return (
        <div className="exercise-container">
            <h4>{exercise.name}</h4>
            <p>Sets: {exercise.sets}</p>
            <p>Reps: {exercise.reps}</p>
            <p>Weight: {exercise.weight} lbs</p>
        </div>
    )
}

const mapStateToProps = state => ({
    ...state
  })
  
export default connect(mapStateToProps,{})(Exercise);