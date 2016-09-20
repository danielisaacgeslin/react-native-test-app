import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

export default class Tile extends Component {
  constructor(props){
    super(props);
  }

  goToMovie(){
    this.props.navigator.push({id: 'details', movie: this.props.movie});
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>{this.props.movie.title}</Text>
        <Text style={styles.description}>{this.props.movie.description}</Text>
        <TouchableHighlight onPress={this.goToMovie.bind(this)}>
          <Text>Details</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    textAlign: 'center',
    color: 'red',
  },
  description: {
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 35,
  }
});
