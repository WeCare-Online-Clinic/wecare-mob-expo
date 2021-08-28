import React ,{useEffect}from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { styles } from '../../styles/global';

// import ActionButton from '../../components/Button';


const Profile = ({ navigation }) => {

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
                            <Text style={styles.title}>Welcome Nuwan</Text>
                        </View>
                        <View>
                            <View>
                                <Image style={{width: 200, height: 200, alignSelf: 'center', marginTop: 40, marginBottom: 20}}
                                    source={require('./profile.png')}
                                />
                            </View>
                            <View style={styles.mainCard}>
                                <Text style={[styles.title, {alignSelf: 'center'}]}>Nuwan Perera</Text>
                            </View>
                            <View style={styles.whitecard}>
                                <View style={styles.row}>
                                    <View style={{flex: 11}}>
                                        <Text style={styles.p}>Address</Text>
                                        <Text style={styles.pBold}>No 17, Galle Road, Wadduwa</Text>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center'}}>
                                        <FontAwesome5  name={arrow} size={35} color={'#1B3E72'} onPress={editField}/>
                                    </View>
                                </View>
                                <View style={styles.row}>
                                    <View style={{flex: 11}}>
                                        <Text style={styles.p}>Phone</Text>
                                        <Text style={styles.pBold}>075 559 3998</Text>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center'}}>
                                        <FontAwesome5  name={arrow} size={35} color={'#1B3E72'} onPress={editField}/>
                                    </View>
                                </View>
                                <View style={styles.row}>
                                    <View style={{flex: 11}}>
                                        <Text style={styles.p}>Email</Text>
                                        <Text style={styles.pBold}>nuwan@gmail.com</Text>
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