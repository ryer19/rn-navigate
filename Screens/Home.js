import React, {Component} from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';
import { createStackNavigator } from 'react-navigation';


class HomeScreen extends Component {
  state = { 
		names: []
  	}; 
  componentDidMount(){
    this.fetchUsers();
  }

  fetchUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((response) => {
          this.setState({ names: response})
            // names.splice(...response)
            // names
            // console.log(names)
          }
        )
        // .then(x => console.log(`names should be here: ${JSON.stringify(names)}`))
        .catch(err => console.log(err))
  }

    render () {
      // const nameList = this.state.names.map((name) => <Text>{name}</Text>)
      const nameList = this.state.names;
      console.log(this.props.navigation.state)
      return (
      <View style={styles.containerStyle}>
        <Text style={styles.textStyle}>Home Screen</Text>
        <FlatList data={nameList} renderItem={({item}) => <Text> {item.name}</Text>}/>
        
        <Button
            title="Go to About"
            onPress={() => this.props.navigation.navigate('About', {
              aParam: 'Bob',
              bParam: 'Shiloh',
              cParam: 'Bowie',
              
              
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