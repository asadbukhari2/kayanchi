import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AddNewBtn, Button, Header, TextInput } from '../../components';
import { heightToDp, widthToDp, width } from '../../utils/Dimensions';
import { GLOBAL_STYLES } from '../../utils/styles';
import { fonts, useTheme } from '../../utils/theme';
import EasyPaisa from '../../assets/easypaisa.png';
import JazzCash from '../../assets/jaazzcash.png';
import ToggleSwitch from 'toggle-switch-react-native';
import { RadioButton } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';

import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { postOrder } from '../../redux/actions/commonActions';
import ConsumerOrderConRejModal from '../ConsumerOrderConRejModal';
const paymentMethod = [
  {
    title: 'pay using ',
    phoneNumbr: '**** ****78-',
    imageLink: EasyPaisa,
  },
  {
    title: 'pay using ',
    phoneNumbr: '**** ****780',
    imageLink: JazzCash,
  },
];

const theme = useTheme();
const promocodeData = [
  {
    code: 'HNY22!',
    discount: 'Get 15% on your next order',
  },
  {
    code: 'HNY23!',
    discount: 'Get 15% on your next order',
  },
  {
    code: 'HNY24!',
    discount: 'Get 15% on your next order',
  },
];
const DATA = [
  {
    titleData: 'My saved Cards',
    state: 'Manage',
    number: '5314 9303 2876 4544',
    number2: '5314 9303 2876 4544',
    defaultCard: 'Default',
    makeDefault: 'Make Default',
  },
  {
    titleData: 'My JazzCash account',
    state: 'Edit details',
    number: '03320310780',
    number2: '03320310780',
    // defaultCard:"Default",
    // makeDefault:"Make Default"
  },
  {
    titleData: 'My EasyPaisa account',
    state: 'Edit details',
    number: '03320310780',
    number2: '03320310780',
    // defaultCard:"Default",
    // makeDefault:"Make Default"
  },
];

const ConsumerCashPayment = props => {
  const [isSelected, setSelection] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [checked, setChecked] = useState('first');
  const [isPrivate, setIsPrivate] = useState(false);
  const [name, setName] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();

  const cart = useSelector(state => state.common.cart);
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  const consumerOrder = useSelector(state => state.common.consumerOrder);
  console.log('consumerdata', consumerOrder);
  const handlePrivate = () => {
    setIsPrivate(previousState => !previousState);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };
  const calculateTotalCart = data => {
    if (data.length > 0) {
      let sum = 0;
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        sum += element.quantity * element.price;
      }
      return sum;
    } else {
      return 0;
    }
  };

  const handleOrder = () => {
    console.log('consumer order', consumerOrder);
    if (consumerOrder.consumerMood === 'traveling') {
      const order = {
        is_hosting: false,
        date: moment(Date.now()).format('YYYY-MM-DD'),
        booking_slot_id: consumerOrder?.artistTimeSLot?.id ? consumerOrder.artistTimeSLot.id : null,
        booking_notes: name,
      };
      console.log('order', order);
      dispatch(postOrder(order, token));
      // setIsModalVisible(true);
    } else {
      const order = {
        is_hosting: true,
        date: moment(Date.now()).format('YYYY-MM-DD'),
        booking_slot_id: consumerOrder?.artistTimeSLot?.id ? consumerOrder.artistTimeSLot?.id : null,
        booking_notes: name,
      };
      console.log('order', order);
      dispatch(postOrder(order, token));
      // setIsModalVisible(true);
    }
  };
  return (
    <SafeAreaView style={GLOBAL_STYLES.containerHome}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: heightToDp(10) }}>
        <Header backBtnGrey />
        <Text style={GLOBAL_STYLES.title}>{'Payment method'}</Text>
        <AddNewBtn
          title={'Apply Promo Code'}
          iconColor={theme.counterGrey}
          titleStyle={{ color: theme.counterGrey }}
          onPress={() => props.navigation.navigate('ConsumerApplyPromoCode')}
        />
        <View style={styles.balanceContainer}>
          {cart &&
            cart.cart_items.map(data => {
              return (
                <View style={styles.alignRow}>
                  <Text style={styles.heading}>
                    {data.quantity}x <Text style={{ color: '#84668C' }}>{data.service_name}</Text>
                  </Text>
                  <Text style={styles.subHeading}>Rs {data.quantity * data.price}</Text>
                </View>
              );
            })}
          {/* <View style={[styles.alignRow, { marginVertical: 5 }]}>
            <Text style={[styles.subHeading, { fontFamily: fonts.robo_med }]}>GST (13%)</Text>
            <Text style={styles.subHeading}>Rs 800</Text>
          </View> */}
          <View style={[styles.alignRow, { alignItems: 'center' }]}>
            <Text style={[{ color: '#84668C', fontFamily: fonts.robo_med, fontSize: 16 }]}>TOTAL</Text>
            <Text style={{ color: '#84668C', fontSize: 24, fontFamily: fonts.robo_bold }}>
              Rs {calculateTotalCart(cart.cart_items)}
            </Text>
          </View>
        </View>
        <Text
          style={{
            color: '#67718C',
            fontFamily: fonts.hk_bold,
            marginTop: 10,
            marginHorizontal: widthToDp(5),
          }}>
          CHOOSE ONE
        </Text>
        <View style={styles.balanceContainer}>
          <View style={styles.SwitchContent}>
            <Text style={{ fontWeight: fonts.robo_reg, fontSize: 16, color: '#67718C' }}>{'Cash'}</Text>
            <View style={styles.switchContainer}>
              <ToggleSwitch
                isOn={true}
                style={{ height: 20, marginRight: 10 }}
                value={isPrivate}
                onColor="#84668C"
                offColor="#9A9A9A"
                size="small"
                onToggle={handlePrivate}
              />
              {/* <Switch
                value={isPrivate}
                onValueChange={handlePrivate}
                thumbColor={isPrivate ? theme.primary : '#eee'}
                trackColor={{false: 'grey', true: 'grey'}}
                style={styles.switch}
              /> */}
            </View>
          </View>
          {/* <View style={[styles.SwitchContent, { marginTop: 10, marginBottom: 15 }]}>
            <Text style={{ fontWeight: fonts.robo_reg, fontSize: 16, color: '#67718C' }}>{'Kayanchi Wallet'}</Text>
            <Text style={{ color: '#668C6A', fontFamily: fonts.hk_bold, fontSize: 16 }}>RS 5000</Text>
            <View style={styles.switchContainer}>
              
              <ToggleSwitch
                isOn={isPrivate}
                style={{ height: 20, marginRight: 10 }}
                value={isPrivate}
                onColor="#84668C"
                offColor="#9A9A9A"
                size="small"
                onToggle={handlePrivate}
              />
            </View>
          </View> */}

          {/* {paymentMethod.map((payment, index) => (
            <View key={index}>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={isSelected && selectedMethod === payment.imageLink}
                  onValueChange={value => {
                    if (value) {
                      setSelection(true);
                      setSelectedMethod(payment.imageLink);
                    } else {
                      setSelection(false);
                      setSelectedMethod(null);
                    }
                  }}
                  style={styles.checkbox}
                  tintColors={{
                    true: theme.primary,
                    false: '#67718C',
                  }}
                />
                <Text style={styles.label}>{payment.title}</Text>
                <Image
                  source={payment.imageLink}
                  style={{
                    height: 11,
                    width: 77,
                    resizeMode: 'stretch',
                    marginTop: 6,
                  }}
                />
              </View>
              {isSelected && selectedMethod === payment.imageLink && (
                <View style={{ marginLeft: widthToDp(7) }}>
                  <RadioButton.Group onValueChange={newValue => setChecked(newValue)} value={checked}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingVertical: 10,
                      }}>
                      <RadioButton value="first" />
                      <Text> {payment.phoneNumbr}</Text>
                    </View>
                  </RadioButton.Group>
                  <Text style={{ fontSize: 16, color: '#67718C', fontFamily: fonts.robo_reg }}> + Add new account</Text>
                </View>
              )}
            </View>
          ))} */}
        </View>
        <Text
          style={{
            color: '#67718C',
            marginVertical: 10,
            fontSize: 14,
            fontFamily: fonts.hk_bold,
            marginHorizontal: widthToDp(5),
          }}>
          BOOKING NOTES: <Text style={{ fontFamily: fonts.robo_light }}>(Optional)</Text>
        </Text>

        <View>
          <TextInput
            input={text => setName(text)}
            placeholder={'Please tell us anything that may assist with the order...'}
            multiline
            inputBoxStyle={{
              backgroundColor: '#ffffff',
              borderBottomColor: '#ffffff',
              padding: 10,

              height: heightToDp(45),
              borderRadius: 10,
              textAlignVertical: 'top',
            }}
            value={name}
          />
          <Text
            style={{
              color: '#29AAE2',
              position: 'absolute',
              right: 25,
              bottom: 5,
            }}>
            0/100
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Button
            title="Place your Order"
            onPress={() => {
              handleOrder();
            }}
          />
        </View>
        <ConsumerOrderConRejModal navigation={navigation} visible={isModalVisible} close={closeModal} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConsumerCashPayment;

const styles = StyleSheet.create({
  alignRow: { flexDirection: 'row', justifyContent: 'space-between' },
  heading: { fontSize: 20, fontFamily: fonts.hk_bold },
  subHeading: { fontSize: 16, color: '#67718C', fontFamily: fonts.hk_bold },
  txt: {
    color: '#1583D8',
    borderColor: '#1583D8',
    borderWidth: 1,
    paddingHorizontal: widthToDp(6),
    paddingVertical: heightToDp(2),
    borderRadius: 20,
  },

  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  SwitchContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },

  indicatorView: {
    marginHorizontal: widthToDp(5),
    marginTop: heightToDp(3),
    marginBottom: 15,
  },
  row: { flexDirection: 'row', alignItems: 'center' },

  input: {
    marginTop: 20,
    width: widthToDp(58),
    backgroundColor: '#E7E7E7',
    marginHorizontal: widthToDp(5),
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#E7E7E7',
    borderRadius: 5,
  },
  loadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  load: {
    backgroundColor: theme.primary,
    paddingHorizontal: widthToDp(10),
    paddingVertical: heightToDp(3),
    borderRadius: 30,
    marginTop: 20,
  },

  modalDescription: {
    fontSize: 12,
    color: 'white',
    textAlign: 'justify',
    paddingRight: widthToDp(17),
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Transparent black background
  },
  modalContent: {
    // padding: 20,
    borderRadius: 10,
    paddingTop: 20,
  },
  balanceContainer: {
    backgroundColor: 'white',
    marginVertical: heightToDp(2),
    marginHorizontal: widthToDp(5),
    paddingHorizontal: widthToDp(4),
    paddingVertical: heightToDp(5),
    borderRadius: 10,
  },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center' },
  paymentContainer: {
    flexDirection: 'row',
    marginHorizontal: widthToDp(5),
    paddingVertical: heightToDp(2),
    width: width * 0.45,
  },
  reason: { marginLeft: widthToDp(5) },
  image: { height: 36, width: 38 },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD',
    marginVertical: 5,
  },
  transId: {
    position: 'absolute',
    right: 10,
  },
});
