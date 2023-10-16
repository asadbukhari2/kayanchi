import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Header, Loader, TextInput} from '../../components';
import {heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {fonts, useTheme} from '../../utils/theme';
import api from '../../utils/APIservice';
import {showMessage} from 'react-native-flash-message';
import {saveUserData} from '../../redux/actions';
import {useDispatch} from 'react-redux';
import DatePicker from 'react-native-date-picker';

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
const index = props => {
  const dispatch = useDispatch();
  const {navigation} = props;

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
          placeholder={"Black Scissors"}
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
          title={'Create account'}
          btnStyle={styles.btn}
          onPress={() => navigation.navigate('ArtistOnBoardingWelcome')}
        />
      </ScrollView>

      {loading && <Loader />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  btn: {
    marginVertical: heightToDp(10),
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

export default index;
