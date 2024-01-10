import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Header, TextInput } from '../../components';
import { heightToDp, width } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';

import { useNavigation } from '@react-navigation/native';

import { showMessage } from 'react-native-flash-message';
import makeStyle from './artistOtpSignUp.style';

const theme = useTheme();

const ArtistOtpSignUp = () => {
  const navigation = useNavigation();
const styles = makeStyle(theme)
  const [otp, setOtp] = useState(null);

  const handleOTPVerification = async () => {
    showMessage({ message: 'Waiting For API', type: 'warning', duration: 100 });
    setTimeout(() => {
      navigation.navigate('ArtistPasswordSignUp');
    }, 500);
    // setOtp(null); // TODO uncomment when API DONE
  };

  const resendFunc = () => {
    showMessage({ message: 'API Required', type: 'warning' });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header backBtn title={'Sign up'} />
      <TextInput
        stepCount={1}
        mainLabel={'Verify Your Number'}
        subLabel={'Enter the code you have recieved'}
        input={text => setOtp(text)}
        placeholder="1246"
        keyboardType={'phone-pad'}
      />
      <View style={styles.bottomTxtView}>
        <Text style={styles.bottomTxt}>We have sent you an OTP on your device.</Text>
        <Text style={[styles.bottomTxt, { position: 'absolute', right: 0, top: -50 }]}>
          <Text style={{ color: theme.linkTxt }} onPress={resendFunc}>
            Resend
          </Text>
        </Text>
      </View>
      <Button
        title="Continue"
        btnStyle={styles.btn}
        onPress={handleOTPVerification}
        // disable={!otp} // TODO: uncomment it when integratd API
      />
    </SafeAreaView>
  );
};



export default ArtistOtpSignUp;
