import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, Image, SafeAreaView, 
    ScrollView, SegmentedControlIOS, StyleSheet,AsyncStorage, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import {Video} from 'expo';

export default class Demo extends Component {
  constructor(props) {
    super(props);
    // const { navigation } = this.props;
    this.state = {
        selectedIndex:0,
    };
  }
  switchScreen(index){
    if(index == 1){
      this.props.navigation.navigate('Camera');
    }
  }
  render() {
    return ( 
      <SafeAreaView style={styles.container}>
        <Video
          source={{ uri:this.props.videoLink}}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={styles.video}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    width: Dimensions.get('window').width,
    marginTop: 60,
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'#83ABAA',
  },
  video:{
    width: 300, 
    height: 300,
  }
  });
