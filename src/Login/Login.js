import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Text, Image, SafeAreaView, ScrollView, Button, Pressable } from 'react-native';
import {styles as globalStyles } from '../../styles/global';
import { useDispatch } from 'react-redux'
import * as Action from '../../redux/actions/loginAction'
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

        let data = {email: userName, password: password}
        // let data ={email:'admin@gmail.com', password: 'admin@1234'};
      
    //    dispatch(Action.submitLogin(data))
        const request = axios.post(Action.USER_LOGIN_URL, data)

        request
        .then((responce) => {
           console.log('responce', responce.data) 
           Constants.LOGGED_IN_USER = responce.data
       
               console.log('login res data', responce.data)
               setUserRole(responce.data.role)
               setUserID(responce.data.id)
               console.log('fdfd', userRole)

               if(responce.data.role === 'patient'){
                   navigation.navigate('Drawer')
               }
               else{
                   console.log('bad user')
               }
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
            <ScrollView>
                <View style={[globalStyles.container, {backgroundColor: '#679297', justifyContent: 'center', padding: 20, paddingBottom: 50}]}>
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