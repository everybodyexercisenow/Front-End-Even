import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, Image, SafeAreaView, 
    ScrollView, SegmentedControlIOS, StyleSheet,AsyncStorage } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import {Video} from 'expo';

export default class Demo extends Component {
  constructor(props) {
    super(props);
    // const { navigation } = this.props;
    this.state = {
        selectedIndex:0,
        videolink: this.props.videolink
    };
  }
  switchScreen(index){
    if(index == 1){
      this.props.navigation.navigate('Camera');
    }
  }
  render() {
    return ( 
      <Video
        source={{ uri:this.state.videolink}}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={{ width: 300, height: 300 }}
      />
    );
  }
}

const styles = StyleSheet.create({
    segBar:{
      width:200,
    }
  });
