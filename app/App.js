import React, { Component } from "react";
import { Platform, StyleSheet, Text, ScrollView, View, StatusBar } from "react-native";
import Sound from "react-native-sound";
import SoundButton from "./SoundButton";
import InfoIcon from "./InfoIcon";
import sounds from "./sounds";
Sound.setCategory('Playback');

export default class App extends Component {
  state = {
    soundPlayers: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <ScrollView>
        <View style={styles.soundsContainer}>
          {sounds.map((s, i) => (
            <SoundButton
              key={s.filename}
              sound={s}
              style={[
                styles.button,
                i % 2 === 0 ? styles.evenButton : styles.oddButton
              ]}
            />
          ))}
        </View>
      </ScrollView>

        <Text style={styles.infoText}>
          Pigeon Sounds <Text style={{color: '#b3862d'}}>HD</Text>
        </Text>
        <InfoIcon style={styles.infoIcon} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    ...Platform.select({
      ios: { paddingTop: 32, paddingBottom: 32 },
      android: { paddingBottom: 32 }
    })
  },
  soundsContainer: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
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
  infoText: {
    color: "grey",
    fontSize: 11,
    position: "absolute",
    bottom: 12,
    left: 12
  },
  infoIcon: {
    position: "absolute",
    bottom: 12,
    right: 12
  }
});
