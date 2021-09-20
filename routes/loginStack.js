import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer, StackRouter } from 'react-navigation'
import { styles } from '../styles/global';
import React from 'react';
import LogIn from '../src/Login/Login'
import Drawer from './drawer'
import { Button } from 'react-native';
// import Button from '../components/Button';

const Left = null

const screens = {
    LogIn: {
        screen: LogIn,
       
    },
    Drawer: {
        screen: Drawer,
        
    },
}

const LogInStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        //default option for all screens
        headerTintColor: '#1B3E72',
        headerShown: false,
        headerBackAccessibilityLabel: null,
        // headerLeft: <Button
        //     onPress={() => alert('This is a button!')}
        //     title="Info"
        //     color="#f89"
        // />,
        
        
    }   
});

 export default createAppContainer(LogInStack);


