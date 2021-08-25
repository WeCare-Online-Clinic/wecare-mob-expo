// import { clearAppLocalStorage, setStorageItem } from '../../utils/StorageUtils'
import axios from 'axios'
import Constants from '../../../utils/Constants'
import reducer from '../reducers/index'
import withReducer from '../../../store/withReducer'
import history from '../../../@history'

export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const LOGIN_SET_USER = 'LOGIN_SET_USER'

export const USER_LOGGED_OUT = 'USER_LOGGED_OUT'

const USER_LOGIN_URL = 'http://localhost:8080/wecare/userlogin'

export function submitLogin(data) {
    console.log
    const request = axios.post(USER_LOGIN_URL, data)
    console.log('req', request)

    return(dispatch, getState) => {
        request
            .then((res) => {
            console.log('response', res.data)
            Constants.LOGGED_IN_USER = res.data
            if (res.status === 200) {
              dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data,
              })
              let userRole = res.data.userRole
              let userId = res.data.id
              console.log('userRole', userRole, userId)
            //   setStorageItem('user', res.data)
              switch (userRole) {
                case 'patient':
                  {
                    history.push({
                      pathname: '/profile',
                    })
                  }
                  break
                default: {
                  history.push({
                    pathname: '/',
                  })
                }
              }
            }
          })
            .catch((e) => {
                console.log('error'. e)
            })
    }
}


export function setLoginUser(user) {
    return (dispatch, getState) => {
      dispatch({
        type: LOGIN_SET_USER,
        payload: user,
      })
    }
  }

