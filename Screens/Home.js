import React, {Component} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class HomeScreen extends Component {
    render () {
      console.log(this.props.navigation.state)
      return (
      <View style={styles.containerStyle}>
        <Text style={styles.textStyle}>Home Screen</Text>
        <Button
            title="Go to About"
            onPress={() => this.props.navigation.navigate('About', {
              otherParam: 'Bob',
              bParam: 'bob',
              adafd: 'bb',
              
              
            })
            }
          />
      </View>
      )
    }
  }

  const styles = StyleSheet.create({
    containerStyle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    textStyle: {
      fontSize: 60
    }
  })
  export default HomeScreen;