import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class AboutScreen extends Component {
    render () {
      const { navigation } = this.props;
      // const { params } = this.props.navigation.state
      // let coderName = params.otherParam
      const coderName = navigation.getParam('otherParam', 'Billy Bob')
      return (
      <View>
        <Text>About </Text>
        <Text> {coderName}</Text>
        <Button title="Home" onPress={() => {this.props.navigation.goBack()}} />
      </View>
      )
    }
  }

  export default AboutScreen;