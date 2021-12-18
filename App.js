import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import AppContainer from './src/components/AppContainer';
import RootNavigation from './src/navigation';
import {store} from './src/redux';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer>
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
        </AppContainer>
      </Provider>
    );
  }
}
