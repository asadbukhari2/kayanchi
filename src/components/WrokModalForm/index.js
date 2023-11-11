import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Modal, TouchableOpacity, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Feather from 'react-native-vector-icons/Feather';
import { widthToDp, heightToDp, width } from '../../utils/Dimensions';
import { Button, TextInput } from '../../components';
import DatePicker from 'react-native-date-picker';
import ReactNativeModal from 'react-native-modal';
import { fonts, useTheme } from '../../utils/theme';
import moment from 'moment';
import { showMessage } from 'react-native-flash-message';
import { Fetch } from '../../utils/APIservice';
import { useDispatch, useSelector } from 'react-redux';
import { getExperiences } from '../../redux/actions/commonActions';

const theme = useTheme();

const calendar = require('../../assets/calendar.png');
const hair = require('../../assets/hair.png');
const face = require('../../assets/face.png');
const waxing = require('../../assets/body.png');
const Massages = require('../../assets/spa.png');
const Botox = require('../../assets/treatment.png');

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

const WorkModalForm = ({
  isModalVisible,
  toggleModal,
  modalHeading,
  modalsubHeading,
  modaltitle2,
  modaltitle,
  edit,
  data,
}) => {
  const [expiryModalVisible, setExpiryModalVisible] = useState(false);
  const [issueModalVisible, setIssueModalVisible] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [expiryDate, setExpiryDate] = useState(new Date());
  const [issueDate, setIssueDate] = useState(new Date());
  const [pickerDate, setPickerDate] = useState(new Date());
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [orgName, setOrgName] = useState('');
  const [location, setLocation] = useState('');

  const categories = useSelector(state => state.common.categories);
  const auth = useSelector(state => state.auth.userDetails);
  const dispatch = useDispatch();

  const toggleIssueModalDate = () => {
    setIssueModalVisible(!issueModalVisible);
  };
  const toggleExpiryModalDate = () => {
    isSelected ? '' : setExpiryModalVisible(!expiryModalVisible);
  };

  const handleSave = async () => {
    if (!name || !orgName || !category) {
      showMessage({
        message: 'Fill All required feilds',
        type: 'warning',
      });
    } else {
      let res;
      if (!edit) {
        const formData = new FormData();

        formData.append('job_title', name);
        formData.append('company_name', orgName);
        formData.append('location', location);
        formData.append('category_id', category);
        formData.append('currently_working', isSelected);
        formData.append('start_date', moment(issueDate).format('DD-MM-YYYY'));
        formData.append(
          'end_date',
          isSelected ? moment(new Date()).format('DD-MM-YYYY') : moment(expiryDate).format('DD-MM-YYYY'),
        );

        res = await Fetch.postFormData('/api/experience/', formData, auth.token);
      } else {
        const body = {
          job_title: name,
          company_name: orgName,
          currently_working: isSelected,
          category_id: category,
          start_date: moment(issueDate).format('DD-MM-YYYY'),
          end_date: isSelected ? moment(new Date()).format('DD-MM-YYYY') : moment(expiryDate).format('DD-MM-YYYY'),
        };
        res = await Fetch.put(`/api/experience/${data.id}`, body, auth.token);
        console.log(res);
      }
      if (res.status >= 200 && res.status < 300) {
        res = await res.json();
        dispatch(getExperiences(auth.token));
        toggleModal();
      } else {
        const { message } = await res.json();

        showMessage({
          message: message,
          type: 'danger',
        });

        throw new Error(message ?? 'Something went wrong');
      }
    }
  };

  useEffect(() => {
    if (edit) {
      setName(data.job_title);
      setOrgName(data.company_name);
      setLocation(data.location);
      setCategory(data.category_id);
      setIsSelected(data.currently_working);
      setIssueDate(new Date(data.start_date));
      setExpiryDate(new Date(data.end_date));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [edit]);

  return (
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
                <TextInput
                  label={modaltitle}
                  required
                  maxLength={200}
                  input={true}
                  onChangeText={text => setName(text)}
                  value={name}
                  placeholder="Ex: Make Up Artist & Founder"
                  inputBoxStyle={{
                    backgroundColor: '#ebe8ec',
                    borderBottomColor: '#ebe8ec',
                    borderRadius: 5,
                    paddingHorizontal: 10,
                  }}
                />

                <Text style={styles.limitText}>{name?.length}/200</Text>
              </View>
            )}
          </View>
          <View>
            {modaltitle2 && (
              <View>
                <TextInput
                  label={modaltitle2}
                  maxLength={50}
                  input={true}
                  onChangeText={text => setOrgName(text)}
                  value={orgName}
                  placeholder="Ex: Toni & Guy"
                  required
                  inputBoxStyle={{
                    backgroundColor: '#ebe8ec',
                    borderBottomColor: '#ebe8ec',
                    borderRadius: 5,
                    paddingHorizontal: 10,
                  }}
                />
                <Text style={styles.limitText}>{orgName.length}/50</Text>
              </View>
            )}
          </View>
          <View>
            <Text
              style={{
                paddingHorizontal: widthToDp(4),
                paddingTop: 15,
                color: '#747474',
                fontSize: 16,
                fontFamily: fonts.robo_med,
              }}>
              Location
            </Text>
            <TextInput
              maxLength={50}
              input={text => setLocation(text)}
              placeholder="Ex: London, United Kingdom"
              inputBoxStyle={{
                backgroundColor: '#ebe8ec',
                borderBottomColor: '#ebe8ec',
                borderRadius: 5,
                paddingHorizontal: 10,
              }}
            />
          </View>

          <View style={styles.checkboxContainer}>
            <CheckBox value={isSelected} onValueChange={setIsSelected} />
            <Text style={{ color: '#2F3A58', fontSize: 16, fontFamily: fonts.robo_reg }}>
              I am currently working in this role
            </Text>
          </View>

          <View style={{ marginTop: 10 }}>
            <TextInput
              subLabel="Start date"
              editable={false}
              input={true}
              value={issueDate ? `${issueDate.toLocaleDateString('en-US')}` : ''}
              placeholder="Date"
              required
              inputBoxStyle={{
                backgroundColor: '#ebe8ec',
                borderBottomColor: '#ebe8ec',
                borderRadius: 5,
                paddingHorizontal: 10,
              }}
            />
            <TouchableOpacity
              onPress={toggleIssueModalDate}
              style={{
                width: '10%',
                height: '50%',
                position: 'absolute',
                bottom: 0,
                right: 18,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={calendar}
                style={{
                  width: 18,
                  height: 15,
                }}
              />
            </TouchableOpacity>
          </View>

          <ReactNativeModal
            coverScreen={true}
            isVisible={issueModalVisible}
            style={styles.modal}
            onSwipeComplete={() => setIssueModalVisible(!issueModalVisible)}
            swipeDirection={['down']}>
            <View style={styles.pickerOuterView}>
              <View style={{ backgroundColor: theme.dark }}>
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
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setIssueDate(pickerDate);
                setIssueModalVisible(false);
              }}
              style={[styles.pickerDone, { backgroundColor: theme.darkBlack, width: '100%' }]}>
              <Text style={[styles.genTxt, { fontSize: 16, textAlign: 'center', color: 'white' }]}>Done</Text>
            </TouchableOpacity>
          </ReactNativeModal>

          <View style={{ marginTop: 10 }}>
            <TextInput
              subLabel="End date"
              editable={false}
              input={true}
              value={isSelected ? 'Present' : expiryDate.toLocaleDateString('en-US')}
              placeholder="Date"
              required
              inputBoxStyle={{
                backgroundColor: '#ebe8ec',
                borderBottomColor: '#ebe8ec',
                borderRadius: 5,
                paddingHorizontal: 10,
              }}
            />
            <TouchableOpacity
              onPress={toggleExpiryModalDate}
              style={{
                width: '10%',
                height: '50%',
                position: 'absolute',
                bottom: 0,
                right: 18,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={calendar}
                style={{
                  width: 18,
                  height: 15,
                }}
              />
            </TouchableOpacity>
          </View>

          <ReactNativeModal
            coverScreen={true}
            isVisible={expiryModalVisible}
            style={styles.modal}
            onSwipeComplete={() => setExpiryModalVisible(!expiryModalVisible)}
            swipeDirection={['down']}>
            <View style={styles.pickerOuterView}>
              <View style={{ backgroundColor: theme.dark }}>
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
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setExpiryDate(pickerDate);
                setExpiryModalVisible(false);
              }}
              style={[styles.pickerDone, { backgroundColor: theme.darkBlack, width: '100%' }]}>
              <Text style={[styles.genTxt, { fontSize: 16, textAlign: 'center', color: 'white' }]}>Done</Text>
            </TouchableOpacity>
          </ReactNativeModal>

          <View>
            <Text style={[styles.welcomeTxt, { paddingTop: 15 }]}>
              Choose Category<Text style={{ color: '#29AAE2' }}>{' *'} </Text>
            </Text>
          </View>
          <View style={styles.genRow}>
            {categories.map(item => (
              <TouchableOpacity
                onPress={() => setCategory(item.id)}
                activeOpacity={0.7}
                style={[
                  styles.genBtn,
                  {
                    backgroundColor: category === item.id ? theme.primary : theme.genderGrey,
                  },
                ]}
                key={item.name}>
                <View style={styles.categoryItem}>
                  <Image
                    source={
                      item.image
                        ? {
                            uri: item.image,
                          }
                        : hair
                    }
                    style={{ height: 25, width: 25, resizeMode: 'contain' }}
                  />
                  <Text style={styles.genTxt}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={{ paddingTop: heightToDp(10), marginBottom: 10 }}>
          <Button title="Save" onPress={handleSave} />
        </View>
      </ScrollView>
    </Modal>
  );
};

export default WorkModalForm;

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
    marginTop: 20,
  },
  pickerDone: { height: 50, alignItems: 'center', justifyContent: 'center' },
  textInput: {
    backgroundColor: '#ebe8ec',
    borderBottomColor: '#ebe8ec',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  titleContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

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
  title: { paddingLeft: 10, flex: 1 },
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
  subheading: { fontSize: 16, color: '#333333', fontFamily: fonts.robo_med },
  subheading2: {
    fontSize: 16,
    paddingHorizontal: widthToDp(4),
    color: '#67718C',
    fontFamily: fonts.robo_reg,
    marginRight: widthToDp(15),
  },
  DiplomaConatiner: {
    width: width * 0.91,
    flexDirection: 'row',
    paddingVertical: 10,
  },
  genRow: {
    flex: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
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
    rowGap: widthToDp(3),
  },
  genTxt: { color: '#ffffff', marginLeft: 6 },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: widthToDp(3),
  },
  genBtn: {
    height: heightToDp(10.7),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    color: '#ffffff',
    marginVertical: heightToDp(1.5),
    marginHorizontal: heightToDp(0.5),
  },
  welcomeTxt: {
    fontSize: 16,
    fontFamily: fonts.robo_med,
    paddingHorizontal: widthToDp(4),
    color: '#747474',
  },
  subheading3: { color: '#67718C', paddingHorizontal: widthToDp(4) },
});
