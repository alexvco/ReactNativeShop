import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, Alert } from 'react-native';

export default class Product extends Component<{}> {

  show() {
    Alert.alert("You clicked me")
  }

  render() {
    return (
      <View>
        <Text style={style.textStyle}>{this.props.name}</Text>
        <Button title="Buy" onPress={this.show} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    padding: 20
  }
});

// Pass data from parent to child component