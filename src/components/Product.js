import React, { Component } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

export default class Product extends Component<{}> {
  render() {
    return (
      <View>
        <Text style={style.textStyle}>Android</Text>
        <Button title="Buy" />
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