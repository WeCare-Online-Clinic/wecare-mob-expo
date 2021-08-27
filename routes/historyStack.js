import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { styles } from '../styles/global';
import History from '../src/History/History'
import ViewClinic from '../src/Dashboard/ViewClinic/ViewClinic'
import NextClinic from '../src/Dashboard/NextClinic/Nextclinic'
import Header from '../utils/Header';
import React from 'react';

const screens = {
    History: {
        screen: History,
        navigationOptions: ({ navigation }) =>{
            return {
                headerTitle: () => <Header navigation={navigation} title='History'/>,            
            }
        }
    },
    ViewClinic: {
        screen: ViewClinic,
        navigationOptions: {
            title: 'View Clinic'
        }
    },
    
}

const HistoryStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        //default option for all screens
        headerTintColor: '#1B3E72',
        
    }   
});

export default createAppContainer(HistoryStack);


