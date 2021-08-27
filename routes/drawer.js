import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import DashboardStack from './dashboardStack'
import HistoryStack from './historyStack'
import ReportStack from './reportsStack'


const RootDrawerNavigator = createDrawerNavigator({
    Dashboard: {
        screen: DashboardStack,
        name: "fefdf"
    },
    History: {
        screen: HistoryStack,
    },
    Reports: {
        screen: ReportStack,
    },

})

export default createAppContainer(RootDrawerNavigator);
