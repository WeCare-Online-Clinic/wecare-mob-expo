import React, {setState, useState} from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image, Alert, TextInput, Modal, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { styles } from '../../../styles/global';
import RequestButton from '../../../components/Button';
import {useSelector, useDispatch} from 'react-redux';
import ActionButton from '../../../components/Button';
import axios from 'axios';
import Constants from '../../../utils/Constants';
import Header from '../../../components/Header'

async function get_Request_Dates(requestDateObject) {

    let clinic_dates = []
  
    try {
      await axios
        .post(Constants.API_BASE_URL + '/getRequestDates/',requestDateObject)
        .then((res) => {
          if (res.status == 200) {
            // console.log(res)
            clinic_dates = res.data
          }
        })
      return clinic_dates
    } catch (error) {
      console.log(error)
    }
  }

  async function send_Request(requestObject) {

    let request_dates = []
  
    try {
      await axios
        .post(Constants.API_BASE_URL + '/savePatientRequest/',requestObject)
        .then((res) => {
          if (res.status == 200) {
            // console.log(res)
            request_dates = res.data
          }
        })
      return request_dates
    } catch (error) {
      console.log(error)
    }
  }

export default function Profile({navigation}){

    const arrow = 'chevron-right';

    const clinicData =  useSelector((state) => state.login.nextClinic)

    // console.log("Cliniccccccc ",  clinicData)

    const [isModalVisible, setModalVisible] = useState(false);
  
    // This is to manage TextInput State
    const [request, setRequest] = useState("");
    const [requestDateList, setRequestDateList] = useState([])

    // const RequestToChange = (row) => {
        
    //     let reqestDateObject = Object.assign({}, {
    //         clinicId: row && row.nurse.clinic.id,
    //         currentClinicDate: row && row.date
    //     })

    //     // console.log('wewewewewewew', reqestDateObject)
    //     get_Request_Dates(reqestDateObject).then((res) => {
    //         setRequestDateList(res)
            
    //       })

        
    // } 

    const [requestSent , setRequstSent] = useState(null)
    const sendRequest = (row) =>{
        let requestObject = Object.assign({}, {
            clinic: row.clinicDate.nurse.clinic,
            patient: row.patient,
            clinicDate: row.clinicDate
        })
        send_Request(requestObject).then((res) => {
            
            console.log("sendddd ", res)
            setRequest(res)
            if (res) {
                console.log(res);
                Alert.alert(
                    "Change Clinic Date Request",
                    res,
                    [
                      
                      { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }
            else {
              console.log("requ errr")
              Alert.alert(
                "Change Clinic Date Request",
                "Your was not sent. Please try again"
                
                [
                  
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
            }

            
          })
          
        

    }

    const list = () => {
        return requestDateList.map((element, key) => {
          return (
            <TouchableOpacity key={key}>
                <View  style={[styles.row ,{marginVertical: 5}]}>
                    <FontAwesome5  name="calendar-alt" size={15} color={'#1B3E72'}  style={{padding: 3, marginHorizontal: 10}}/>
                    <Text style={[styles.p, {padding: 0, }]}>{element}</Text>
                </View>
            </TouchableOpacity>
          );
        });
      };
    
      

    return (
        <View style={[styles.container, {
            flexDirection: "column"
          }]}>
            
            <SafeAreaView style={styles.scrollContainer}>
              <Header/>
                <ScrollView style={styles.scrollView}>
                    {clinicData.map((row, index) => (
                        <View key={index} style={[styles.card, {flex: 2,}]}>
                            <View style={[styles.cardTitle, {height: 40, flexDirection: "row", }]}>
                                <Text style={styles.H1}>Next Cilnic  - </Text>
                                {/* <Text>{ navigation.getParam() }</Text> */}
                                <View style={styles.txtLeft}><Text style={styles.H1}>{row.id && row.clinicDate.nurse.clinic.name}</Text></View>
                            </View>
                            <View style={[{flex: 8, flexDirection: "row" }]}>
                                <View style={[styles.cardI, {flex: 2,}]}>
                                    <Text style={styles.p}>Date </Text>
                                    <Text style={styles.p}>Time </Text>
                                    <Text style={styles.p}>Queue No</Text>
                                </View>
                                <View style={[styles.cardI, {flex: 4,}]}>
                                    <Text style={styles.p}>- {row.id && row.clinicDate.date }</Text>
                                    <Text style={styles.p}>- {row.id && row.time }</Text>
                                    <Text style={styles.p}>- {row.id && row.queueNo}</Text>
                                </View>
                            </View>
                            <View style={{width: 100, alignSelf: 'flex-end', margin: 10}}>
                                <ActionButton text='Request to Change >>' onPress={() => { 
                                  
                                  let reqestDateObject = Object.assign({}, {
                                    clinicId: row && row.clinicDate.nurse.clinic.id,
                                    currentClinicDate: row && row.clinicDate.date
                                  })
                        
                                  // console.log('wewewewewewew', reqestDateObject)
                                  get_Request_Dates(reqestDateObject).then((res) => {
                                      setRequestDateList(res)
                                      
                                    })
                                  
                                   setModalVisible(!isModalVisible)}}/>
                                
                            </View>
                            <Modal animationType="slide" 
                                transparent visible={isModalVisible} 
                                presentationStyle="overFullScreen" 
                                onDismiss={()=> {setModalVisible(!isModalVisible)}}>
                                <View style={styles.viewWrapper}>
                                    <View style={styles.modalView}>
                                        <View style={[styles.row ,{paddingVertical: 10}]}>
                                            <Text style={[styles.H1 ,{color: "#1B3E72"}]}>{row.id && row.clinicDate.nurse.clinic.name} Cilnic</Text>
                                        </View> 
                                                                               
                                        <View>{list()}</View>                                    
                
                                        {/** This button is responsible to close the modal */}
                                        <View style={[styles.row, {paddingHorizontal: 32, paddingTop: 20}]}>
                                            
                                            <View style={{flex: 2}}>
                                                <ActionButton text="Close" onPress={() => setModalVisible(!isModalVisible)} />                                        
                                            </View>
                                            <View style={{flex: 2}}></View>
                                            <View style={{flex: 2}}>
                                                <ActionButton text="Send" onPress={()=> {sendRequest(row), setModalVisible(!isModalVisible)}} />                                        
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </Modal>                            
                        </View>
                    ))}
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}



