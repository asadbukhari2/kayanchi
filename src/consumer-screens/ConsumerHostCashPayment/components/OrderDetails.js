import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../../utils/theme';
import { useSelector } from 'react-redux';
const theme = useTheme();
const OrderDetails = ({ cartItems }) => {
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
  return (
    <View style={[styles.container]}>
      {cartItems &&
        cartItems.map(data => {
          return (
            <View key={data.service_name} style={[styles.flexContainer, styles.spacingTopBottom]}>
              <View style={styles.flexContainer}>
                <Text style={[styles.fontBoldWeight18]}>{data.quantity}x</Text>
                <Text style={[styles.detailHeading]}>{data.service_name}</Text>
              </View>
              <Text style={[styles.textGray]}>Rs {data.quantity * data.price}</Text>
            </View>
          );
        })}

      <View style={styles.flexContainer}>
        <Text style={[styles.textGray, styles.fontBold]}>Travel Cost</Text>
        <Text style={[styles.textGray]}>Rs 800</Text>
      </View>
      <View style={[styles.flexContainer, styles.spacingTopBottom]}>
        <Text style={[styles.textPurple, styles.fontBold]}>Total</Text>
        <Text style={[styles.detailHeading]}>Rs {calculateTotalCart(cartItems)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    paddingHorizontal: 11,
    paddingVertical: 8,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textGray: {
    color: theme.walletGrey,
  },
  fontBoldWeight18: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  detailHeading: {
    color: theme.purple,
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 8,
  },
  textPurple: {
    color: theme.purple,
  },
  spacingTopBottom: {
    marginVertical: 5,
  },
  fontBold: {
    fontWeight: 'bold',
  },
});
export default OrderDetails;
