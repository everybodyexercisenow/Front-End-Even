import React , { Component } from "react"
import {StyleSheet, View, Text, TextInput} from 'react-native'


class ValueCardComponent extends React.Component {

   constructor(props) {
        super(props);
        this.state = {
          mainField : props.mainField,
          hour: props.hour,
          minute: props.minute,
          subField : props.subField,
          sideMargin: props.margin,
          isTime: props.isTime,
        }
    }

    renderText(props){
      if (this.props.isTime){
        return(<Text style = {styles.mainStyle}>
          {this.props.mainField} 
        </Text>) ;
      } 
      return (<Text style = {styles.mainStyle}>
        {this.props.hour}
        <Text style = {styles.unitStyle}>h</Text>
        {this.props.minute}
        <Text style = {styles.unitStyle}>m</Text>
      </Text>);
    }
   render () {
    return (
      
      <View style = {styles.holderStyle}>
       {this.renderText()}
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
    fontSize: 35,
    letterSpacing: 1.5,
  },
  
  unitStyle: {
    textAlign: 'center',
    fontSize: 12,
    letterSpacing: 1.5,
  },

  subStyle: {
    textAlign: 'center',
    color: '#D3D3D3',
    letterSpacing: 1.5,
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
