import axios from 'axios';

const PATIENT_API_BASE_URL = "http://localhost:8080/wecare";

class PatientService {

    
    getPatient() {
        return axios.get(PATIENT_API_BASE_URL + '/getPatientProfile/' + 200005);
    }
    
}
export default new PatientService()
  