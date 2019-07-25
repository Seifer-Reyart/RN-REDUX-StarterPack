import {SUCCESS_LOGIN} from '../Actions/user'

const initialState = { user: {} }

export function user(state = initialState, action) {
    switch (action.type) {
        case SUCCESS_LOGIN:
            return {
                user: action.user
            };
        default:
            return state
    }
}