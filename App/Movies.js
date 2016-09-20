import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TextInput
} from 'react-native';
import List from './List';
import { fetchMovies } from './services/AsyncService';

export default class Movies extends Component {
  constructor(props){
    super(props);
    this.state = {items: []};
    this.loadMovies();
  }

  loadMovies(){
    fetchMovies().then(function(movies){
      this.setState({items: movies, movies: movies});
    }.bind(this));
  }

  filterMovies(search){
    const reg = new RegExp(search,'i');
    const movies = [];
    this.state.movies.forEach((item)=>{
      if(reg.test(item.title)){
        movies.push(Object.assign({},item));
      }
    });
    this.setState(Object.assign({},this.state,{items: movies}));
  }

  render() {
    return (
      <ScrollView>
        <Text style={styles.mainTitle}>Movies</Text>
        <TextInput onChangeText={this.filterMovies.bind(this)} style={styles.search} placeholder={'Search'} />
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
    marginBottom: 5
  },
  search: {
    margin: 10,
    marginBottom: 15
  }
});
