import React from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';
import { useNavigation } from '@react-navigation/native';
import makeStyle from './artistWelcome.styles';

const facebook = require('../../assets/facebook.png');
const google = require('../../assets/google.png');
const email = require('../../assets/email.png');

const ArtistWelcome = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const styles = makeStyle(theme);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/Signup.png')} style={styles.img} resizeMode="contain" />
      <Text style={styles.heading}>
        Earn with <Text style={{ color: theme.primary }}>Kaynchi</Text>
      </Text>
      <Text style={styles.txt}>Join a community of 100+ artists and salons and make a name for yourself!</Text>
      <View style={styles.buttons}>
        <Button
          title={'Continue With Email'}
          btnStyle={[styles.whiteBtn, { marginTop: heightToDp(6.8) }]}
          titleStyle={styles.blackText}
          onPress={() => navigation.navigate('ArtistEmailSignUp')}
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
        <View style={styles.btnText}>
          <Button title="Continue with mobile number" onPress={() => navigation.navigate('ArtistNumberSignUp')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ArtistWelcome;
