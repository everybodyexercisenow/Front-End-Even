import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Category from './Category';


export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

    render() {
        var mItems = [];
        var mCategory = this.props.mCategory;
        // console.log(mCategory)
        var mImage = this.props.mImage;
        console.log("image link: ");
        console.log(mImage);
        console.log("Category link: ");
        console.log(mCategory);
        for(let i = 0; i < mCategory.length; i ++){
            console.log(mImage[i]);
            mItems.push(
                <Category
                    key = {i}
                    categoryName={mCategory[i]}
                    imageUri={mImage[i]}
                    name={mCategory[i]}
                />
            );
        }
            
        return (
            <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 30 }}>
                <View style={{ height: 130, marginTop: 20 }}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {mItems}
                </ScrollView>
                </View>
        </View>
        );
  }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    }
});