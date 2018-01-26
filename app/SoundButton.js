import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Sound from "react-native-sound";

export default class SoundButton extends Component {
  state = {
    player: null,
    restarting: false,
    playing: false
  };

  componentDidMount() {
    const player = new Sound(
      this.props.sound.filename,
      Sound.MAIN_BUNDLE,
      err => err && console.error(err)
    );
    this.setState({ player });
  }

  render() {
    const buttonStyle = [
      styles.button,
      this.state.playing && styles.buttonPlaying
    ];
    
    const buttonTextStyle = [
      styles.text,
      this.state.playing && styles.buttonPlayingText
    ];

    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableOpacity style={buttonStyle} onPress={this.handlePress}>
          <Text style={buttonTextStyle}>{this.props.sound.label}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  handlePress = () => {
    if (!this.state.player || this.state.restarting) return;
    this.setState({ restarting: true });
    this.state.player.stop(() => {
      this.setState({ restarting: false, playing: true });
      this.state.player.play(this.handlePlayFinished);
    });
  };

  handlePlayFinished = () => {
    this.setState({ playing: false });
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
  buttonPlaying: {
    borderColor: "#c82a45"
  },
  text: {
    textAlign: "center"
  },
  buttonPlayingText: {
    color: "#c82a45"
  }
});
