import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { images, useTheme } from '../utils/theme';
import { ArtistHomeStack, ArtistProfileStack, ArtistOrderStack } from './Navigation';
import {
  Home,
  LocateKaynchi,
  Profile,
  ArtistHome,
  ArtistProfile,
  ArtistCreateGig,
  ArtistBasicGig,
  ArtistBasicGig2,
  ArtistGigMood,
  ArtistYourOrders,
  ArtistRankUp,
  ArtistGig,
  ArtistGigInfo,
  ArtistGigDescription,
  ArtistPublishGig,
  ArtistVerification,
  ArtistPromoGig1,
  ArtistPromoGig2,
  ArtistPromoMood,
  ArtistPromoMainPage,
  ArtistOrderSetting,
  ArtistLocateKaynchi,
} from '../artist-screens';
import { heightToDp, widthToDp } from '../utils/Dimensions';

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
        name="ArtistHome"
        component={ArtistHome}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <Image
              source={images.tabHomeIcon}
              style={{
                width: widthToDp(5.5),
                height: heightToDp(6.7),
                resizeMode: 'contain',
                tintColor: focused ? theme.primary : 'black',
              }}
            />
          ),
          headerShown: false,
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Home1"
        component={ArtistOrderStack}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <Image
              source={images.tabOrderIcon}
              style={{
                width: widthToDp(5.5),
                height: heightToDp(6.7),
                resizeMode: 'contain',
                tintColor: focused ? theme.primary : 'black',
              }}
            />
          ),
          headerShown: false,
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="ArtistProfile"
        component={ArtistLocateKaynchi}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <Image
              source={images.tabKaynchiIcon}
              style={{
                width: widthToDp(7.5),
                height: heightToDp(6.7),
                resizeMode: 'contain',
                tintColor: focused ? theme.primary : 'black',
              }}
            />
          ),
          headerShown: false,
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="ArtistProfile2"
        component={ArtistProfile}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <Image
              source={images.tabProfileIcon}
              style={{
                width: widthToDp(5.5),
                height: heightToDp(6.7),
                tintColor: focused ? theme.primary : 'black',
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
      name="ArtistHomeStack"
      component={ArtistHomeStack}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistRankUp"
      component={ArtistRankUp}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistGig"
      component={ArtistGig}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistGigInfo"
      component={ArtistGigInfo}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistGigDescription"
      component={ArtistGigDescription}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistGigMood"
      component={ArtistGigMood}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistPublishGig"
      component={ArtistPublishGig}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistVerification"
      component={ArtistVerification}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistProfileStack"
      component={ArtistProfileStack}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistPromoGig1"
      component={ArtistPromoGig1}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistPromoGig2"
      component={ArtistPromoGig2}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistYourOrders"
      component={ArtistYourOrders}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistOrderSetting"
      component={ArtistOrderSetting}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistPromoMood"
      component={ArtistPromoMood}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistPromoMainPage"
      component={ArtistPromoMainPage}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArtistOrderStack"
      component={ArtistOrderStack}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const ArtistMainStack = () => (
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

export default ArtistMainStack;

// export default function RootStackScreen() {
//   return (
//     <RootStack.Navigator>
//       <RootStack.Screen
//         name="ArtistMain"
//         component={TabStack}
//         options={{headerShown: false}}
//       />
//     </RootStack.Navigator>
//   );
// }
