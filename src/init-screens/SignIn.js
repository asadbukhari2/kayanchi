import { Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { Button, Header } from '../components';
import { fonts, useTheme } from '../utils/theme';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { heightToDp, widthToDp } from '../utils/Dimensions';
import { EMAIL_LOGIN } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

import { showMessage } from 'react-native-flash-message';

const google = require('../assets/google.png');
const facebook = require('../assets/facebook.png');

const theme = useTheme();

const SignIn = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isLoading = useSelector(state => state.auth.isLoading);

  const [formData, setFormData] = useState({ phone: '', password: '' });

  const submitForm = () => {
    if (formData.phone.includes('@')) {
      dispatch(EMAIL_LOGIN({ email: formData.phone, password: formData.password }));
    } else if (formData.phone !== '') {
      showMessage({
        message: 'API for phone login is not available',
        type: 'warning',
      });
    } else {
      showMessage({
        message: 'Please add values',
        type: 'warning',
      });
    }
  };

  return (
    <SafeAreaView style={styles.mainPage}>
      <Header backBtn title="Sign In" />
      <Image source={require('../assets/loginLogo.png')} resizeMode="contain" style={styles.mainLogo} />
      <Text style={styles.heading}>Welcome to Kaynchi</Text>
      <Text style={styles.det}>Please enter your details.</Text>
      <TextInput
        style={styles.input}
        placeholder="Email or Mobile"
        value={formData.phone.toLowerCase()}
        onChangeText={e => setFormData({ ...formData, phone: e })}
        placeholderTextColor={'#8D8A94'}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={formData.password}
        secureTextEntry
        placeholderTextColor={'#8D8A94'}
        onChangeText={e => setFormData({ ...formData, password: e })}
      />
      <Button
        title={isLoading ? 'Loading...' : 'Continue'}
        onPress={submitForm}
        btnStyle={{ marginVertical: 6 }}
        disable={isLoading}
      />
      <Text style={styles.social}>Or via social networks</Text>
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
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainPage: {
    flex: 1,
    padding: 12,
    backgroundColor: '#fff',
  },
  mainLogo: {
    margin: 12,
    width: 78,
    height: 78,
  },
  heading: {
    color: '#0F2851',
    fontSize: 36,
    fontFamily: fonts.hk_bold,
  },
  det: {
    padding: 4,
    marginBottom: 24,
    color: theme.darkModeText,
  },
  input: {
    backgroundColor: '#EBE8EC',
    marginVertical: 6,
    borderRadius: 7,
    paddingHorizontal: 10,
    color: theme.dark,
  },
  blackText: {
    color: theme.darkBlack,
  },
  whiteBtn: {
    backgroundColor: theme.background,
    borderWidth: 1,
    borderColor: theme.primary,
  },
  iconStyles: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: widthToDp(5),
  },
  social: {
    marginTop: 12,
    textAlign: 'center',
    color: theme.dark,
  },
  forgot: {
    textAlign: 'center',
    padding: 16,
    fontSize: 14,
    color: '#1583D8',
  },
});

export default SignIn;
