import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { styles } from '../styles/global';
import Profile from '../src/Profile/Profile';
import EditProfile from '../src/Profile/EditProfile/EditProfile';
import Header from '../utils/Header';
import React from 'react';

const screens = {
    Profile: {
        screen: Profile,
        navigationOptions: ({ navigation }) =>{
            return {
                headerTitle: () => <Header navigation={navigation} title='Profile'/>,            
            }
        }
    },
    EditProfile: {
        screen: EditProfile,
        navigationOptions: {
            title: 'Edit Profile'
        }
    },
}

const ReportsStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        //default option for all screens
        headerTintColor: '#1B3E72',
        
    }   
});

export default createAppContainer(ReportsStack);


