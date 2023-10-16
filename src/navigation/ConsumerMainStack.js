import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {images, useTheme} from '../utils/theme';
import {
  ConsumerHomeStack,
  ConsumerOrderStack,
  ConsumerProfileStack,
  ConsumerRankStack,
} from './Navigation';
import {
  ConsumerHome,
  ConsumerLocateKaynchi,
  ConsumerProfile,
  ConsumerRank,
  ConsumerGig,
  LocateKaynchi,
  ConsumerDisocver,
} from '../consumer-screens';
import {heightToDp, widthToDp} from '../utils/Dimensions';

const Stack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const theme = useTheme();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.background,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        },
      }}>
      <Tab.Screen
        name="ConsumerHome"
        component={ConsumerHome}
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <Image
              source={images.tabConsumerHomeIcon}
              style={{
                width: widthToDp(5.5),
                height: heightToDp(6.7),
                resizeMode: 'contain',
              }}
            />
          ),
          headerShown: false,
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="LocateKaynchi"
        component={LocateKaynchi}
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <Image
              source={images.tabKaynchiIcon}
              style={{
                width: widthToDp(11),
                height: heightToDp(7.7),
                resizeMode: 'cover',
              }}
            />
          ),
          headerShown: false,
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="ConsumerProfile"
        component={ConsumerProfile}
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <Image
              source={images.tabConsumerProfileIcon}
              style={{
                width: widthToDp(5.5),
                height: heightToDp(6.7),
                resizeMode: 'contain',
              }}
            />
          ),
          headerShown: false,
          tabBarLabel: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

const TabStack = () => (
  <Stack.Navigator initialRouteName="ProfileStack">
    <Stack.Screen
      name="MyTabs"
      component={MyTabs}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerHomeStack"
      component={ConsumerHomeStack}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerRank"
      component={ConsumerRank}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerDisocver"
      component={ConsumerDisocver}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerGig"
      component={ConsumerGig}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerProfileStack"
      component={ConsumerProfileStack}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ConsumerOrderStack"
      component={ConsumerOrderStack}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default function ConsumerMainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'vertical',
      }}
      initialRouteName="TabStack">
      <Stack.Screen name="TabStack" component={TabStack} />
    </Stack.Navigator>
  );
}

// export default function RootStackScreen() {
//   return (
//     <RootStack.Navigator>
//       <RootStack.Screen
//         name="ConsumerMain"
//         component={ConsumerMainStack}
//         options={{headerShown: false}}
//       />
//     </RootStack.Navigator>
//   );
// }
