import React ,{useEffect}from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { styles } from '../../styles/global';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Constants from '../../utils/Constants';
import { setUser } from '../../redux/actions/profleAction'

// import ActionButton from '../../components/Button';


const Profile = ({ navigation }) => {

    
       
    const user = useSelector((state) => state);
    const userData = user.login.user[0]

    console.log('name', userData.name)

    const arrow = 'chevron-right'; 

    const editField = () => {
        navigation.navigate('EditProfile');
    }

    return (

        <View style={[styles.container, {
            flexDirection: "column"
          }]}>
            
            <SafeAreaView style={styles.scrollContainer}>
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
                                <Text style={[styles.title, {alignSelf: 'center'}]}>{userData.name}</Text>
                            </View>
                            <View style={styles.whitecard}>
                                <View style={styles.row}>
                                    <View style={{flex: 11}}>
                                        <Text style={styles.p}>Address</Text>
                                        <Text style={styles.pBold}>{userData.address}</Text>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center'}}>
                                        <FontAwesome5  name={arrow} size={35} color={'#1B3E72'} onPress={editField}/>
                                    </View>
                                </View>
                                <View style={styles.row}>
                                    <View style={{flex: 11}}>
                                        <Text style={styles.p}>Phone</Text>
                                        <Text style={styles.pBold}>{userData.contact}</Text>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center'}}>
                                        <FontAwesome5  name={arrow} size={35} color={'#1B3E72'} onPress={editField}/>
                                    </View>
                                </View>
                                <View style={styles.row}>
                                    <View style={{flex: 11}}>
                                        <Text style={styles.p}>Email</Text>
                                        <Text style={styles.pBold}>{userData.email}</Text>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center'}}>
                                        <FontAwesome5  name={arrow} size={35} color={'#1B3E72'} onPress={editField}/>
                                    </View>
                                </View>
                                <View style={styles.row}>
                                    <View style={{flex: 11}}>
                                        <Text style={styles.p}>NIC Number</Text>
                                        <Text style={styles.pBold}>{userData.nic}</Text>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center'}}>
                                        <FontAwesome5  name={arrow} size={35} color={'#1B3E72'} onPress={editField}/>
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