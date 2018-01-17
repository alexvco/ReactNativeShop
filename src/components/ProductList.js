import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Product from './Product';


export default class ProductList extends Component<{}> {

  state = {
    products: []
  }

  // This method will be called as soon as the render method is executed, 
  // basically it renders the component first and then you fetch the data from API
  componentDidMount() {
    return fetch('http://demo1552422.mockable.io/mobile')
    .then((response) =>
      response.json()
    )
    .then((responseJson) => 
    {
      this.setState({products: responseJson})
    })
  }

  render() {
    var productList = this.state.products.map(function(product){
      return (
        <Product name={product.name} key={product.id} /> 
      )
    })

    return (
      <ScrollView>
        {productList}
      </ScrollView>
    );
  }
}
