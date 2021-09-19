import React, { useState, useEffect } from 'react';
import{ Text, View, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image } from 'react-native'; 
import { styles } from '../../styles/global';
import Cal from '../../components/Calender'; 
import ActionButton from '../../components/Button'; 
import {useSelector, useDispatch} from 'react-redux';
import Constants from '../../utils/Constants';
import axios from 'axios';
import { setNextClinic } from '../../redux/actions/loginAction'
import NextClinicCard from './../../components/NextClinicDataCard'
import {USER_LOGIN_URL, setPastClinic} from '../../redux/actions/loginAction'
import PatientStaticChart from '../../components/Charts'
import Header from '../../components/Header'

const Separator = () => (
    <View style={styles.separator} />
  )

  async function get_next_clinic_data(userId) {

    let clinic_data = []

  
    try {
      await axios
        .get(Constants.API_BASE_URL + '/getNextClinicDetails/' + userId)
        .then((res) => {
          if (res.status == 200) {
            console.log("dfdfdf", res)
            clinic_data = res.data
          }
        })
      return clinic_data
    } catch (error) {
      console.log(error)
    }
  }

  async function get_past_clinic_data(userId) {

    let clinic_data = []
  
    try {
      await axios
        .get(Constants.API_BASE_URL + '/patient/clinic/history/list/' + userId)
        .then((res) => {
          if (res.status == 200) {
            // console.log(res)
            clinic_data = res.data
          }
        })
      return clinic_data
    } catch (error) {
      console.log(error)
    }
  }

const Dashboard = ({navigation}) => {

    const dispatch = useDispatch()

    const user = useSelector((state) => state);
    const userData = user.login.user[0]
    // const userId = userData.id
    const userId = 200004

    useEffect(() => {
        get_next_clinic_data(userId).then((res) => {
          setClinicData(res)
          setNextClinicData(res[0])
           console.log(res)
        })
        get_past_clinic_data(userId).then((res) => {
            setPastClinicData(res)
            // console.log(res)
          })
      }, [])

    const [clinicData, setClinicData] = useState([])
    const [nextClinicData, setNextClinicData] = useState([])
    const [pastClinicData, setPastClinicData] = useState([])
    
    // const dataaaa = nextClinicData.clinicDate
    
    // const [data, setData] = useState()
    console.log('pasttts ' , pastClinicData[0])
  
    // const renderData = (data) => {
    //   setData(data)
    // }
  
    

    
    

    const viewNext = () => {
        navigation.push('NextClinic');
    } 
    const viewClinic = () => { 
        navigation.push('ViewClinic');
    }  

    return(
        <View style={[styles.container, {
            flexDirection: "column"
          }]}>
                          
            <SafeAreaView style={styles.scrollContainer}>
                <Header/>
                <ScrollView style={styles.scrollView}>
                    <View style={{padding: 10 }}>
                        <View style={styles.mainCard}>
                            
                        <View style={[styles.card, {flex: 2,}]}>
                            <View style={[styles.cardTitle, {height: 40, flexDirection: "row", }]}>
                                <Text style={styles.H1}>Next Cilic  - </Text>
                                {/* <Text>{ navigation.getParam() }</Text> */}
                                <View style={styles.txtLeft}><Text style={styles.H1}>{nextClinicData.id && nextClinicData.clinicDate.nurse.clinic.name}</Text></View>
                            </View>
                            <View style={[{flex: 8, flexDirection: "row" }]}>
                                <View style={[styles.cardI, {flex: 2,}]}>
                                    <Text style={styles.p}>Date </Text>
                                    <Text style={styles.p}>Time </Text>
                                    <Text style={styles.p}>Queue No</Text>
                                </View>
                                <View style={[styles.cardI, {flex: 4,}]}>
                                    <Text style={styles.p}>- {nextClinicData.id && nextClinicData.clinicDate.date}</Text>
                                    <Text style={styles.p}>- {nextClinicData.id && nextClinicData.time}</Text>
                                    <Text style={styles.p}>- {nextClinicData.id && nextClinicData.queueNo}</Text>
                                </View>
                            </View>
                            <View style={{width: 100, alignSelf: 'flex-end', margin: 10}}>
                                <ActionButton text='View >>' onPress={() => {dispatch(setNextClinic(clinicData)), navigation.navigate('ViewNextClinic')}}/>
                            </View>
                        </View>
                          
                            <View style={[styles.card, {justifyContent: 'center', alignItems: 'center'}]}>
                                <PatientStaticChart/>
                            </View>

                            <View style={[styles.card, {justifyContent: 'center', alignItems: 'center'}]}>
                                <PatientStaticChart/>
                            </View>

                            

                            <View style={[styles.card, {flex: 2,}]}>
                                <View style={[styles.cardTitle, {height: 40, flexDirection: "row", }]}>
                                    <Text style={styles.H1}>Past Clinics  - </Text>
                                    <View style={styles.txtLeft}><Text style={styles.H1}>{pastClinicData[0] && pastClinicData[0].doctor.clinic.name}</Text></View>
                                </View>
                                <View style={[{flex: 8, flexDirection: "row" }]}>
                                    <View style={[styles.cardI, {flex: 2,}]}>
                                        <Text style={styles.p}>Date </Text>
                                        <Text style={styles.p}>Time </Text>
                                        <Text style={styles.p}>Queue No</Text>
                                        <Text style={styles.p}>Doctor</Text>
                                    </View>
                                    <View style={[styles.cardI, {flex: 4,}]}>
                                        <Text style={styles.p}>- {pastClinicData[0] && pastClinicData[0].clinicAppointment.clinicDate.date}</Text>
                                        <Text style={styles.p}>- {pastClinicData[0] && pastClinicData[0].clinicAppointment.time}</Text>
                                        <Text style={styles.p}>- {pastClinicData[0] && pastClinicData[0].clinicAppointment.queueNo}</Text>
                                        <Text style={styles.p}>- {pastClinicData[0] && pastClinicData[0].doctor.name}</Text>
                                    </View>
                                </View>
                                <View style={{width: 100, alignSelf: 'flex-end', margin: 10}}>
                                    <ActionButton text='View >>' onPress={() => {dispatch(setPastClinic(pastClinicData)), navigation.push('ViewPastClinic')}}/>
                                </View>
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
         </View>
    )
}

export default Dashboard;