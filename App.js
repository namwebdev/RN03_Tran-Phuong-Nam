import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import RootNavigation, {navigationRef} from './src/navigation';
import {store} from './src/redux';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <RootNavigation />
        </NavigationContainer>
      </Provider>
    );
  }
}
