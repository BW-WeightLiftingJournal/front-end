import React from "react"
import {connect} from "react-redux"
import  TextField from '@material-ui/core/TextField'

const AddExercise = props => {
    return (
        <div>
            <div>Add Exercise</div>
            <form>
                    <input 
                        type='date'
                        name='date'
                        placeholder='Date*'
                    />
                    {/* <input 
                        type='text'
                        name='exercise'
                        placeholder='Exercise Name*'
                    /> */}
                <TextField 
                outlined
                varient='outlined'
                label='Exercise Name*'
                >
                    <input
                    value=''
                    onChange=''
                    />
                </TextField>

                    <input 
                        type='text'
                        name='Sets'
                        placeholder='Sets Completed'
                    />
                    <input 
                        type='text'
                        name='reps'
                        placeholder='Reps Completed'
                    />
                    <input 
                        type='text'
                        name='weight'
                        placeholder='Weight Lifted'
                    />
                    <input 
                        type='text'
                        name='body'
                        placeholder='Body Region*'
                    />
                    <button type='submit'> ADD EXCERCISE</button>
                </form>
            </div>
    )
}

const mapStateToProps = state => ({
    ...state
  })
  
export default connect(mapStateToProps,{})(AddExercise);