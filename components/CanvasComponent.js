import React, { Component } from 'react';
import {Animated, Dimensions, StyleSheet} from "react-native";
// import Canvas from 'react-native-canvas';
import {Constants, Svg} from 'expo'
import Firebase from './FirebaseController'
const bodyEdges = [
    ["leftShoulder", "rightShoulder"],
    ["leftShoulder", "leftHip"],
    ["leftHip", "rightHip"],
    ["rightHip", "rightShoulder"],
    ["leftElbow", "leftShoulder"],
    ["rightElbow", "rightShoulder"],
    // ["leftWrist", "leftElbow"],
    // ["rightWrist", "rightElbow"],
    ["leftHip", "leftKnee"],
    ["rightHip", "rightKnee"],
    // ["leftAnkle", "leftKnee"],
    // ["rightAnkle", "rightKnee"],
]

const mapIterator = (m, mp, callback) => {
    const agg = [];
    for (var key in m) {
        if (mp && mp.hasOwnProperty(key) && m.hasOwnProperty(key)) {
            agg.push([callback(mp[key], m[key])])
        }
        else if (m.hasOwnProperty(key)) {
            agg.push([callback(null, m[key])]);
        }
    }
    return agg;
  };


export default class CanvasComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            demoPose: [],
            frameAnimation: new Animated.Value(0),
            frame: 0,
            interval: 0,
        }
    }

    async componentWillMount() {
    }
    
    componentDidMount() {
        var ref = Firebase.database().ref()
        ref.child("videoLink").on("value", (snapshot)=> {
            const videoLink = snapshot.toJSON().toString();
            console.log(videoLink)
            const linkSplit = videoLink.split("/");
            const linkBack = linkSplit[linkSplit.length - 1];
            const url = "http://157.55.165.103:8081/exercise/pose/" + linkBack
            console.log(url)

            var request = new XMLHttpRequest();
            request.onreadystatechange = (e) => {
            if (request.readyState !== 4) {
                return;
            }

            if (request.status === 200) {
                // demoPose = request.responseText
                // console.log('success', request.responseText);
                // console.log(response)
                demoPose = JSON.parse(request.responseText)
                this.setState({demoPose: demoPose});

                if (!this.state.interval) {

                    this.state.interval = setInterval(()=>{
                        // console.log(this.state.frame);
                        this.state.frame++;
                        this.forceUpdate();
                        if (this.state.frame >= this.state.demoPose.length) this.state.frame = 0;
                    }, 100)
                }
            } else {
                console.warn('error');
            }
            };

            request.open('GET', url);
            request.send();

            // fetch(url).then((response)=>{
            // }).catch(error=>{
            //     console.log(error);
            // });
        })
        // console.log(this.state.demoPose)
      }
    



    renderItem(mp, p) {
        color = "#eeeeee"
        cx = Dimensions.get('window').width * p[0];
        cy = Dimensions.get('window').height * p[1];
        if (mp != null && Math.abs(mp[0] - p[0]) < 0.2 && Math.abs(mp[1] - p[1]) < 0.2) {
            return <Svg.Circle cx={cx} cy={cy}
                r={10} strokewidth={2.5} fill="#00ee00" /> 
        } 

        return <Svg.Circle cx={cx} cy={cy}
                r={10} strokewidth={2.5} fill="#ffffff" />
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

        return <Svg.Line x1 = {x1} y1 = {y1} x2 = {x2} y2 = {y2} stroke="white"
                strokeWidth = "2" />
    }

    render() {
        let frame = this.state.frame;
        // console.log(frame)
        if (!this.state.demoPose) return null;
        // Edges
        const agg = [];
        const m = this.state.demoPose[frame];
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
                {mapIterator(m, this.props.positionArray, (mp, p) => {
                    return this.renderItem(mp, p);
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