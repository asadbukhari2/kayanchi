import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components';

import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { GLOBAL_STYLES } from '../../utils/styles';
import { useTheme, fonts } from '../../utils/theme';

const theme = useTheme();

const ALL = [
  {
    orderNumber: '#334758',
    address: 'DHA Phase 6...',
    date: '2 Dec, 2022',
    preference: 'Travelling',
    icon: require('../../assets/car-front.png'),
    status: 'new',
  },
  {
    orderNumber: '#334758',
    address: 'DHA Phase 6...',
    date: '2 Dec, 2022',
    preference: 'Travelling',
    icon: require('../../assets/car-front.png'),
    status: 'new',
  },
  {
    orderNumber: '#334758',
    address: 'DHA Phase 6...',
    date: '2 Dec, 2022',
    preference: 'Hosting',
    icon: require('../../assets/hosting.png'),
    status: 'new',
  },
  {
    orderNumber: '#334758',
    address: 'DHA Phase 6...',
    date: '2 Dec, 2022',
    preference: 'Hosting',
    icon: require('../../assets/hosting.png'),
    status: 'new',
  },
];

const ConsumerYourOrders = props => {
  return (
    <SafeAreaView style={GLOBAL_STYLES.containerHome}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: heightToDp(30) }}>
        <Header backBtnGrey />
        <Text style={GLOBAL_STYLES.title}>{'My Order'}</Text>
        <View
          style={{
            width: width * 0.9,
            height: heightToDp(10),
            marginTop: heightToDp(6.7),
            backgroundColor: theme.background,
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              width: widthToDp(21),
              borderRadius: widthToDp(2),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: fonts.robo_reg,
                fontSize: 16,
              }}>
              {'All'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: widthToDp(21),
              borderRadius: widthToDp(2),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: fonts.robo_reg,
                fontSize: 16,
              }}>
              {'On-going'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: widthToDp(21),
              borderRadius: widthToDp(2),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: fonts.robo_reg,
                fontSize: 16,
              }}>
              {'Complete'}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: width * 0.9,
            // backgroundColor: 'red',
            marginVertical: 15,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: theme.counterGrey,
              fontFamily: fonts.robo_reg,
              fontSize: heightToDp(3.6),
              lineHeight: heightToDp(5.1),
            }}>
            {'All sites'}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('../../assets/Vector.png')}
              style={{
                width: widthToDp(3.1),
                height: heightToDp(2.9),
                alignSelf: 'center',
                marginRight: 5,
              }}
            />
            <Text style={{ color: theme.counterGrey }}>{'Filter & Sort'}</Text>
          </View>
        </View>
        {ALL.map((item, index) => {
          console.log(item);
          return (
            <View
              style={{
                width: width * 0.9,
                backgroundColor: item.preference === 'Travelling' ? theme.primary : theme.background,
                borderRadius: widthToDp(4),
                alignSelf: 'center',
                padding: 16,
                marginVertical: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: item.preference === 'Travelling' ? theme.background : theme.darkBlack,
                    fontFamily: fonts.robo_reg,
                    fontSize: heightToDp(5.1),
                    fontWeight: '700',
                    lineHeight: heightToDp(5.9),
                  }}>
                  {'#334758'}
                </Text>
                <View
                  style={{
                    width: widthToDp(14.5),
                    height: heightToDp(6.4),
                    borderRadius: widthToDp(12),
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    // opacity: 0.2,
                  }}>
                  <Text
                    style={{
                      color: item.preference === 'Travelling' ? theme.background : theme.darkBlack,
                      fontFamily: fonts.sans_bold,
                      fontSize: widthToDp(3.6),
                      lineHeight: 20,
                    }}>
                    {'NEW'}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 18,
                }}>
                <Text
                  style={{
                    fontFamily: fonts.robo_reg,
                    fontSize: widthToDp(3.6),
                    lineHeight: heightToDp(4.3),
                    color: item.preference === 'Travelling' ? theme.background : theme.darkBlack,
                  }}>
                  {'DHA Phase 6...'}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 9,
                }}>
                <Text
                  style={{
                    fontFamily: fonts.hk_regular,
                    fontSize: widthToDp(3.6),
                    lineHeight: heightToDp(5),
                    color: item.preference === 'Travelling' ? theme.background : theme.darkBlack,
                  }}>
                  {'2 Dec, 2022'}
                </Text>
                <Text
                  style={{
                    fontFamily: fonts.hk_regular,
                    fontSize: widthToDp(3.6),
                    lineHeight: heightToDp(5),
                    color: item.preference === 'Travelling' ? theme.background : theme.darkBlack,
                  }}>
                  {'7:30 - 8:30 AM'}
                </Text>
                <View
                  style={{
                    width: widthToDp(21.7),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    // backgroundColor: 'red',
                  }}>
                  <Text
                    style={{
                      fontFamily: fonts.hk_regular,
                      fontSize: widthToDp(3.6),
                      lineHeight: heightToDp(5),
                      color: item.preference === 'Travelling' ? theme.background : theme.darkBlack,
                    }}>
                    {item.preference}
                  </Text>
                  <Image
                    source={item.icon}
                    style={{
                      width: 16,
                      height: 18,
                      tintColor: item.preference === 'Travelling' ? 'white' : 'black',
                    }}
                  />
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default ConsumerYourOrders;
