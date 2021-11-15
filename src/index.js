import React, {Component, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Header from './components/Header';
import {
  nikePegasus36,
  nikeMetcon5Black,
  nikeZoomKobe1Proto,
} from './assets/images/index';
import {Svg, Polygon} from 'react-native-svg';
import axios from 'axios';

export default class Home extends Component {
  categories = [
    {image: nikePegasus36, color: '#BF012C', name: 'Fashion'},
    {image: nikeMetcon5Black, color: '#D39C67', name: 'Sport'},
    {image: nikeZoomKobe1Proto, color: '#7052A0', name: 'Active'},
  ];
  state = {
    products: [],
  };

  componentDidMount() {
    axios({
      url: 'http://svcy3.myclass.vn/api/Product',
      method: 'GET',
    })
      .then(({data}) => {
        const products = data.content;
        this.setState({products});
      })
      .catch(error => console.log(error));
  }

  renderCategory = item => (
    <TouchableOpacity
      onPress={() => console.log('clicked')}
      style={{
        width: 150,
        height: 120,
        marginBottom: 20,
        borderRadius: 15,
        marginRight: 30,
      }}>
      <Text style={{fontSize: 14, color: '#BEC1D2', fontWeight: 'bold'}}>{item.name}</Text>

      <View
        style={{
          flex: 1,
          borderRadius: 10,
          justifyContent: 'flex-end',
          marginTop: 8,
          backgroundColor: item.color,
        }}
      />

      <View
        style={{
          position: 'absolute',
          top: 18,
          right: 0,
          width: '95%',
          height: '100%',
        }}>
        <Svg height="100%" width="100%">
          <Polygon points="10,0 200,0 160,60" fill="white" />
        </Svg>
      </View>
      <Image
        source={item.image}
        resizeMode="contain"
        style={{
          position: 'absolute',
          top: 20,
          left: -5,
          width: '110%',
          height: 80,
          transform: [{rotate: '-15deg'}],
        }}
      />
    </TouchableOpacity>
  );

  renderListProduct = ({image, name, price}) => (
    <TouchableOpacity
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: 100,
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <Image
          source={{uri: image}}
          resizeMode="contain"
          style={{
            width: 130,
            height: 90,
          }}
        />
      </View>
      <View style={{flex: 1.1, height: '100%', justifyContent: 'center'}}>
        <Text style={{color: '#BEC1D2', fontSize: 16}}>{name}</Text>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>${price}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 0.75}}>
          <Header />
        </View>

        <View
          style={{
            flex: 4,
            paddingHorizontal: 20,
            paddingTop: 10,
          }}>
          <Text style={{flex: 1, fontSize: 24, fontWeight: 'bold'}}>
            Category
          </Text>
          <View style={{flex: 4}}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={this.categories}
              keyExtractor={(item, index) => index + item.color}
              renderItem={({item}) => this.renderCategory(item)}
            />
          </View>
        </View>

        <View
          style={{
            flex: 8,
            backgroundColor: '#F2F2F2',
            marginVertical: 2,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
          <FlatList
            horizontal={false}
            style={{marginTop: 20}}
            data={this.state.products}
            keyExtractor={(item, index) => index + item.image}
            renderItem={({item}) => this.renderListProduct(item)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {},
});
