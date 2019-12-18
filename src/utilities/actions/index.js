import { axiosWithAuth } from "../axiosAuth"

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGOUT = 'LOGOUT'

export const login = (event, credentials) => dispatch => {
  event.preventDefault()
  console.log(credentials)
  dispatch({ type: LOGIN_START });
  axiosWithAuth()
    .post('http://localhost:5000/api/login', credentials)
    .then(res =>
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
    )
    .catch(err => {
      return dispatch({ type: LOGIN_FAIL, payload: err })
    });
};

export const logout = ()=> dispatch => {
  localStorage.clear()
  dispatch({
    type: LOGOUT
})
}



