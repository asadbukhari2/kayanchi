import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Header, TextInput } from '../../components';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { useTheme } from '../../utils/theme';

import { useDispatch } from 'react-redux';
import { saveUserData } from '../../redux/actions';

import DatePicker from 'react-native-date-picker';
import ReactNativeModal from 'react-native-modal';
import moment from 'moment';
import { showMessage } from 'react-native-flash-message';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { getCategory } from '../../redux/actions/commonActions';
import { isPasswordStrong } from '../../utils/helper';

const theme = useTheme();

const Gender = [
  {
    name: 'Female',
  },
  {
    name: 'Male',
  },
  {
    name: 'Non Binary',
  },
];

const ConsumerPasswordSignUp = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const [pickerDate, setPickerDate] = useState(new Date());

  const currentYear = new Date().getFullYear();
  const dobYear = dob.getFullYear();
  const age = currentYear - dobYear;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handlePasswordSignUp = async () => {
    if (!name || !gender) {
      showMessage({
        message: 'Please Fill all Fields',
        type: 'warning',
      });
    } else if (!isPasswordStrong(password)) {
      showMessage({
        message: 'Password Must be of length 8',
        type: 'warning',
      });
    } else if (age < 18) {
      showMessage({
        message: 'age must be greater than 18',
        type: 'warning',
      });
    } else {
      const formatedDOB = moment(dob).format('DD/MM/YYYY');
      dispatch(saveUserData({ name, password, dob: formatedDOB, gender }));
      navigation.navigate('ConsumerInterests');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Sign up'} />
      <TextInput
        stepCount={2}
        mainLabel={'Your full name?'}
        subLabel={'Lets get to know each other!'}
        input={text => setName(text)}
        placeholder={'Black Scissors'}
      />
      <TextInput
        mainLabel={'Create a password'}
        subLabel={'Must be at least 8 characters long.'}
        secured
        input={text => setPassword(text)}
        placeholder={'************'}
      />

      <TextInput
        mainLabel={'What’s your age and gender?'}
        subLabel={'Let’s find the best Consumers for you!'}
        editable={false}
        value={age ? `${age} years` : 'Select date'}
        onInputPress={toggleModal}
      />

      <ReactNativeModal coverScreen={true} isVisible={modalVisible} swipeDirection={['down']}>
        <View style={styles.pickerOuterView}>
          <DatePicker
            date={pickerDate}
            androidVariant="nativeAndroid"
            textColor={theme.background}
            mode="date"
            maximumDate={new Date()}
            onDateChange={v => {
              setPickerDate(v);
            }}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setDob(pickerDate);
            toggleModal();
          }}
          style={[styles.pickerDone, { width: '100%' }]}>
          <Text style={[styles.genTxt, { fontSize: 16, textAlign: 'center', color: 'white' }]}>Done</Text>
        </TouchableOpacity>
      </ReactNativeModal>

      {/* <ReactNativeModal isVisible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.pickerOuterView}>
            <DatePicker
              date={pickerDate}
              mode="date"
              maximumDate={new Date()}
              onDateChange={date => setPickerDate(date)}
            />
            <TouchableOpacity
              onPress={() => {
                setDob(pickerDate);
                toggleModal();
              }}
              style={styles.pickerDone}>
              <Text style={{ color: 'white' }}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ReactNativeModal> */}

      <View style={styles.genView}>
        {Gender.map(item => {
          return (
            <TouchableOpacity
              key={item.name}
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

      <Button title="Continue" btnStyle={styles.btn} onPress={handlePasswordSignUp} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    // paddingTop: heightToDp(7)
  },
  btn: {
    position: 'absolute',
    bottom: heightToDp(5.5),
  },

  bottomView: {
    width: width,
    marginTop: heightToDp(15),
    alignItems: 'center',
    alignSelf: 'center',
  },
  genTxt: {
    fontSize: 14,
    lineHeight: 16.41,
    color: theme.background,
  },
  genView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.91,
    alignSelf: 'center',
    marginTop: heightToDp(4.5),
  },
  genBtn: {
    width: widthToDp(27.5),
    height: heightToDp(9.7),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
  },

  pickerOuterView: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
  },
  pickerDone: {
    paddingVertical: heightToDp(4),
    paddingHorizontal: widthToDp(15),

    alignSelf: 'center',
    backgroundColor: theme.primary,
    borderRadius: 10,
  },
});

export default ConsumerPasswordSignUp;
