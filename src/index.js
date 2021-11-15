import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Header from './components/Header';
import {
  nikePegasus36,
  nikeMetcon5Black,
  nikeZoomKobe1Proto,
} from './assets/images/index';
import axios from 'axios';
import Category from './components/Category';
import ListProduct from './components/ListProduct';

export default class Home extends Component {
  categories = [
    {image: nikePegasus36, color: '#BF012C', name: 'Fashion'},
    {image: nikeMetcon5Black, color: '#D39C67', name: 'Sport'},
    {image: nikeZoomKobe1Proto, color: '#7052A0', name: 'Active'},
  ];
  state = {
    products: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({loading: true});
    axios({
      url: 'http://svcy3.myclass.vn/api/Product',
      method: 'GET',
    })
      .then(({data}) => {
        const products = data.content;
        this.setState({products});
      })
      .finally(() => this.setState({loading: false}));
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.headerContainer}>
          <Header />
        </View>

        <View style={styles.categoryContainer}>
          <Category categories={this.categories} />
        </View>

        <View style={styles.productsContainer}>
          {this.state.loading && (
            <Text style={styles.loadingText}>Loading...</Text>
          )}
          <ListProduct products={this.state.products} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {flex: 0.75},
  categoryContainer: {flex: 4, paddingHorizontal: 20, paddingTop: 10},
  productsContainer: {
    flex: 8,
    backgroundColor: '#F2F2F2',
    marginVertical: 2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
