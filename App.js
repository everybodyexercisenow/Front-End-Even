import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

//import screens
import Excercise from './screens/Excercise';
import Home from './screens/Home';
import CameraScreen from './components/CameraScreen';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const AppNavigator = createSwitchNavigator({
  Camera:{
    screen: CameraScreen,
  },
  Excercise:{
    screen:Excercise,
  },
  Home:{
    screen: Home,
  },

});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
