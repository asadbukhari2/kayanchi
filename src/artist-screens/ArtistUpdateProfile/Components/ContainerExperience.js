import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Modal, TouchableOpacity, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Feather from 'react-native-vector-icons/Feather';
import { widthToDp, heightToDp, width } from '../../../utils/Dimensions';
import { Button, TextInput } from '../../../components';
import DatePicker from 'react-native-date-picker';
import ReactNativeModal from 'react-native-modal';
import { fonts, useTheme } from '../../../utils/theme';
import makeStyle from './styles/containerExperience.styles';
const AddMore = require('../../../assets/addMore.png');

const theme = useTheme();

const hair = require('../../../assets/hair.png');
const calendar = require('../../../assets/calendar.png');
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
  const styles = makeStyle(theme);
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
          <Image source={AddMore} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.separator} />
      <View style={styles.DiplomaConatiner}>
        <Image source={imageSource} style={{ width: 50, height: 50, marginLeft: 10 }} />
        <View style={{ flex: 1, marginLeft: 10 }}>
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
        <View style={{ marginRight: widthToDp(5) }}>
          <Feather style={{ color: '#193356', fontSize: 16 }} name="edit-2" />
        </View>
      </View>
      <Modal visible={isModalVisible} animationType="slide">
        <TouchableOpacity onPress={toggleModal}>
          <Feather name="x" size={24} color="black" style={{ paddingHorizontal: widthToDp(4), paddingTop: 10 }} />
        </TouchableOpacity>
        <ScrollView>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            {modalHeading && <Text style={styles.headingModal}>{modalHeading}</Text>}
            {modalsubHeading && <Text style={styles.subheading2}>{modalsubHeading}</Text>}
            <Text
              style={{
                color: '#29AAE2',
                fontFamily: fonts.robo_reg,
                fontSize: 12,
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
                    <Text style={{ color: '#29AAE2' }}>{'*'} </Text>
                  </Text>
                  <TextInput
                    input={text => setName(text)}
                    placeholder={'Ex. Toni & Guy certified'}
                    inputBoxStyle={{
                      backgroundColor: '#ebe8ec',
                      borderBottomColor: '#ebe8ec',
                      borderRadius: 5,
                      paddingHorizontal: 10,
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
                    style={{
                      paddingHorizontal: widthToDp(4),
                      paddingTop: 15,
                      color: '#747474',
                      fontSize: 16,
                      fontFamily: fonts.robo_med,
                    }}>
                    {modaltitle2}
                    <Text style={{ color: '#29AAE2' }}>{'*'} </Text>
                  </Text>
                  <TextInput
                    input={text => setName(text)}
                    placeholder={'Ex. Toni & Guy '}
                    inputBoxStyle={{
                      backgroundColor: '#ebe8ec',
                      borderBottomColor: '#ebe8ec',
                      borderRadius: 5,
                      paddingHorizontal: 10,
                    }}
                  />
                  <Text style={styles.limitText}>0/50</Text>
                </View>
              )}
            </View>
            <Text style={{ paddingHorizontal: widthToDp(4), paddingTop: 15 }}>
              Location
              <Text style={{ color: '#29AAE2' }}>{'*'} </Text>
            </Text>
            <TextInput
              input={text => setName(text)}
              placeholder={'Ex. London, United Kingdom'}
              inputBoxStyle={{
                backgroundColor: '#ebe8ec',
                borderBottomColor: '#ebe8ec',
                borderRadius: 5,
                paddingHorizontal: 10,
              }}
            />
            <View style={styles.checkboxContainer}>
              <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />
              <Text
                style={{
                  color: '#2F3A58',
                  fontSize: 16,
                  fontFamily: fonts.robo_reg,
                }}>
                This credentials does not expire
              </Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <TextInput
                subLabel="Start date"
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
              <Text
                style={{
                  color: '#29AAE2',
                  fontSize: 16,
                  position: 'absolute',
                  top: 7,
                  left: 78,
                }}>
                *
              </Text>
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
              <View style={{ backgroundColor: theme.darkBlack, width: '100%' }}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    setDob(pickerDate);
                    setModalVisible(false);
                  }}
                  style={styles.pickerDone}>
                  <Text style={[styles.genTxt, { fontSize: 16, textAlign: 'center', color: 'white' }]}>Done</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.pickerOuterView}>
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
            </ReactNativeModal>
            <View style={{ marginTop: 10 }}>
              <TextInput
                subLabel="End date"
                editable={false}
                input={dob ? `${dob.toLocaleDateString('en-US')}` : ''}
                placeholder="Present"
                onInputPress={toggleModalDate}
                inputBoxStyle={{
                  backgroundColor: '#84668C1A',
                  borderBottomColor: '#84668C1A',
                  borderRadius: 5,
                  paddingHorizontal: 10,
                }}
              />
              <Text
                style={{
                  color: '#29AAE2',
                  fontSize: 16,
                  position: 'absolute',
                  top: 7,
                  left: 72,
                }}>
                *
              </Text>
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
              <View style={{ backgroundColor: theme.darkBlack, width: '100%' }}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    setDob(pickerDate);
                    setModalVisible(false);
                  }}
                  style={styles.pickerDone}>
                  <Text style={[styles.genTxt, { fontSize: 16, textAlign: 'center', color: 'white' }]}>Done</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.pickerOuterView}>
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
            </ReactNativeModal>
            <View>
              <Text style={[styles.welcomeTxt, { paddingTop: 10 }]}>
                Choose Category<Text style={{ color: '#29AAE2' }}>{'*'} </Text>
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
                      backgroundColor: gender === item.name ? theme.primary : theme.genderGrey,
                    },
                  ]}
                  key={item.name}>
                  <View style={styles.categoryItem}>
                    <Image source={item.imageLink} style={{ height: 25, width: 25, resizeMode: 'contain' }} />
                    <Text style={styles.genTxt}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
            <View style={[styles.genRow, { justifyContent: 'flex-start' }]}>
              {Category.slice(3, 5).map(item => (
                <TouchableOpacity
                  onPress={() => setGender(item.name)}
                  activeOpacity={0.7}
                  style={[
                    styles.genBtn,
                    {
                      backgroundColor: gender === item.name ? theme.primary : theme.genderGrey,
                    },
                    { marginRight: widthToDp(5) },
                    { width: widthToDp(34.5) },
                  ]}
                  key={item.name}>
                  <View style={styles.categoryItem}>
                    <Image source={item.imageLink} style={{ height: 25, width: 25, resizeMode: 'contain' }} />
                    <Text style={styles.genTxt}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={{ paddingTop: heightToDp(10), marginBottom: 10 }}>
            <Button title="Save" />
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
};

export default ContainerWorkCertificate;
