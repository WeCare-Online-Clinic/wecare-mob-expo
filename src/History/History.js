import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { styles } from '../../styles/global';
import {useSelector, useDispatch} from 'react-redux';
import Constants from '../../utils/Constants';
import axios from 'axios';
import {
    Card,
    CardActions,
    CardContent,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TablePagination,
    Button,
  } from '@material-ui/core'
import zIndex from '@material-ui/core/styles/zIndex';

const Separator = () => (
    <View style={[styles.separator, {marginVertical: 0}]} />
  );

async function get_clinic_data(userId) {
  console.log('clinic history')
  
  

  let clinic_data = []

  try {
    await axios
      .get(Constants.API_BASE_URL + '/patient/clinic/history/list/' + userId)
      .then((res) => {
        if (res.status == 200) {
          console.log(res)
          clinic_data = res.data
        }
      })
    return clinic_data
  } catch (error) {
    console.log(error)
  }
} 


const History = ({navigation}) => {

    const arrow = 'chevron-right';

    const user = useSelector((state) => state);
    const userData = user.login.user[0]
    const userId = userData.id

    const [clinicData, setClinicData] = useState([])
    const [data, setData] = useState()
  
    const renderData = (data) => {
      setData(data)
    }
  
    useEffect(() => {
      get_clinic_data(userId).then((res) => {
        setClinicData(res)
        console.log(res)
      })
    }, [])



    console.log("historyyyyyyyyy data", clinicData)
    

    const viewClinic = () => {
        navigation.push('ViewClinic', userData);
    }

    return (
        <View style={[styles.container, {flexDirection: "column"}]}>
            <View style={{padding: 10}}> 
                <Text style={styles.title}>History</Text>
            </View>
            <SafeAreaView style={styles.scrollContainer}>
                <ScrollView style={styles.scrollView}>
                    <View style={{padding: 0, paddingTop: 0}}>
                        <View>
                            <View style={styles.whitecard}>
                            <Table>
                                <TableHead style={{ backgroundColor: '#C4DFE8' }}>
                                    <TableRow>
                                        <TableCell>
                                            <Text style={[styles.p, {paddingRight: 30}]}>Clinic Date</Text>
                                        </TableCell>
                                        <TableCell>
                                            <Text style={styles.p}>Clinic</Text>
                                        </TableCell>
                                        <TableCell>
                                            <Text style={styles.p}>  </Text>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                  {clinicData.map((row, index) => (
                                   <TableRow key={index}> 
                                     <TableCell style={{
                                       color: '#1B3E72',
                                       paddingBottom: 10,
                                       fontSize: 18,
                                       fontWeight: 'bold',
                                     }}>
                                       {row.clinicAppointment.clinicDate.date}
                                     </TableCell>
                                     <TableCell style={{
                                       color: '#1B3E72',
                                       paddingBottom: 10,
                                       fontSize: 18,
                                       fontWeight: 'bold',
                                     }}>
                                       {row.doctor.clinic.name}
                                     </TableCell>
                                     <TableCell>
                                     <FontAwesome5  name={arrow} size={20} color={'#1B3E72'} onPress={viewClinic}/>
                                     </TableCell>
                                   </TableRow>
                                  ))}
                                </TableBody>
                            </Table>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}



export default History;