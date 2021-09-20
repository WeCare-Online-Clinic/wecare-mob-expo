import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Text, Alert, Image, SafeAreaView, ScrollView, Button, Pressable } from 'react-native';
import {styles as globalStyles } from '../../styles/global';
import { useDispatch, useSelector } from 'react-redux'
import {logIn, USER_LOGIN_URL, setNextClinic} from '../../redux/actions/loginAction'
import Constants from '../../utils/Constants';
import axios from 'axios';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import { auto } from 'async';


const Login = ({ navigation }) =>  { 

    
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    
    const dispatch = useDispatch()    
     
    const onLogin = (e) => {
        console.log({userName}, {password});
        console.log('onsubmit')
    
       

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
                        navigation.navigate('DashboardStack')
                    })
                    .catch((err) => {
                        console.log('err', err)
                    })

                console.log('dddddddd')
            }
            else{
                console.log('bad user')
                Alert.alert(
                    "Invalid Login",
                    "Not a patient log in atempt",
                    [
                      
                      { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
               
            }
        })
        .catch((error) => {
            console.log("eeeee" , error)
            if(error == "[Error: Network Error]"){
                Alert.alert(
                    "Invalid Login",
                    error,
                    [
                      
                      { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }
            else{
            Alert.alert(
                "Invalid Login",
                "User name or password is invalid. Please check your username and password and try again",
                [
                  
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );}
        })

       
  
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
                            <View style={styles.row}>
                                <TextInput
                                    style={[globalStyles.input, {flex: 10, borderTopRightRadius: 0, borderBottomRightRadius: 0,}]}
                                    placeholder='Password'
                                    secureTextEntry= {!showPassword}
                                    onChangeText={text => setPassword(text)}
                                    defaultValue={password}                                    
                                />
                               {showPassword ?  
                                <FontAwesome5 style={styles.showPassword} name='eye' size={30} color={'#1B3E72'} onPress={() => setShowPassword((showPassword) => !showPassword)}/> :
                                <FontAwesome5 style={styles.showPassword} name='eye-slash' size={30} color={'#1B3E72'} onPress={() => setShowPassword((showPassword) => !showPassword)}/>  
                                
                                }
                                
                                
                
                            </View>

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
    },
    row: {
        flexDirection: 'row',
        marginVertical: 15,

        // backgroundColor: 'gray',
    },
    showPassword: {
        flex: 2, 
        paddingVertical: 10,
        paddingLeft: 10, 
        backgroundColor: '#fff', 
        height: 50, 
        marginTop: 10, 
        borderTopRightRadius: 10, 
        borderBottomRightRadius: 10,
        borderColor: '#ddd',
        
    }
})

export default Login;