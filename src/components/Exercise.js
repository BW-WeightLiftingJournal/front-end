import React from "react"
import {connect} from "react-redux"
import DeleteIcon from '@material-ui/icons/Delete';
import {
        startEdit, 
        finishEdit, 
        deleteItem, 
        copy, 
        handleChange
    } from "../utilities/actions"

const Exercise = ({
        editedItem, 
        isEdit, 
        exercise, 
        startEdit, 
        finishEdit, 
        deleteItem, 
        handleChange,
        copy
    }) => {
    return (
        <div className="exercise-container">
            {isEdit && editedItem.id===exercise.id ? 
                <form 
                    className="single-exercise-edit" 
                    onSubmit={e=> finishEdit(e, exercise.id, editedItem)}
                    >
                    <input 
                        type='text'
                        placeholder='Name'
                        name='name'
                        value={editedItem.name}
                        onChange={e=> handleChange(e, 'editedItem')}
                        />
                    <input 
                        type='text'
                        placeholder='Sets'
                        name='sets'
                        value={editedItem.sets}
                        onChange={e=> handleChange(e, 'editedItem')}
                        />
                    <input 
                        type='text'
                        placeholder='Reps'
                        name='reps'
                        value={editedItem.reps}
                        onChange={e=> handleChange(e, 'editedItem')}
                        />
                    <input 
                        type='text'
                        placeholder='Weight'
                        name='weight'
                        value={editedItem.weight}
                        onChange={e=> handleChange(e, 'editedItem')}
                        />
                    <button>SAVE</button>

                </form> :
                <div className="single-exercise-data">
                    <h4 style={{minWidth: '150px'}}>{exercise.name}</h4>
                    <p>Sets: {exercise.sets}</p>
                    <p>Reps: {exercise.reps}</p>
                    <p>Weight: {exercise.weight} lbs</p>
                </div>}
            
            <div className="single-exercise-buttons">
                <span 
                    style={{cursor: 'pointer', marginRight: '10px'}} 
                    onClick={()=>copy(exercise)}>COPY</span>
                <span 
                    style={{cursor: 'pointer', marginRight: '10px'}} 
                    onClick={()=>startEdit(exercise.id)}>EDIT</span>
                <DeleteIcon 
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
        handleChange
    })(Exercise);