import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './src/screens/MainScreen' 
import { YellowBox } from 'react-native';
import _ from 'lodash'

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
    if (message.indexOf('Setting a timer') <= -1) {
        _console.warn(message);
    }
};

export default function App() {
  
  
  return (
    <MainScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
