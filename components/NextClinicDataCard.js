import React, { useState } from 'react';
import{ Text, View, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image } from 'react-native'; 
import ActionButton from './Button'; 
import { styles } from '../styles/global';

const NextClinicDataCard = ({navigation}) => {

    const viewNext = () => {
        navigation.push('NextClinic');
    } 

    return(
        <View style={[styles.card, {flex: 2,}]}>
            <View style={[styles.cardTitle, {height: 40, flexDirection: "row", }]}>
                <Text style={styles.H1}>Next Cilic  - </Text>
                {/* <Text>{ navigation.getParam()}</Text> */}
                <View style={styles.txtLeft}><Text style={styles.H1}>Eye</Text></View>
            </View>
            <View style={[{flex: 6, flexDirection: "row" }]}>
                <View style={[styles.cardI, {flex: 2,}]}>
                    <Text style={styles.p}>Date </Text>
                    <Text style={styles.p}>Time </Text>
                    <Text style={styles.p}>Room No</Text>
                    <Text style={styles.p}>Doctor</Text>
                </View>
                <View style={[styles.cardI, {flex: 6,}]}>
                    <Text style={styles.p}>- 2021/08/07</Text>
                    <Text style={styles.p}>- 8.30 AM</Text>
                    <Text style={styles.p}>- 65</Text>
                    <Text style={styles.p}>- Dr. Uditha</Text>
                </View>
            </View>
            <View style={{width: 100, alignSelf: 'flex-end', margin: 10}}>
                <ActionButton text='Request >>' onPress={viewNext}/>
            </View>
        </View>
    )
}

export default NextClinicDataCard