import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import DashboardStack from './dashboardStack'
import HistoryStack from './historyStack'
import ReportStack from './reportsStack'
import ProfileStack from './profileStack'
// import LoginStack from './loginStack'
import SideBar from './sideBar'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// import Profile from './../src/Profile/Profile'


const screens = {
    Dashboard: {
        screen: DashboardStack,
        navigationOprtion: {
            title: "Dashboard",
            drawerIcon: () => <FontAwesome5 name='chart-line' size={30} color={'#1B3E72'} />

        }
    },
    Profile: {
        screen: ProfileStack,
    },
    History: {
        screen: HistoryStack,
    },
    Reports: {
        screen: ReportStack,
    },
    // Signout: {
    //     screen: LoginStack
    // },
    

}

const RootDrawerNavigator = createDrawerNavigator(
    {
        DashboardStack: {
            screen: DashboardStack,
            navigationOptions: {
                title: "Dashboard",
                drawerIcon: () => <FontAwesome5 name='chart-line' size={20} color={'#1B3E72'} />
            }
        },
        ProfileStack: {
            screen: ProfileStack,
            navigationOptions: {
                title: "Profile",
                drawerIcon: () => <FontAwesome5 name='user' size={20} color={'#1B3E72'} />
            }
            
        },
        HistoryStack: {
            screen: HistoryStack,
            navigationOptions: {
                title: "History",
                drawerIcon: () => <FontAwesome5 name='history' size={20} color={'#1B3E72'} />
            }
        },
        ReportStack: {
            screen: ReportStack,
            navigationOptions: {
                title: "Reports",
                drawerIcon: () => <FontAwesome5 name='file-medical-alt' size={20} color={'#1B3E72'} />
            }
        },
        
    }, 
    {
    contentComponent: props => <SideBar {...props}/> 
})


export default createAppContainer(RootDrawerNavigator);
