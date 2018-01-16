import React, { Component } from 'react';
import {
  Text,
  Button,
  View
} from 'react-native';

export default class Product extends Component<{}> {
  render() {
    return (
      <View>
        <Text>Android</Text>
        <Button title="Buy" />
      </View>
    );
  }
}