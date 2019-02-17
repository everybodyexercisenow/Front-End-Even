import React , { Component } from "react"
import {StyleSheet, View, Text, TextInput} from 'react-native'


class ValueCardComponent extends React.Component {

   constructor(props) {
        super(props);
        this.state = {
          mainField : props.mainField,
          subField : props.subField,
          sideMargin: props.margin,
        }
    }
   render () {
    return (
      
      <View style = {styles.holderStyle}>
        <Text style = {styles.mainStyle}>
            {this.props.mainField}
        </Text> 
        <Text style = {styles.subStyle}>
            {this.props.subField}
        </Text> 
        <View style = {styles.terminateStyle} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  holderStyle: {
    marginTop: 20,
  },

  mainStyle: {
    textAlign: 'center',
    // font-family: 'lucida grande', tahoma, verdana, arial, sans-serif,
    // font-size: 11px,
    fontSize: 35,
  },

  subStyle: {
    textAlign: 'center',
    // font-family: 'lucida grande', tahoma, verdana, arial, sans-serif,
    // font-size: 11px,
    color: '#D3D3D3',
  },

  terminateStyle: {
    marginTop: 10,
    width: 22,
    alignSelf: 'center',
    borderBottomColor: '#83abaa', //theme color
    borderBottomWidth: 4,
  }

});


export default ValueCardComponent
