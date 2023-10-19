import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { height, heightToDp, width, widthToDp } from '../../../utils/Dimensions';
import { useTheme, fonts } from '../../../utils/theme';
const theme = useTheme();

export default function SummarySingleCard({ props }) {
  return (
    <View
      style={{
        height: heightToDp(35),
        backgroundColor: '#FFF',
        width: width * 0.28,
        borderRadius: 10,
        justifyContent: 'space-around',
        paddingHorizontal: 10,
      }}>
      <Image
        style={{
          height: 18,
          width: widthToDp(10),
          resizeMode: 'contain',
          alignSelf: 'flex-end',
        }}
        source={require('../../../assets/pendingIcon.png')}
      />
      <Text
        style={{
          fontFamily: fonts.hk_bold,
          fontSize: heightToDp(7.5),
          color: theme.darkBlue,
        }}>
        {props?.count}
      </Text>
      {props?.type == 'pending' ? (
        <Text
          style={{
            fontFamily: fonts.sans_reg,
            fontSize: heightToDp(4.5),
            color: theme.counterGrey,
          }}>
          {props?.title}
        </Text>
      ) : props?.type == 'Confirmed' ? (
        <Text
          style={{
            fontFamily: fonts.sans_reg,
            fontSize: heightToDp(4.5),
            color: theme.counterGrey,
          }}>
          Bookings Confirmed
        </Text>
      ) : (
        <Text
          style={{
            fontFamily: fonts.sans_reg,
            fontSize: heightToDp(4.5),
            color: theme.counterGrey,
          }}>
          Bookings Complete
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
