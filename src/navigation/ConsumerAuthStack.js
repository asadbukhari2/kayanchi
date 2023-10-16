import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {
  ConsumerWelcome,
  ConsumerNumberSignUp,
  ConsumerOtpSignUp,
  ConsumerUsernameSignUp,
  ConsumerPasswordSignUp,
  ConsumerGenderSignUp,
  ConsumerInterests,
  ConsumerOnBoarding,
  ConsumerOnBoardingWelcome,
  ConsumerEmailSignUp,
  ConsumerGoogleSignIn,
  ConsumerKnownFor,
} from '../consumer-screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default class AuthStack extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'vertical',
        }}>
        <Stack.Screen name="ConsumerWelcome" component={ConsumerWelcome} />
        <Stack.Screen name="ConsumerKnownFor" component={ConsumerKnownFor} />
        <Stack.Screen
          name="ConsumerGoogleSignIn"
          component={ConsumerGoogleSignIn}
        />
        <Stack.Screen
          name="ConsumerNumberSignUp"
          component={ConsumerNumberSignUp}
        />
        <Stack.Screen
          name="ConsumerEmailSignUp"
          component={ConsumerEmailSignUp}
        />
        <Stack.Screen name="ConsumerOtpSignUp" component={ConsumerOtpSignUp} />
        <Stack.Screen
          name="ConsumerUsernameSignUp"
          component={ConsumerUsernameSignUp}
        />
        <Stack.Screen
          name="ConsumerPasswordSignUp"
          component={ConsumerPasswordSignUp}
        />
        <Stack.Screen
          name="ConsumerGenderSignUp"
          component={ConsumerGenderSignUp}
        />
        <Stack.Screen name="ConsumerInterests" component={ConsumerInterests} />
        <Stack.Screen
          name="ConsumerOnBoarding"
          component={ConsumerOnBoarding}
        />
        <Stack.Screen
          name="ConsumerOnBoardingWelcome"
          component={ConsumerOnBoardingWelcome}
        />
      </Stack.Navigator>
    );
  }
}
