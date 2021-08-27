import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { styles } from '../styles/global';
import Dashboard from '../src/Dashboard/Dashboard'
import ViewClinic from '../src/Dashboard/ViewClinic/ViewClinic'
import NextClinic from '../src/Dashboard/NextClinic/Nextclinic'
import Header from '../utils/Header';
import React from 'react';

const screens = {
    Dashboard: {
        screen: Dashboard,
        navigationOptions: ({ navigation }) =>{
            return {
                headerTitle: () => <Header navigation={navigation} title='Dash Board'/>,            
            }
        }
    },
    ViewClinic: {
        screen: ViewClinic,
        navigationOptions: {
            title: 'View Clinic'
        }
    },
    NextClinic: {
        screen: NextClinic,
        navigationOptions: {
            title: 'Next Clinic'
        }
    }
}

const DashboardStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        //default option for all screens
        
        
    }   
});

export default createAppContainer(DashboardStack);


