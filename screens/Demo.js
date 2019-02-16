import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, Image, SafeAreaView, 
    ScrollView, SegmentedControlIOS, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default class Demo extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor")
    this.state = {
        selectedIndex:0
    };
  }
  switchScreen(index){
    if(index == 1){
      this.props.navigation.navigate('Camera');
    }
  }
  render() {
    return ( null
        // <SafeAreaView style={{flex:1, alignItems:'center'}}>
        //     <SegmentedControlIOS
        //     values={['Demo', 'Camera']}
        //     selectedIndex={this.state.selectedIndex}
        //     onChange={(event) => {
        //         this.switchScreen(event.nativeEvent.selectedSegmentIndex);
        //         // this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
        //     }}
        //     tintColor='#83ABAA'
        //     style={styles.segBar}
        //     />
            // <View style={{flex:1, justifyContent:'flex-end',  alignItems: 'center', marginTop:10}}>
            //     <Icon 
            //         name="ios-close-circle" 
            //         style={{fontSize:50, color:'tomato'}}
            //         onPress={()=> this.props.navigation.navigate('HomeScreen')}
            //     />
            // </View>
        // </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
    segBar:{
      width:200,
    }
  });
