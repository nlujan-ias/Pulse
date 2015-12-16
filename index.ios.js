/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Pulse = require('./Pulse');
var {View, Text, StyleSheet, TouchableOpacity, AppRegistry, TouchableHighlight} = React;

var Index = React.createClass({
  render: function() {
    return (
      <React.NavigatorIOS
        initialRoute={{
          title: 'Hello',
          component: Pulse,
        }}/>
    );
  }
});

AppRegistry.registerComponent('Pulse', () => Index);
