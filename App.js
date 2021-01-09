import React, {Component} from 'react';
import { Text, View } from 'react-native';
import GeneralIntro1 from './sanskrit/GeneralIntro1';
import GeneralIntro2 from './sanskrit/GeneralIntro2';
import MainScreen from './sanskrit/MainScreen';
import GeneralIntro3 from './sanskrit/GeneralIntro3';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';

export default class App extends React.Component {
  render(){
  return (
    <View style={{flex:1,backgroundColor: '#ffffff',padding: 8,}}>
    <AppContainer/>
    </View>
  );
  }
}

const AppNavigator = createSwitchNavigator({
  MainScreen:MainScreen,
  Intro1:GeneralIntro1,
  Intro2:GeneralIntro2,
  Intro3:GeneralIntro3
})

const AppContainer = createAppContainer(
  AppNavigator
)

