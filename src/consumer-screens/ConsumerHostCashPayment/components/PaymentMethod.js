import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { fonts, useTheme } from '../../../utils/theme';
import { RadioButton } from '../../../components';
import { heightToDp, widthToDp } from '../../../utils/Dimensions';
import EasyPaisa from '../../../assets/easypaisa.png';
import JazzCash from '../../../assets/jazzcashDark.png';
import ToggleSwitch from 'toggle-switch-react-native';
import CheckBox from '@react-native-community/checkbox';

const theme = useTheme();
const paymentMethod = [
  {
    title: 'pay using ',
    value: 'easyPaisa',
    phoneNumbr: '**** ****78-',
    imageLink: EasyPaisa,
  },
  {
    title: 'pay using ',
    value: 'jazzCash',
    phoneNumbr: '**** ****780',
    imageLink: JazzCash,
  },
];
const PaymentMethod = () => {
  const [isSelected, setSelection] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [checked, setChecked] = useState('first');
  const [isPrivate, setIsPrivate] = useState(false);
  const handlePrivate = data => {
    console.log(data);
    setIsPrivate(previousState => !previousState);
  };
  return (
    <View style={[styles.container]}>
      <View style={styles.balanceContainer}>
        <View style={[styles.spacing]}>
          <View style={styles.SwitchContent}>
            <Text style={{ fontWeight: fonts.robo_reg, fontSize: 16, color: '#67718C' }}>{'Cash'}</Text>
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
              {/* <Switch
                value={isPrivate}
                onValueChange={handlePrivate}
                thumbColor={isPrivate ? theme.primary : '#eee'}
                trackColor={{false: 'grey', true: 'grey'}}
                style={styles.switch}
              /> */}
            </View>
          </View>
          <View style={[styles.SwitchContent, { marginTop: 10, marginBottom: 15 }]}>
            <Text style={{ fontWeight: fonts.robo_reg, fontSize: 16, color: '#67718C' }}>{'Kayanchi Wallet'}</Text>
            <Text style={{ color: '#668C6A', fontFamily: fonts.hk_bold, fontSize: 16 }}>RS 5000</Text>
            <View style={styles.switchContainer}>
              {/* <Switch
                value={isPrivate}
                onValueChange={handlePrivate}
                thumbColor={isPrivate ? theme.primary : '#eee'}
                trackColor={{false: 'grey', true: 'grey'}}
                style={styles.switch}
              /> */}
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
          </View>
        </View>
        {paymentMethod.map((payment, index) => (
          <View key={index} style={[styles.separator, styles.spacing]}>
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isSelected && selectedMethod === payment.value}
                onValueChange={value => {
                  if (value) {
                    setSelection(true);
                    setSelectedMethod(payment.value);
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
        ))}
      </View>
    </View>
  );
};

export default PaymentMethod;
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    // paddingHorizontal: 11,
    paddingVertical: 8,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  balanceContainer: {
    backgroundColor: 'white',
    marginVertical: heightToDp(1),

    paddingVertical: heightToDp(3),
    borderRadius: 10,
  },
  spacing: {
    marginHorizontal: widthToDp(3),
    paddingHorizontal: widthToDp(2),
  },
  SwitchContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center' },
  separator: {
    borderTopWidth: 0.5,
    // borderBottomWidth: 1,
    borderColor: theme.lightPrimary,
    paddingVertical: 10,
  },
});
