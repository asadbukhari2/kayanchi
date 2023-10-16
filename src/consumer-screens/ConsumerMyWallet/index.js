import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AddNewBtn, Header} from '../../components';
import {heightToDp, widthToDp, width} from '../../utils/Dimensions';
import {GLOBAL_STYLES} from '../../utils/styles';
import {fonts, useTheme} from '../../utils/theme';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient'; // Import the LinearGradient component
import deducted from '../../assets/deducted.png';
import refund from '../../assets/refund.png';
import PaymentComponent from './components/PaymentComponent';
const theme = useTheme();
const payments = [
  {
    id: '#0210234',
    reason: 'ReasonReasonReason',
    amount: 'PKR 2000',
    transactionId: '02234',
    date: '2nd Dec, 8:30AM',
    imageLink: deducted,
    status: 'Deducted',
  },
  {
    id: '#0210234',
    reason: 'ReasonReasonReason',
    amount: 'PKR 2000',
    transactionId: '02234',
    date: '2nd Dec, 8:30AM',
    imageLink: deducted,
    status: 'Deducted',
  },
  {
    id: '#0210234',
    reason: 'ReasonReasonReason',
    amount: 'PKR 2000',
    transactionId: '02234',
    date: '2nd Dec, 8:30AM',
    imageLink: deducted,
    status: 'Deducted',
  },
  // ... other payment objects
];

const ConsumerMyWallet = props => {
  return (
    <SafeAreaView style={GLOBAL_STYLES.containerHome}>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: heightToDp(30)}}>
        <Header backBtnGrey />
        <Text
          style={[
            GLOBAL_STYLES.title,
            { fontFamily: fonts.hk_bold},
          ]}>
          {'My Wallet'}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: widthToDp(6),
            marginBottom: 10,
            marginTop: 15
          }}>
          <Text style={{color: '#67718C', fontFamily: fonts.robo_reg}}>
            Avaiable Kyanchi credit
          </Text>
          <Text
            style={{
              color: theme.primary,
              fontSize: 14,
              fontFamily: fonts.hk_bold,
            }}>
            PKR 2,000
          </Text>
        </View>

        <View style={styles.separator}></View>
        {payments.map((payment, index) => (
          <React.Fragment key={index}>
            <PaymentComponent payment={payment} />
            <View style={styles.separator}></View>
          </React.Fragment>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  paymentContainer: {
    flexDirection: 'row',
    marginHorizontal: widthToDp(5),
    paddingVertical: heightToDp(2),
    width: width * 0.45,
  },
  reason: {marginLeft: widthToDp(5)},
  image: {height: 36, width: 38},
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

export default ConsumerMyWallet;
