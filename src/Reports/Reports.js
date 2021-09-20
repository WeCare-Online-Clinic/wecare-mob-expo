import React, { useState, useEffect } from 'react';
import { Text, Button, View, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { styles } from '../../styles/global';
import {useSelector, useDispatch} from 'react-redux';
import Constants from '../../utils/Constants';
import axios from 'axios';
import zIndex from '@material-ui/core/styles/zIndex';
import {USER_LOGIN_URL, setReport} from '../../redux/actions/loginAction'
import Header from '../../components/Header'

const Separator = () => (
    <View style={[styles.separator, {marginVertical: 0}]} />
  );

async function get_reports_data(userId) {

  let clinic_data = []

  try {
    await axios
      .get(Constants.API_BASE_URL + '/getLabReportDetails/' + userId)
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
    const [reportsData, setrepoRtsData] = useState([])
    const [data, setData] = useState()
  
    const renderData = (data) => {
      setData(data)
    }
  
    useEffect(() => {
      get_reports_data(userId).then((res) => {
        setrepoRtsData(res)
        // console.log(res)
      })
    }, [])

    const viewClinic = () => {
        navigation.navigate('ViewClinic')
        
    }

    return (
        <View style={[styles.container, {flexDirection: "column"}]}>
            <Header/>
            <View style={{paddingHorizontal: 20, marginVertical: 20}}> 
                <Text style={styles.title}>Reports</Text>
            </View>
            <View style={[styles.row, {margin: 30, marginBottom: 0, marginTop: 20}]}>
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
                              
                                  {reportsData.map((row, index) => (
                                    <View style={[styles.row, {marginVertical: 10}]} key={index}>
                                        <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                            <Text style={styles.p18}>{row.id && row.testDate}</Text>
                                        </View>
                                        <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                            <Text style={styles.p18}>{row.id && row.test.name}</Text>
                                        </View>
                                        <View style={{flex: 1, justifyContent: 'center'}}>
                                          <FontAwesome5  name={arrow} size={20} color={'#1B3E72'} onPress={() => {dispatch(setReport(row)), navigation.navigate('ViewReport')}} />
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