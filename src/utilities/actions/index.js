import { axiosWithAuth } from "../axiosAuth"
import axios from "axios"

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
export const DELETE = 'DELETE'
export const COPY = 'COPY'
export const SUBMIT_FORM = "SUBMIT_FORM"
export const RESET_FORM= 'RESET_FORM'

export const getList = ()=> dispatch => {
  axios
    .get('https://bw-weight-lifting-journal.herokuapp.com/api/workouts')
    .then(res=> {
      console.log(res)
    })
    .catch(err=> console.log(err))
}

export const login = (event, credentials) => dispatch => {
  /*Below is for use when API down for testing and demo */

  // event.preventDefault()
  // dispatch({ type: LOGIN_START });
  // if(credentials.username && credentials.username.toUpperCase()=== 'TEST' && credentials.password==='test'){
  //   dispatch({ type: LOGIN_SUCCESS, payload: credentials.username })
    
  // }
  // else {
  //   dispatch({ type: LOGIN_FAIL, payload: 'Incorrect Username or Password' })
  // }
  event.preventDefault()
  dispatch({ type: LOGIN_START });
  axios
    .post('https://bw-weight-lifting-journal.herokuapp.com/api/auth/login', credentials)
    .then(res => {
      console.log(res)
      dispatch({ type: LOGIN_SUCCESS, payload: res.data})
      
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: LOGIN_FAIL, payload: err })
    });
};

export const register = (event, credentials) => dispatch => {
  event.preventDefault()
  const correctedCredentials = {
    username: credentials.username,
    password: credentials.password,
    department: 'student'
  }
  dispatch({ type: REGISTER_START });
  axios
    .post('https://bw-weight-lifting-journal.herokuapp.com/api/auth/register', correctedCredentials)
    .then(res => {
      console.log(res)
      dispatch({ type: REGISTER_SUCCESS, payload: res })
      dispatch(login(event,credentials))
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: REGISTER_FAIL, payload: err })
    });
}

//temporary with API down
// export const register = (event, creds) => dispatch =>{
//   event.preventDefault()
//   login(event, {username: 'test', password: 'test'})
// }

export const verifyEmail = (e, email) => dispatch=>{
  e.preventDefault()
  dispatch({type: VERIFY_EMAIL, payload: email})
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
  dispatch({ type: LOGOUT_START });
  axios
  .get(`https://bw-weight-lifting-journal.herokuapp.com/api/auth/logout`)
  .then(res => {
    localStorage.clear()
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

export const finishEdit = (e, id, exercise) => dispatch => {
  e.preventDefault()
  axios
  .put(`https://bw-weight-lifting-journal.herokuapp.com/api/edit/${id}`, exercise)
  .then(res => {
    dispatch({ type: FINISH_EDIT, payload: res.data })
  })
  .catch(err => console.log(err));
  //following line is to test UI features without access to API.  can be removed once server is setup
  // dispatch({ type: FINISH_EDIT, payload: exercise })
}

export const deleteItem = (id) => dispatch => {
  axios
  .delete(`https://bw-weight-lifting-journal.herokuapp.com/api/delete/${id}`)
  .then(res => {
    dispatch({ type: DELETE, payload: res.data })
  })
  .catch(err => console.log(err));
  //following line is to test UI features without access to API.  can be removed once server is setup
  // dispatch({ type: DELETE, payload: id })
}

export const copy = (exercise)=> dispatch => {
  const today = new Date()
  const date = `${(today.getMonth() + 1)}/${today.getDate()}/${today.getFullYear()}`;
  const temp = 
  {
    ...exercise,
    id: today.getTime(),
    date: date
  }
  axios
  .post('https://bw-weight-lifting-journal.herokuapp.com/api/add', temp)
  .then(res => {
    dispatch({ type: COPY, payload: res.data })
  })
  .catch(err => console.log(err));
  //following line is to test UI features without access to API.  can be removed once server is setup
  dispatch({ type: COPY, payload: temp})
}

export const submitForm = (event, exercise) => dispatch=> {
  
  event.preventDefault()
  const newExercise = {
    ...exercise,
    id: new Date().getMilliseconds()
  }
  dispatch({
    type: SUBMIT_FORM,
    payload: newExercise
  })
}
