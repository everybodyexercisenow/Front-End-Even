import React, { Component } from 'react';
import { View, Text,Image, StyleSheet, ImageBackground, TouchableHighlight } from 'react-native';
export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  navigateTo = () => {
    this.props.route.screenProps = {videoLink: this.props.videoLink};
    this.props.route.navigate('CameraScreen', {
      videoLink: this.props.videoLink
    });
  }

  render() {
    console.log("Previous: ")
    console.log(this.props.navigation);
    return (

      <View style={{
          height:130,
          width:220,
          margin:10,
      }}>
        <TouchableHighlight 
            style={{
              height:130,
              width:220,
              margin:10,
            }}
            onPress={this.navigateTo}
          >
          <Image 
            source={{uri: this.props.imageUri}} style={styles.imagebox}
          >
          </Image>
        </TouchableHighlight>
        <View style={{position:'absolute', bottom:10, left:0, padding:5}}>
            <Text style={{color:'white', fontWeight:'bold', fontSize:20}}> {this.props.categoryName} </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    imagebox:{
        flex:1,
        height:null,
        width:null,
        resizeMode: 'cover',
        marginLeft:6,
    }
});