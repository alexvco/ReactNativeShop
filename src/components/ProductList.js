import React, { Component } from 'react';
import { View } from 'react-native';
import Product from './Product';


export default class ProductList extends Component<{}> {

  state = {
    products: [
      {
        "id": 1,
        "name": "Android"
      },
      {
        "id": 2,
        "name": "Nokia"
      },
      {
        "id": 3,
        "name": "iPhone"
      },
    ]
  }

  render() {

    var productList = this.state.products.map(function(product){
      return (
        <Product name={product.name} key={product.id} /> 
      )
    })

    return (
      <View>
        {productList}
      </View>
    );
  }
}
