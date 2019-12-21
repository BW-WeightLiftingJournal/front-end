import { axiosWithAuth } from "../axiosAuth"
import axios from "axios"

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGOUT = 'LOGOUT'
export const HANDLE_CHANGE = 'HANDLE_CHANGE'
export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS ='REGISTER_SUCCESS'
export const REGISTER_FAIL ='REGISTER_FAIL'
export const RESET_ERRORS='RESET_CREDS'
export const VERIFY_EMAIL = 'VERIFY_EMAIL'

export const login = (event, credentials) => dispatch => {
  event.preventDefault()
  console.log(credentials)
  dispatch({ type: LOGIN_START });
  axiosWithAuth()
    .post('http://localhost:5000/api/auth/login', credentials)
    .then(res =>
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
    )
    .catch(err => {
      return dispatch({ type: LOGIN_FAIL, payload: err })
    });
};

export const register = (event, credentials) => dispatch => {
  event.preventDefault()
  console.log(credentials)
  dispatch({ type: REGISTER_START });
  axios
    .post('http://localhost:5000/api/auth/register', credentials)
    .then(res => {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data.payload })
      login(event,credentials)
    })
    .catch(err => {
      return dispatch({ type: REGISTER_FAIL, payload: err })
    });
}

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

export const logout = ()=> dispatch => {
  localStorage.clear()
  dispatch({
    type: LOGOUT
})
}



