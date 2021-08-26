import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { styles } from '../../../styles/global';
import RequestButton from '../../../components/Button';


const ViewReport = () =>{

    const arrow = 'chevron-right';

    return (
        <View style={[styles.container, {
            flexDirection: "column"
          }]}>

            <SafeAreaView style={styles.scrollContainer}>
                <ScrollView style={styles.scrollView}>
                    <View style={{padding: 10}}>
                        <View style={[styles.mainCard, {flexDirection: 'row'}]}>
                            <Text style={[styles.title, {flex: 1}]}>ECG</Text>
                            <Text style={[styles.title, {flex: 1, fontWeight: 'bold', alignSelf: 'flex-end'}]}>Cardiology</Text>
                        </View>
                        <View>
                            <View style={styles.whitecard}>
                                <View style={[styles.row, {marginTop: 40}]}>
                                    <View style={{flex: 6}}>
                                        <Text style={styles.p}>Date</Text>
                                        <Text style={styles.pBold}>2021/09/11</Text>
                                    </View>
                                    <View style={{flex: 6}}>
                                        <Text style={styles.p}>Time</Text>
                                        <Text style={styles.pBold}>8.30 AM</Text>
                                    </View>
                                </View>
                                <View style={[styles.row]}>
                                    <View style={{flex: 6}}>
                                        <Text style={styles.p}>Doctor</Text>
                                        <Text style={styles.pBold}>Dr. Uditha Bulugahapitiya</Text>
                                    </View>
                                </View>
                                <View style={[styles.row, {alignSelf: 'center', margin: 0}]}>
                                    <View style={styles.boxBorder}>
                                        <Text style={{alignSelf: 'center'}}>Report data</Text>
                                    </View>
                                </View>
                                <View style={styles.row}>
                                    <View style={{flex: 2}}>
                                        <RequestButton text='Previous' />                                        
                                    </View>
                                    <View style={{flex: 2}}></View>
                                    <View style={{flex: 2}}>
                                        <RequestButton text='Next' />                                        
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

export default ViewReport;