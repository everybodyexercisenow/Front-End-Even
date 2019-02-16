import React, { Component } from 'react';
import { 
    View, Text, StyleSheet, Button, SafeAreaView ,
    ScrollView, Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/FontAwesome';

import Category from '../components/Category';
import Camera from '../components/Camera';

export default class Excercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1, justifyContent: 'flex-start', marginTop:20}}>
                {/* <Text>Demo</Text> */}
                <Button 
                    title="to camera" 
                    onPress={()=> this.props.navigation.navigate('Camera')}
                />
            </View>

            {/* bottom tab and recommendation */}
            <View style={{flex:1, justifyContent: 'flex-end', marginBottom:30}}>
                <View style={{ height: 130, marginTop: 20 }}>
                    <ScrollView
                        horizontal={true} showsHorizontalScrollIndicator={false}
                    >
                        <Category categoryName="Daily" imageUri={require('../assets/1.jpg')}
                            name="Home"
                        />
                        <Category categoryName="Monthly" imageUri={require('../assets/2.jpg')}
                            name="Experiences"
                        />
                        <Category categoryName="Yearly" imageUri={require('../assets/3.jpg')}
                            name="Resturant"
                        />
                    </ScrollView>
                </View>
                <View style={{justifyContent:'center',  alignItems: 'center', marginTop:10}}>
                    <Icon 
                        name="ios-close-circle" 
                        style={{fontSize:30, color:'tomato'}}
                        onPress={()=> this.props.navigation.navigate('Home')}
                    />
                </View>
            </View>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  