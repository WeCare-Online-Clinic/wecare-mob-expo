import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { styles } from '../../styles/global';

const Separator = () => (
    <View style={[styles.separator, {marginVertical: 0}]} />
  );

 
const History = ({navigation}) => {

    const arrow = 'chevron-right';

    const [userData, setUserData] = useState({
        userId: 55555,
        clinicId: 666666,
    });

    const viewClinic = () => {
        navigation.push('ViewClinic', userData);
    }

    return (
        <View style={[styles.container, {
            flexDirection: "column"
          }]}>
            
            <View style={{padding: 10}}> 
                <Text style={styles.title}>History</Text>
            </View>
            <View style={[styles.row, {margin: 40, marginBottom: 0, marginTop: 40}]}>
                <View style={{flex: 6}}>
                    <Text style={styles.p}>Date</Text>
                </View>
                <View style={{flex: 6}}>
                    <Text style={styles.p}>Clinic</Text>
                </View>
            </View>

            <SafeAreaView style={styles.scrollContainer}>
                <ScrollView style={styles.scrollView}>
                    <View style={{padding: 10, paddingTop: 0}}>
                        
                        <View>
                            <View style={styles.whitecard}>
                                
                                <View style={[styles.row, {marginVertical: 10}]}>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>2021/05/22</Text>
                                    </View>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>Cardiology</Text>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center'}}>
                                        <FontAwesome5  name={arrow} size={30} color={'#1B3E72'} onPress={viewClinic} onPress={viewClinic}/>
                                    </View>
                                </View>
                                <Separator/> 

                                <View style={[styles.row, {marginVertical: 10}]}>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>2021/05/22</Text>
                                    </View>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>Cardiology</Text>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center'}}>
                                        <FontAwesome5  name={arrow} size={30} color={'#1B3E72'} onPress={viewClinic}/>
                                    </View>
                                </View>
                                <Separator/>

                                <View style={[styles.row, {marginVertical: 10}]}>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>2021/05/22</Text>
                                    </View>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>Cardiology</Text>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center'}}>
                                        <FontAwesome5  name={arrow} size={30} color={'#1B3E72'} onPress={viewClinic}/>
                                    </View>
                                </View>
                                <Separator/>

                                <View style={[styles.row, {marginVertical: 10}]}>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>2021/05/22</Text>
                                    </View>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>Cardiology</Text>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center'}}>
                                        <FontAwesome5  name={arrow} size={30} color={'#1B3E72'} onPress={viewClinic}/>
                                    </View>
                                </View>
                                <Separator/>

                                <View style={[styles.row, {marginVertical: 10}]}>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>2021/05/22</Text>
                                    </View>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>Cardiology</Text>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center'}}>
                                        <FontAwesome5  name={arrow} size={30} color={'#1B3E72'} onPress={viewClinic}/>
                                    </View>
                                </View>
                                <Separator/>

                                <View style={[styles.row, {marginVertical: 10}]}>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>2021/05/22</Text>
                                    </View>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>Cardiology</Text>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center'}}>
                                        <FontAwesome5  name={arrow} size={30} color={'#1B3E72'} onPress={viewClinic}/>
                                    </View>
                                </View>
                                <Separator/>
                                
                                <View style={[styles.row, {marginVertical: 10}]}>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>2021/05/22</Text>
                                    </View>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>Cardiology</Text>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center'}}>
                                        <FontAwesome5  name={arrow} size={30} color={'#1B3E72'} onPress={viewClinic}/>
                                    </View>
                                </View>
                                <Separator/>

                                <View style={[styles.row, {marginVertical: 10}]}>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>2021/05/22</Text>
                                    </View>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>Cardiology</Text>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center'}}>
                                        <FontAwesome5  name={arrow} size={30} color={'#1B3E72'} onPress={viewClinic}/>
                                    </View>
                                </View>
                                <Separator/>

                                <View style={[styles.row, {marginVertical: 10}]}>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>2021/05/22</Text>
                                    </View>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>Cardiology</Text>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center'}}>
                                        <FontAwesome5  name={arrow} size={30} color={'#1B3E72'} onPress={viewClinic}/>
                                    </View>
                                </View>
                                <Separator/>

                                <View style={[styles.row, {marginVertical: 10}]}>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>2021/05/22</Text>
                                    </View>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>Cardiology</Text>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center'}}>
                                        <FontAwesome5  name={arrow} size={30} color={'#1B3E72'} onPress={viewClinic}/>
                                    </View>
                                </View>
                                <Separator/>

                                <View style={[styles.row, {marginVertical: 10}]}>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>2021/05/22</Text>
                                    </View>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>Cardiology</Text>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center'}}>
                                        <FontAwesome5  name={arrow} size={30} color={'#1B3E72'} onPress={viewClinic}/>
                                    </View>
                                </View>
                                <Separator/>

                                <View style={[styles.row, {marginVertical: 10}]}>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>2021/05/22</Text>
                                    </View>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>Cardiology</Text>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center'}}>
                                        <FontAwesome5  name={arrow} size={30} color={'#1B3E72'} onPress={viewClinic}/>
                                    </View>
                                </View>
                                <Separator/>

                                <View style={[styles.row, {marginVertical: 10}]}>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>2021/05/22</Text>
                                    </View>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>Cardiology</Text>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center'}}>
                                        <FontAwesome5  name={arrow} size={30} color={'#1B3E72'} onPress={viewClinic}/>
                                    </View>
                                </View>
                                <Separator/>

                                <View style={[styles.row, {marginVertical: 10}]}>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>2021/05/22</Text>
                                    </View>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>Cardiology</Text>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center'}}>
                                        <FontAwesome5  name={arrow} size={30} color={'#1B3E72'} onPress={viewClinic}/>
                                    </View>
                                </View>
                                <Separator/>

                                <View style={[styles.row, {marginVertical: 10}]}>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>2021/05/22</Text>
                                    </View>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>Cardiology</Text>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center'}}>
                                        <FontAwesome5  name={arrow} size={30} color={'#1B3E72'} onPress={viewClinic}/>
                                    </View>
                                </View>
                                <Separator/>

                                <View style={[styles.row, {marginVertical: 10}]}>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>2021/05/22</Text>
                                    </View>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>Cardiology</Text>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center'}}>
                                        <FontAwesome5  name={arrow} size={30} color={'#1B3E72'} onPress={viewClinic}/>
                                    </View>
                                </View>
                                <Separator/>

                                <View style={[styles.row, {marginVertical: 10}]}>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>2021/05/22</Text>
                                    </View>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>Cardiology</Text>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center'}}>
                                        <FontAwesome5  name={arrow} size={30} color={'#1B3E72'} onPress={viewClinic}/>
                                    </View>
                                </View>
                                <Separator/>

                                <View style={[styles.row, {marginVertical: 10}]}>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>2021/05/22</Text>
                                    </View>
                                    <View style={[{flex: 6,  justifyContent: 'center'}]}>
                                        <Text style={styles.p18}>Cardiology</Text>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center'}}>
                                        <FontAwesome5  name={arrow} size={30} color={'#1B3E72'} onPress={viewClinic}/>
                                    </View>
                                </View>
                                <Separator/>
                                
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default History;