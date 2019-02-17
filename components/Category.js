import React, { Component } from 'react';
import { View, Text,Image, StyleSheet, ImageBackground, TouchableHighlight,
  AsyncStorage } from 'react-native';
import Firebase from './FirebaseController';
  
  export default class Category extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
  }


  removeItemValue = async(key) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log("cleared");
      return true;
    }
    catch(exception) {
      console.log("not cleared");
      return false;
    }
  }
  navigateTo = () => {
    // this._storeData();
    var ref = Firebase.database().ref()
    ref.child("videoLink").set(this.props.videoLink);
    this.props.route.navigate('CameraScreen');
  }

  render() {
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