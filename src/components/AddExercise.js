import React from "react"
import {connect} from "react-redux"
import TextField from '@material-ui/core/TextField'

const AddExercise = props => {
    return (
        <div className='add-exercise-container'>
            <div>Add Exercise</div>
            <form>
                <div className='add-exercise-form'>
                <TextField
                id='outline-required'
                variant='outlined'
                label='Date*'
                name='date'
                />
                <br/>
                <TextField
                id='outline-required'
                variant='outlined'
                label='Exercise Name*'
                name='exercise'
                />
                <br/>
                <TextField
                id='outline-required'
                variant='outlined'
                label='Sets Completed'
                name='sets'
                />
                <br/>
                <TextField
                id='outline-required'
                variant='outlined'
                label='Reps Completed'
                name='reps'
                />
                <br/>
                <TextField
                id='outline-required'
                variant='outlined'
                label='Weight Lifted'
                name='weight'
                />
                <br/>
                <TextField
                id='outline-required'
                variant='outlined'
                label='Body Region'
                name='body'
                />
                <br/>
                    <button type='submit'> ADD EXCERCISE</button>
                </div>
                </form>
            </div>
    )
}

const mapStateToProps = state => ({
    ...state
  })
  
export default connect(mapStateToProps,{})(AddExercise);