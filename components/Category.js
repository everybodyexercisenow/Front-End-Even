import React, { Component } from 'react';
import { View, Text,Image, StyleSheet, ImageBackground } from 'react-native';

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (

      <View style={{
          height:130,
          width:200,
          margin:10
      }}>
        {/* <View style={{flex:2}}>
            <View style={{position:'absolute', top:0, left:0}}>
                <Text> {this.props.categoryName} </Text>
            </View>
            <Image source={this.props.imageUri} style={styles.imagebox}/>
        </View> */}
        <ImageBackground source={this.props.imageUri} style={styles.imagebox}>
            <View style={{position:'absolute', bottom:10, left:0, padding:5}}>
                <Text style={{color:'white', fontWeight:'bold', fontSize:20}}> {this.props.categoryName} </Text>
            </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    imagebox:{
        flex:1,
        height:null,
        width:null,
        resizeMode: 'cover'
    }
});