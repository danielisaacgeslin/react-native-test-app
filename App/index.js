import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator
} from 'react-native';
import Movies from './Movies';
import Details from './Details';

export default class App extends Component {
  constructor(props){
    super(props);
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'movies':
        return (<Movies navigator={navigator} />);
      case 'details':
        return (<Details navigator={navigator} movie={route.movie} />);
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 'movies'}}
        renderScene={this.navigatorRenderScene}/>
    );
  }
}
