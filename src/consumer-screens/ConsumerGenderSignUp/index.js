import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Header, Loader, TextInput} from '../../components';
import {heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {fonts, useTheme} from '../../utils/theme';
import api from '../../utils/APIservice';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import ReactNativeModal from 'react-native-modal';
import {showMessage} from 'react-native-flash-message';
import {useDispatch} from 'react-redux';
import {saveUserData} from '../../redux/actions';

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

const ConsumerGenderSignUp = props => {
  const dispatch = useDispatch();
  const {navigation} = props;

  const [gender, setGender] = useState('');
  const [dob, setDob] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const [pickerDate, setPickerDate] = useState(new Date());
  const [loading, setLoading] = useState(false);

  const currentYear = new Date().getFullYear();
  const dobYear = dob.getFullYear();
  const age = currentYear - dobYear;

  console.log(dobYear, currentYear, age, gender);

  const updateProfile = async () => {
    try {
      const res = await api.put('/api/users/profile', {
        gender,
        age,
      });
      setLoading(true);
      console.log(res.data);
      if (res.status == 200) {
        dispatch(saveUserData(res.data));
        navigation.navigate('Interests');
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
      <TextInput
        stepCount={4}
        mainLabel={'What’s your age and gender?'}
        subLabel={'Let’s find the best artist for you!'}
        removeInput
      />
      <View
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
      </View>
      <View style={styles.genView}>
        {Gender.map(item => {
          return (
            <TouchableOpacity
              onPress={() => setGender(item.name)}
              activeOpacity={0.7}
              style={[
                styles.genBtn,
                {
                  backgroundColor:
                    gender === item.name ? theme.brown : theme.genderGrey,
                },
              ]}>
              <Text style={styles.genTxt}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <Button
        title={'Continue'}
        btnStyle={styles.btn}
        onPress={updateProfile}
      />
      {loading && <Loader />}
      <ReactNativeModal
        coverScreen={false}
        isVisible={modalVisible}
        style={styles.modal}
        onSwipeComplete={() => setModalVisible(!modalVisible)}
        swipeDirection={['down']}>
        <View style={{backgroundColor: theme.darkBlack, width: '100%'}}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setDob(pickerDate);
              setModalVisible(false);
            }}
            style={styles.pickerDone}>
            <Text style={[styles.genTxt, {fontSize: 16}]}>Done</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.pickerOuterView}>
          <View style={{backgroundColor: theme.dark}}>
            <DatePicker
              date={pickerDate}
              androidVariant="nativeAndroid"
              textColor={theme.background}
              mode="date"
              maximumDate={new Date()}
              onDateChange={date => {
                setPickerDate(date);
              }}
            />
          </View>
        </View>
      </ReactNativeModal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  bottomView: {
    width: width,
    marginTop: heightToDp(15),
    // position: 'absolute',
    // bottom: heightToDp(5.5),
    alignItems: 'center',
    alignSelf: 'center',
  },
  btn: {
    position: 'absolute',
    bottom: heightToDp(5.5),
  },
  genTxt: {
    fontSize: fonts.robo_reg,
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
    backgroundColor: theme.dark,
    alignItems: 'center',
  },
  pickerDone: {
    padding: heightToDp(4.5),
    alignSelf: 'flex-end',
  },
});

export default ConsumerGenderSignUp;
