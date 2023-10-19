import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Header, TextInput } from '../../components';
import { heightToDp, width } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';
import { useDispatch, useSelector } from 'react-redux';

import api from '../../utils/APIservice';
import { saveUserData, signup } from '../../redux/actions';
import { showMessage } from 'react-native-flash-message';

const theme = useTheme();

const ArtistNumberSignUp = props => {
  const { navigation } = props;
  const [number, setNumber] = useState(null);
  const [code, setCode] = useState(null);
  const dispatch = useDispatch();

  const phoneSignup = async () => {
    try {
      // const res = await api.post('/api/users/sendotp', {phone_number: number});
      // console.log('data', res.data);
      // showMessage({message: res.data});
      props.navigation.navigate('ArtistOtpSignUp', { number });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header backBtn title={'Sign up'} />
      <TextInput
        stepCount={1}
        mainLabel={"What's your mobile number"}
        subLabel={'Create an account or login'}
        input={text => setNumber(text)}
        placeholder="0332 0310780"
        keyboardType={'phone-pad'}
      />
      <TextInput
        mainLabel={'Were you invited?'}
        subLabel={'Enter your referal code at 10% off'}
        input={text => setCode(text)}
        placeholder="BIL212"
        // keyboardType={'phone-pad'}
      />
      <View style={styles.bottomTxtView}>
        <Text style={styles.bottomTxt}>
          By continuing, you agree to accept our {/* <TouchableOpacity> */}
          <Text style={[styles.bottomTxt, { color: theme.linkTxt }]}>Privacy Policy & Terms of Service.</Text>
        </Text>
        {/* </TouchableOpacity> */}
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
    position: 'absolute',
    bottom: heightToDp(14),
  },
  btn: {
    position: 'absolute',
    bottom: heightToDp(5.5),
  },
});

export default ArtistNumberSignUp;
