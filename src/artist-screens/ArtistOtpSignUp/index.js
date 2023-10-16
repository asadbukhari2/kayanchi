import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Header, TextInput} from '../../components';
import {heightToDp, width} from '../../utils/Dimensions';
import {fonts, useTheme} from '../../utils/theme';
import api from '../../utils/APIservice';
import {useDispatch, useSelector} from 'react-redux';
import {saveUserData} from '../../redux/actions';
import {showMessage} from 'react-native-flash-message';

const theme = useTheme();

const ArtistOtpSignUp = props => {
  const {navigation} = props;
  // const {number} = props.route.params;

  // console.log(number, 'PHONE_NUMBER');

  const [otp, setOtp] = useState(null);
  const dispatch = useDispatch();

  const phoneSignup = async () => {
    navigation.navigate('ArtistPasswordSignUp');
    // try {
      // const res = await api.post('/api/users/verifyotp', {
      //   number: phone_number,
      //   otp: verification_code,
      // });

      // if (res.status == 200) {
        // dispatch(saveUserData(res.data));
        // showMessage({
        //   message: 'Logged in successfully!',
        //   type: 'success',
        // });
        // navigation.navigate('ArtistPasswordSignUp', {phone_number});
      // } else {
      //   showMessage({
      //     message: res.data,
      //     type: 'danger',
      //   });
      // }
    // } catch (error) {
    //   showMessage({
    //     message: error?.message,
    //     type: 'success',
    //   });
    // }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header backBtn title={'Sign up'} />
      <TextInput
        stepCount={1}
        mainLabel={'Verify Your Number'}
        subLabel={'Enter the code you have recieved'}
        input={text => setOtp(text)}
        placeholder='1246'
        keyboardType={'phone-pad'}
      />
      <View style={styles.bottomTxtView}>
        <Text style={styles.bottomTxt}>
          We have sent you an OTP on your device.
        </Text>
        <Text style={[styles.bottomTxt,{position:"absolute", right:0, top: -50}]}>
          <Text style={{color: theme.linkTxt }}> Resend</Text>
          
        </Text>
      </View>
      <Button title={'Continue'} btnStyle={styles.btn} onPress={phoneSignup} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    // paddingTop: heightToDp(8),

  },
  bottomTxt: {
    fontFamily: fonts.robo_reg,
    fontSize: 14,
    lineHeight: 22,
    color: theme.darkBlack,
  },
  bottomTxtView: {
    width: width * 0.868,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: heightToDp(7.8),
    marginTop: heightToDp(4.5),
  },
  btn: {
    position: 'absolute',
    bottom: heightToDp(5.5),
  },
});

export default ArtistOtpSignUp;
