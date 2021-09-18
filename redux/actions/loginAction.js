import Constants from '../../utils/Constants';


export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const ON_GET_NEXT_CLINIC_DETAILS = 'ON_GET_NEXT_CLINIC_DETAILS';
export const ON_GET_REQUEST_DATES = 'ON_GET_REQUEST_DATES';


export const NEXT_CLINIC = 'NEXT_CLINIC'

export const PAST_CLINIC = 'PAST_CLINIC'

export const REPORT = 'REPORT'

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

export const setPastClinic = (clinicdata) => {
    return {
        type: PAST_CLINIC,
        payload: clinicdata,
    }
}

export const setReport = (reportdata) => {
    return {
        type: REPORT,
        payload: reportdata,
    }
}







