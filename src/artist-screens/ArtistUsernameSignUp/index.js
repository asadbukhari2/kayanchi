import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Header, Loader, TextInput } from '../../components';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';
import api from '../../utils/APIservice';
import { showMessage } from 'react-native-flash-message';
import { saveUserData } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-native-date-picker';
import { useNavigation } from '@react-navigation/native';
import makeStyle from './artistUsernameSignUp.styles';

const theme = useTheme();
const Gender = [
  {
    name: 'Female',
  },
  {
    name: 'Male',
  },
];
const ArtistUsernameSignUp = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const styles = makeStyle(theme)
  const [name, setName] = useState(null);
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState(new Date());
  const currentYear = new Date().getFullYear();
  const dobYear = dob.getFullYear();
  const age = currentYear - dobYear;

  const updateName = async () => {
    try {
      const res = await api.put('/api/users/profile', {
        name,
      });
      setLoading(true);
      if (res.status == 200) {
        dispatch(saveUserData(res.data));
        navigation.navigate('GenderSignUp');
      } else {
        showMessage({
          message: res.data,
          type: 'danger',
        });
      }
    } catch (error) {
      showMessage({
        message: error?.message,
        type: 'success',
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header backBtn title={'Sign up'} />
      <ScrollView>
        <TextInput
          stepCount={2}
          mainLabel={'Your full name?'}
          subLabel={'Let’s get to know each other!'}
          input={text => setName(text)}
          placeholder={'Black Scissors'}
        />
        <TextInput
          mainLabel={'Create a password'}
          subLabel={'Must be at least 8 characters long.'}
          secured
          input={text => setPassword(text)}
        />
        <TextInput
          mainLabel={'What’s your age and gender?'}
          subLabel={'Let’s find the best artist for you!'}
          removeInput
        />
        <View
          style={{
            alignItems: 'center',
          }}>
          <DatePicker
            date={dob ? dob : new Date()}
            mode="date"
            maximumDate={new Date()}
            onDateChange={date => {
              setDob(date);
            }}
          />
        </View>
        <View style={styles.genView}>
          {Gender.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => setGender(item.name)}
                activeOpacity={0.7}
                style={[
                  styles.genBtn,
                  {
                    backgroundColor: gender === item.name ? theme.brown : theme.genderGrey,
                  },
                ]}>
                <Text style={styles.genTxt}>{item.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Button
          title={'Create account'}
          btnStyle={styles.btn}
          onPress={() => navigation.navigate('ArtistOnBoardingWelcome')}
        />
      </ScrollView>

      {loading && <Loader />}
    </SafeAreaView>
  );
};



export default ArtistUsernameSignUp;
