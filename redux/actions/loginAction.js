import Constants from '../../utils/Constants';


export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const NEXT_CLINIC = 'NEXT_CLINIC'

export const LOGIN_SET_USER = 'LOGIN_SET_USER'

export const USER_LOGGED_OUT = 'USER_LOGGED_OUT'

export const USER_LOGIN_URL = Constants.API_BASE_URL + '/userlogin'

export const logIn = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user,
    }
}

export const setNextClinic = (clinicdata) => {
    return {
        type: NEXT_CLINIC,
        payload: clinicdata,
    }
}







