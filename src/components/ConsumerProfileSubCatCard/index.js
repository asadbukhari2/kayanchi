import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { width, heightToDp, widthToDp } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Counter from '../Counter';

const host = require('../../assets/hostborwn.png');
const car = require('../../assets/car_brown.png');

const theme = useTheme();

const ConsumerProfileSubCatCard = props => {
  const { price, details, cat, time, onCountChange } = props;
  const [count, setCount] = useState(0);
  const [showMore, setShowMore] = useState(false);

  console.log('count', count);
  console.log('price', parseInt(price * count));

  const increment = () => {
    setCount(count + 1);
    onCountChange(count + 1, price * (count + 1));
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      onCountChange(count - 1, price * (count - 1));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.shownView}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: width * 0.84,
              marginLeft: widthToDp(3),
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.catName}>{cat}</Text>
              <Text
                style={{
                  paddingHorizontal: heightToDp(2),
                  paddingVertical: heightToDp(0.5),
                  backgroundColor: '#fae5ff',
                  borderRadius: 10,
                  marginLeft: 5,
                  color: '#2F3A58',
                  fontFamily: fonts.robo_med,
                  fontSize: 12,
                }}>
                20% off
              </Text>
            </View>

            <Counter count={count} onPressIncrement={increment} onPressDecrement={decrement} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: widthToDp(3),
            }}>
            <Text style={styles.priceTxt}>{price}</Text>
            <Text
              style={{
                color: '#9A9A9A',
                fontSize: 10,
                fontFamily: fonts.hk_medium,
                textDecorationLine: 'line-through',
                marginTop: heightToDp(2),
                marginLeft: 5,
              }}>
              Rs 2,000
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 16,
        }}>
        <Text style={[styles.secondRow]}>{time}</Text>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setShowMore(!showMore)}
          style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={car} style={styles.iconStyle} />
          <Image source={host} style={styles.iconStyle} />
          <Text style={[styles.secondRowTxt, { color: theme.linkTxt }]}>{'View'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConsumerProfileSubCatCard;

const styles = StyleSheet.create({
  container: {
    width: width * 0.91,
    paddingVertical: heightToDp(3.2),
    marginVertical: heightToDp(2.2),
    alignSelf: 'center',
    backgroundColor: theme.background,
    borderRadius: 10,
  },
  shownView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  catName: {
    fontFamily: fonts.robo_med,
    fontSize: 18,
    lineHeight: 18.75,
    color: theme.darkBlack,
  },
  priceTxt: {
    fontFamily: fonts.hk_medium,
    marginTop: 8,
    fontSize: 16,
    lineHeight: 19.2,
    color: '#1583D8',
  },

  iconStyle: {
    width: 17.1,
    height: 15.43,
    resizeMode: 'contain',
    marginHorizontal: 5,
  },
  moreIcon: {
    fontSize: heightToDp(5),
    marginRight: 8.9,
    color: theme.linkTxt,
  },
  secondRowTxt: {
    fontFamily: fonts.robo_reg,
    fontSize: 12,
    lineHeight: 18.75,
    marginLeft: widthToDp(4),
    marginRight: widthToDp(3),
  },
  secondRow: {
    fontFamily: fonts.robo_reg,
    fontSize: 16,
    color: '#747474',
    lineHeight: 18.75,
    marginLeft: widthToDp(3),
  },
  details: {
    fontSize: 14,
    marginBottom: 16,
    fontFamily: fonts.segoi,
    lineHeight: 18.62,
    color: theme.darkBlack,
  },
});
