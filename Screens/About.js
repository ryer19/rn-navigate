import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class AboutScreen extends Component {
    render () {
      const { navigation } = this.props;
      // const { params } = this.props.navigation.state
      // let coderName = params.otherParam
      const aName = navigation.getParam('aParam', 'Billy Bob')
      const bName = navigation.getParam('bParam');
      const cName = navigation.getParam('cParam');
      return (
      <View>
        <Text>About </Text>
        <Text> {aName}</Text>
        <Text> {bName}</Text>
        <Text> {cName}</Text>
        <Button title="Home" onPress={() => {this.props.navigation.goBack()}} />
      </View>
      )
    }
  }

  export default AboutScreen;