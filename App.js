import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Login  from './src/Login/Login';
import Profile from './src/Profile/Profile';
import { Provider } from 'react-redux';
import store from './store/index';
import Auth from './src/Login/Auth';
import history from './@history'
import { Router, Route, Switch } from 'react-router-dom';

// const Login = React.lazy(() => import('./src/Login/Login'))
// const Profile = React.lazy(() => import('./src/Profile/Profile'))
const loading = (
  <div className='pt-3 text-center'>
    <div className='sk-spinner sk-spinner-pulse'></div>
  </div>
)


export default function App() {
  return (
    <Provider store={store}>
     <Auth>
       <Router history={history}>
         <React.Suspense>
           <Switch>
            <Route path='/' exact component={Login}></Route>
            <Route path='/profile' exact component={Profile}></Route>
           </Switch>
         </React.Suspense>
       </Router>
     </Auth>
    </Provider>      
  );
}
