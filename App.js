import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";

import PropTypes from "prop-types";
import React, { Component } from "react";
import Button from "./Button";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  decrease = () => {
    var id = setInterval(() => { 
      if (this.state.text > 0) {
        this.setState({
          text: this.state.text - 1,
        });
        alert(this.state.text);
      } else {
        clearInterval(id);
      }
    }, 1000);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "50%",
            alignSelf: "center",
          }}
        >
          <TextInput
            onChangeText={(value) => {
              this.setState({ text: value });
            }}
            editable
            maxLength={40}
            keyboardType="numeric"
            style={{
              backgroundColor: "white",
              width: "100%",
              height: 100,
              justifyContent: "center",
              borderWidth: 4,
              fontSize: 50,
            }}
          ></TextInput>
          <Button onPress={this.decrease} color="green" label="Giảm" />
        </View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
