import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Button, SafeAreaView  } from "react-native";

import Category from '../components/Category';
import List from '../components/List';
// import { throws } from "assert";
// import { FORMERR } from "dns";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mIds: null,
      mList: null,
      photos: <Text>GG </Text>,
      url: "http://157.55.165.103:8080/",
    };
    const createDataAsync = async () => {
      mList = await fetch(this.state.url + "catalog");
      // console.log(mList.length);
      mListArray = JSON.parse(mList["_bodyText"]);
      let mPhoto = [];
      for (let i = 0; i < mListArray.length; i++) {
        const createIconAsync = async (level) => {
          const mItems = await fetch(this.state.url + "catalog/" + level);
          const mItemArray = JSON.parse(mItems["_bodyText"]);
          // console.log(mItemArray);
          let imgs = [];
          for (let j = 0; j < mItemArray.length; j++) {
            const item = mItemArray[j];
            const icon = this.state.url + "exercise/icon/" + item;
            imgs.push(icon);
          }
          mPhoto.push(
            <View key={i}>
              <List 
                route={this.props.navigation}
                mCategory={mItemArray} 
                mImage={imgs}
                mList= {mListArray[i]} />
            </View>
          );
          this.setState({photos: mPhoto})

        }
        createIconAsync(mListArray[i]);
      }
    }
    //get all list of catalog
    createDataAsync();
  }

  componentDidMount(){
  }


  render() {
    return (
      <SafeAreaView style={styles.container} style={{marginTop:20}}>
        <ScrollView style={{marginTop:0}}>
          {this.state.photos}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center"
  }
});
