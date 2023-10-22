import * as React from 'react';
import { useEffect } from 'react';
import { View, Text } from 'react-native';

import { useSelector } from 'react-redux';

function MySplashScreen({ navigation }) {
  const auth = useSelector(state => state.auth);

  const isArtist = auth?.userDetails?.isArtist === true;
  const isConsumer = auth?.userDetails?.isConsumer === true;

  useEffect(() => {
    const init = async () => {
      // const value = await AsyncStorage.getItem('hasCompletedWelcome');
      // console.log('state?.userDetailsstate?.userDetails', state?.accessToken);
      if (auth?.token && isArtist) {
        navigation.navigate('ArtistProfileStack', { screen: 'MyTabs' });
      } else if (auth?.token && isConsumer) {
        navigation.navigate('ConsumerMain', { screen: 'MyTabs' });
      } else if (!auth?.token && isArtist) {
        navigation.navigate('ArtistAuthStack');
      } else if (!auth?.token && isConsumer) {
        navigation.navigate('AuthStack');
      } else {
        navigation.navigate('InitScreen');
      }
    };

    init().finally(async () => {
      setTimeout(async function () {}, 1000);
      console.log('Bootsplash has been hidden successfully');
    });
  }, []);

  return (
    <View>
      <Text>Kayanchi</Text>
    </View>
  );
}

export default MySplashScreen;
