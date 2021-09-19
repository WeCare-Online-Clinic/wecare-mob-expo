import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { styles } from '../../../styles/global';
import RequestButton from '../../../components/Button';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../../../components/Header'


export default function Profile({navigation}){

    const arrow = 'chevron-right';

    const pastClinicData =  useSelector((state) => state.login.pastClinic)
    const clinicData = pastClinicData[0]
    console.log("Cliniccccccc ",  clinicData)

    return (
        <View style={[styles.container, {
            flexDirection: "column"
          }]}>
            
            <SafeAreaView style={styles.scrollContainer}>
                <Header/>
                <ScrollView style={styles.scrollView}>
                    <View style={{padding: 10}}>
                        <View style={[styles.mainCard, {flexDirection: 'row'}]}>
                            <Text style={[styles.title, {fontWeight: 'bold'}]}>{clinicData.doctor.clinic.name} Clinic</Text>
                        </View>
                        <View>
                            <View style={styles.whitecard}>
                                <View style={[styles.row, {marginTop: 40}]}>
                                    <View style={{flex: 6}}>
                                        <Text style={styles.p}>Date</Text>
                                        <Text style={styles.pBold}>{clinicData.clinicAppointment.clinicDate.date}</Text>
                                    </View>
                                    <View style={{flex: 6}}>
                                        <Text style={styles.p}>Time</Text>
                                        <Text style={styles.pBold}>{clinicData.clinicAppointment.time}</Text>
                                    </View>
                                </View>
                                <View style={[styles.row]}>
                                    <View style={{flex: 6}}>
                                        <Text style={styles.p}>Clinic</Text>
                                        <Text style={styles.pBold}>{clinicData.doctor.clinic.name}</Text>
                                    </View>
                                    <View style={{flex: 6}}>
                                        <Text style={styles.p}>Queue No</Text>
                                        <Text style={styles.pBold}>{clinicData.clinicAppointment.queueNo}</Text>
                                    </View> 
                                </View>
                                <View style={[styles.row]}>
                                    <View style={{flex: 6}}>
                                        <Text style={styles.p}>Doctor</Text>
                                        <Text style={styles.pBold}>Dr. {clinicData.doctor.name}</Text>
                                    </View>
                                </View>
                                <View style={[styles.row]}>
                                    <View style={{flex: 6}}>
                                        <Text style={styles.p}>Note</Text>
                                        <Text style={styles.pBold}>{clinicData.note}</Text>
                                    </View>
                                </View>
                                <View style={[styles.row]}>
                                    <View style={{flex: 6}}>
                                        <Text style={styles.p}>Diagnosis</Text>
                                        <Text style={styles.pBold}>{clinicData.diagnosis}</Text>
                                    </View>
                                </View>
                                <View style={[styles.row]}>
                                    <View style={{flex: 6}}>
                                        <Text style={styles.p}>Prescription</Text>
                                        {clinicData.prescription == null ? 'N/A' : 
                                        clinicData.prescription.map((row, index) => (
                                           <View key={index} style={{marginVertical: 5}}>
                                                <Text style={styles.pBold}>{row.medicine} - {row.quantity}</Text>
                                                <View style={[styles.row, {marginVertical: 1}]}>
                                                    <Text style={[styles.pBold, {fontWeight: 'normal', fontSize: 15, padding: 5}]}>Morining - {row.morning} </Text>
                                                    <Text style={[styles.pBold, {fontWeight: 'normal', fontSize: 15, padding: 5}]}>Aftrenoon - {row.afternoon} </Text>
                                                    <Text style={[styles.pBold, {fontWeight: 'normal', fontSize: 15, padding: 5}]}>Evening - {row.evening} </Text>
                                                </View>
                                                
                                           </View>
                                        )) 
                                        }
                                    </View>
                                </View>
                                <View style={styles.row}>
                                    <View style={{flex: 11}}>
                                        <Text style={styles.p}>Repots</Text>
                                        <Text style={styles.pBold}>{clinicData.labTests == null ? 'N/A' : clinicData.labTests}</Text>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center'}}>
                                        <FontAwesome5  name={arrow} size={20} color={'#1B3E72'}/>
                                    </View>
                                </View>                             
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}
