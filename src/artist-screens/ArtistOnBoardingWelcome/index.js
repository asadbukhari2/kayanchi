import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Button } from '../../components';
import { useTheme } from '../../utils/theme';
import { useNavigation } from '@react-navigation/native';
import makeStyle from './artistOnBoardingWelcome.style';

const theme = useTheme();

const ArtistOnBoardingWelcome = () => {
  const navigation = useNavigation();
  const styles = makeStyle(theme);
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Perfecto!'} />
      <Image style={styles.img} resizeMode="contain" source={require('../../assets/introduction.png')} />
      <Text style={styles.title}>{'You made it. Yaaaay!!'}</Text>
      <Text style={styles.txt}>
        {"Let's get you started on how you can earn and become the top talent in the country"}
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.skipView}
        onPress={() => {
          navigation.navigate('ArtistCreateGig');
        }}>
        <Text style={styles.skip}>I want to skip</Text>
      </TouchableOpacity>
      <Button
        title={'Show me'}
        btnStyle={styles.btn}
        onPress={() => {
          navigation.navigate('ArtistOnBoarding');
        }}
      />
    </SafeAreaView>
  );
};

export default ArtistOnBoardingWelcome;
