import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { styles } from '../../../styles/global';
import RequestButton from '../../../components/Button';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../../../components/Header'

const ViewReport = () =>{

    const arrow = 'chevron-right';
    
    const reportData =  useSelector((state) => state.login.report)

    return (
        <View style={[styles.container, {
            flexDirection: "column"
          }]}>

            <SafeAreaView style={styles.scrollContainer}>
                <Header/>
                <ScrollView style={styles.scrollView}>
                    <View style={{padding: 10}}>
                        <View style={[styles.mainCard, {flexDirection: 'row'}]}>
                            <Text style={[styles.title, {flex: 1, fontWeight: 'bold', }]}>{reportData.id && reportData.test.name}</Text>
                            {/* <Text style={[styles.title, {flex: 1, fontWeight: 'bold', alignSelf: 'flex-end'}]}>Cardiology</Text> */}
                        </View>
                        <View>
                            <View style={styles.whitecard}>
                                <View style={[styles.row, {marginTop: 40}]}>
                                    <View style={{flex: 6}}>
                                        <Text style={styles.p}>Test Date</Text>
                                        <Text style={styles.pBold}>{reportData.id && reportData.testDate}</Text>
                                    </View>
                                    <View style={{flex: 6}}>
                                        <Text style={styles.p}>Time</Text>
                                        <Text style={styles.pBold}>{reportData.id && reportData.testTime}</Text>
                                    </View>
                                </View>
                                <View style={[styles.row, {marginTop: 40}]}>
                                    <View style={{flex: 6}}>
                                        <Text style={styles.p}>Issued Date</Text>
                                        <Text style={styles.pBold}>{reportData.id && reportData.issuedDate}</Text>
                                    </View>
                                    <View style={{flex: 6}}>
                                        <Text style={styles.p}>Clinic</Text>
                                        <Text style={styles.pBold}>{reportData.id && reportData.test.clinic.name} Clinic</Text>
                                    </View>
                                </View>
                                <View style={[styles.row]}>
                                    <View style={{flex: 6}}>
                                        <Text style={styles.p}>Note</Text>
                                        <Text style={[styles.pBold, {textAlign: 'justify'}]}>{reportData.id && reportData.test.description}</Text>
                                    </View>
                                </View>
                                <View style={[styles.row]}>
                                    <View style={{flex: 6}}>
                                        <Text style={styles.p}>Report Data</Text>
                                        <View style={[styles.row, {marginVertical: 0}]}>
                                            <View style={{flex: 6}}>
                                                <Text style={styles.pBold}>{reportData.id && reportData.test.field1}</Text>
                                                <Text style={[styles.pBold, {fontWeight: 'normal'}]}>{reportData.id && reportData.data1}</Text>
                                            </View>
                                            <View style={{flex: 6}}>
                                                <Text style={styles.pBold}>{reportData.id && reportData.test.field2}</Text>
                                                <Text style={[styles.pBold, {fontWeight: 'normal'}]}>{reportData.id && reportData.data2}</Text>
                                            </View>
                                        </View> 
                                    </View>
                                </View> 
                                {/* {reportData.pdfReport == null ? <Text>N/A</Text> : <ViewPDFComponent reportDetails={reportData.pdfReport}/>}                           */}
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default ViewReport;