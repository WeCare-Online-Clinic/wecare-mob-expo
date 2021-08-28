import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer, StackRouter } from 'react-navigation'
import { styles } from '../styles/global';
import React from 'react';
import LogIn from '../src/Login/Login'
import Drawer from './drawer'


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
        
    }   
});

export default createAppContainer(LogInStack);


