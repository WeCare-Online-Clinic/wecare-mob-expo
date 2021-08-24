import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import withReducer from '../../store/withReducer'
import reducer from '../store/reducer/index'
import { View, Text } from 'react-native';

const ParientData = (props) => {

    const reducerData = useSelector(({ patients }) =>patients.managePatient );
    console.log('check list', reducerData.patientList);
    const patientList = reducerData.patientList;

    return patientList
}

export default withReducer('patients', reducer)(ParientData);