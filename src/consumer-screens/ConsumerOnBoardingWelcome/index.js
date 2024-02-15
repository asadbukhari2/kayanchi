import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Button } from '../../components';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import { useTheme, fonts } from '../../utils/theme';
import ConsumerOnBoarding from '../../assets/consumer_onboarding.png';
const theme = useTheme();

const ConsumerOnBoardingWelcome = props => {
  const { navigation } = props;

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Perfecto!'} />

      <Image style={styles.img} resizeMode="contain" source={ConsumerOnBoarding} />
      <Text style={styles.title}>{"Let's get you pampered"}</Text>
      <Text style={styles.txt}>{'But first, you need to know how we do things here at Kaynchi, don’t you think?'}</Text>
      <TouchableOpacity activeOpacity={0.7} style={styles.skipView}>
        <Text style={styles.skip}>I want to skip</Text>
      </TouchableOpacity>
      <Button
        title={'Show me'}
        btnStyle={styles.btn}
        onPress={() => {
          navigation.navigate('ConsumerOnBoarding');
        }}
      />
    </SafeAreaView>
  );
};

export default ConsumerOnBoardingWelcome;

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
    marginRight: widthToDp(9),

    lineHeight: 18.75,
  },
  title: {
    fontSize: 24,
    marginHorizontal: 24,
    fontFamily: fonts.hk_bold,
    color: '#0F2851',
    marginTop: 23,
    lineHeight: 28.13,
  },
});
