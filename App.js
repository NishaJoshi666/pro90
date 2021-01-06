import React, {Component} from 'react';
import { Text, View, StyleSheet ,TouchableOpacity,ScrollView} from 'react-native';
import MainScreen from './Screens/MainScreen';
i

export default class App extends React.Component {
  render(){
  return (
    <View style={{flex:1,backgroundColor: '#ffffff',padding: 8,}}>
    <MainScreen/>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  
});
