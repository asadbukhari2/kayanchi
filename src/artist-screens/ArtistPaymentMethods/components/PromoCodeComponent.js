import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { heightToDp, widthToDp } from '../../../utils/Dimensions';

import { fonts, useTheme } from '../../../utils/theme';
import logo1 from '../../../assets/logo1.png';
import booking from '../../../assets/booking.png';

const theme = useTheme();
const PromoCodeComponent = ({ code, discount }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <TouchableOpacity
      onPress={toggleActive}
      style={[
        styles.promocode,
        {
          backgroundColor: isActive ? theme.primary : 'white',
        },
      ]}>
      <Image
        source={isActive ? booking : logo1} // Change logo based on isActive
        style={{ width: 23, height: 33, resizeMode: 'contain' }}
      />
      <View>
        <Text
          style={{
            fontSize: 20,
            color: isActive ? 'white' : '#2F3A58',
            // fontWeight: '700',
            fontFamily: fonts.sans_bold,
          }}>
          {code}
        </Text>
        <Text style={{ color: isActive ? 'white' : 'black' }}>{discount}</Text>
      </View>
      <Text style={{ color: isActive ? 'white' : '#2F3A58' }}>Apply</Text>
    </TouchableOpacity>
  );
};

export default PromoCodeComponent;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    marginHorizontal: widthToDp(4),
    paddingHorizontal: widthToDp(3),
    paddingVertical: heightToDp(5),
    borderRadius: 20,
  },
  cardNumber: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: heightToDp(3),
  },
  promocode: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: widthToDp(5),
    paddingVertical: heightToDp(5),
    marginHorizontal: widthToDp(4),
    backgroundColor: 'white',
    borderRadius: 10,
  },
  carDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: widthToDp(4),
    marginTop: heightToDp(5),
    marginBottom: 5,
  },
});
