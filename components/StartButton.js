import React, {Component} from 'react';
import {Animated, TouchableHighlight, View} from "react-native";
// import Icon from '@expo/vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
const SIZE = 70;
export default class StartButton extends Component {
    mode = new Animated.Value(0);
    backgroundColor = '#83ABAA';
    render() {
        return (
            <View
                underlayColor='#83ABAA'
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: SIZE,
                    height: SIZE,
                    borderRadius: SIZE / 2,
                    backgroundColor: this.backgroundColor
                }}
            >
                <Icon name="ios-fitness" size={30} color="white"/>
            </View>
        );
    }
}
