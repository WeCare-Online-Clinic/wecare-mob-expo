import * as Action from '../actions/loginAction'

const initState = {
    user: {},
}

const login = (state = initState, action) => {
    switch (action.type){
        case Action.LOGIN_SUCCESS: {
            return {
                ...initState,
 
                user: action.payload,
            };
        }  
        
        default: return state
    }
}

export default login