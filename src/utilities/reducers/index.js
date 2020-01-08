import { 
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_START,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    REGISTER_START,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    HANDLE_CHANGE,
    RESET_ERRORS,
    RESET_FORM,
    VERIFY_EMAIL,
    START_EDIT,
    FINISH_EDIT,
    DELETE,
    COPY,
    SUBMIT_FORM,
    RETRIEVE_SUCCESS,
    RETRIEVE_START,
    } 
from "../actions"

const initialState = {
    loginCredentials: {},
    registerCredentials: {},
    recoverEmail: {},
    loggedInUsername: '',
    error: '',
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    isLoggingIn: false,
    isLoggingOut: false,
    isRegistering: false,
    isFetching: false,
    isVerify: false,
    isEdit: false,
    editedItem: {},
    exerciseList: [
        // {
        //     id: 2,
        //     name: 'lunges',
        //     weight: 200,
        //     reps: 11,
        //     sets: 2,
        //     date: '12/21/2019'
        // },
        // {
        //     id: 0,
        //     name: 'dumbbell',
        //     weight: 20,
        //     reps: 10,
        //     sets: 3,
        //     date: '12/20/2019'
        // },
        // {
        //     id: 1,
        //     name: 'benchpress',
        //     weight: 200,
        //     reps: 11,
        //     sets: 2,
        //     date: '12/20/2019'
        // },
        
    ],

}

export const rootReducer = (state = initialState, {type, payload})=> {
switch (type) {
    case RETRIEVE_START:
        return {
            ...state,
            isFetching: true
        }
    case RETRIEVE_SUCCESS:
        return {
            ...state,
            exerciseList: payload.data,
            isFetching: false
        }
    case LOGIN_START:
        return {
            ...state,
            isLoggingIn: true,
            error: ''
        }
    case LOGIN_SUCCESS:
        const tok = '1P462YTHSHSS6422527HSDVADFAD8764372523111KJHGS73G6G6524116'
        localStorage.setItem('token', tok)
        return {
            ...state,
            isLoggingIn: false,
            error: '',
            token: tok,
            loggedInUsername: payload.message
        }
    case LOGIN_FAIL:
        return {
            ...state,
            isLoggingIn: false,
            error: 'Invalid Username or Password'
        }
    case REGISTER_START:
        return {
            ...state,
            isRegistering: true,
            error: ''
        }
    case REGISTER_SUCCESS:
        
        return {
            ...state,
            isRegistering: false,
            error: ''
        }
    case REGISTER_FAIL:
        return {
            ...state,
            isRegistering: false,
            error: 'Error.  One or more required items invalid'
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
    case RESET_FORM:
        return {
            ...state,
            [payload]: {}
        }
    case START_EDIT:
        return {
            ...state,
            isEdit: true,
            editedItem: state.exerciseList.find(ele=> ele.id===payload)
        }
    case FINISH_EDIT:
        return {
            ...state,
            isEdit: false,
        }
    case DELETE:
        
        return {
            ...state,
            exerciseList: state.exerciseList.filter(ele=> ele.id!==payload)
            
        }
    case COPY:
        return {
            ...state,
            exerciseList: [payload, ...state.exerciseList]
        }
    case LOGOUT_START:
        return {
            ...state,
            isLoggingOut: true,
            error: '',
            token: ''
        }
    case LOGOUT_SUCCESS:
        return {
            ...state,
            isLoggingOut: false,
            error: '',
            token: ''
        }
    case LOGOUT_FAIL:
        return {
            ...state,
            isLoggingOut: false,
            error: 'Logout Fail',
            token: ''
        }
    case SUBMIT_FORM:
        return {
            ...state,
            exerciseList: [payload, ...state.exerciseList]
        }
    default:
        return state
}
}
