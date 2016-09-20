import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';
import List from './List';
import { fetchMovies } from './services/AsyncService';

export default class Movies extends Component {
  constructor(props){
    super(props);
    this.state = {items: []};
  }

  loadMovies(){
    fetchMovies().then(function(movies){
      this.setState({items: movies});
    }.bind(this));
  }

  render() {
    this.loadMovies();
    return (
      <ScrollView>
        <Text style={styles.mainTitle}>Movies</Text>
        <List items={this.state.items} navigator={this.props.navigator}></List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 27,
    textAlign: 'center',
    color: 'blue',
    marginBottom: 20
  }
});
