/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
const App: () => React$Node = () => {
  return (
    <SplashScreen/>
  );
};

export default App;
