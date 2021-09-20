import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { styles } from '../styles/global';
import Dashboard from '../src/Dashboard/Dashboard'
import ViewNextClinic from '../src/Dashboard/ViewNextClinic/ViewNextClinic'
import ViewPastClinic from '../src/Dashboard/ViewPastClinic/ViewPastClinic'
import Header from '../utils/Header';
import React from 'react';

const screens = {
    Dashboard: {
        screen: Dashboard,
        navigationOptions: ({ navigation }) =>{
            
            return {
                headerTitle: () => <Header navigation={navigation} title='Dashboard'/>,            
            }
        }
    },
    ViewNextClinic: {
        screen: ViewNextClinic,
        navigationOptions: {
            title: 'Next Clinics'
        }
    },
    ViewPastClinic: {
        screen: ViewPastClinic,
        navigationOptions: {
            title: 'Past Clinic'
        }
    }
}

const DashboardStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        //default option for all screens
        
        
        
    }   
});

export default createAppContainer(DashboardStack);


