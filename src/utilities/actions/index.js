import { axiosWithAuth } from "../axiosAuth"
import axios from "axios"
import {validateCredentials} from "../validation"
import moment from "moment"

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGOUT_START = 'LOGOUT_START'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAIL = 'LOGOUT_FAIL'
export const HANDLE_CHANGE = 'HANDLE_CHANGE'
export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS ='REGISTER_SUCCESS'
export const REGISTER_FAIL ='REGISTER_FAIL'
export const RESET_ERRORS='RESET_CREDS'
export const VERIFY_EMAIL = 'VERIFY_EMAIL'
export const START_EDIT = 'START_EDIT'
export const FINISH_EDIT = 'FINISH_EDIT'
export const CANCEL_EDIT = 'CANCEL_EDIT'
export const DELETE = 'DELETE'
export const COPY = 'COPY'
export const SUBMIT_FORM = "SUBMIT_FORM"
export const RESET_FORM= 'RESET_FORM'
export const RETRIEVE_START = 'RETRIEVE_START'
export const RETRIEVE_SUCCESS = 'RETRIEVE_SUCCESS'
export const RETRIEVE_FAIL = 'RETRIEVE_FAIL'
export const VERIFY_START = 'VERIFY_START'
export const VERIFY_FAIL = 'VERIFY_FAIL'

export const getList = (id)=> dispatch => {
  dispatch({type: RETRIEVE_START})
  axiosWithAuth()
    .get(`${process.env.REACT_APP_BASE_URL}/api/workouts/${id}`)
    .then(res=> {
      dispatch({type: RETRIEVE_SUCCESS, payload: res.data})
    })
    .catch(err=> {
      console.log(err.message)
      dispatch({type: RETRIEVE_FAIL, payload: err.message})
    })
}

export const login = (credentials) => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post(`${process.env.REACT_APP_BASE_URL}/api/auth/login`, credentials)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data})
      
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: LOGIN_FAIL, payload: err })
    });
};

export const register = (credentials) => dispatch => {
  dispatch({ type: REGISTER_START });
  const errorList = validateCredentials(credentials)
  if(!!errorList.length>0) dispatch({type: REGISTER_FAIL, payload: errorList})
  else {
    const correctedCredentials = {
      username: credentials.username,
      password: credentials.password,
      department: 'Student'
    }
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/api/auth/register`, correctedCredentials)
      .then(res => {
        dispatch({ type: REGISTER_SUCCESS, payload: res })
        dispatch(login(credentials))
      })
      .catch(err => {
        // console.log(err)
        const eList = [err.message]
        dispatch({ type: REGISTER_FAIL, payload: eList })
      });
  }
}

export const verifyEmail = (e, email) => dispatch=>{
  e.preventDefault()
  dispatch({type: VERIFY_START})
  if(!!email) {
    setTimeout(()=> {
      dispatch({type: VERIFY_EMAIL, payload: email})
    }, 2000)
  }
  else {
    dispatch({type: VERIFY_FAIL})
  }
  
}

export const handleChange = (event, formType) => ({
    type: HANDLE_CHANGE,
    payload: { target: event.target, form: formType}
})

export const resetErrors= ()=> ({
  type: RESET_ERRORS
})

export const resetForm = (form) => ({
  type: RESET_FORM, payload: form
})

export const logout = ()=> dispatch => {
  localStorage.setItem('token', '')
  dispatch({ type: LOGOUT_START });
  axios
  .get(`${process.env.REACT_APP_BASE_URL}/api/auth/logout`)
  .then(res => {
    dispatch({ type: LOGOUT_SUCCESS})
  })
  .catch(err => dispatch({ type: LOGOUT_FAIL, payload: err}))
  

  //following line is to test functional features without access to API.  can be removed once server is setup
  // dispatch({ type: LOGOUT_SUCCESS })
  // localStorage.setItem('token','')

}
export const startEdit = (id) => ({
  type: START_EDIT,
  payload: id
})

export const finishEdit = (id, exercise) => dispatch => {
  axiosWithAuth()
  .put(`${process.env.REACT_APP_BASE_URL}/api/workouts/${id}`, exercise)
  .then(res => {
    dispatch({ type: FINISH_EDIT, payload: res.data })
  })
  .catch(err => console.log(err));
}

export const cancelEdit = () => ({
  type: CANCEL_EDIT,
})

export const deleteItem = (id) => dispatch => {
  axiosWithAuth()
  .delete(`${process.env.REACT_APP_BASE_URL}/api/workouts/${id}`)
  .then(res => {
    dispatch({ type: DELETE, payload: res.data })
  })
  .catch(err => console.log(err));
}

export const copy = (exercise, userId)=> dispatch => {
  const date = moment(new Date())
  const temp = 
  {
    user_id: userId,
    weight: exercise.weight,
    reps: exercise.reps,
    sets: exercise.sets,
    date_completed: date,
    workout_name: exercise.workout_name
  }
  axiosWithAuth()
  .post(`${process.env.REACT_APP_BASE_URL}/api/workouts`, temp)
  .then(res => {
    dispatch({ type: COPY, payload: res.data })
  })
  .catch(err => console.log(err));
}
/*see AddExercise.js component for a local copy of this function*/
export const submitForm = (exercise) => dispatch=> {
  // const newExercise = {
  //   ...exercise,
  //   id: new Date().getMilliseconds()
  // }
  axiosWithAuth()
  .post(`${process.env.REACT_APP_BASE_URL}/api/workouts`, exercise)
  .then(res => {
    dispatch({ type: SUBMIT_FORM, payload: res.data })
  })
  .catch(err => console.log(err));
}
