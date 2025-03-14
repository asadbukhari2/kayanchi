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
import { getCertificates } from '../../redux/actions/commonActions';

const theme = useTheme();

const calendar = require('../../assets/calendar.png');
const hair = require('../../assets/hair.png');

const CertificationModalForm = ({
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
  const [expiryDate, setExpiryDate] = useState();
  const [issueDate, setIssueDate] = useState();
  const [pickerDate, setPickerDate] = useState(new Date());
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [orgName, setOrgName] = useState('');

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

        formData.append('name', name);
        formData.append('organization', orgName);
        formData.append('expirable', isSelected);
        formData.append('category_id', category);
        formData.append('issue_date', moment(issueDate).format('MM-DD-YYYY'));
        formData.append(
          'expiration_date',
          isSelected ? moment(new Date()).format('MM-DD-YYYY') : moment(expiryDate).format('MM-DD-YYYY'),
        );

        res = await Fetch.postFormData('/api/certification/', formData, auth.token);
      } else {
        const body = {
          name: name,
          organization: orgName,
          expirable: isSelected,
          category_id: category,
          issue_date: moment(issueDate).format('MM-DD-YYYY'),
          expiration_date: isSelected
            ? moment(new Date()).format('MM-DD-YYYY')
            : moment(expiryDate).format('MM-DD-YYYY'),
        };
        res = await Fetch.put(`/api/certification/${data.id}`, body, auth.token);
      }

      if (res.status >= 200 && res.status < 300) {
        res = await res.json();
        dispatch(getCertificates(auth.token));
        toggleModal();
      } else {
        const error = await res.json();
        toggleModal();
        showMessage({
          type: 'warning',
          message: error,
        });
      }
    }
  };

  useEffect(() => {
    if (edit) {
      setName(data.name);
      setOrgName(data.organization);
      setCategory(data.category_id);
      setIsSelected(data.expirable);
      setIssueDate(new Date(data.issue_date));
      setExpiryDate(new Date(data.expiration_date));
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
                  placeholder={'Ex. Toni & Guy certified'}
                  inputBoxStyle={{
                    backgroundColor: '#ebe8ec',
                    borderBottomColor: '#ebe8ec',
                    borderRadius: 5,
                    paddingHorizontal: 10,
                  }}
                />

                <Text style={styles.limitText}>{name.length}/200</Text>
              </View>
            )}
          </View>
          <View>
            {modaltitle2 && (
              <View>
                <TextInput
                  label={modaltitle2}
                  required
                  maxLength={50}
                  input={true}
                  onChangeText={text => setOrgName(text)}
                  value={orgName}
                  placeholder="Ex. Toni & Guy certified"
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
          <View style={styles.checkboxContainer}>
            <CheckBox value={isSelected} onValueChange={setIsSelected} />
            <Text style={{ color: '#2F3A58', fontSize: 16, fontFamily: fonts.robo_reg }}>
              This credentials does not expire
            </Text>
          </View>

          <View style={{ marginTop: 10 }}>
            <TextInput
              onPress={toggleIssueModalDate}
              subLabel="Issue date"
              required
              editable={false}
              input={true}
              value={issueDate && moment(issueDate).format('DD/MM/YYYY')}
              placeholder="Date"
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
            onSwipeComplete={() => setIssueModalVisible(!issueModalVisible)}
            swipeDirection={['down']}>
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
                setIssueDate(pickerDate);
                setIssueModalVisible(false);
              }}
              style={[styles.pickerDone, { width: '100%' }]}>
              <Text style={[styles.genTxt, { fontSize: 16, textAlign: 'center', color: 'white' }]}>Done</Text>
            </TouchableOpacity>
          </ReactNativeModal>

          <View style={{ marginTop: 10 }}>
            <TextInput
              subLabel="Expiration date"
              required
              editable={false}
              input={true}
              value={isSelected ? 'Present' : expiryDate ? moment(expiryDate).format('DD/MM/YYYY') : ''}
              placeholder="Date"
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
            onSwipeComplete={() => setExpiryModalVisible(!expiryModalVisible)}
            swipeDirection={['down']}>
            <View style={styles.pickerOuterView}>
              <DatePicker
                date={pickerDate}
                androidVariant="nativeAndroid"
                textColor={theme.background}
                mode="date"
                onDateChange={v => {
                  setPickerDate(v);
                }}
              />
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setExpiryDate(pickerDate);
                setExpiryModalVisible(false);
              }}
              style={[styles.pickerDone, { width: '100%' }]}>
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
                      item.icon
                        ? {
                            uri: item.icon,
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

export default CertificationModalForm;

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
    marginVertical: 5,
  },
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
  pickerDone: { height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.primary },
  gigContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: widthToDp(3),
  },
  heading: {
    fontSize: 18,
    color: '#2F3A58',
    fontFamily: fonts.hk_bold,
    paddingVertical: heightToDp(3),
  },
  headingModal: {
    fontSize: 34,
    color: '#2F3A58',
    fontFamily: fonts.hk_bold,
    paddingHorizontal: widthToDp(4),

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
  pickerOuterView: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
  },
});
