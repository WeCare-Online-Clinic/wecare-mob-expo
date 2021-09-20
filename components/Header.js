import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { View, Text, StyleSheet, Dimensions, Modal, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
// import FontAwesome5Icon from 'react-native-vector-icons/fontawesome5';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { styles } from '../styles/global';
import ActionButton from '../components/Button'
import axios from 'axios'
import Constants from '../utils/Constants'
// import Clock from 'react-live-clock'
import Clock from './Clock'


async function get_messages(userId) {
    let message_list = []
  
    try {
      await axios
        .get(Constants.API_BASE_URL + '/patient/message/list/' + userId)
        .then((res) => {
          if (res.status == 200) {
            message_list = res.data
            console.log("dataaaa", res.data)
          }
        })
      return message_list
    } catch (error) {
      console.log(error)
    }
  }



const Header = () => {

    const { width, height } = Dimensions.get("window");
    
    const user = useSelector((state) => state);
    const userData = user.login.user[0]
    // const userId = userData.id
    const userId = 200055

    const [currentTime, setCurrentTime] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const [messageList, setMessageList] = useState({
        clinicMessages: [],
        clinicDateMessages: [],
        patientMessages: [],
      })
    const [clinicMessages, setClinicMessages] = useState([])
    
     

    useEffect(() => {

        get_messages(userId).then((res) => {
            setMessageList(res)
            console.log('messssssssssssga' , res)
            if (res) {
              setClinicMessages(res.clinicDateMessages.concat(res.clinicMessages))
            }
          })
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds

        if(min <=9 ){
            min = '0'+min
        }
        setCurrentTime(
            // date + '/' + month + '/' + year 
            // + ' ' + 
            hours + ':' + min 
            // + ':' + sec
        );
        setCurrentDate(
            date + '/' + month + '/' + year
        )
    }, []);

    
    

    const [isModalVisible, setModalVisible] = useState(false);
    const [isModal2Visible, setModal2Visible] = useState(false);
    const [notiData, setNotidata] = useState(false);

    const NotificationView = () => {

        setModalVisible(!isModalVisible)
        console.log("pressssss", notiData)

        

    }

    const list = () => {
        setModal2Visible(!isModal2Visible)
        
        console.log("pressssss", notiData)
        //   return (
         
        //   );
        
      };

    return (
        <View style={[styless.row , { paddingHorizontal: 0}]}> 
            <View >
                <Text style={styless.dateTime}>
                    {currentDate}
                </Text>
                {/* <Text style={styless.dateTime, styless.time}>
                    {currentTime}
                </Text>
                <Text>
                    <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} /> 
                </Text> */}
                <View style={[styless.time, {marginHorizontal: 15}]}>
                 <Clock/>
                </View>
            </View>
            <View style={styless.notiIcon}>               
                <FontAwesome5  
                    name="envelope-open-text" 
                    size={30} color={'#1B3E72'} 
                    onPress={() => {
                        setModalVisible(!isModalVisible)
                    }}
                    />
            </View>
            <Modal animationType="slide" 
                transparent visible={isModalVisible} 
                presentationStyle="overFullScreen" 
                onDismiss={()=> {setModalVisible(!isModalVisible)}}>
                <View style={styles.viewWrapper}>
                                    <View style={[styles.modalView , {transform: [{ translateX: -(width * 0.4) }, { translateY: -(height * 0.46) }],}]}>
                                        <View style={[styles.row ,{paddingVertical: 10}]}>
                                            <Text style={[styles.H1 ,{color: "#1B3E72"}]}> Notifications</Text>
                                        </View> 
                                        
                                        
                                            
                                            <View style={[styles.card ,{paddingVertical: 10, width: '90%' }]}>
                                                <Text style={[styles.pBold ,{color: "#1B3E72", textAlign: 'center'}]}>Public Notifications</Text>
                                                
                                                {messageList.clinicMessages.map((row, index) => (
                                                   <View key={index} style={[styles.row, {paddingHorizontal: 30, marginVertical: 10}]}>
                                                       <Text style={styles.p}>{row.id && row.clinic.name} Clinic</Text>
                                                        <View style={{marginLeft: 'auto', marginRight: 10}}>
                                                            <ActionButton text={'View'}  onPress={() => {list(), setNotidata(row) }}/>                                                       
                                                        </View>
                                                   </View> 
                                                    
                                                ))}
                                            </View> 
                                            <View style={[styles.card ,{paddingVertical: 10, width: '90%' }]}>
                                                <Text style={[styles.pBold ,{color: "#1B3E72", textAlign: 'center'}]}>Private Notifications</Text>
                                                
                                                {messageList &&  
                                                messageList.patientMessages && 
                                                messageList.patientMessages
                                                .map((row, index) => (

                                                   <View key={index} style={[styles.row, {paddingHorizontal: 30, marginVertical: 10}]}>
                                                       <Text style={[styles.p, {textAlign: 'justify'}]}>{row.id && row.message } </Text>
                                                        
                                                   </View> 
                                                    
                                                ))}
                                            </View> 
                                        
                                        
                                                                               
                                                                        
                
                                        {/** This button is responsible to close the modal */}
                                        <View style={[styles.row, {paddingHorizontal: 32, paddingTop: 20}]}>
                                            
                                            <View style={{flex: 2}}>
                                                <ActionButton text="Close" onPress={() => setModalVisible(!isModalVisible)} />                                        
                                            </View>
                                        </View>
                                    </View>
                                </View>
            </Modal> 
            <Modal animationType="slide" 
                transparent visible={isModal2Visible} 
                presentationStyle="overFullScreen" 
                onDismiss={()=> {setModal2Visible(!isModal2Visible)}}>
                <View style={styles.viewWrapper}>
                                    <View style={[styles.modalView , {transform: [{ translateX: -(width * 0.4) }, { translateY: -(height * 0.3) }],}]}>
                                         
                                            <View style={[styles.card ,{paddingVertical: 10, width: '90%' }]}>
                                               
                                                <Text style={[styles.p18 ,{color: "#1B3E72", textAlign: 'center'}]}> {notiData.id && notiData.clinic.name} Clinic</Text>
                                                
                                                <View style={[{flex: 8, flexDirection: "row" }]}>
                                                    <View style={[styles.cardI, {flex: 2,}]}>
                                                        <Text style={styles.p}>Date </Text>
                                                        <Text style={styles.p}>Time </Text>
                                                    </View>
                                                    <View style={[styles.cardI, {flex: 4,}]}>
                                                        <Text style={styles.p}>- {notiData.id && notiData.date }</Text>
                                                        <Text style={styles.p}>- {notiData.id && notiData.time }</Text>
                                                        
                                                    </View>
                                                </View>
                                                <Text style={[styles.pBold, {paddingHorizontal: 25, textAlign: 'justify'}]}> {notiData.id && notiData.message}</Text>
                                                   
                                            </View> 
                                        {/** This button is responsible to close the modal */}
                                        <View style={[styles.row, {paddingHorizontal: 32, paddingTop: 20}]}>
                                            
                                            <View style={{flex: 2}}>
                                                <ActionButton text="Close" onPress={() => setModal2Visible(!isModal2Visible)} />                                        
                                            </View>
                                        </View>
                                    </View>
                                </View>
            </Modal>
        </View>
        
                                                    // <View key={index} >
                                                    //     <View style={[{flex: 8, flexDirection: "row" }]}>
                                                    //         <View style={[styles.cardI, {flex: 4,}]}>
                                                    //             <Text style={styles.p}>Date </Text>
                                                    //             <Text style={styles.p}>Time </Text>
                                                    //             <Text style={styles.p}>Queue No</Text>
                                                    //         </View>
                                                    //         <View style={[styles.cardI, {flex: 8,}]}>
                                                    //             <Text style={styles.p}>- {row.id && row.date }</Text>
                                                    //             <Text style={styles.p}>- {row.id && row.time }</Text>
                                                    //             <Text style={styles.p}>- {row.id && row.clinic.name}</Text>
                                                    //         </View> 
                                                            
                                                    //     </View>  
                                                    //     <View >
                                                    //             <Text>{row.id && row.message}</Text>
                                                    //     </View> 
                                                       
                                                       
                                                        
                                                    // </View>
    )
}

export default Header

const { width } = Dimensions.get("window");

const styless = StyleSheet.create({

    dateTime: {
        margin: 0,
        marginHorizontal: 21,
        fontSize: 14,
        color: "#1B3E72",
    },
    time: {
        fontSize: 23,
        marginHorizontal: 21,
        color: "#1B3E72",
    },
    row: {
        flexDirection: 'row',
        marginVertical: 15,
        marginHorizontal: 4,
        // backgroundColor: 'gray',
    },
    notiIcon: {
        flexDirection: "row",
        flexWrap: 'wrap',
        marginLeft: "auto",
        marginRight: 25,
        alignContent: 'center',
        alignItems: 'center',
    }

})