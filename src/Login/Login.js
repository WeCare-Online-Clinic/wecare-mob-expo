import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Text, Alert, Image, SafeAreaView, ScrollView, Button, Pressable } from 'react-native';
import {styles as globalStyles } from '../../styles/global';
import { useDispatch, useSelector } from 'react-redux'
import {logIn, USER_LOGIN_URL, setNextClinic} from '../../redux/actions/loginAction'
import Constants from '../../utils/Constants';
import axios from 'axios';
// import { auto } from 'async';


const Login = ({ navigation }) =>  { 

    
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    const dispatch = useDispatch()    
     
    const onLogin = (e) => {
        console.log({userName}, {password});
        console.log('onsubmit')
    
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );

        let data = {email: userName, password: password}
        
        

        const request = axios.post(USER_LOGIN_URL, data)
        
        console.log('responce', request.data)
        request
        .then((responce) => {
            console.log('responce', responce.data)           

            if(responce.data.role === 'patient'){
                const userData = axios.get(Constants.API_BASE_URL + '/getPatientProfile/' + responce.data.id)

                userData
                    .then((result) => {
                        dispatch(logIn(result.data))
                        navigation.navigate('Drawer')
                    })
                    .catch((err) => {
                        console.log('err', err)
                    })

                console.log('dddddddd')
            }
            else{
                console.log('bad user')
               
            }
        })
        .catch((error) => {
            console.log(error)
        })

        const userId = 200004

        const nextClinicData = axios.get(Constants.API_BASE_URL + '/getNextClinicDetails/' + userId) 

    
        nextClinicData
        .then((result) => {
            console.log('rNext clinic data', result.data)  
            dispatch(setNextClinic(result.data))  
    
        })
        .catch((error) => {
            console.log(error)
        })
          
       
       
        // e.preventDefault()
        // const isValid = validation()

        // if (isValid) {
        //     let data = { userName, password}
        //     // let data ={email:'admin@gmail.com', password: 'ndansdasd'};
        //     // dispatch(Action.submitLogin(data))
        //     console.log('pass')
        // } else {
        //     console.log('fail')
        // }
  
    }

    // const validation = () => {
    //     let localErrors = _.cloneDeep(errors) //make a seperate local errors object and assign it to localErrors
    //     let isValid = true
    
    //     //validating email
    //     if (userName.trim().length < 1) {
    //       let emailMissing = Object.assign({}, { missing: 'email is missing' })
    //       localErrors.emailErrors = emailMissing
    //       isValid = false
    //     } else {
    //       if (!userName.includes('@')) {
    //         let invalidEmail = Object.assign({}, { invalidEmail: 'invalid email' })
    //         localErrors.emailErrors = invalidEmail
    //         isValid = false
    //       } else {
    //         localErrors.emailErrors.invalidEmail = null
    //       }
    //       localErrors.emailErrors.missing = null
    //     }
    //     // validating password
    //     if (password.length < 1) {
    //       let passwordMissing = Object.assign(
    //         {},
    //         { passwordMissing: 'password is missing' }
    //       )
    //       localErrors.passwordErrors = passwordMissing
    //       isValid = false
    //     } else {
    //       localErrors.passwordErrors.passwordMissing = null
    //     }
    
    //     setErrors({ ...localErrors }) //push all errors to errors object
    //     return isValid
    //   }
 


  
    return (
     
        <SafeAreaView style={{flex: 1}}>
            <ScrollView style={{flex: 1}}>
                <View style={[globalStyles.container, {flex: 1, height: '100%', backgroundColor: '#679297', justifyContent: 'center', padding: 20, paddingBottom: 100, paddingTop: 100}]}>
                    <Image style={{width: 300, height: 150, alignSelf: 'center',}}
                                source={require('./wecarelogo.png')}
                        />
                    <Image style={{width: 300, height: 300, alignSelf: 'center',}}
                                source={require('./loginimg.png')}
                        />
                    
                        <View> 
                            <TextInput
                                style={globalStyles.input}
                                placeholder='User Name'
                                onChangeText={text => setUserName(text)}
                                defaultValue={userName}
                            />
                            <TextInput
                                style={globalStyles.input}
                                placeholder='Password'
                                // secureTextEntry= {true}
                                onChangeText={text => setPassword(text)}
                                defaultValue={password}
                            />
                            <Pressable style={styles.button} onPress={onLogin}>
                                <Text style={styles.buttonText}>Log In</Text>
                            </Pressable>
                            
                       </View>         
                </View>
            </ScrollView>
        </SafeAreaView>
        
      );
  
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 100,
        paddingVertical: 12,
        paddingHorizontal: 5,        
        backgroundColor: '#04799E',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
    }
})

export default Login;