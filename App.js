import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Login  from './src/Login/Login';
import Profile from './src/Profile/Profile';
import { Provider } from 'react-redux';
import store from './store/index';


export default function App() {
  return (
    <Provider store={store}>
      <Profile/>
    </Provider>      
  );
}
