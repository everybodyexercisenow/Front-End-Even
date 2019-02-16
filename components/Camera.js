import React, { Component } from "react";
import { View, Text, TouchableOpacity, Button, Image } from "react-native";
import { Camera, Permissions, FileSystem } from "expo";
export default class camera extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    flash: "off",
    zoom: 0,
    autoFocus: "on",
    type: "back",
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
    count: 0,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }
  componentDidMount() {
    FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'photos').catch(e => {
      console.log(e, 'Directory exists');
    });
  }

  takePicture = () => {
    this.setState({Debug: this.state.count});
    this.setState({count: this.state.count + 1});
    if (this.camera) {
      this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved });
    }
  };

  onPictureSaved = async photo => {
    this.setState({imageUri:photo.uri});
    // await FileSystem.moveAsync({
    //   from: photo.uri,
    //   to: `${FileSystem.documentDirectory}photos/${Date.now()}.jpg`
    // });
    // this.setState({ newPhotos: true });
  };
  getRatios = async () => {
    const ratios = await this.camera.getSupportedRatios();
    return ratios;
  };
  constructor(props) {
    super(props);
    // Toggle the state every second
    setInterval(()=>{
      this.takePicture();
    },300);
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
            <View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                flexDirection: "row"
              }}
            >
           <Image style={{ height: 100, width: 100 }} source={{uri: this.state.imageUri}}/>
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignSelf: "flex-end",
                  alignItems: "center"
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                  });
                }}
              >
                <Text>{this.state.Debug}</Text>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: "white" }}
                >
                  {" "}
                  Flip{" "}
                </Text>
                <Button
                  onPress={this.takePicture}
                  title="t"
                  style={{ marginTop: 50 }}
                />
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}
