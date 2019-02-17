import React , { Component } from "react"
import {StyleSheet} from 'react-native'
import {VictoryChart, VictoryTheme, VictoryBar, VictoryLabel, VictoryAxis} from "victory-native"


class ExerciseChartComponent extends React.Component {

   constructor(props) {
        super(props);
        this.state = {
          workData: props.data
        }
    }

   render () {
    return (
      <VictoryChart 
        height = {250}
        theme={VictoryTheme.material}
        width = {55 * (this.state.workData.length)}
        // padding={{ bottom: 10 }}
      >
      <VictoryBar
        alignment="start"
        data={this.state.workData}
        labels={(d) => d.y}
        barWidth = {10}
        style={{
          data: {
            fill:  "#83abaa",
            stroke: "#83abaa",
            strokeWidth: 1
          },
          labels: {
            fontSize: 15,
            fill:"black"
          }
        }}
        labelComponent={<VictoryLabel dx = {10}/>}
      />
      <VictoryAxis 
      style={{ 
        axis: {stroke: "none"},
        tickLabels: {
          padding:15,
        },
      }}
      />
      </VictoryChart>  
    )
  }
}



export default ExerciseChartComponent