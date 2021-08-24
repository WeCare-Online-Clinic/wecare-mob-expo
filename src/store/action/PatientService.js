import axios from 'axios';

const PATIENT_API_BASE_URL = "http://localhost:8080/wecare";

class PatientService {

    
    getPatient() {
        return axios.get(PATIENT_API_BASE_URL + '/getNurseProfile/' + 1028);
    }
    
}
export default new PatientService()
  