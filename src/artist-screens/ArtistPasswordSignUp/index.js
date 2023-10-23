import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Header, TextInput, Loader } from '../../components';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';
import api from '../../utils/APIservice';
import { useDispatch } from 'react-redux';
import { saveToken, saveUserData } from '../../redux/actions';
import { showMessage } from 'react-native-flash-message';
import DatePicker from 'react-native-date-picker';
import ReactNativeModal from 'react-native-modal';

const theme = useTheme();

const ArtistPasswordSignUp = props => {
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const [pickerDate, setPickerDate] = useState(new Date());

  console.log('pickerDate', pickerDate);
  console.log('dob', dob);
  const currentYear = new Date().getFullYear();
  const dobYear = dob.getFullYear();
  const age = currentYear - dobYear;

  const dispatch = useDispatch();

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

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const signUp = async () => {
    dispatch(saveUserData({ name, password, dob, gender }));
    props.navigation.navigate('ArtistKnownFor');
    console.log('artist', name, password, dob, gender);
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

      {/* <TextInput
        mainLabel={'What’s your age and gender?'}
        subLabel={'Let’s find the best artist for you!'}
      /> */}
      {/* <View
        style={{
          marginTop: heightToDp(15),
          marginVertical: 20,
          alignItems: 'center',
        }}>
        <DatePicker
          date={dob ? dob : new Date()}
          mode="date"
          maximumDate={new Date()}
          onDateChange={date => {
            // console.log(typeof date.toDateString());
            setDob(date);
          }}
        />
      </View> */}

      <TextInput
        mainLabel={'What’s your age and gender?'}
        subLabel={'Let’s find the best artist for you!'}
        editable={false}
        value={age ? `${age} years` : ''}
        placeholder="DD/MM/YYYY"
        onInputPress={toggleModal}
      />

      <ReactNativeModal isVisible={modalVisible}>
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
      </ReactNativeModal>

      <View style={styles.genView}>
        {Gender.map(item => {
          return (
            <TouchableOpacity
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

      <Button title={'Create Account'} btnStyle={styles.btn} onPress={signUp} />
      {loading && <Loader />}
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
    // position: 'absolute',
    // bottom: heightToDp(5.5),
    alignItems: 'center',
    alignSelf: 'center',
  },
  genTxt: {
    // fontSize: fonts.robo_reg,
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
  modal: {
    flex: 1,
    margin: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  pickerOuterView: {
    width: width,
    // backgroundColor: theme.,
    alignItems: 'center',
  },
  pickerDone: {
    padding: heightToDp(4.5),
    alignSelf: 'flex-end',
  },
});

export default ArtistPasswordSignUp;
