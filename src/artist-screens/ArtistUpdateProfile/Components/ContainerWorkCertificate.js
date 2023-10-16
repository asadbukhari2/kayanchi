import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Feather from 'react-native-vector-icons/Feather';
import {widthToDp, heightToDp, width} from '../../../utils/Dimensions';
import {Button, TextInput} from '../../../components';
import DatePicker from 'react-native-date-picker';
import ReactNativeModal from 'react-native-modal';
import {fonts, useTheme} from '../../../utils/theme';
const AddMore = require('../../../assets/addMore.png');

const theme = useTheme();
const calendar = require('../../../assets/calendar.png');
const hair = require('../../../assets/hair.png');
const face = require('../../../assets/face.png');
const waxing = require('../../../assets/body.png');
const Massages = require('../../../assets/spa.png');
const Botox = require('../../../assets/treatment.png');
const Category = [
  {
    name: 'Hair',
    imageLink: hair,
  },
  {
    name: 'Face',
    imageLink: face,
  },
  {
    name: 'Body',
    imageLink: waxing,
  },
  {
    name: 'Spa',
    imageLink: Massages,
  },
  {
    name: 'Treatments',
    imageLink: Botox,
  },
];
const ContainerWorkCertificate = ({
  imageSource,
  title,
  subtitle,
  details,
  date,
  country,
  modalHeading,
  modalsubHeading,
  modaltitle,
  modaltitle2,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const [dob, setDob] = useState(new Date());
  const [pickerDate, setPickerDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');

  const handleDateChange = date => {
    console.log('clikced');
    setSelectedDate(date);
    setDatePickerVisible(false);
  };

  const toggleDatePicker = () => {
    console.log('clikced2');
    setDatePickerVisible(!isDatePickerVisible);
  };

  const toggleModalDate = () => {
    setModalVisible(!modalVisible);
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.Diploma}>
      <View style={styles.gigContainer}>
        <Text style={styles.heading}>{title}</Text>
        <TouchableOpacity onPress={toggleModal}>
          <Image source={AddMore} style={{width: 20, height: 20}} />
        </TouchableOpacity>
      </View>
      <View style={styles.separator}></View>
      <View style={styles.DiplomaConatiner}>
        <Image
          source={imageSource}
          style={{width: 50, height: 50, marginLeft: 10}}
        />
        <View style={{flex: 1, marginLeft: 10}}>
          <Text style={styles.subheading}>{subtitle}</Text>
          <Text
            style={{
              color: '#333333',
              fontSize: 14,
              fontFamily: fonts.robo_reg,
            }}>
            {details}
          </Text>
          <Text
            style={{
              color: '#67718C',
              fontSize: 14,
              fontFamily: fonts.robo_reg,
            }}>
            {date}
          </Text>
          <Text>{country}</Text>
        </View>
        <View style={{marginRight: widthToDp(5)}}>
          <Feather style={{color: '#193356', fontSize: 16}} name="edit-2" />
        </View>
      </View>
      <Modal visible={isModalVisible} animationType="slide">
        <TouchableOpacity onPress={toggleModal}>
          <Feather
            name="x"
            size={24}
            color="black"
            style={{paddingHorizontal: widthToDp(4), paddingTop: 10}}
          />
        </TouchableOpacity>
        <ScrollView>
          <View style={{flex: 1, justifyContent: 'center'}}>
            {modalHeading && (
              <Text style={styles.headingModal}>{modalHeading}</Text>
            )}
            {modalsubHeading && (
              <Text
                style={[
                  styles.subheading2,
                  {
                    color: '#67718C',
                    fontFamily: fonts.robo_reg,
                    marginRight: widthToDp(15),
                  },
                ]}>
                {modalsubHeading}
              </Text>
            )}

            <Text
              style={{
                color: '#29AAE2',
                fontSize: 12,
                fontFamily: fonts.robo_reg,
                marginVertical: 10,
                paddingHorizontal: widthToDp(4),
              }}>
              (*) Indicates Required
            </Text>
            <View>
              {modaltitle && (
                <View>
                  <Text
                    style={{
                      paddingHorizontal: widthToDp(4),
                      paddingTop: 15,
                      color: '#747474',
                      fontSize: 16,
                      fontFamily: fonts.robo_med,
                    }}>
                    {modaltitle}
                    <Text style={{color: '#29AAE2'}}>{'*'} </Text>
                  </Text>
                  <TextInput
                    input={text => setName(text)}
                    placeholder={'Ex. Toni & Guy certified'}
                    inputBoxStyle={{
                      backgroundColor: '#ebe8ec',
                      borderBottomColor: '#ebe8ec',
                      borderRadius: 5,
                      paddingHorizontal: 10
                    }}
                  />
                  <Text style={styles.limitText}>0/200</Text>
                </View>
              )}
            </View>
            <View>
              {modaltitle2 && (
                <View>
                  <Text
                    style={{paddingHorizontal: widthToDp(4), paddingTop: 15,
                      color: '#747474',
                      fontSize: 16,
                      fontFamily: fonts.robo_med,}}>
                    {modaltitle2}
                    <Text style={{color: '#29AAE2'}}>{'*'} </Text>
                  </Text>
                  <TextInput
                    input={text => setName(text)}
                    placeholder={'Ex. Toni & Guy '}
                    inputBoxStyle={{
                      backgroundColor: '#ebe8ec',
                      borderBottomColor: '#ebe8ec',
                      borderRadius: 5,
                      paddingHorizontal: 10
                    }}
                  />
                  <Text style={styles.limitText}>0/50</Text>
                </View>
              )}
            </View>
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
              <Text style={{color:'#2F3A58', fontSize: 16, fontFamily: fonts.robo_reg}}>This credentials does not expire</Text>
            </View>


            <View style={{marginTop: 10}}>
              <TextInput
                subLabel="Issue date"
                editable={false}
                input={dob ? `${dob.toLocaleDateString('en-US')}` : ''}
                placeholder="Date"
                onInputPress={toggleModalDate}
                inputBoxStyle={{
                  backgroundColor: '#84668C1A',
                  borderBottomColor: '#84668C1A',
                  borderRadius: 5,
                  paddingHorizontal: 10,
                }}
              />
              <Text style={{color:"#29AAE2", fontSize: 16, position: 'absolute', top: 7, left: 80}}>*</Text>
              <Image
                source={calendar}
                style={{
                  width: 18,
                  height: 15,
                  position: 'absolute',
                  bottom: 12,
                  right: 30,
                }}
              />
            </View>
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
                  <Text
                    style={[
                      styles.genTxt,
                      {fontSize: 16, textAlign: 'center', color: 'white'},
                    ]}>
                    Done
                  </Text>
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

            
            <View style={{marginTop: 10}}>
              <TextInput
                subLabel="Expiration date"
                editable={false}
                input={dob ? `${dob.toLocaleDateString('en-US')}` : ''}
                placeholder="Date"
                onInputPress={toggleModalDate}
                inputBoxStyle={{
                  backgroundColor: '#84668C1A',
                  borderBottomColor: '#84668C1A',
                  borderRadius: 5,
                  paddingHorizontal: 10,
                }}
              />
              <Text style={{color:"#29AAE2", fontSize: 16, position: 'absolute', top: 7, left: 110}}>*</Text>
              <Image
                source={calendar}
                style={{
                  width: 18,
                  height: 15,
                  position: 'absolute',
                  bottom: 12,
                  right: 30,
                }}
              />
            </View>
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
                  <Text
                    style={[
                      styles.genTxt,
                      {fontSize: 16, textAlign: 'center', color: 'white'},
                    ]}>
                    Done
                  </Text>
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

            <View>
              <Text style={[styles.welcomeTxt, {paddingTop: 15}]}>
                Choose Category<Text style={{color: '#29AAE2'}}>{'*'} </Text>
              </Text>
            </View>
            <View style={styles.genRow}>
              {Category.slice(0, 3).map(item => (
                <TouchableOpacity
                  onPress={() => setGender(item.name)}
                  activeOpacity={0.7}
                  style={[
                    styles.genBtn,
                    {
                      backgroundColor:
                        gender === item.name ? theme.primary : theme.genderGrey,
                    },
                  ]}
                  key={item.name}>
                  <View style={styles.categoryItem}>
                    <Image
                      source={item.imageLink}
                      style={{height: 25, width: 25, resizeMode: 'contain'}}
                    />
                    <Text style={styles.genTxt}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>

            <View style={[styles.genRow, {justifyContent: 'flex-start'}]}>
              {Category.slice(3, 5).map(item => (
                <TouchableOpacity
                  onPress={() => setGender(item.name)}
                  activeOpacity={0.7}
                  style={[
                    styles.genBtn,
                    {
                      backgroundColor:
                        gender === item.name ? theme.primary : theme.genderGrey,
                    },
                    {marginRight: widthToDp(5)},
                    {width: widthToDp(34.5)},
                  ]}
                  key={item.name}>
                  <View style={styles.categoryItem}>
                    <Image
                      source={item.imageLink}
                      style={{height: 25, width: 25, resizeMode: 'contain'}}
                    />
                    <Text style={styles.genTxt}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={{paddingTop: heightToDp(10), marginBottom: 10}}>
            <Button title="Save" />
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
};

export default ContainerWorkCertificate;

const styles = StyleSheet.create({
  Diploma: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: widthToDp(5),
    marginVertical: heightToDp(4),
    borderRadius: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: widthToDp(3),
    marginVertical:5
  },
  titleContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  input: {backgroundColor: 'red'},
  titleContainer: {
    marginTop: 10,
    backgroundColor: 'white',
    marginHorizontal: widthToDp(4),
    paddingVertical: 10,
    borderRadius: 10,
  },
  limitText: {
    color: '#29AAE2',
    textAlign: 'right',
    paddingRight: 15,
    fontFamily: fonts.robo_reg,
  },
  title: {paddingLeft: 10, flex: 1},
  separator: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 5,
  },

  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  datePicker: {
    width: 200,
    marginTop: 10,
  },
  gigContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingRight: widthToDp(5),
    marginHorizontal: widthToDp(3),
  },
  heading: {
    fontSize: 18,
    color: '#2F3A58',
    fontFamily: fonts.hk_bold,
    // paddingHorizontal: widthToDp(4),
    paddingVertical: heightToDp(3),
  },
  headingModal: {
    fontSize: 34,
    color: '#2F3A58',
    fontFamily: fonts.hk_bold,
    paddingHorizontal: widthToDp(4),
    // paddingHorizontal: widthToDp(4),
    paddingVertical: heightToDp(3),
  },
  subheading: {fontSize: 16, color: '#333333', fontFamily: fonts.robo_med},
  subheading2: {
    fontSize: 16,
    color: '#333333',
    paddingHorizontal: widthToDp(4),
    // color: '#67718C',
  },
  DiplomaConatiner: {
    width: width * 0.91,
    flexDirection: 'row',
    paddingVertical: 10,
  },
  genRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.91,
    alignSelf: 'center',

    marginTop: heightToDp(4.5),
  },
  genView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.91,
    alignSelf: 'center',
    marginTop: heightToDp(4.5),
    color: '#ffffff',
  },
  genTxt: {color: '#ffffff', marginLeft: 6},
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  genBtn: {
    // flex: 1,
    width: widthToDp(27.5),
    height: heightToDp(9.7),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    color: '#ffffff',
  },
  welcomeTxt: {
    fontSize: 16,
    fontFamily: fonts.robo_med,
    // fontWeight: 'bold',
    paddingHorizontal: widthToDp(4),
    color:"#747474"
  },
  subheading3: {color: '#67718C', paddingHorizontal: widthToDp(4)},
});
