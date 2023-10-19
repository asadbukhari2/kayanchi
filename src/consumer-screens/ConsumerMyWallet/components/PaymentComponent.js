import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { heightToDp, widthToDp, width } from '../../../utils/Dimensions';
import { fonts } from '../../../utils/theme';

const PaymentComponent = ({ payment }) => (
  <View style={styles.paymentContainer}>
    <View>
      <Image source={payment.imageLink} style={styles.image} />
      <Text style={{ paddingTop: 20 }}>{payment.status}</Text>
    </View>
    <View style={styles.reason}>
      <Text style={{ color: '#67718C', fontSize: 12, fontFamily: fonts.hk_bold }}>{payment.id}</Text>
      <Text style={{ color: '#668C6A', paddingVertical: 9, fontFamily: fonts.robo_reg }}>{payment.reason}</Text>
      <Text style={{ color: '#193356', fontSize: 16, fontFamily: fonts.hk_bold }}>{payment.amount}</Text>
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
);

export default PaymentComponent;

const styles = StyleSheet.create({
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
