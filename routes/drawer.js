import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import DashboardStack from './dashboardStack'
import HistoryStack from './historyStack'
import ReportStack from './reportsStack'
import ProfileStack from './profileStack'
// import Profile from './../src/Profile/Profile'


const RootDrawerNavigator = createDrawerNavigator({
    Dashboard: {
        screen: DashboardStack,
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

})

export default createAppContainer(RootDrawerNavigator);
