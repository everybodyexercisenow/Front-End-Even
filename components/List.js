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
        var toTitleCase = function (str) {
            str = str.toLowerCase().split(' ');
            for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
            }
            return str.join(' ');
        };
        var mItems = [];
        var mCategory = this.props.mCategory;
        // console.log(mCategory)
        var mImage = this.props.mImage;
        var mList = this.props.mList;
        for(let i = 0; i < mCategory.length; i ++){
            //change the name of each Item into titlecase and eliminate _
            let searchTitle = mCategory[i];
            let titleName = mCategory[i];
            titleName = titleName.replace(/_/g,' ');
            titleName = toTitleCase(titleName);
            mCategory[i] = titleName;
            mItems.push(
                <View style={{ 
                }}
                    key = {i}>
                    <Category
                        route={this.props.route}
                        categoryName={mCategory[i]}
                        imageUri={mImage[i]}
                        name={mCategory[i]}
                        videoLink={"http://157.55.165.103:8080/exercise/video/"+ searchTitle}
                    />
                </View>
            );
        }
            
        return (
            <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 30 }}>
                <View style={{ height: 170, marginTop: 25 }}>
                    <View style={styles.titleBorder}>
                        <Text style={styles.title}>{mList.toUpperCase()}</Text>
                    </View>
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
        fontFamily: 'Avenir',
    },
    title:{
        paddingBottom:2,
        letterSpacing:1,
        textDecorationColor: '#83ABAA',
    },
    titleBorder:{
        borderBottomWidth: 2,
        borderColor: '#83abaa',
        alignSelf: 'flex-start',
        marginLeft:15,
        marginBottom:10
    }
});