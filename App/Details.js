import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableHighlight
} from 'react-native';

export default class Details extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.view}>
        <Text style={styles.mainTitle}>Movies</Text>

        <Text style={styles.title}>{this.props.movie.title}</Text>

        <Text style={styles.subtitle}>Rating</Text>
        <Text style={styles.text}>{this.props.movie.rating}</Text>

        <Text style={styles.subtitle}>Director</Text>
        <Text style={styles.text}>{this.props.movie.director}</Text>

        <Text style={styles.subtitle}>Stars</Text>
        <Text style={styles.text}>{this.props.movie.stars}</Text>

        <Text style={styles.description}>{this.props.movie.description}</Text>
        <TouchableHighlight onPress={()=>this.props.navigator.pop()}>
          <Text style={styles.link}>Back</Text>
        </TouchableHighlight>
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
  },
  view: {
    margin: 15
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    color: 'red',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 15,
    marginBottom: 5
  },
  description: {
    fontSize: 17,
    marginTop: 10,
    textAlign: 'justify'
  },
  link: {
    fontSize: 20,
    textAlign: 'right',
    margin: 15,
    marginBottom: 20,
    color: 'brown'
  }
});
