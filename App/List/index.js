import React, { Component } from 'react';
import { StyleSheet, View, ListView, Text } from 'react-native';
import Tile from './Tile';

export default class List extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(this.props.items);

    return (
      <View>
        <ListView
          dataSource={dataSource}
          renderRow={(rowData)=>
              <Tile navigator={this.props.navigator} movie={rowData}></Tile>
          }
         />
      </View>
    );
  }
}
