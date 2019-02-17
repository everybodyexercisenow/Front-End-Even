import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Button  } from "react-native";

import Category from '../components/Category';
import List from '../components/List';
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
      console.log(mListArray)
      let mPhoto = [];
      for (let i = 0; i < mListArray.length; i++) {
        console.log(mListArray[i]);
        const createIconAsync = async (level) => {
          const mItems = await fetch(this.state.url + "catalog/" + level);
          const mItemArray = JSON.parse(mItems["_bodyText"]);
          console.log(mItemArray);
          let imgs = [];
          for (let j = 0; j < mItemArray.length; j++) {
            const item = mItemArray[j];
            // console.log("GET: "+ this.state.url + "exercise/icon/" + item);
            const icon = this.state.url + "exercise/icon/" + item;
            // console.log("icon: ");
            // console.log(icon);
            // const iconArr = JSON.parse(icon["_bodyText"]);
            // console.log("icon "+ icon);
            imgs.push(icon);
          }
          console.log("my images");
          console.log(imgs);
          mPhoto.push(<List 
                        key={i}
                        mCategory={mItemArray} 
                        mImage={imgs} />);
          // mPhoto.push(<Text>CAO</Text>);
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
      <View style={styles.container}>
        {this.state.photos}
      </View>
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
