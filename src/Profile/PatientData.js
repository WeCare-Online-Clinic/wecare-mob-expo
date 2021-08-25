import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import withReducer from '../../store/withReducer'
import reducer from '../store/reducer/index'
import { Text, View, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { styles } from '../../styles/global';

const ParientData = (props) => {

    const arrow = 'chevron-right';

    const editField = () => {
        // navigation.navigate('EditProfile');
    }

    const reducerData = useSelector(({ patients }) =>patients.managePatient );
    console.log('check list', reducerData.patientList);
    const patientList = reducerData.patientList;

    return (
            <View style={[styles.container, {
                flexDirection: "column"
            }]}>
                
                <SafeAreaView style={styles.scrollContainer}>
                    <ScrollView style={styles.scrollView}>
                        
                        {patientList.map((patient) => (   
                            <View style={{padding: 10}}>
                                <View style={styles.mainCard}>
                                    <Text style={[styles.title, {alignSelf: 'center'}]}>{"Welcome  "+ patient.name.slice(0, patient.name.indexOf(" "))}</Text>                                
                                </View>
                                <View>
                                    <View>
                                        <Image style={{width: 200, height: 200, alignSelf: 'center', marginTop: 40, marginBottom: 20}}
                                            source={require('./profile.png')}
                                        />
                                    </View>
                                    <View style={styles.mainCard}>
                                        <Text style={[styles.title, {alignSelf: 'center'}]}>{patient.name}</Text>
                                    </View>
                                    <View style={styles.whitecard}>
                                        <View style={styles.row}>
                                            <View style={{flex: 11}}>
                                                <Text style={styles.p}>Address</Text>
                                                <Text style={styles.pBold}>{patient.addr}</Text>
                                            </View>
                                            <View style={{flex: 1, justifyContent: 'center'}}>
                                                <FontAwesome5  name={arrow} size={35} color={'#1B3E72'} onPress={editField}/>
                                            </View>
                                        </View>
                                        <View style={styles.row}>
                                            <View style={{flex: 11}}>
                                                <Text style={styles.p}>Phone</Text>
                                                <Text style={styles.pBold}>{patient.contact}</Text>
                                            </View>
                                            <View style={{flex: 1, justifyContent: 'center'}}>
                                                <FontAwesome5  name={arrow} size={35} color={'#1B3E72'} onPress={editField}/>
                                            </View>
                                        </View>
                                        <View style={styles.row}>
                                            <View style={{flex: 11}}>
                                                <Text style={styles.p}>Email</Text>
                                                <Text style={styles.pBold}>{patient.email}</Text>
                                            </View>
                                            <View style={{flex: 1, justifyContent: 'center'}}>
                                                <FontAwesome5  name={arrow} size={35} color={'#1B3E72'} onPress={editField}/>
                                            </View>
                                        </View>
                                        <View style={styles.row}>
                                            <View style={{flex: 11}}>
                                                <Text style={styles.p}>Gender</Text>
                                                <Text style={styles.pBold}>{patient.gender == 'f' ? 'female' : 'male'}</Text>
                                            </View>
                                            <View style={{flex: 1, justifyContent: 'center'}}>
                                                <FontAwesome5  name={arrow} size={35} color={'#1B3E72'} onPress={editField}/>
                                            </View>
                                        </View>
                                        <View style={styles.row}>
                                            <View style={{flex: 11}}>
                                                <Text style={styles.p}>Date of Birth</Text>
                                                <Text style={styles.pBold}>{patient.dob.slice(0, patient.dob.indexOf("T"))}</Text>
                                            </View>
                                            <View style={{flex: 1, justifyContent: 'center'}}>
                                                <FontAwesome5  name={arrow} size={35} color={'#1B3E72'} onPress={editField}/>
                                            </View>
                                        </View>
                                        <View style={styles.row}>
                                            <View style={{flex: 11}}>
                                                    <Text style={styles.p}>NIC Number</Text>
                                                    <Text style={styles.pBold}>{patient.nic}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.row}>
                                            <View style={{flex: 11}}>
                                                    <Text style={styles.p}>Registered Date</Text>
                                                    <Text style={styles.pBold}>{patient.registeredDate.slice(0, patient.registeredDate.indexOf("T"))}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        ))}
                    </ScrollView>
                </SafeAreaView>
            </View>
    )
}

export default withReducer('patients', reducer)(ParientData);