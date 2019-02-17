import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer, 
        createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

//import screens
import Home from './screens/Home';
import CameraScreen from './components/CameraScreen';
import Demo from './screens/Demo';
import Status from './screens/Status';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Camera:{
    screen: CameraScreen,
  },
  Demo:{
    screen: Demo,
  }
},
{
  headerMode:'none',
  navigationOptions: {
      header: null // Will hide header for all screens of current stack navigator,
  }
});

const AppBottomTab = createBottomTabNavigator({
  HomeScreen:{
    screen: Home,
    navigationOptions:{
      tabBarLabel: 'HOME',
        tabBarIcon: ({tintColor}) =>(
          <Icon name="ios-home" color={tintColor} size={24}/>
        )
    }
  },
  CameraScreen:{
    screen:AppNavigator,
    navigationOptions:{
      tabBarLabel: 'GO',
        tabBarIcon: ({tintColor}) =>(
          <Icon name="ios-fitness" color={tintColor} size={24} style={{padding:10, borderRadius:3}}/>
        )
    }
  },
  Status:{
    screen:Status,
    navigationOptions:{
      tabBarLabel: 'STATUS',
        tabBarIcon: ({tintColor}) =>(
          <Icon name="ios-stats" color={tintColor} size={24}/>
        )
    }
  }
},{
  tabBarOptions: {
    activeTintColor: '#83ABAA',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset: { width: 5, height: 3 },
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 5
    }
  }
});

export default createAppContainer(AppBottomTab);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
