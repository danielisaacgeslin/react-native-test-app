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
      <ScrollView>
        <Text style={styles.mainTitle}>{this.props.movie.title}</Text>
        <TouchableHighlight onPress={()=>this.props.navigator.pop()}><Text>Back</Text></TouchableHighlight>
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
