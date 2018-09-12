import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import AboutScreen from './Screens/About.js';
import HomeScreen from './Screens/Home'

// class HomeScreen extends Component {
//   render () {
//     console.log(this.props.navigation.state)
//     return (
//     <View style={styles.containerStyle}>
//       <Text style={styles.textStyle}>Home Screen</Text>
//       <Button
//           title="Go to About"
//           onPress={() => this.props.navigation.navigate('About', {
//             otherParam: 'Bob',
//             bParam: 'bob',
//             adafd: 'bb',        
//           })
//           }
//         />
//     </View>
//     )
//   }
// }

// class AboutScreen extends Component {
//   render () {
//     const { navigation } = this.props;
//     // const { params } = this.props.navigation.state
//     // let coderName = params.otherParam
//     const coderName = navigation.getParam('otherParam', 'Billy Bob')
//     console.log(coderName)
//     return (
//     <View>
//       <Text>About </Text>
//       <Button title="Home" onPress={() => {this.props.navigation.goBack()}} />
//     </View>
//     )
//   }
// }
const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  }
  },
  { initialRouteName: 'Home'}
)

export default class App extends Component{
  render(){
    return (
      <RootStack />
    )
  }
}
// class HomeScreen extends Component {
//   render () {
//     return  (
//       <View style={styles.containerStyle}>
//        <Text style={styles.textStyle}> Home Screen</Text>

//        </View>
//     )
//   }
  
// }

// // Rootstack not TOA
// const RootStack = createStackNavigator ({
//   Home: ({
//     screen: HomeScreen
//   })
// })

// export default class App extends Component {
//   render(){
//     return <RootStack />;
//   }
// }

// const styles = StyleSheet.create({
//   containerStyle: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   textStyle: {
//     fontSize: 60
//   }
// })

// the code below is fine for simple navigation
// but to get more control over the component
// at the root of your app you code above
// class HomeScreen extends Component {
//   render () {
//     return  (
//       <View style={styles.containerStyle}>
//        <Text style={styles.textStyle}> Home Screen</Text>

//        </View>
//     )
//   }
  
// }
// export default createStackNavigator({
//   Home: {
//   screen: HomeScreen
//   }
// })


//native code with app creation:
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//       </View>
//     );
//   }
// }
