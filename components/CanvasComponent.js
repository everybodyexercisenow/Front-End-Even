import React, { Component } from 'react';
import {Dimensions, StyleSheet} from "react-native";
// import Canvas from 'react-native-canvas';
import {Constants, Svg} from 'expo'

const mapIterator = (m, callback) => {
    const agg = [];
    for (var key in m) {
        if (m.hasOwnProperty(key)) {
            // console.log(key + " -> " + m[key]);
            agg.push([callback(key, m[key])]);
        }
    }
    return agg;
  };

export default class CanvasComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    // handleCanvas = (canvas) => {
    //     const ctx = canvas.getContext('2d');
    //     ctx.fillStyle = 'purple';
    //     ctx.fillRect(0, 0, 100, 100);
    // }
    renderItem(position) {
        cx = Dimensions.get('window').width * position[0];
        cy = Dimensions.get('window').height * position[1];
        return <Svg.Circle cx={cx} cy={cy}
                r={10} strokewidth={2.5} fill="#f1c40f" />
    }
     
    render() {
        return (
            <Svg style={styles.canvas}>
                {/* <Svg.Circle
                    cx={50}
                    cy={50}
                    r={45}
                    strokeWidth={2.5}
                    stroke="#e74c3c"
                    fill="#f1c40f"
                /> */}
                {mapIterator(this.props.positionArray, (key, value) => {
                    return this.renderItem(value);
                })}
            </Svg>
        )
    }
}

const styles = StyleSheet.create({
canvas:{
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    position: "absolute",
    top:0,
    left:0
  }
});