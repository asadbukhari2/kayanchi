import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import OrderConfirmCard from '../OrderConfirmCard';
import MultiButton from '../MultiButton';
import clockcolor from '../../assets/clockcolor.png';
import { heightToDp, widthToDp, width } from '../../utils/Dimensions';
import {fonts, useTheme} from '../../utils/theme';
const carBrown = require('../../assets/car_brown.png');
const location = require('../../assets/Path.png');
const panic = require('../../assets/panic.png');
const contact = require('../../assets/contact.png');

const theme = useTheme();
const OrderDetails = ({data, showIndicators = false}) => {
  return (
    <>
      {showIndicators && (
        <View style={styles.indicatorView}>
          <View style={styles.row}>
            <Image
              source={clockcolor}
              style={{
                width: 30,
                height: 30,
                marginLeft: 5,
                resizeMode: 'contain',
              }}
            />
            <Text style={styles.indicatorTxt}>30 min</Text>
          </View>
        </View>
      )}

      <View
        style={{
          width: width * 0.91,
          alignSelf: 'center',
          padding: heightToDp(4.5),
          backgroundColor: theme.background,
          borderRadius: 15,
          marginTop: 15,
        }}>
        {data.map((item, index) => (
          <View
            key={index}
            style={{marginTop: index > 0 ? heightToDp(6.7) : 0}}>
            <OrderConfirmCard
              serviceName={item.serviceName}
              artistName={item.artistName}
              serviceCount={item.serviceCount}
              distance={item.distance}
              screen={'OrderConfirm'}
            />
          </View>
        ))}
      </View>

      {showIndicators && (
        <View style={[styles.indicatorView, {marginVertical: 20}]}>
          <View style={styles.row}>
            <MultiButton
              image={contact}
              title={'Contact Artist'}
              btnStyle={{backgroundColor: '#668C6A'}}
            />
            <MultiButton
              image={panic}
              title={'Panic'}
              btnStyle={{backgroundColor: '#EC615B'}}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f7f7f7',
      paddingTop: heightToDp(8),
    },
  
    orderContainer: {
      backgroundColor: 'white',
      // width: widthToDp(44),
      marginHorizontal: widthToDp(5),
      // width: (width * 0.91) / 2,
      paddingVertical: heightToDp(5),
      paddingHorizontal: widthToDp(1),
      borderRadius: 10,
    },
    orderDetails: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    OrderImage: {
      height: 25,
      width: 25,
      resizeMode: 'contain',
    },
    indicatorTxt: {
      fontSize: 16,
      fontFamily: fonts.robo_reg,
      color: theme.darkBlack,
      lineHeight: 18.75,
      marginLeft: widthToDp(2),
    },
    dot: {
      width: 9,
      height: 9,
      borderRadius: 9 / 2,
    },
    indicatorView: {marginHorizontal: 24, marginTop: heightToDp(2)},
    row: {flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
    img: {
      resizeMode: 'cover',
      height: heightToDp(66.95),
      width: widthToDp(69.9),
      alignSelf: 'center',
      marginTop: heightToDp(6.7),
    },
    ratingModal: {marginHorizontal: widthToDp(5)},
    latestbutton: {
      backgroundColor: '#a77246',
      padding: 5,
      color: 'white',
      fontSize: 12,
      textTransform: 'uppercase',
      paddingLeft: widthToDp(3),
      paddingRight: widthToDp(3),
      borderRadius: 50,
    },
    headingName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    textBold: {
      fontWeight: 'bold',
    },
  
    txt: {
      fontSize: 16,
      marginHorizontal: 24,
      fontFamily: fonts.robo_reg,
      color: theme.darkBlack,
      marginTop: 8,
      lineHeight: 18.75,
      marginRight: widthToDp(5),
      textAlign: 'center',
    },
    title: {
      fontSize: 24,
      marginHorizontal: 24,
      fontFamily: fonts.robo_med,
      color: theme.lightBlack,
      marginTop: 23,
      lineHeight: 28.13,
      textAlign: 'center',
    },
  });
  