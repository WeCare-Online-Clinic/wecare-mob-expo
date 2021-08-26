import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { styles } from '../styles/global';
import Dashboard from '../src/Dashboard/Dashboard'
import ViewClinic from '../src/Dashboard/ViewClinic/ViewClinic'
import NextClinic from '../src/Dashboard/NextClinic/Nextclinic'

const screens = {
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            title: 'Dashboard',            
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
        headerTintColor: '#1B3E72',
        
    }   
});

export default createAppContainer(DashboardStack);


