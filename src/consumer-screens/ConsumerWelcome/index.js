import React from 'react';
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';
import { Ionicons } from 'react-native-vector-icons'; // Import the icon you want to use

const theme = useTheme();
const facebook = require('../../assets/facebook.png');
const google = require('../../assets/google.png');
const email = require('../../assets/email.png');
const ConsumerWelcome = props => {
  // console.log('props', props);
  const { navigation } = props;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <Image source={require('../../assets/Signup.png')} style={styles.img} resizeMode="contain" />
        <Text style={styles.heading}>
          Earn with <Text style={{ color: theme.primary }}>Kaynchi</Text>
        </Text>
        <Text style={styles.txt}>Join a community of 100+ artists and salons and make a name for yourself!</Text>
        <Button
          title={'Continue With Email'}
          btnStyle={[styles.whiteBtn, { marginTop: heightToDp(6.8) }]}
          titleStyle={styles.blackText}
          onPress={() => navigation.navigate('ConsumerEmailSignUp')}
          image={email}
          imageStyle={styles.iconStyles}
        />

        <Button
          title={'Continue with google'}
          btnStyle={[styles.whiteBtn, { marginTop: heightToDp(4.5) }]}
          titleStyle={styles.blackText}
          onPress={() => navigation.navigate('GoogleSignIn')}
          image={google}
          imageStyle={styles.iconStyles}
        />

        <Button
          title={'Continue with facebook'}
          btnStyle={[styles.whiteBtn, { marginTop: heightToDp(4.5) }]}
          titleStyle={styles.blackText}
          image={facebook}
          imageStyle={styles.iconStyles}
        />
        <View style={styles.seperatorContainer}>
          <View style={styles.seperator} />
          <Text
            style={{
              fontFamily: fonts.robo_reg,
              fontSize: 16,
              lineHeight: 18.75,
              color: theme.darkBlack,
              paddingHorizontal: widthToDp(2),
            }}>
            or
          </Text>
          <View style={styles.seperator} />
        </View>
        <Button title={'Continue with mobile number'} onPress={() => navigation.navigate('ConsumerNumberSignUp')} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    paddingTop: heightToDp(10),
  },
  img: {
    width: 299.02,
    height: 199,
    marginTop: 14,
    alignSelf: 'center',
    resizeMode: 'cover',
  },
  iconStyles: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: widthToDp(5),
  },
  heading: {
    width: width * 0.868,
    alignSelf: 'center',
    fontFamily: fonts.robo_med,
    fontSize: 28,
    lineHeight: 32.81,
    color: theme.darkBlack,
    marginTop: heightToDp(6.75),
  },
  txt: {
    width: width * 0.868,
    alignSelf: 'center',
    fontFamily: fonts.robo_reg,
    fontSize: 16,
    lineHeight: 18.75,
    color: theme.darkBlack,
    marginTop: heightToDp(2.2),
  },
  whiteBtn: {
    backgroundColor: theme.background,
    borderWidth: 1,
    borderColor: theme.primary,
  },
  blackText: {
    color: theme.darkBlack,
  },
  seperatorContainer: {
    width: width * 0.91,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: heightToDp(4.5),
  },
  seperator: {
    borderBottomColor: theme.orSeperator,
    borderBottomWidth: 1,
    flex: 1,
  },
});

export default ConsumerWelcome;
