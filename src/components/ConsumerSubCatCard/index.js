import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { width, heightToDp, widthToDp } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Counter from '../Counter';
import { useNavigation } from '@react-navigation/native';
import { convertMinutesToRange } from '../../utils/helper';

const host = require('../../assets/hostborwn.png');
const car = require('../../assets/car_brown.png');

const theme = useTheme();

const ConsumerSubCatCard = props => {
  const {
    price,
    cat,
    time,
    discountPercentage,
    discountedPrice,
    isDiscount,
    isTravelling,
    isHosting,
    id,
    details,
    catName,
  } = props;

  const [showMore, setShowMore] = useState(false);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.shownView}>
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: widthToDp(3) }}>
            <Text style={styles.catName}>{cat.trim()}</Text>
            {isDiscount && (
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
                {discountPercentage}% off
              </Text>
            )}
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: widthToDp(3) }}>
            <Text style={isDiscount ? styles.discountPrice : styles.priceTxt}>
              Rs {isDiscount ? discountedPrice : price}
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
          onPress={() => {
            navigation.navigate('ArtistGlowMakeUp', {
              price,
              cat,
              time,
              discountPercentage,
              discountedPrice,
              isDiscount,
              isTravelling,
              isHosting,
              id,
              details,
              catName,
            });
            setShowMore(!showMore);
          }}
          style={{ flexDirection: 'row', alignItems: 'center' }}>
          {isTravelling && <Image source={car} style={styles.iconStyle} />}
          {isHosting && <Image source={host} style={styles.iconStyle} />}
          <Text style={[styles.secondRowTxt, { color: theme.linkTxt }]}>View</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConsumerSubCatCard;

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
  discountPrice: {
    color: '#9A9A9A',
    fontSize: 10,
    fontFamily: fonts.hk_medium,
    textDecorationLine: 'line-through',
    marginTop: heightToDp(2),
    marginLeft: 5,
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
