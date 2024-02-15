import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { Button, Header } from '../../components';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Service from './component';
import { useSelector } from 'react-redux';
import { ca } from 'date-fns/locale';

const theme = useTheme();

const DATA = [
  {
    serviceName: 'Haircut',
    artistName: 'Narmeen Iqbal',
    serviceCount: 3,
  },
  {
    serviceName: 'Nail Polish',
    artistName: 'Narmeen Iqbal',
    serviceCount: 12,
  },
  {
    serviceName: 'Nail Polish',
    artistName: 'Narmeen Iqbal',
    serviceCount: 12,
  },
];

const ConsumerOrderSummary = props => {
  const cart = useSelector(state => state.common.cart);
  const navigation = useNavigation();
  const { artistTimeSLot } = useSelector(state => state.common.consumerOrder);
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
  const handlePayment = () => {
    console.log('call hova hoon');
    navigation.navigate('ConsumerHomeStack', {
      screen: 'ConsumerCashPayment',
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: heightToDp(30) }}>
        <Header backBtnGrey />
        <Text style={styles.title}>{'Order Summary'}</Text>
        <Text style={styles.subTitle}>{'ADDRESS'}</Text>
        <View style={styles.addressView}>
          <Text style={styles.titleTxt}>
            {'House B91, Lane 4, building 14-C main nishat commercial, DHA phase 6, karachi '}
          </Text>
          <TouchableOpacity style={{ height: heightToDp(9) }}>
            <Icon name={'pencil'} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.centerView}>
          {cart &&
            cart.cart_items.map((item, index) => {
              return (
                <View style={{ marginTop: index > 0 ? heightToDp(6.7) : 0 }}>
                  <Service
                    key={index}
                    serviceName={item.service_name}
                    // artistName={item.artistName}
                    navigation={navigation}
                    serviceCount={item.quantity}
                    serviceId={item.service_id}
                  />
                </View>
              );
            })}
          <Text style={styles.dateLabel}>{'Date and time'}</Text>
          <Text style={styles.dateValue}>{'Thurday, 2nd December'}</Text>
          {artistTimeSLot && (
            <Text style={styles.dateValue}>{`${artistTimeSLot.start_time} - ${artistTimeSLot.end_time}`}</Text>
          )}
          <View style={styles.chargesView}>
            <Text style={styles.dateValue}>{'TOTAL incl VAT'}</Text>
            <Text style={styles.charges}>{`Rs ${calculateTotalCart(cart.cart_items)}`}</Text>
          </View>
        </View>
      </ScrollView>
      <Button title={'Continue'} btnStyle={styles.btn} onPress={() => handlePayment()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.homeBackground,
  },
  title: {
    marginTop: heightToDp(5.5),
    width: width * 0.868,
    alignSelf: 'center',
    fontFamily: fonts.hk_bold,
    fontSize: 34,
    lineHeight: 40.81,
    color: theme.lightBlack,
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
  titleTxt: {
    width: 233,
    fontFamily: fonts.robo_reg,
    fontSize: 16,
    lineHeight: 20,
    color: theme.darkBlack,
  },
  addressView: {
    width: width * 0.868,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  icon: {
    fontSize: 20,
    color: theme.primary,
  },
  centerView: {
    marginTop: heightToDp(4.5),
    backgroundColor: theme.background,
    paddingVertical: heightToDp(6.7),
    paddingHorizontal: widthToDp(4.5),
    width: width * 0.91,
    alignSelf: 'center',
    borderRadius: 10,
  },
  dateLabel: {
    fontFamily: fonts.hk_bold,
    fontSize: 20,
    lineHeight: 20,
    color: theme.darkBlack,
    marginTop: heightToDp(6.7),
    marginBottom: heightToDp(2.2),
  },
  dateValue: {
    fontFamily: fonts.robo_reg,
    fontSize: 16,
    lineHeight: 20,
    color: theme.darkBlack,
  },
  charges: {
    fontFamily: fonts.hk_regular,
    fontSize: 16,
    lineHeight: 20,
    color: theme.darkBlack,
  },
  chargesView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: heightToDp(4.5),
  },
  btn: {
    position: 'absolute',
    bottom: heightToDp(5.5),
  },
});

export default ConsumerOrderSummary;
