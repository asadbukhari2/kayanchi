import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AddNewBtn, Header } from '../../components';
import { heightToDp, widthToDp, width } from '../../utils/Dimensions';
import { GLOBAL_STYLES } from '../../utils/styles';
import { useTheme, fonts } from '../../utils/theme';
import CheckBox from '@react-native-community/checkbox';
import { RadioButton } from 'react-native-paper';
import EasyPaisa from '../../assets/easypaisa.png';
import JazzCash from '../../assets/jaazzcash.png';
import makeStyle from './artistWithDrawalMoney.styles';

const paymentMethod = [
  {
    title: 'Load using ',
    phoneNumbr: '**** ****78-',
    imageLink: EasyPaisa,
  },
  {
    title: 'Load using ',
    phoneNumbr: '**** ****780',
    imageLink: JazzCash,
  },
];
const amount = [500, 1000, 2000, 5000];
const theme = useTheme();

const ArtistWithdrawMoney = props => {
  const styles = makeStyle(theme)
  const [isSelected, setSelection] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [checked, setChecked] = useState('first');
  const [name, setName] = useState(null);

  return (
    <SafeAreaView style={GLOBAL_STYLES.containerHome}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: heightToDp(30) }}>
        <Header backBtnGrey />
        <Text
          style={[
            {
              fontFamily: fonts.hk_bold,
              color: '#193356',
              fontSize: 40,
              marginHorizontal: widthToDp(5),
            },
          ]}>
          {'Withdraw'}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: widthToDp(5),
            marginBottom: 10,
            marginTop: 15,
          }}>
          <Text style={{ fontFamily: fonts.robo_reg, color: '#67718C' }}>Avaiable Kyanchi credit</Text>
          <Text
            style={{
              color: theme.primary,
              fontSize: 18,
              fontFamily: fonts.hk_bold,
            }}>
            PKR 2,000
          </Text>
        </View>
        <Text style={{ marginLeft: widthToDp(5) }}>CHOOSE ONE</Text>
        <View style={styles.balanceContainer}>
          {paymentMethod.map((payment, index) => (
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
                  <Text style={{ fontSize: 16, color: '#67718C' }}> + Add new account</Text>
                </View>
              )}
            </View>
          ))}
        </View>
        <View style={styles.loadContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Amount"
            //   onChangeText={handleNameChange}
            value={name}
          />

          <Text
            style={{
              color: '#9A9A9A',
              fontSize: 17,
              fontFamily: fonts.robo_reg,
              position: 'absolute',
              right: 145,
              top: 30,
            }}>
            Pkr
          </Text>
          <View style={styles.load}>
            <TouchableOpacity>
              <Text style={{ color: 'white' }}>Withdraw</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: widthToDp(4),
            marginVertical: 10,
          }}>
          {amount.map(item => (
            <Text style={styles.txt}>{item}</Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};



export default ArtistWithdrawMoney;
