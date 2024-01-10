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
import { useNavigation } from '@react-navigation/native';
import makeStyle from './artistNumberSignUp.style';

const theme = useTheme();

const ArtistNumberSignUp = () => {
  const navigation = useNavigation();
  const [number, setNumber] = useState(null);
  const [code, setCode] = useState(null);
  const dispatch = useDispatch();
const styles = makeStyle(theme)
  const phoneSignup = async () => {
    try {
      // const res = await api.post('/api/users/sendotp', {phone_number: number});
      // console.log('data', res.data);
      // showMessage({message: res.data});
      navigation.navigate('ArtistPasswordSignUp', { number });
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
        color="black"
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



export default ArtistNumberSignUp;
