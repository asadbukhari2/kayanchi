import React, {useState} from 'react';
import api from '../../utils/APIservice';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Header, Loader, TextInput} from '../../components';
import {heightToDp, width} from '../../utils/Dimensions';
import {fonts, useTheme} from '../../utils/theme';
import {useDispatch, useSelector} from 'react-redux';
import {showMessage} from 'react-native-flash-message';

const theme = useTheme();

const ConsumerEmailSignUp = props => {
  const {navigation} = props;
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState(null);

  const dispatch = useDispatch();

  const emailSignup = async () => {
    try {
      navigation.navigate('ConsumerPasswordSignUp', {email});
      const res = await api.post('/api/users', {
        email: email,
      });
      setLoading(true);
      console.log(res.data);
      if (res.status == 200) {
        // dispatch(saveUserData(res.data));
        // dispatch(saveToken(res.data));
        // showMessage({
        //   message: 'Logged in successfully!',
        //   type: 'success',
        // });
        setLoading(false);
      } else {
        setLoading(false);
        showMessage({
          message: res.data,
          type: 'danger',
        });
      }
    } catch (error) {
      showMessage({
        message: error?.message,
        type: 'warning',
      });
      console.log(error);
    }
    // console.log(email);
    // try {
    //   const res = await api.post('/api/users/sendotp', {phone_number: number});
    //   console.log('data', res.data);
    //   showMessage({message: res.data});

    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header backBtn  title={'Sign up'} />
      <TextInput
        stepCount={1}
        mainLabel={"What's your email?"}
        subLabel={"We'll check if you already have an account."}
        input={text => setEmail(text)}
        keyboardType={'email-address'}
        placeholder={"Your email address"}
      />
      <TextInput
        mainLabel={"Were you invited?"}
        subLabel={'Enter your referal code at 10% off'}
        input={text => setCode(text)}
        placeholder='BIL212'
        // keyboardType={'phone-pad'}
      />
      <View style={styles.bottomTxtView}>
        <Text style={styles.bottomTxt}>
          By continuing, you agree to accept our {/* <TouchableOpacity> */}
          <Text style={[styles.bottomTxt, {color: theme.linkTxt}]}>
            Privacy Policy & Terms of Service.
          </Text>
        </Text>
        {/* </TouchableOpacity> */}
      </View>
      <Button title={'Continue'} btnStyle={styles.btn} onPress={emailSignup} />
      {loading && <Loader />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
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
    position:"absolute",
    bottom: heightToDp(14)
  },
  btn: {
    position: 'absolute',
    bottom: heightToDp(5.5),
  },
});

export default ConsumerEmailSignUp;
