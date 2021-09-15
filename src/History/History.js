import React, { useState, useEffect } from 'react';
import { Text, Button, View, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { styles } from '../../styles/global';
import {useSelector, useDispatch} from 'react-redux';
import Constants from '../../utils/Constants';
import axios from 'axios';
import zIndex from '@material-ui/core/styles/zIndex';
import {USER_LOGIN_URL, setNextClinic} from '../../redux/actions/loginAction'

const Separator = () => (
    <View style={[styles.separator, {marginVertical: 0}]} />
  );

async function get_clinic_data(userId) {

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


const History = ({navigation}) => {

    const arrow = 'chevron-right'
    const dispatch = useDispatch()

    const user = useSelector((state) => state);
    const userData = user.login.user[0]
    const userId = userData.id
    // const userId = 200004

    const [clinicData, setClinicData] = useState([])
    const [data, setData] = useState()
  
    const renderData = (data) => {
      setData(data)
    }
  
    useEffect(() => {
      get_clinic_data(userId).then((res) => {
        setClinicData(res)
        // console.log(res)
      })
    }, [])

    // console.log("historyyyyyyyyy data", clinicData)
    

    const viewClinic = () => {
        navigation.navigate('ViewClinic')
        
    }

    return (
        <View style={[styles.container, {flexDirection: "column"}]}>
            <View style={{padding: 10}}> 
                <Text style={styles.title}>History</Text>
            </View>
            <View style={[styles.row, {margin: 40, marginBottom: 0, marginTop: 40}]}>
                <View style={{flex: 6}}>
                    <Text style={styles.p}>Date</Text>
                </View>
                <View style={{flex: 6}}>
                    <Text style={styles.p}>Clinic</Text>
                </View>
            </View>
            <SafeAreaView style={styles.scrollContainer}>
                <ScrollView style={styles.scrollView}>
                    <View style={{padding: 0, paddingTop: 0}}>
                        <View>
                            <View style={styles.whitecard}>
                              
                                  {clinicData.map((row, index) => (
                                    <View style={[styles.row, {marginVertical: 10}]} key={index}>
                                        <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                            <Text style={styles.p18}>{row.clinicAppointment.clinicDate.date}</Text>
                                        </View>
                                        <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                            <Text style={styles.p18}>{row.doctor.clinic.name}</Text>
                                        </View>
                                        <View style={{flex: 1, justifyContent: 'center'}}>
                                          <FontAwesome5  name={arrow} size={20} color={'#1B3E72'} onPress={() => {dispatch(setNextClinic(row)), navigation.navigate('ViewClinic')}} />
                                          {/* <Button onPress={viewClinic} >view</Button> */}
                                        </View>
                                        <Separator/>
                                    </View>                                    
                                  ))}                                                           
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}


export default History;