import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Linking,
  StyleSheet
} from "react-native";

class InfoIcon extends Component {
  render() {
    return (
      <TouchableOpacity
        style={[styles.container, this.props.style]}
        onPress={this.handlePress}
      >
        <Text style={styles.text}>?</Text>
      </TouchableOpacity>
    );
  }

  handlePress = () => {
    Linking.openURL("https://computerlab.io/");
  };
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  text: {
    textAlign: "center"
  }
});

export default InfoIcon;
