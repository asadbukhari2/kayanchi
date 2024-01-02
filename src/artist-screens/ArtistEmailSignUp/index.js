import React, { useState } from 'react';

import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Header, TextInput } from '../../components';
import { useTheme } from '../../utils/theme';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { saveUserData } from '../../redux/actions';
import { showMessage } from 'react-native-flash-message';
import { isEmailValid } from '../../utils/helper';
import makeStyle from './artistEmailSignup.styles';

const EmailSignUp = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const styles = makeStyle(theme);

  const [email, setEmail] = useState(null);
  const [code, setCode] = useState(null);

  const dispatch = useDispatch();

  const emailSignup = async () => {
    if (!isEmailValid(email)) {
      showMessage({ message: 'Please type Correct Email', type: 'warning' });
    } else {
      navigation.navigate('ArtistPasswordSignUp');
      dispatch(saveUserData({ email, referral_code: code }));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header backBtn title={'Sign up'} />
      <TextInput
        stepCount={1}
        mainLabel={"What's your email?"}
        subLabel={"We'll check if you already have an account."}
        input={text => setEmail(text)}
        keyboardType={'email-address'}
        placeholder={'Your email address'}
      />
      <TextInput
        mainLabel={'Were you invited?'}
        subLabel={'Enter your referal code at 10% off'}
        input={text => setCode(text)}
        placeholder="BIL212"
      />
      <View style={styles.bottomTxtView}>
        <Text style={styles.bottomTxt}>
          By continuing, you agree to accept our
          <Text style={[styles.bottomTxt, { color: theme.linkTxt }]}>Privacy Policy & Terms of Service.</Text>
        </Text>
      </View>
      <Button title={'Continue'} btnStyle={styles.btn} onPress={emailSignup} />
    </SafeAreaView>
  );
};

export default EmailSignUp;
