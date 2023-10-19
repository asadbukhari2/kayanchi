import { ScrollView, StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';
import { Button, Header, OrderServiceCard } from '../../components';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import hostBrown from '../../assets/hostborwn.png';
import special_braids from '../../assets/special_braids.png';
import { Counter } from '../../components';
const theme = useTheme();

const DATA = [
  {
    serviceName: 'Haircut',
    serviceCount: 3,
    artistName: 'Narmeen iqbal',
    distance: '3.2 kms',
  },
];

const offeringData = [
  {
    imageLink: special_braids,
    title: 'Special Braids',
    amount: 'Rs 2000',
  },
  {
    imageLink: special_braids,
    title: 'Special Braids',
    amount: 'Rs 2000',
  },
];

const ConsumerAddToCart = props => {
  const [count, setCount] = useState(0);

  // Define functions to handle increment and decrement
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header backBtnGrey />
        <Text style={styles.title}>{'Your Cart'}</Text>
        <Text style={[styles.titleTxt, { marginTop: 14, marginBottom: 6, textTransform: 'uppercase' }]}>
          {'Hosting address'}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: widthToDp(6.7),
          }}>
          <Text
            style={{
              color: '#50A2E1',
              width: widthToDp(64),
              fontFamily: fonts.robo_reg,
              fontSize: 16,
            }}>
            House A9, Lane 14-C, Main Mina Bazaar Commercial, Block 6, Karachi
          </Text>
          <Image source={hostBrown} style={{ height: 38, width: 38, marginRight: 10 }} />
        </View>

        <View
          style={{
            width: width * 0.91,
            alignSelf: 'center',
            backgroundColor: 'white',
            marginHorizontal: widthToDp(5),
            borderRadius: 15,
            paddingVertical: 15,
            marginTop: 15,
          }}>
          {DATA.map((item, index) => {
            return (
              <View style={{ marginTop: index > 0 ? heightToDp(6.7) : 0 }}>
                <Text style={[styles.artistLabel, { paddingHorizontal: 15 }]}>ARTIST</Text>
                <Text style={[styles.artistName, { paddingHorizontal: 15 }]}>{'Marmeen'}</Text>
                <Text
                  style={{
                    color: '#50A2E1',
                    paddingHorizontal: 15,
                    fontFamily: fonts.robo_reg,
                    fontSize: 14,
                  }}>
                  {'3.2 kms'} <Text style={{ color: '#67718C' }}>away from you</Text>
                </Text>
                <Text style={[styles.artistLabel, { fontSize: 18, paddingHorizontal: 15, marginTop: 15 }]}>
                  Appointment Date & Time
                </Text>
                <Text style={[styles.artistName, { paddingHorizontal: 15, marginTop: 5 }]}>{'26th, April, 2023'}</Text>
                <Text style={{ color: '#67718C', paddingHorizontal: 15 }}>7:30 - 8:30 PM</Text>
                <View style={styles.separator}></View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: widthToDp(4),
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: 20,
                        fontFamily: fonts.hk_bold,
                        color: '#2F3A58',
                      }}>
                      Haircut
                    </Text>
                    <Text
                      style={{
                        color: '#67718C',
                        fontFamily: fonts.robo_reg,
                        fontSize: 16,
                      }}>
                      1-2 hrs
                    </Text>
                    <Text
                      style={{
                        color: '#50A2E1',
                        fontFamily: fonts.robo_reg,
                        fontSize: 16,
                      }}>
                      {'Rs 1500'}
                    </Text>
                  </View>
                  <Counter
                    count={count}
                    onPressIncrement={increment}
                    onPressDecrement={decrement}
                    btnStyle={{ backgroundColor: '#E1E1E1' }}
                    iconStyle={{ color: 'white' }}
                    countStyle={{ color: '#84668C' }}
                  />
                </View>
                <View style={styles.separator}></View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginHorizontal: widthToDp(4),
                    paddingVertical: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#67718C',
                      fontFamily: fonts.robo_reg,
                    }}>
                    Total service Charges
                  </Text>
                  <Text
                    style={{
                      fontSize: 24,
                      color: '#84668C',
                      fontFamily: fonts.hk_bold,
                    }}>
                    Rs 7,510.95
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
        <View>
          <Text
            style={{
              color: '#1583D8',
              marginHorizontal: widthToDp(8),
              marginVertical: 10,
              fontFamily: fonts.robo_reg,
              fontSize: 16,
            }}>
            {' '}
            + Add more Services
          </Text>
          <Text
            style={{
              color: '#2F3A58',
              fontSize: 20,
              fontFamily: fonts.hk_bold,
              marginHorizontal: widthToDp(5),
            }}>
            Narmeen is also offering
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          {offeringData.map(data => (
            <View style={styles.offeringContainer}>
              <Image source={data.imageLink} style={{ width: 127, height: 140, resizeMode: 'cover' }} />
              <View
                style={{
                  width: widthToDp(35),
                  backgroundColor: 'white',
                  marginTop: -13,
                  padding: 5,
                }}>
                <Text style={{ color: '#2F3A58', fontSize: 16, fontFamily: fonts.robo_reg }}>{data.title}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={{ color: '#1583D8', fontSize: 13, fontFamily: fonts.hk_regular }}>{data.amount}</Text>
                  <TouchableOpacity>
                    <Feather
                      name="plus"
                      size={10}
                      color="white"
                      style={{
                        backgroundColor: '#AFAFAF',
                        padding: 4,
                        borderRadius: 20,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
        <View style={{ marginVertical: 25 }}>
          <Button
            title={'Proceed to Order'}
            btnStyle={{}}
            onPress={() =>
              props.navigation.navigate('ConsumerHomeStack', {
                screen: 'ConsumerCashPayment',
              })
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConsumerAddToCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  offeringContainer: { marginLeft: widthToDp(5) },
  title: {
    marginTop: heightToDp(5.5),
    width: width * 0.868,
    alignSelf: 'center',
    fontFamily: fonts.hk_bold,
    fontSize: 34,
    lineHeight: 40.81,
    color: '#2F3A58',
  },
  subTitle: {
    marginTop: heightToDp(6.7),
    width: width * 0.868,
    alignSelf: 'center',
    fontFamily: fonts.hk_bold,
    fontSize: 14,
    lineHeight: 20,
    color: theme.backIcon,
  },
  separator: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 5,
  },
  artistLabel: {
    fontFamily: fonts.hk_bold,
    fontSize: 18,
    lineHeight: 20,
    color: '#2F3A58',
    marginTop: heightToDp(2.2),
  },
  artistName: {
    fontFamily: fonts.robo_reg,
    fontSize: 14,
    lineHeight: 20,
    color: '#67718C',
  },
  titleTxt: {
    fontFamily: fonts.hk_bold,
    fontSize: 14,
    lineHeight: 20,
    color: '#67718C',
    marginLeft: widthToDp(6.7),
  },
});
