import React from 'react';
import {useTheme, fonts} from '../../../utils/theme';
import {heightToDp, width, widthToDp} from '../../../utils/Dimensions';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Button} from '../../../components';
const theme = useTheme();

export default function OrderCard({onPressView}) {
  return (
    <View
      style={{
        width: width * 0.9,
        backgroundColor: '#fff',
        // backgroundColor:
        //   item.preference === 'Travelling' ? theme.primary : theme.background,
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
            color: theme.darkBlue,

            fontFamily: fonts.hk_bold,
            fontSize: heightToDp(5.1),
            lineHeight: heightToDp(5.9),
          }}>
          Amjad Ali
          {/* {'#334758'} */}
        </Text>
        <View
          style={{
            width: widthToDp(44.5),
            height: heightToDp(6.4),
            borderRadius: widthToDp(12),
            alignItems: 'center',
            // justifyContent: 'center',
            // opacity: 0.2,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // justifyContent: 'space-between',
            }}>
            <Text
              style={{
                // color:
                //   item.preference === 'Travelling'
                //     ? theme.background
                //     : theme.darkBlack,
                fontFamily: fonts.sans_bold,
                fontSize: widthToDp(3.6),
                lineHeight: 20,
              }}>
              {'wants to'}{' '}
            </Text>
            <Text>Host</Text>
            <Image
              source={require('../../../assets/hosting.png')}
              style={{
                resizeMode: 'contain',
                width: 29,
                height: 29,
                marginLeft: 20,
              }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <Text
          style={{
            fontFamily: fonts.robo_reg,
            fontSize: widthToDp(3.6),
            lineHeight: heightToDp(4.3),
            color: theme.darkBlack,

            // color:
            //   item.preference === 'Travelling'
            //     ? theme.background
            //     : theme.darkBlack,
          }}>
          {'SERVICES'}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: theme.blue, fontSize: 14, paddingHorizontal: 3}}>
            3.5 Kms
          </Text>
          <Text>away from you</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {/* <View
          style={{
            // flexDirection: 'row',
            // justifyContent: 'space-between',
            marginVertical: 9,
          }}> */}
        <View>
          <Text
            style={{
              fontFamily: fonts.robo_reg,
              fontSize: widthToDp(3.6),
              lineHeight: heightToDp(5),

              color: theme.counterGrey,

              // color:
              //   item.preference === 'Travelling'
              //     ? theme.background
              //     : theme.darkBlack,
            }}>
            {'3x Foot Massage'}
          </Text>
          <Text
            style={{
              fontFamily: fonts.robo_reg,
              fontSize: widthToDp(3.6),
              lineHeight: heightToDp(5),

              color: theme.counterGrey,
              // color:
              //   item.preference === 'Travelling'
              //     ? theme.background
              //     : theme.darkBlack,
            }}>
            {'3x Foot Massage'}

            {/* {'7:30 - 8:30 AM'} */}
          </Text>

          <Text
            style={{
              fontFamily: fonts.robo_reg,
              fontSize: 12,
              lineHeight: heightToDp(5),

              color: theme.blue,
              // color:
              //   item.preference === 'Travelling'
              //     ? theme.background
              //     : theme.darkBlack,
            }}>
            {'2 more services...'}

            {/* {'7:30 - 8:30 AM'} */}
          </Text>

          <Text
            style={{
              fontFamily: fonts.hk_regular,
              fontSize: 18,
              lineHeight: heightToDp(5),

              color: '#67506D',
              // color:
              //   item.preference === 'Travelling'
              //     ? theme.background
              //     : theme.darkBlack,
            }}>
            {'RS 3400'}

            {/* {'7:30 - 8:30 AM'} */}
          </Text>
        </View>
        <View style={{width: widthToDp(40), marginTop: 10}}>
          <Text>HOSTING AT:</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../../../assets/location2.png')} />
            <Text style={{color: theme.blue}}>North Nazimabad</Text>
          </View>
        </View>

        {/* </View> */}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <Button
          btnStyle={{
            backgroundColor: theme.blue,
            width: widthToDp(40),
            height: heightToDp(10),
          }}
          onPress={onPressView}
          title="View"
        />
        <Button
          btnStyle={{
            backgroundColor: '#EEEEEF',
            width: widthToDp(40),
            height: heightToDp(10),
          }}
          title="Cancel"
          titleStyle={{color: theme.blue, fontFamily: fonts.robo_med}}
        />
      </View>
    </View>
  );
}
