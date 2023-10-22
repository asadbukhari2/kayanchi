import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { Button, Header } from '../components';
import { fonts, useTheme } from '../utils/theme';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { heightToDp, widthToDp } from '../utils/Dimensions';
const google = require('../assets/google.png');
const facebook = require('../assets/facebook.png');
const theme = useTheme();
const SignIn = () => {
  const [formData, setFormData] = useState({ phone: '', password: '' });
  const navigation = useNavigation();
  const submitForm = () => {
    console.log(formData);
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
        value={formData.phone}
        onChangeText={e => setFormData({ ...formData, phone: e })}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={formData.password}
        secureTextEntry
        onChangeText={e => setFormData({ ...formData, password: e })}
      />
      <Button title={'Continue'} onPress={submitForm} btnStyle={{ marginVertical: 6 }} />
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
  },
  input: {
    backgroundColor: 'rgba(132, 102, 140, 0.15)',
    marginVertical: 6,
    borderRadius: 7,
    paddingHorizontal: 10,
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
  },
  forgot: {
    textAlign: 'center',
    padding: 16,
    fontSize: 14,
    color: '#1583D8',
  },
});
export default SignIn;
