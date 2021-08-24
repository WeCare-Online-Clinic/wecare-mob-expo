import PatientService from './PatientService';
import axios from 'axios'

export const ON_GET_PATIENT='[ON_GET_PATIENT] ON_GET_PATIENT';
export const ON_SAVE_PATIENT = '[ON_SAVE_PATIENT] ON_SAVE_PATIENT';
export const ON_GET_CLINIC_DAYS = '[ON_GET_CLINICS] ON_GET_CLINIC_DAYS';
export const ON_GET_CLINICS='[ON_GET_CLINICS] ON_GET_CLINIC';
export const ON_GET_PATIENT_PROFILE_BY_ID = '[ON_GET_PATIENT_PROFILE_BY_ID] ON_GET_PATIENT';
export const ON_GET_PATIENT_PROFILE_BY_NAME = '[ON_GET_PATIENT_PROFILE_BY_NAME] ON_GET_PATIENT';
export const ON_GET_PATIENT_PROFILE_BY_CLINIC = '[ON_GET_PATIENT_PROFILE_BY_CLINIC] ON_GET_PATIENT';

export function getPatient() {
    const request = PatientService.getPatient();

    console.log('gettttt', request)

    return (dispatch, getState) => {
       
        request.then((response) => {
            console.log('pt list', response.data)
            dispatch({
                type: ON_GET_PATIENT,
                payload: response.data
            })
        }).catch((e)=>{
            console.log('error pt list', e)
        })
    }

}