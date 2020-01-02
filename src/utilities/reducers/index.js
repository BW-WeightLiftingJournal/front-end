import { 
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    HANDLE_CHANGE,
    RESET_ERRORS,
    VERIFY_EMAIL,
    START_EDIT,
    FINISH_EDIT,
    DELETE,
    COPY
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
    isEdit: false,
    editedItem: {},
    exerciseList: [
        {
            id: 0,
            name: 'dumbbell',
            weight: 20,
            reps: 10,
            sets: 3,
            date: '12/20/2019'
        },
        {
            id: 1,
            name: 'benchpress',
            weight: 200,
            reps: 11,
            sets: 2,
            date: '12/20/2019'
        },
        {
            id: 2,
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
    case START_EDIT:
        return {
            ...state,
            isEdit: true,
            editedItem: {...state.exerciseList[payload]}
        }
    case FINISH_EDIT:
        return {
            ...state,
            isEdit: false,
        }
    case DELETE:
        return {
            ...state
        }
    case COPY:
        return {
            ...state
        }
    case LOGOUT:
        return initialState
    default:
        return state
}
}
