import React, { Component } from 'react';
import {Dimensions, StyleSheet} from "react-native";
// import Canvas from 'react-native-canvas';
import {Constants, Svg} from 'expo'

const bodyEdges = [
    ["leftShoulder", "rightShoulder"],
    ["leftShoulder", "leftHip"],
    ["leftHip", "rightHip"],
    ["rightHip", "rightShoulder"],
    ["leftElbow", "leftShoulder"],
    ["rightElbow", "rightShoulder"],
    // ["leftWrist", "leftElbow"],
    // ["rightWrist", "rightElbow"],
    // ["leftHip", "leftKnee"],
    // ["rightHip", "rightKnee"],
    // ["leftAnkle", "leftKnee"],
    // ["rightAnkle", "rightKnee"],
]

const mapIterator = (m, callback) => {
    const agg = [];
    for (var key in m) {
        if (m.hasOwnProperty(key)) {
            agg.push([callback(key, m[key])]);
        }
    }
    return agg;
  };

// const edgeIterator = (m, callback) => {
    
//   };

export default class CanvasComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    renderItem(position) {
        cx = Dimensions.get('window').width * position[0];
        cy = Dimensions.get('window').height * position[1];
        return <Svg.Circle cx={cx} cy={cy}
                r={10} strokewidth={2.5} fill="#f1c40f" />
    }
     
    renderEdge(p1, p2) {
        if (!p1 || !p2) return null;
        // console.log(p1)
        // console.log(p2)
        x1 = p1[0] * Dimensions.get('window').width;
        y1 = p1[1] * Dimensions.get('window').height;
        x2 = p2[0] * Dimensions.get('window').width;
        y2 = p2[1] * Dimensions.get('window').height;
        // console.log(x1)
        // console.log(x1)
        if (x1 <= 0 && y1 <= 0 || x2 <= 0 && y2 <= 0) return null;

        return <Svg.Line x1 = {x1} y1 = {y1} x2 = {x2} y2 = {y2} stroke="red"
                strokeWidth = "2" />
    }

    render() {
        // Edges
        const agg = [];
        const m = this.props.positionArray;
        if (m != undefined && m != null) {
            bodyEdges.forEach(element => {
                // console.log(element)
                if (m.hasOwnProperty(element[0]) && m.hasOwnProperty(element[1])) {
                    var vs = m[element[0]];
                    var ve = m[element[1]];
                    agg.push([this.renderEdge(vs, ve)]);
                }
            });

        }
        return (
            <Svg style={styles.canvas}>
                {mapIterator(this.props.positionArray, (key, value) => {
                    return this.renderItem(value);
                })}
                {agg}
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