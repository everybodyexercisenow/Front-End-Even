import React , { Component } from "react"
import {StyleSheet} from 'react-native'
import {VictoryChart, VictoryTheme, VictoryLine, VictoryArea, VictoryAxis, VictoryLabel} from "victory-native"


class StatsChartComponent extends React.Component {

   constructor(props) {
        super(props);
        this.state = {
          accuracyData : props.data
        }
    }
   render () {
    return (
      <VictoryChart 
        style = {styles.chartStyle}
        height = {250}
        theme={VictoryTheme.material}
        width = {55 * (this.state.accuracyData.length)}
      >
      <VictoryArea 
        data={this.state.accuracyData} 
        style={{
          data: {
            fill: "#83abaa", fillOpacity: 0.3, stroke: "#83abaa", strokeWidth: 3
          },
          labels: {
            fontSize: 15,
            fill: "#83abaa"
          }
        }}
      />
      <VictoryAxis/>
      <VictoryLine
        height = {180}
        style={{
          data: { stroke: "#83abaa" },
          parent: { border: "1px solid #ccc"},
          labels: {
            fontSize: 15,
            fill:"black"
          }
        }}
        labels={(datum) => datum.y}
        labelComponent={<VictoryLabel renderInPortal dy={-4}/>}
        data = {this.state.accuracyData}
      />
      </VictoryChart>  
    )
  }
}

const styles = StyleSheet.create({
  chartStyle: {
    width: 200
  }
});

export default StatsChartComponent