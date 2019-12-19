import React from "react"
import {connect} from "react-redux"

const ExerciseList = props => {
    return (
            <div>Excercise List</div>
    )
}

const mapStateToProps = state => ({
    ...state
  })
  
export default connect(mapStateToProps,{})(ExerciseList);