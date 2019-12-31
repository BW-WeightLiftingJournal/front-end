import { 
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    HANDLE_CHANGE,
    RESET_ERRORS,
    VERIFY_EMAIL,
    EDIT,
    DELETE
    } 
from "../actions"

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
            sets: 3,
            date: '12/20/2019'
        },
        {
            id: 2,
            name: 'benchpress',
            weight: 200,
            reps: 11,
            sets: 2,
            date: '12/20/2019'
        },
        {
            id: 3,
            name: 'lunges',
            weight: 200,
            reps: 11,
            sets: 2,
            date: '12/21/2019'
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
    case EDIT:
        console.log('editing item ' + payload)
        return {
            ...state
        }
    case DELETE:
        console.log('deleting item ' + payload)
        return {
            ...state
        }
    case LOGOUT:
        return initialState
    default:
        return state
}
}
