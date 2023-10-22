import React, { Component } from 'react';

import { InitScreen } from '../init-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../init-screens/SignIn';
import ArtistType from '../init-screens/ArtistType';
import StartUp from '../init-screens/StartUp';

const Stack = createNativeStackNavigator();

export default class InitStack extends Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="StartUp"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'vertical',
        }}>
        <Stack.Screen name="StartUp" component={StartUp} />
        <Stack.Screen name="InitScreen" component={InitScreen} />
        <Stack.Screen name="ArtistType" component={ArtistType} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    );
  }
}
