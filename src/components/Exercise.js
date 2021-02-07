import React from "react"
import {connect} from "react-redux"
import DeleteIcon from '@material-ui/icons/Delete';
import {
        finishEdit, 
        deleteItem, 
        copy, 
        handleChange,
        startEdit,
        cancelEdit
    } from "../utilities/actions"
import FileCopyIcon from '@material-ui/icons/FileCopy';
import EditIcon from '@material-ui/icons/Edit';
import EditDialog from "./EditDialog"

const Exercise = ({
        startEdit,
        editedItem, 
        isEdit, 
        exercise,  
        finishEdit, 
        deleteItem, 
        handleChange,
        copy,
        userId,
        cancelEdit
    }) => {
    return (
        <div className="exercise-container">
            {isEdit && editedItem.id===exercise.id &&
            <EditDialog 
                finishEdit={finishEdit} 
                exercise={exercise}
                cancelEdit={cancelEdit}
            />}
                <div className="single-exercise-data">
                    <h4 className="single-exercise-title">{exercise.workout_name}</h4>
                    <p>{exercise.weight} lbs</p>
                    <p>R: {exercise.reps}</p>
                    <p>S: {exercise.sets}</p>
                </div>
            
            <div className="single-exercise-buttons">
                <FileCopyIcon
                    title='Copy'
                    style={{cursor: 'pointer', marginRight: '10px', opacity: '60%'}} 
                    onClick={()=>copy(exercise, userId)}
                />
                <EditIcon
                    title='Edit'
                    style={{cursor: 'pointer', marginRight: '10px', color: '#69868C'}} 
                    onClick={()=>startEdit(exercise.id)}
                />
                <DeleteIcon 
                    title='Delete'
                    style={{color: '#F26363', cursor: 'pointer'}} 
                    fontSize='default' 
                    onClick={()=>deleteItem(exercise.id)}/>
            </div>
            
        </div>
    )
}

const mapStateToProps = state => ({
    ...state
  })
  
export default connect(mapStateToProps,{
        startEdit,
        finishEdit, 
        deleteItem, 
        copy, 
        handleChange,
        cancelEdit
    })(Exercise);