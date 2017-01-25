/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  TouchableHighlight,
  Toast,
  ToolbarAndroid,
  TextInput,
  ToastAndroid,
  AwesomeButton,
  View
} from 'react-native';

export default class InventoryApp extends Component {

    static title = '<ToolbarAndroid>';
    static description = 'Examples of using the Android toolbar.';

  state = {
   actionText: 'Example app with toolbar component',
   toolbarSwitch: false,
   colorProps: {
     titleColor: '#3b5998',
     subtitleColor: '#6a7180',
   },
 };

  onTextViewPress()
  {
    console.log("You tapped the button!");
    ToastAndroid.show('This is a toast with short duration', ToastAndroid.SHORT);

  }
  render() {
    return (
    <View style={styles.container}>
        <ToolbarAndroid style={styles.toolbars}>
        <Text style={styles.welcome}>
            Login
        </Text>
        </ToolbarAndroid>

        <View style={styles.buttoncontainer}>
        <TextInput

                  placeholder="User name"
                  onChangeText={(text) => this.setState({text})}
                />

                <TextInput
                        type
                          placeholder="Password"
                          onChangeText={(text) => this.setState({text})}
                        />

        </View>

<View style={styles.buttoncontainer}>
 <Button

   style={styles.buttonStyle}  color="#00838F" title="Login"  onPress={this.onTextViewPress}/>
   <View style={styles.diveiderHeight}>
   </View>
  <Button
  style = {styles.buttonStyle}
      title="Sign Up"
      onPress={this.onTextViewPress}
      theme = 'dark'
			textColor  = "red"
       color="#00838F"

 />

</View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',

  },
  buttoncontainer: {
    flex: 1,
    flexDirection:'column',
    margin: 10,
  alignItems: 'stretch',
  },
  buttonStyle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom:20,



  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'#FFFFFF'
  },
  diveiderHeight:
  {
    height:10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  toolbars: {
    backgroundColor: '#00838F',

  }
});

AppRegistry.registerComponent('InventoryApp', () => InventoryApp);
