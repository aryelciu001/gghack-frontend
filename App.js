
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { StackActions, NavigationActions } from "react-navigation";
import SplashScreen from './src/navigation/splashScreen.js';
import AppContainer from './src/navigation/navigation'


export default class App extends React.Component {
  render(){
      return(
        <AppContainer/>
      )
  }
}
