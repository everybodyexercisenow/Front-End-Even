import React , { Component } from "react"
import {StyleSheet, View, Text, TextInput} from 'react-native'


class StatsCardComponent extends React.Component {

   constructor(props) {
        super(props);
        this.state = {
          height : props.height,
          title : props.title
        }
    }
   render () {
    return (
      <View> 
        <View style = {[styles.titleViewStyle]}>
          <Text style = {styles.titleStyle}>
            {this.props.title}
          </Text>
        </View>
        {this.props.contentView}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    textAlign: 'center',
    fontFamily: "Avenir",
    letterSpacing: 1.5,
    
  },
  titleViewStyle: {
    marginTop: 20,
    marginLeft: 20,
    borderBottomWidth: 2,
    borderColor: '#83abaa',
    alignSelf: 'flex-start'
  },

});


export default StatsCardComponent
