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
    padding: 12,
    ...Platform.select({
      ios: { paddingTop: 32 },
      android: {}
    })
  },
  button: {
    width: "50%",
    height: 100,
    marginBottom: 8
  },
  oddButton: {
    paddingLeft: 4
  },
  evenButton: {
    paddingRight: 4
  },
  infoIcon: {
    position: "absolute",
    bottom: 12,
    right: 12
  }
});
