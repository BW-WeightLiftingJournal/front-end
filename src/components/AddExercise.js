import React from "react"
import {connect} from "react-redux"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const AddExercise = props => {
    return (
        <div className='add-exercise-container'>
            <h2>Add New Exercise</h2>
            <form>
                <div className='add-exercise-form'>
                <TextField
                    id='outline-required'
                    variant='outlined'
                    label='Date'
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
                <div className='short-inputs'>
                    <TextField
                        className='short-input'
                        id='outline-required'
                        variant='outlined'
                        label='Weight Lifted'
                        name='weight'
                    />
                    <br/>
                    <TextField
                        className='short-input'
                        id='outline-required'
                        variant='outlined'
                        label='Reps Completed'
                        name='reps'
                    />
                </div>
                <br/>
                <TextField
                    id='outline-required'
                    variant='outlined'
                    label='Sets Completed'
                    name='sets'
                />
                <br/>
                    <Button variant='outlined' type='submit'> ADD EXCERCISE</Button>
                </div>
                </form>
            </div>
    )
}

const mapStateToProps = state => ({
    ...state
  })
  
export default connect(mapStateToProps,{})(AddExercise);