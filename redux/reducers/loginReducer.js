import * as Action from '../actions/loginAction'

const initState = {
    isLogin: false,
    user: [],
    nextClinic: [],
    pastClinic: {},
    report: {},
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

        case Action.PAST_CLINIC: {
            return {
                ...state,
                pastClinic: payload,
            }
        }

        case Action.REPORT: {
            return {
                ...state,
                report: payload,
            }
        }
        
        default: return state
    }
}

export default userProfile