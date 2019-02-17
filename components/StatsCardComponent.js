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
        <View style = {styles.cardHeadStyle}>
          <View style = {[styles.titleViewStyle]}>
            <Text style = {styles.titleStyle}>
              {this.props.title}
            </Text>
          </View>
          {this.props.segmentView}
        </View>
        {this.props.contentView}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardHeadStyle :{
    flexDirection: "row",
    justifyContent: 'space-between',
  },

  titleViewStyle: {
    marginTop: 20,
    marginLeft: 20,
    borderBottomWidth: 2,
    borderColor: '#83abaa',
    alignSelf: 'flex-start'
  },

  titleStyle: {
    textAlign: 'center',
    fontFamily: "Avenir",
    letterSpacing: 1.5,
    
  },


});


export default StatsCardComponent
