import React ,{useEffect}from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { styles } from '../../styles/global';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Constants from '../../utils/Constants';
import { setUser } from '../../redux/actions/profleAction'
import Header from '../../components/Header'

const Profile = ({ navigation }) => {
    
    const user = useSelector((state) => state)    
    const userData = user.login.user[0]
    const arrow = 'chevron-right'; 

    const editField = () => {
        navigation.navigate('EditProfile');
    }

    return (
        <View style={[styles.container, {
            flexDirection: "column"
          }]}>  
            <SafeAreaView style={styles.scrollContainer}>
                <Header/>
                <ScrollView style={styles.scrollView}>
                    <View style={{padding: 10}}>
                        <View style={styles.mainCard}>
                            <Text style={styles.title}>Welcome {userData.name.slice(0, userData.name.indexOf(" "))}</Text>
                        </View>
                        <View>
                            <View>
                                <Image style={{width: 200, height: 200, alignSelf: 'center', marginTop: 40, marginBottom: 20}}
                                    source={require('./profile.png')}
                                />
                            </View>
                            <View style={styles.mainCard}>
                                
                                <View style={styles.row}>
                                    <View style={{flex: 8}}>
                                        <Text style={[styles.title, {alignSelf: 'center'}]}>{userData.name}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.whitecard}>
                                <View style={styles.row}>
                                    <View style={{flex: 11}}>
                                        <Text style={styles.p}>Address</Text>
                                        <Text style={styles.pBold}>{userData.address}</Text>
                                    </View>
                                </View>
                                <View style={styles.row}>
                                    <View style={{flex: 11}}>
                                        <Text style={styles.p}>Phone</Text>
                                        <Text style={styles.pBold}>{userData.contact}</Text>
                                    </View>
                                </View>
                                <View style={styles.row}>
                                    <View style={{flex: 11}}>
                                        <Text style={styles.p}>Email</Text>
                                        <Text style={styles.pBold}>{userData.email}</Text>
                                    </View>
                                </View>
                                <View style={styles.row}>
                                    <View style={{flex: 11}}>
                                        <Text style={styles.p}>Gender</Text>
                                        <Text style={styles.pBold}>{userData.gender == 'f' ? 'Female' : 'Male'}</Text>
                                    </View>
                                </View>
                                <View style={styles.row}>
                                    <View style={{flex: 11}}>
                                        <Text style={styles.p}>Birth Date</Text>
                                        <Text style={styles.pBold}>{userData.birthdate.slice(0, userData.birthdate.indexOf("T"))}</Text>
                                    </View>
                                </View>
                                <View style={styles.row}>
                                    <View style={{flex: 11}}>
                                        <Text style={styles.p}>NIC Number</Text>
                                        <Text style={styles.pBold}>{userData.nic}</Text>
                                    </View>
                                </View>
                                <View style={styles.row}>
                                    <View style={{flex: 11}}>
                                        <Text style={styles.p}>Registered Date</Text>
                                        <Text style={styles.pBold}>{userData.registeredDate.slice(0, userData.registeredDate.indexOf("T"))}</Text>
                                    </View>
                                </View>
                                <View style={styles.row}>
                                    <View style={{flex: 11}}>
                                        <Text style={styles.p}>Registered Date</Text>
                                        <Text style={styles.pBold}>{userData.id}</Text>
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

export default Profile;