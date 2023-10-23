import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Button } from '../../components';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import { useTheme, fonts } from '../../utils/theme';
import { useNavigation } from '@react-navigation/native';

const theme = useTheme();

const ArtistOnBoardingWelcome = props => {
  const navigation = useNavigation();

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
          navigation.navigate('ArtistHome');
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: heightToDp(8),
  },
  skipView: {
    position: 'absolute',
    bottom: heightToDp(23),
    alignSelf: 'center',
  },
  btn: {
    position: 'absolute',
    bottom: heightToDp(5.5),
  },
  img: {
    resizeMode: 'cover',
    height: heightToDp(79.95),
    width: widthToDp(67.9),
    alignSelf: 'center',
    marginTop: heightToDp(6.7),
  },
  skip: {
    fontSize: 14,
    fontFamily: fonts.robo_reg,
    lineHeight: 16.41,
    color: theme.linkTxt,
  },
  txt: {
    fontSize: 16,
    marginHorizontal: 24,
    fontFamily: fonts.robo_reg,
    color: theme.darkBlack,
    marginTop: 8,
    marginRight: widthToDp(29),

    lineHeight: 18.75,
  },
  title: {
    fontSize: 24,
    marginHorizontal: 24,
    fontFamily: fonts.hk_bold,
    color: theme.lightBlack,
    marginTop: 23,
    lineHeight: 28.13,
  },
});
