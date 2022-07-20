import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";

export class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{ backgroundColor: "pink", padding: 16, borderRadius: 8, }}
      >
        <Text style={{ fontSize: 20, color: this.props.color }}>
          {this.props.label}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
