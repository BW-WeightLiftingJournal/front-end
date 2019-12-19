import React from "react"
import {connect} from "react-redux"

const AddExercise = props => {
    return (
        <div>Add Exercise</div>
    )
}

const mapStateToProps = state => ({
    ...state
  })
  
export default connect(mapStateToProps,{})(AddExercise);