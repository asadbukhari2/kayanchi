import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Header} from '../../components';
import {heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {fonts, useTheme} from '../../utils/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Service from './component';

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
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex:1}} contentContainerStyle={{paddingBottom:heightToDp(30)}}>
      <Header backBtnGrey />
      <Text style={styles.title}>{'Order Summary'}</Text>
      <Text style={styles.subTitle}>{'ADDRESS'}</Text>
      <View style={styles.addressView}>
        <Text style={styles.titleTxt}>
          {
            'House B91, Lane 4, building 14-C main nishat commercial, DHA phase 6, karachi '
          }
        </Text>
        <TouchableOpacity style={{height: heightToDp(9)}}>
          <Icon name={'pencil'} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.centerView}>
        {DATA.map((item, index) => {
          return (
            <View style={{marginTop: index > 0 ? heightToDp(6.7) : 0}}>
              <Service
                key={index}
                serviceName={item.serviceName}
                artistName={item.artistName}
                serviceCount={item.serviceCount}
              />
            </View>
          );
        })}
        <Text style={styles.dateLabel}>{'Date and time'}</Text>
        <Text style={styles.dateValue}>{'Thurday, 2nd December'}</Text>
        <Text style={styles.dateValue}>{'7:30 - 8:30 AM'}</Text>
        <View style={styles.chargesView}>
          <Text style={styles.dateValue}>{'TOTAL incl VAT'}</Text>
          <Text style={styles.charges}>{'Rs 5680'}</Text>
        </View>
      </View>
      </ScrollView>
      <Button title={'Continue'} btnStyle={styles.btn} onPress={() => props.navigation.navigate('PaymentDetails')} />
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
