import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 30 }}>
          <View style={{ height: 130, marginTop: 20 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Category
                categoryName="Daily"
                imageUri={require("../assets/1.jpg")}
                name="Home"
              />
              <Category
                categoryName="Monthly"
                imageUri={require("../assets/2.jpg")}
                name="Experiences"
              />
              <Category
                categoryName="Yearly"
                imageUri={require("../assets/3.jpg")}
                name="Resturant"
              />
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
