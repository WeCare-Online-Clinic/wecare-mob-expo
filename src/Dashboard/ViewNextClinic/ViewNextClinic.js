import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { styles } from '../../../styles/global';
import RequestButton from '../../../components/Button';
import {useSelector, useDispatch} from 'react-redux';
import ActionButton from '../../../components/Button'; 


export default function Profile({navigation}){

    const arrow = 'chevron-right';

    const clinicData =  useSelector((state) => state.login.nextClinic)

    console.log("Cliniccccccc ",  clinicData)

    return (
        <View style={[styles.container, {
            flexDirection: "column"
          }]}>
            
            <SafeAreaView style={styles.scrollContainer}>
                <ScrollView style={styles.scrollView}>
                    {clinicData.map((row, index) => (
                        <View key={index} style={[styles.card, {flex: 2,}]}>
                            <View style={[styles.cardTitle, {height: 40, flexDirection: "row", }]}>
                                <Text style={styles.H1}>Next Cilic  - </Text>
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
                                <ActionButton text='Request to Change >>' />
                            </View>                            
                        </View>
                    ))}
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}
