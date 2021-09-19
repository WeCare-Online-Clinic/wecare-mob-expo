import React from 'react';
import { Text, View, StyleSheet, TextInput, SafeAreaView, ScrollView, StatusBar, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { styles } from '../../../styles/global';
import RequestButton from '../../../components/Button';
import Header from '../../../components/Header'


export default function EditProfile(){

    const arrow = 'chevron-right';

    const [text, onChangeText] = React.useState("Field Data");

    return (
        <View style={[styles.container, {
            flexDirection: "column"
          }]}>
            
            <SafeAreaView style={styles.scrollContainer}>
                <Header/>
                <ScrollView style={styles.scrollView}>
                    <View style={{padding: 10}}>
                        <View style={[styles.mainCard, {flexDirection: 'row'}]}>
                            <Text style={[styles.title, {flex: 1}]}>Edit Profile</Text>
                        </View>
                        <View>
                            <View style={styles.whitecard}>
                                <View style={[styles.row, {marginTop: 40}]}>
                                    <View style={{flex: 6}}>
                                        <Text style={[styles.p, {margin: 5}]}>Field Name</Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder='User Name'                                            
                                            defaultValue=''
                                        />
                                    </View>                                    
                                </View>
                                
                                <View style={styles.row}>
                                    <View style={{flex: 1}}>
                                        <RequestButton text='Save' />
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
