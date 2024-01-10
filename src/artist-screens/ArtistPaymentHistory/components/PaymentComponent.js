import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { heightToDp, widthToDp, width } from '../../../utils/Dimensions';
import { fonts, useTheme } from '../../../utils/theme';
import makeStyle from './styles';
const theme = useTheme()
const PaymentComponent = ({ payment }) => {
  const styles = makeStyle(theme)
  return (
  <View style={styles.paymentContainer}>
    <View>
      <Image source={payment.imageLink} style={styles.image} />
      <Text style={{ paddingTop: 20 }}>{payment.status}</Text>
    </View>
    <View style={styles.reason}>
      <Text style={{ color: '#67718C', fontSize: 12, fontFamily: fonts.robo_bold }}>{payment.id}</Text>
      <Text style={{ color: '#668C6A', paddingVertical: 9 }}>{payment.reason}</Text>
      <Text
        style={{
          color: '#193356',
          fontSize: 16,
          fontFamily: fonts.hk_bold,
        }}>
        {payment.amount}
      </Text>
    </View>
    <View>
      <Text style={{ fontSize: 12 }}>Transaction id: {payment.transactionId}</Text>
      <Text
        style={{
          marginTop: heightToDp(10),
          fontSize: 10,
          textAlign: 'right',
        }}>
        {payment.date}
      </Text>
    </View>
  </View>
  )
};

export default PaymentComponent;


