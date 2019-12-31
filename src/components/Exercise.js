import React from "react"
import {connect} from "react-redux"
import DeleteIcon from '@material-ui/icons/Delete';
import {edit, deleteItem} from "../utilities/actions"

const Exercise = ({exercise, edit, deleteItem}) => {
    return (
        <div className="exercise-container">
            <div className="single-exercise-data">
                <h4>{exercise.name}</h4>
                <p>Sets: {exercise.sets}</p>
                <p>Reps: {exercise.reps}</p>
                <p>Weight: {exercise.weight} lbs</p>
            </div>
            <div className="single-exercise-buttons">
                <span style={{cursor: 'pointer'}} onClick={()=>edit(exercise.id)}>EDIT</span>
                <DeleteIcon style={{color: '#F26363', cursor: 'pointer'}} fontSize='medium' onClick={()=>deleteItem(exercise.id)}/>
            </div>
            
        </div>
    )
}

const mapStateToProps = state => ({
    ...state
  })
  
export default connect(mapStateToProps,{edit, deleteItem})(Exercise);