import { 
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    HANDLE_CHANGE,
    RESET_ERRORS,
    VERIFY_EMAIL
    } 
from "../actions"
import { FaDumbbell } from "react-icons/fa"

const initialState = {
    loginCredentials: {},
    registerCredentials: {},
    recoverEmail: {},
    error: '',
    token: '',
    isLogging: false,
    isRegistering: false,
    isFetching: false,
    isVerify: false,
    exerciseList: [
        {
            id: 1,
            name: 'dumbbell',
            weight: 20,
            reps: 10,
            sets: 3
        },
        {
            id: 2,
            name: 'benchpress',
            weight: 200,
            reps: 11,
            sets: 2
        }
    ],

}

export const rootReducer = (state = initialState, {type, payload})=> {
switch (type) {
    case LOGIN_START:
        return {
            ...state,
            isLogging: true,
            error: ''
        }
    case LOGIN_SUCCESS:
        return {
            ...state,
            isLogging: false,
            error: ''
        }
    case LOGIN_FAIL:
        return {
            ...state,
            isLogging: false,
            error: 'Login Fail'
        }
    case HANDLE_CHANGE:
        return {
            ...state,
            [payload.form]: 
            {
                ...state[payload.form],
                [payload.target.name]: payload.target.value
            }
        }
    case VERIFY_EMAIL:
        return {
            ...state
        }
    case RESET_ERRORS:
        return {
            ...state,
            error: ''
        }
    case LOGOUT:
        return initialState
    default:
        return state
}
}
