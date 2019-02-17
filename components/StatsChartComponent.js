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
        // padding={{ bottom: 10 }}
      >
      <VictoryArea 
        data={this.state.accuracyData} 
        style={{
          data: {
            fill: global.themeColor, fillOpacity: 0.3, stroke: global.themeColor, strokeWidth: 3
          },
          labels: {
            fontSize: 15,
            fill: global.themeColor
          }
        }}
      />
      <VictoryAxis
        style={{
          tickLabels: {
            padding:15,
          },
        }}
      />
      <VictoryLine
        height = {180}
        style={{
          data: { stroke: global.themeColor },
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