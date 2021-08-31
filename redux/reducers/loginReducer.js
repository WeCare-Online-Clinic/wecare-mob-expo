import * as Action from '../actions/loginAction'

const initState = {
    user: [],
}

const userProfile = (state = initState, {type, payload}) => {
    switch (type){

        case Action.LOGIN_SUCCESS: {
            return {
                ...state, 
                user: payload,
            }
        }
        
        default: return state
    }
}

export default userProfile