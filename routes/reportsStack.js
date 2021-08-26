import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { styles } from '../styles/global';
import Reports from '../src/Reports/Reports'
import ViewReport from '../src/Reports/ViewReport/ViewReport'

const screens = {
    Reports: {
        screen: Reports,
        navigationOptions: {
            title: 'Reports',            
        }
    },
    ViewReport: {
        screen: ViewReport,
        navigationOptions: {
            title: 'View Report'
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


