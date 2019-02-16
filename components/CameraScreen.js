import React, { Component } from "react";
import { View, Text, TouchableOpacity, Button, Image, SafeAreaView, ScrollView } from "react-native";
import { Camera, Permissions, FileSystem } from "expo";
import Icon from 'react-native-vector-icons/Ionicons';

import Category from '../components/Category';
import FirebaseController from "./FirebaseController"

export default class CameraScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    flash: "off",
    zoom: 0,
    autoFocus: "on",
    type: "front",
    whiteBalance: "auto",
    ratio: "16:9",
    ratios: [],
    barcodeScanning: false,
    faceDetecting: false,
    faces: [],
    newPhotos: false,
    permissionsGranted: false,
    pictureSize: undefined,
    pictureSizes: [],
    pictureSizeId: 0,
    showGallery: false,
    showMoreOptions: false,
    mImage: null,
    imageUri: "null",
    Debug: "debug"
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }
  componentDidMount() {
    // FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'photos').catch(e => {
    //   console.log(e, 'Directory exists');
    // });
  }

  takePicture = () => {
    this.setState({Debug: this.state.count});
    // this.setState({count: this.state.count + 1});
    if (this.camera) {
      this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // console.log (errorCode)
        // ...
      });
    }
  };

  onPictureSaved = async photo => {
    this.setState({imageUri:photo.uri});
  };
  getRatios = async () => {
    const ratios = await this.camera.getSupportedRatios();
    return ratios;
  };
  constructor(props) {
    super(props);
    // Toggle the state every second
    // setInterval(()=>{
    //   this.takePicture();
    // },300);
    this.firebaseController = new FirebaseController();
    this.firebaseController.query((string)=>{
      this.setState({Debug: string})
    });
  }
  render() {

    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}  ref={ref => {
              this.camera = ref;
            }}>
            <SafeAreaView style={{flex:1}}>
              <View style={{flex:1, marginTop:0}}>
                  <Text style={{justifyContent:'center'}}>Demo | Camera</Text>
                  {/* <Icon name="ios-refresh" style={{color:'white', fontSize:30}} /> */}
              </View>
              {/* <TouchableOpacity
                style={{
                  flex: 2,
                  alignSelf: "flex-start",
                  alignItems: "left"
                }}
                onPress={() => {
                  this.x({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                  });
                }}
              >
              </TouchableOpacity> */}

              {/* bottom tab and recommendation */}
              <View style={{flex:1, justifyContent: 'flex-end', marginBottom:30}}>
                  <View style={{ height: 130, marginTop: 20 }}>
                      <ScrollView
                          horizontal={true} showsHorizontalScrollIndicator={false}
                      >
                          <Category categoryName="Daily" imageUri={require('../assets/1.jpg')}
                              name="Home"
                          />
                          <Category categoryName="Monthly" imageUri={require('../assets/2.jpg')}
                              name="Experiences"
                          />
                          <Category categoryName="Yearly" imageUri={require('../assets/3.jpg')}
                              name="Resturant"
                          />
                      </ScrollView>
                  </View>
                  <View style={{justifyContent:'center',  alignItems: 'center', marginTop:10}}>
                      <Icon 
                          name="ios-close-circle" 
                          style={{fontSize:50, color:'tomato'}}
                          onPress={()=> this.props.navigation.navigate('Home')}
                      />
                  </View>
              </View>
            </SafeAreaView>
          </Camera>
        </View>
      );
    }
  }
}
