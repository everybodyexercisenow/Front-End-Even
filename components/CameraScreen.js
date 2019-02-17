import React, { Component } from "react";
import { View, Text, TouchableOpacity, Button, Image, SafeAreaView, 
        ScrollView, SegmentedControlIOS, StyleSheet, Dimensions } from "react-native";
import { Camera, Permissions, FileSystem, ImageManipulator } from "expo";
// import ImageResizer from 'react-native-image-resizer'; 
import Icon from 'react-native-vector-icons/Ionicons';

import Category from '../components/Category';
// import FirebaseController from "./FirebaseController";
import Demo from '../screens/Demo';
import CanvasComponent from './CanvasComponent'

import firebase from 'firebase';

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
    cameraUri: "null",
    Debug: "debug",
    selectedIndex:1,
    positionArray:{},
    // videolink: this.props.getParam('videoLink', 'NO-ID')
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  takePicture = () => {
    if (this.camera) {
      this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved, 
        quality: 0.3}).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    }
  };

  onPictureSaved = async photo => {
    const manipResult = await ImageManipulator.manipulateAsync(photo.uri, 
        [{resize: {width: 400, height: 400}},  {flip: {horizontal: true}}], 
        { format: 'jpeg' });
    // console.log(manipResult.uri)
    // this.postImage(manipResult.uri);
    this.setState({cameraUri:manipResult.uri});
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

    // this.firebaseController = new FirebaseController();
    this.app = firebase.initializeApp({
      apiKey: "AIzaSyBH9OeWQ99kDI3TMVX08Clj1ircvTZbAvs",
      authDomain: "treehack-even.firebaseapp.com",
      databaseURL: "https://treehack-even.firebaseio.com",
      projectId: "treehack-even",
      storageBucket: "treehack-even.appspot.com",
      messagingSenderId: "845314858207"
    });

    var ref = this.app.database().ref()
    ref.child("tab").on("value", (snapshot)=> {
      this.switchScreen(Number.parseInt(snapshot.toJSON().toString()))
    })
    // TextToSpeech.initialize("username", "password")
    // TextToSpeech.synthesize( "Text to speech, easy" )

  }

  switchScreen(index){
    console.log(index)
    this.setState({selectedIndex: index});
  }

  postImage = async (uri) => {
    const url = "http://157.55.165.103:8080/pose";
    const data = new FormData();
    // data.append('name', 'testName'); // you can append anyone.

    data.append('image', {
      uri, name:"1.jpg", type:"image/jpeg"
    });
    fetch(url, {
      method: 'POST',
      body: data
    }).then(res => {
      // console.log(res)
      this.setState({positionArray: JSON.parse(
        res["_bodyText"])["keypoints"]});
    }).catch(error=>{
      console.log(error)
    });
  }

  render() {
    console.log(this.props.navigation.screenProps);
    const videoLink = this.props.navigation.screenProps["videoLink"];
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={{flex:1, alignItems:'center'}}>
              {this.state.selectedIndex == 1 ? (
                <Camera style={{ flex: 1 , 
                justifyContent: 'flex-end', 
                width: Dimensions.get('window').width}} type={this.state.type}  ref={ref => {
                      this.camera = ref;
                    }}>
                </Camera>
              ) : (
                <Demo videolink = {videoLink} />
              )} 
            <SegmentedControlIOS
                values={['Demo', 'Camera']}
                selectedIndex={this.state.selectedIndex}
                onChange={(event) => {
                  this.switchScreen(event.nativeEvent.selectedSegmentIndex);
                  // this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
                }}
                tintColor='#83ABAA'
                style={styles.segBar}
              />
              <View style={styles.cancel}>
                  <Icon 
                      name="ios-close-circle" 
                      style={{fontSize:60, color:'#83ABAA'}}
                      onPress={()=> this.props.navigation.navigate('HomeScreen')}
                  />
              </View>
              {/* <Image style = {{position:"absolute",
                               height:100,
                               width:100,
                               left:0,
                               top:0}}
              source={{uri: this.state.cameraUri}} ></Image> */}
              <CanvasComponent 
                positionArray={this.state.positionArray} />
            </SafeAreaView>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  segBar:{
    width:200,
    position: "absolute",
    top:60
  },
  cancel:{
    justifyContent:'center',  
    alignItems: 'center', 
    marginTop:10,
    position: "absolute",
    bottom:20
  }
});