import React, { Component } from 'react';
import { View } from 'react-native';
import Product from './Product';


export default class ProductList extends Component<{}> {

  render() {
    return (
      <View>
        <Product name = "Android" />
        <Product name = "Nokia" />
        <Product name = "iPhone" />
      </View>
    );
  }
}
