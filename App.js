import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import {  useSelector } from 'react-redux'
// import Auth from './src/Login/Auth';
// import history from './@history'
import { Router, Route, Switch } from 'react-router-dom';

import  Login  from './src/Login/Login';
// import Profile from './src/Profile/Profile';
import History from './src/History/History';
import Reports from './src/Reports/Reports';
import Dashboard from './src/Dashboard/Dashboard';

import Navigator from './routes/loginStack';
import HistoryStack from './routes/historyStack';

// import DashboardStack from './routes/dashboardStack';
// import HistoryStack from './routes/historyStack';
// import ReportStack from './routes/reportsStack';
// const Login = React.lazy(() => import('./src/Login/Login'))
// const Profile = React.lazy(() => import('./src/Profile/Profile'))



export class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loaded: false,
  //   }
  // }

  // componentDidMount(){

  // }

  render() {
    
    return (
      
        
      // <Navigator/>
      <Provider store={store}> 
        {/* <Login/> */}
        <HistoryStack/> 
        {/* <Navigator/> */}
      </Provider>
    );

  }

}


export default App