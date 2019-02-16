import React, { Component } from "react";
import { View, Text, TouchableOpacity, Button, Image, SafeAreaView, 
        ScrollView, SegmentedControlIOS, StyleSheet } from "react-native";
import { Camera, Permissions, FileSystem } from "expo";
import ImageResizer from 'react-native-image-resizer'; 
import Icon from 'react-native-vector-icons/Ionicons';

import Category from '../components/Category';
import FirebaseController from "./FirebaseController";
import Demo from '../screens/Demo';

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
    Debug: "debug",
    selectedIndex:1
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  takePicture = () => {
    this.setState({Debug: this.state.count});
    // this.setState({count: this.state.count + 1});
    if (this.camera) {
      this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved, 
        quality: 0.3}).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    }
  };

  onPictureSaved = async photo => {
    this.setState({imageUri:photo.uri});
    ImageResizer.createResizedImage(photo.uri, 384, 177, "JPEG",
     80, 0, null).then((response) => {
       console.log(response.uri)
       this.state.imageUri = response.uri
      // response.uri is the URI of the new image that can now be displayed, uploaded...
      // response.path is the path of the new image
      // response.name is the name of the new image with the extension
      // response.size is the size of the new image
    }).catch((err) => {
      // Oops, something went wrong. Check that the filename is correct and
      // inspect err to get more details.
    });
  };
  getRatios = async () => {
    const ratios = await this.camera.getSupportedRatios();
    return ratios;
  };
  constructor(props) {
    super(props);
    console.log("Constructor CS")
    // Toggle the state every second
    setInterval(()=>{
      this.takePicture();
    },300);

    
    this.firebaseController = new FirebaseController();
    this.firebaseController.query((string)=>{
      this.setState({Debug: string})
    });
  }

  switchScreen(index){
    // if(index == 0){
    //   this.props.navigation.navigate('Demo');
    // }
    this.setState({selectedIndex: index});
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
            <SafeAreaView style={{flex:1, alignItems:'center'}}>
              {this.state.selectedIndex == 1 ? (
                <Camera style={{ flex: 1 }} type={this.state.type}  ref={ref => {
                      this.camera = ref;
                    }}>
                {/* <Image source={{uri:this.state.imageUri}} style={{width:100, height:100}} /> */}
                  <View style={{flex:1, marginTop:0}}>
                      {/* <Text style={{justifyContent:'center'}}>Demo | Camera</Text> */}
                      {/* <Icon name="ios-refresh" style={{color:'white', fontSize:30}} /> */}
                  </View>
            
                  <View style={{flex:1, justifyContent: 'flex-end', marginBottom:30}}>
                      <View style={{ height: 130, marginTop: 20 }}>
                          {/* <ScrollView
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
                          </ScrollView> */}
                      </View>
                  </View>
                </Camera>
              ) : (
                <Demo />
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
                      style={{fontSize:50, color:'tomato'}}
                      onPress={()=> this.props.navigation.navigate('HomeScreen')}
                  />
              </View>
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