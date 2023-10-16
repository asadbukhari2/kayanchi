import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {InitScreen} from '../init-screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default class InitStack extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'vertical',
        }}>
        <Stack.Screen name="InitScreen" component={InitScreen} />
      </Stack.Navigator>
    );
  }
}
