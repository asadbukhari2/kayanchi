import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {height, heightToDp, width, widthToDp} from '../../../utils/Dimensions';
import {useTheme, fonts} from '../../../utils/theme';

const theme = useTheme();

export default function LatestBookingCard() {
  return (
    <View
      style={{
        width: width * 0.45,
        alignSelf: 'center',
        backgroundColor: '#F7F7F8',
        marginVertical: 20,
        borderRadius: 10,
      }}>
      <View style={styles.view}>
        <View
          style={{
            width: '100%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 32, resizeMode: 'contain', height: 29}}
            source={require('../../../assets/carIcon.png')}
          />
          <View
            style={{
              backgroundColor: '#E99B17',
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 20,
            }}>
            <Text
              style={{
                fontSize: 12,
                color: theme.background,
                fontFamily: fonts.sans_bold,
              }}>
              INSTANT
            </Text>
          </View>
        </View>
        <View style={{marginVertical: 10}}>
          <Text style={styles.title}>Amjad Ali</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: fonts.robo_med,
                color: theme.darkBlue,
              }}>
              wants to{' '}
              <Text style={{color: theme.primary, textTransform: 'uppercase'}}>
                Travel
              </Text>
            </Text>
            <Feather
              style={{color: '#29AAE2', fontSize: 18, marginLeft: 10}}
              name="info"
            />
          </View>
        </View>
        <View style={{marginVertical: 10}}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: fonts.robo_med,
              color: theme.darkBlue,
            }}>
            SERVICES: Rs 30000
          </Text>
          <View style={{marginTop: 10}}>
            <Text
              style={{
                color: theme.counterGrey,
                fontFamily: fonts.robo_reg,
                fontSize: 14,
              }}>
              Foot Massage 3x
            </Text>
            <Text
              style={{
                fontFamily: fonts.robo_reg,
                fontSize: 14,
                color: theme.counterGrey,
              }}>
              and <Text style={{color: theme.blue}}>2 more services...</Text>
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              fontFamily: fonts.robo_med,
              color: theme.darkBlue,
            }}>
            TRAVELLING TO:
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Entypo
              style={{color: '#29AAE2', fontSize: 18, marginRight: 5}}
              name="location-pin"
            />
            <Text
              style={{
                fontSize: 14,
                fontFamily: fonts.robo_reg,
                color: theme.blue,
              }}>
              Your saloon address
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          height: 50,
          width: '100%',
          flexDirection: 'row',
        }}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: 14,
              color: theme.blue,
              fontFamily: fonts.sans_bold,
            }}>
            Accept
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: '#F9F9F9',
            // marginTop: -10,
          }}>
          <Text
            style={{
              fontSize: 14,
              color: theme.blue,
              fontFamily: fonts.sans_bold,
            }}>
            Cancel
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    backgroundColor: theme.background,
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 20,
    alignSelf: 'center',
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.hk_bold,
    color: theme.darkBlue,
  },
  sub_title: {
    fontSize: 14,
    marginHorizontal: 24,
    fontFamily: fonts.robo_reg,
    color: theme.lightBlack,
  },
});
