import React, { useState, useRef, useEffect } from "react"
import { axiosWithAuth } from "../utilities/axiosAuth"
import {connect} from "react-redux"
import TextField from '@material-ui/core/TextField'
import { StyledFormButton } from '../utilities/styles'
import { gsap, Bounce } from 'gsap'
import { DatePicker } from '@material-ui/pickers'

const AddExercise = ({ history, userId }) => {

    let formItem = useRef()

    const [exercise, setExercise] = useState({
        date: '',
        name: '',
        weight: '',
        reps: '',
        sets: ''
    });

    const handleChanges = event => {
        setExercise({ ...exercise, [event.target.name]: event.target.value });
    };

    const submitForm = event => {
        event.preventDefault();
        const reformattedExercise = {
            user_id: userId,
            weight: exercise.weight,
            reps: exercise.reps,
            sets: exercise.sets,
            date_completed: exercise.date,
            workout_name: exercise.name
        }

        axiosWithAuth() 
            .post(`https://bw-weight-lifting-journal.herokuapp.com/api/workouts`, reformattedExercise)
            .then(res => {
            })
            .catch(error => console.log(error.response))

        setExercise({ 
            name: '',
            date: '',
            weight: '',
            reps: '',
            sets: ''
        });
    }

    useEffect(() => {
           gsap.to(
            formItem,
            2,
                {
                    y: -10,
                    ease: Bounce.easeOut,
                }
            ) 
       }
    )

//In lieu of a succes message on successfull submit form will reroute to the home page.
//There is also no form validation on button three inputs, this was done on purpose as we didn't want them to be required inputs for our app.

    return (
        <div ref={el => {formItem = el}} className='add-exercise-container'>
            <h2 className='add-title'>Add New Exercise</h2>
            <form onSubmit={e=>{
                submitForm(e,exercise)
                history.push('/dashboard')
            }
            }>
                <div className='add-exercise-form'>
                <DatePicker
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
  
export default connect(mapStateToProps,{})(AddExercise);