import React, { Component } from 'react';
import { View, Text, StyleSheet , SegmentedControlIOS, SafeAreaView, ScrollView} from 'react-native';
import StatsChartComponent from '../components/StatsChartComponent'
import ExerciseChartComponent from '../components/ExerciseChartComponent'
import StatsCardComponent from '../components/StatsCardComponent'
import ValueCardComponent from '../components/ValueCardComponent'

export default class Status extends Component {
  state = {
    selectedIndex: 0,
  };

  renderTab = () => {
    if (this.state.selectedIndex == 0) {//currently at exercise
      // switch to accurracy window
      //need to get the data from databse
      return<ExerciseChartComponent data = {[
        { x: "Sun\n11", y: 4 },
        { x: "Mon\n12", y: 2 },
        { x: "Tue\n13", y: 3 },
        { x: "Wed\n14", y: 5 },
        { x: "Thu\n15", y: 7 },
        { x: "Fri\n16", y: 2 },
        { x: "Sat\n17", y: 7 },
        { x: "Sun\n18", y: 3 },
        { x: "Mon\n19", y: 5 },
        { x: "Tues\n20", y: 4 },
        { x: "Wed\n21", y: 5 },
        { x: "Thu\n22", y: 7 },
        { x: "Fri\n23", y: 2 },
        { x: "Sat\n14", y: 7 },
        
      ]}/>
    }
    else {
      //switch to exercise windwo
      return<StatsChartComponent data = {[
        { x: "Sun\n11", y: 4 },
        { x: "Mon\n12", y: 2 },
        { x: "Tue\n13", y: 3 },
        { x: "Wed\n14", y: 5 },
        { x: "Thu\n15", y: 7 },
        { x: "Fri\n16", y: 2 },
        { x: "Sat\n17", y: 7 },
        { x: "Sun\n18", y: 3 },
        { x: "Mon\n19", y: 5 },
        { x: "Tues\n20", y: 4 },
        { x: "Wed\n21", y: 5 },
        { x: "Thu\n22", y: 7 },
        { x: "Fri\n23", y: 2 },
        { x: "Sat\n14", y: 7 },
      ]}/>
    }
  };

  render() {

      return (
          <SafeAreaView style={styles.backgroundView}>
              <View style = {styles.foregroundView}>

                <View style = {{flex: 2.5}}>
                  <StatsCardComponent title = {"DAILY MOTIVATION"} contentView = {
                    <View style = {styles.mottoHolderStyle}>
                    <Text>
                    Happiness is when what you think, what you say, and what you do are in harmony.
                    </Text>
                    <Text style = {{alignSelf:'flex-end', marginTop: 5}}>
                    ———— Mahatma Gandhi
                    </Text>
                    </View >
                  }/>
                </View>

                <View style={{flex: 5}}>
                  <View style={styles.lineStyle}/>
                    <StatsCardComponent title = {"THIS WEEK"} contentView = {
                      <View>
                        <SegmentedControlIOS
                          style = {{width:130, alignSelf: 'flex-end', marginRight: 8}}
                          values={['Exercise', 'Accuracy']}
                          selectedIndex={this.state.selectedIndex}
                          tintColor = '#83abaa'
                          onChange={(event) => {
                            this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
                          }}
                        />
                        <ScrollView horizontal = {true} 
                          contentContainerStyle={styles.contentContainer}>
                          {this.renderTab()}
                        </ScrollView>
                      </View>
                    }/>
                </View>

                <View style = {{flex: 3}}>
                  <View style={styles.lineStyle}/>
                  <StatsCardComponent title = {"SUMMARY"}  contentView = {
                    <View style={{justifyContent: "space-around", flexDirection:"row"}}>
                      <ValueCardComponent mainField = {"24"} subField = {"SETS COMPLETED"} />
                      <ValueCardComponent mainField = {"1H57M"} subField = {"TIME EXERCISING"} />
                      
                    </View>
                  }/>
                </View>

            </View>
          </SafeAreaView>  
      )
  }
}

const styles = StyleSheet.create({
backgroundView: {
  flex: 1,
  backgroundColor: "#83abaa", //theme color 
},

foregroundView: {
  marginTop : 20,
  flex: 1,
  backgroundColor: "#ffffff", //backgroundDarkGray
  
},

contentContainer: {
  margin: 0,
  backgroundColor:"#ffffff",//white
},

statesView: {
  margin: 5,
  height: 230,
  backgroundColor:"#ff00ff",//white
},

lineStyle: {
  borderBottomColor: '#D3D3D3', //lightgray
  borderBottomWidth: 1,
},

mottoHolderStyle: {
  margin: 25,
  marginLeft: 31,
  marginRight: 31,
}

});