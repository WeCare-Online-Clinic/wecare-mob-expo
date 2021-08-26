<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React from 'react';
>>>>>>> 6a5378c0df73ccc8587b97ab572d111a5e093eec
import{ Text, View, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image } from 'react-native'; 
import { styles } from '../../styles/global';
import Cal from '../../components/Calender'; 
import ActionButton from '../../components/Button'; 


const Separator = () => (
    <View style={styles.separator} />
  );

<<<<<<< HEAD
const Dashboard = ({navigation}) => {

    const [userData, setUserData] = useState({
        userId: 55555,
        clinicId: 666666,
    });

    const viewNext = () => {
        navigation.push('NextClinic', userData);
    } 
    const viewClinic = () => { 
        navigation.push('ViewClinic', userData);
=======
const Dashboard = () => {

    const viewNext = () => {
        // navigation.navigate('NextClinic');
    } 
    const viewClinic = () => {
        // navigation.navigate('ViewClinic');
>>>>>>> 6a5378c0df73ccc8587b97ab572d111a5e093eec
    }  

    return(
        <View style={[styles.container, {
            flexDirection: "column"
          }]}>
            
            <SafeAreaView style={styles.scrollContainer}>
                <ScrollView style={styles.scrollView}>
                    <View style={{padding: 10 }}>
                        <View style={styles.mainCard}>
                            <View style={[styles.card, {flex: 2,}]}>
                                <View style={[styles.cardTitle, {height: 40, flexDirection: "row", }]}>
                                    <Text style={styles.H1}>Next Cilic  - </Text>
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
                        {/* <view></view> */}
                            <View style={{alignSelf: 'center', padding: 10}}>
                                <Cal/>
                            </View>

                            <View style={[styles.card, {padding: 10}]}>
                                <Text style={{alignSelf: 'center'}}>FBC</Text>
                                <Image style={{width: 300, height: 150, alignSelf: 'center', marginVertical: 20}}
                                    source={require('./graph.png')}
                                />
                            </View>

                            <View style={[styles.card, {padding: 10}]}>
                                <Text style={{alignSelf: 'center'}}>FBC</Text>
                                <Image style={{width: 300, height: 150, alignSelf: 'center', marginVertical: 20}}
                                    source={require('./graph.png')}
                                />
                            </View>

                            <View style={[styles.card, {flex: 2,}]}>
                                <View style={[styles.cardTitle, {height: 40, flexDirection: "row", }]}>
                                    <Text style={styles.H1}>Past Clinics  - </Text>
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
                                        <Text style={styles.p}>- 2021/58/07</Text>
                                        <Text style={styles.p}>- 8.30 AM</Text>
                                        <Text style={styles.p}>- 65</Text>
                                        <Text style={styles.p}>- Dr. Uditha</Text>
                                    </View>
                                </View>
                                <View style={{width: 100, alignSelf: 'flex-end', margin: 10}}>
                                    <ActionButton text='View >>' onPress={viewClinic}/>
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