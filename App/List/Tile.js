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
        <TouchableHighlight onPress={this.goToMovie.bind(this)}>
          <Text style={styles.title}>- {this.props.movie.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'left',
    color: 'red',
    margin: 15,
    marginTop: 0
  }
});
