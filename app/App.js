import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Sound from "react-native-sound";
import SoundButton from "./SoundButton";
import InfoIcon from "./InfoIcon";
import sounds from "./sounds";

export default class App extends Component {
  state = {
    soundPlayers: null
  };

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        {sounds.map((s, i) => (
          <SoundButton
            key={s.file}
            sound={s}
            style={[
              styles.button,
              i % 2 === 0 ? styles.evenButton : styles.oddButton
            ]}
          />
        ))}

        <InfoIcon style={styles.infoIcon} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 20,
    paddingTop: 40
  },
  button: {
    width: "50%",
    height: 100,
    marginBottom: 10
  },
  oddButton: {
    paddingLeft: 5
  },
  evenButton: {
    paddingRight: 5
  },
  infoIcon: {
    position: "absolute",
    bottom: 20,
    right: 20
  }
});
