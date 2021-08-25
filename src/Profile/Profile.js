import React ,{useEffect}from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { styles } from '../../styles/global';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/action/PatientAction';
import withReducer from '../../store/withReducer';
import reducer from '../store/reducer/index';
import PatientData from './PatientData';
// import ActionButton from '../../components/Button';


const Profile = () => {

    

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Actions.getPatient());
    })

    
    const reducerData = useSelector(({ patients }) =>patients.managePatient );
    console.log('check list', reducerData.patientList);
    const patientList = reducerData.patientList;
    const ptlist = PatientData
    return (

        <PatientData/>
    )
}

export default withReducer('patients', reducer)(Profile);