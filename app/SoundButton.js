import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Sound from "react-native-sound";

export default class SoundButton extends Component {
  state = {
    player: null,
    restarting: false
  };

  componentDidMount() {
    this.setState({
      player: new Sound(this.props.sound.file, err => err && console.error(err))
    });
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableOpacity style={styles.button} onPress={this.handlePress}>
          <Text style={styles.text}>{this.props.sound.label}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  handlePress = () => {
    if (!this.state.player || this.state.restarting) return;
    this.setState({ restarting: true });
    this.state.player.stop(() => {
      this.setState({ restarting: false });
      this.state.player.play();
    });
  };
}

const styles = StyleSheet.create({
  container: {},
  button: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  text: {
    textAlign: "center"
  }
});
