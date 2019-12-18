import { 
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    HANDLE_CHANGE
    } 
from "../actions"

const initialState = {
    credentials: {},
    error: '',
    token: '',
}

export const rootReducer = (state = initialState, {type, payload})=> {
switch (type) {
    case LOGIN_START:
        return {
            ...state
        }
    case LOGIN_SUCCESS:
        return {
            ...state
        }
    case LOGIN_FAIL:
        return {
            ...state
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
    case LOGOUT:
        return initialState
    default:
        return state
}
}
