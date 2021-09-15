import * as Action from '../actions/loginAction'

const initState = {
    isLogin: false,
    user: [],
    nextClinic:{},
}

const userProfile = (state = initState, {type, payload}) => {
    switch (type){

        case Action.LOGIN_SUCCESS: {
            return {
                ...state, 
                user: payload,
                isLogin: true
            }
        }

        case Action.NEXT_CLINIC: {
            return {
                ...state,
                nextClinic: payload,
            }
        }
        
        default: return state
    }
}

export default userProfile