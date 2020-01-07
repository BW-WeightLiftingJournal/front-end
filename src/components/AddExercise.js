import React, { useState } from "react"
import {connect} from "react-redux"
import TextField from '@material-ui/core/TextField'
import { StyledFormButton } from '../utilities/styles'
import { submitForm } from "../utilities/actions"

const AddExercise = ({ history, addNewExercise,  submitForm}) => {

    const [exercise, setExercise] = useState({
        id: '',
        date: '',
        name: '',
        weight: '',
        reps: '',
        sets: ''
    });

    const handleChanges = event => {
        setExercise({ ...exercise, [event.target.name]: event.target.value });
    };

    // const submitForm = event => {
    //     event.preventDefault();

    //     addNewExercise(exercise);

    //     setExercise({ 
    //         date: '',
    //         exercise: '',
    //         weight: '',
    //         reps: '',
    //         sets: ''
    //     });
    // }

    return (
        <div className='add-exercise-container'>
            <h2 className='add-title'>Add New Exercise</h2>
            <form onSubmit={e=>{
                submitForm(e,exercise)
                history.push('/dashboard')
            }
            }>
                <div className='add-exercise-form'>
                <TextField
                    required
                    label="Date"
                    variant="outlined"
                    name="date"
                    onChange={handleChanges}
                />
                <br/>
                <TextField
                    required
                    variant='outlined'
                    label='Exercise Name'
                    name='name'
                    onChange={handleChanges}
                />
                <br/>
                <div className='short-inputs'>
                    <TextField                  
                        className='short-input'
                        variant='outlined'
                        label='Weight Lifted'
                        name='weight'
                        onChange={handleChanges}
                    />
                    <br/>
                    <TextField
                        className='short-input'
                        variant='outlined'
                        label='Reps Completed'
                        name='reps'
                        onChange={handleChanges}
                    />
                </div>
                <br/>
                <TextField
                    variant='outlined'
                    label='Sets Completed'
                    name='sets'
                    onChange={handleChanges}
                />
                <br/>
                    <StyledFormButton variant='outlined' type='submit'> ADD EXCERCISE</StyledFormButton>
                </div>
                </form>
            </div>
    )
}

const mapStateToProps = state => ({
    ...state
  })
  
export default connect(mapStateToProps,{submitForm})(AddExercise);


// const [exercises, setExercises ] = useState([]);

//     const addNewExercise = exercise => {
//         const newExercise = {
//             date: exercise.date,
//             exercise: exercise.exercise,
//             weight: exercise.weight,
//             reps: exercise.reps,
//             sets: exercise.sets
//         };

//         const newExerciseCollection = [ ...exercises, newExercise];

//         setExercises(newExerciseCollection);
// } 

{/* <h1>New Exercises</h1>
            <AddExercise addNewExercise={addNewExercise} /> */}