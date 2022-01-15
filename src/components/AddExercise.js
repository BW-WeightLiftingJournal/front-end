import React, { useState, useEffect } from "react"
import {connect} from "react-redux"
import { StyledButton, GrayTextField } from '../utilities/styles'
import { DatePicker } from '@material-ui/pickers'
import {submitForm} from "../utilities/actions"
import {validateExercise} from "../utilities/validation"
// import moment from "moment"


const AddExercise = ({history, userId, submitForm }) => {
    const [errors, setErrors ] = useState([])

    // let formItem = useRef()

    const [exercise, setExercise] = useState({
        date: '',
        name: '',
        weight: null,
        reps: null,
        sets: null
    });
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [reformattedExercise, setReformattedExercise] = useState({})

    const handleDateChange = date => {
        setSelectedDate(date);
    };
    

    const handleChanges = event => {
        setExercise({ ...exercise, [event.target.name]: event.target.value });
    };

    const handleSubmitForm = async event => {
        event.preventDefault();
        const date = new Date(selectedDate)
        const formatted = {
            user_id: userId,
            weight: exercise.weight,
            reps: exercise.reps,
            sets: exercise.sets,
            date_completed: date,
            workout_name: exercise.name
        }
        setReformattedExercise(formatted)

        setErrors(validateExercise(formatted))

        
    }
    useEffect(()=> {
        if (errors.length >0 && errors[0]==="clear") {
            submitForm(reformattedExercise)
            setExercise({ 
                name: '',
                date: '',
                weight: null,
                reps: null,
                sets: null
            });
            history.push('/dashboard')
        }
        // eslint-disable-next-line
    }, [errors])
            

    return (
        <div 
        // ref={el => {formItem = el}} 
        className='add-exercise-container'>
            <h2 className='add-title'>Add New Exercise</h2>
            {errors.length >0 && errors[0] !== "clear" ? <div style={{color: 'red'}}>{errors.map((err, ind)=> <p key={ind}>{err}</p>)}</div> : <br/>}
            <form onSubmit={e=>{
                handleSubmitForm(e,exercise)
            }
            }>
                <div className='add-exercise-form'>
                <DatePicker
                    required
                    label="Date"
                    inputVariant="outlined"
                    name="date"
                    disableFuture
                    value={selectedDate}
                    onChange={handleDateChange}
                />
                <br/>
                <GrayTextField
                    required
                    variant='outlined'
                    label='Exercise'
                    name='name'
                    onChange={handleChanges}
                />
                <br/>
                <GrayTextField                  
                    variant='outlined'
                    label='Weight'
                    name='weight'
                    onChange={handleChanges}
                />
                <br/>
                <div className='short-inputs'>
                    <GrayTextField
                        className='short-input'
                        variant='outlined'
                        label='Reps'
                        name='reps'
                        onChange={handleChanges}
                    />
                    <br/>
                    <GrayTextField
                        className='short-input'
                        variant='outlined'
                        label='Sets'
                        name='sets'
                        onChange={handleChanges}
                    />
                </div>
                <br/>
                    <StyledButton 
                        variant='outlined' 
                        type='submit'
                    > 
                        ADD EXCERCISE
                    </StyledButton>
                </div>
                </form>
            </div>
    )
}

const mapStateToProps = state => ({
    ...state
  })
  
export default connect(mapStateToProps,{submitForm})(AddExercise);