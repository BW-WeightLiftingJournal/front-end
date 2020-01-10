import React from "react"
import {connect} from "react-redux"
import DeleteIcon from '@material-ui/icons/Delete';
import {
        finishEdit, 
        deleteItem, 
        copy, 
        handleChange
    } from "../utilities/actions"
import FileCopyIcon from '@material-ui/icons/FileCopy';
import EditIcon from '@material-ui/icons/Edit';

const Exercise = ({
        editedItem, 
        isEdit, 
        exercise,  
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
                    <button style={{padding: '10px', borderRadius: '4px'}}>SAVE</button>

                </form> :
                <div className="single-exercise-data">
                    <h4 style={{minWidth: '100px'}}>{exercise.name}</h4>
                    <p>Sets: {exercise.sets}</p>
                    <p>Reps: {exercise.reps}</p>
                    <p>Weight: {exercise.weight} lbs</p>
                </div>}
            
            <div className="single-exercise-buttons">
                <FileCopyIcon
                    title='Copy'
                    style={{cursor: 'pointer', marginRight: '10px', opacity: '60%'}} 
                    onClick={()=>copy(exercise)}
                />
                <EditIcon
                    title='Edit'
                    style={{cursor: 'pointer', marginRight: '10px', color: '#69868C'}} 
                    onClick={()=>copy(exercise.id)}
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
        finishEdit, 
        deleteItem, 
        copy, 
        handleChange
    })(Exercise);