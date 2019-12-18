import { 
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
    } 
from "../actions"

const initialState = {
    credentials: {}
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
    case LOGOUT:
        return initialState
    default:
        return state
}
}
