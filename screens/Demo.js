import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, Image, SafeAreaView, 
    ScrollView, SegmentedControlIOS, StyleSheet,AsyncStorage, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import {Video, BlurView} from 'expo';

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
      <View style={StyleSheet.absoluteFill}>
        <Video
          source={{uri:this.props.videoLink}}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={StyleSheet.absoluteFill}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  video:{
    width: 300, 
    height: 300,
  }
});
