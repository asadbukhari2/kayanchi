import {ScrollView, StyleSheet, Text, Image, View} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {fonts, useTheme} from '../../utils/theme';
import {Button, Header, OrderServiceCard} from '../../components';
import Octicons from 'react-native-vector-icons/Octicons';
import hostBrown from '../../assets/hostborwn.png';
const theme = useTheme();

const DATA = [
  {
    serviceName: ['Haircut', 'Hair color'],
    serviceCount: 3,
    artistName: 'Narmeen iqbal',
    distance: '3.2 kms',
  },
];

const ConsumerOrderConfirm = props => {
 
  return (
    <SafeAreaView style={styles.container}>
      <Header backBtnGrey />
      <Text style={[styles.title, {fontFamily:fonts.hk_bold}]}>{'Order confirmed #334758'}</Text>
      <Text style={[styles.titleTxt, {marginTop: 24}]}>
        {'Thurday, 2nd December'}
      </Text>
      <Text style={styles.titleTxt}>{'7:30 - 8:30 AM'}</Text>
      <Text
        style={{
          color: '#84668C',
          fontFamily: fonts.robo_bold,
          marginTop:10,
          // fontWeight: '700',
          fontSize: 16,
          marginLeft: widthToDp(6.7),
        }}>
        Narmeen is hosting you.
      </Text>
      <View style={{flexDirection: 'row',marginTop:5, justifyContent:"space-between",            marginHorizontal: widthToDp(6.7),
}}>
        <Text
          style={{
            color: '#50A2E1',
            width: widthToDp(60),
            
          }}>
          House A9, Lane 14-C, Main Mina Bazaar Commercial, Block 6, Karachi
        </Text>
        <Image source={hostBrown} style={{height: 38, width: 38}} />
      </View>
      {/* <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 8}}>
          <Octicons
            name={'calendar'}
            style={{
              fontSize: 22,
              color: theme.backIcon,
              marginLeft: widthToDp(6.7),
            }}
          />
          <Text
            style={[styles.titleTxt, {color: theme.linkTxt, marginLeft: 8}]}>
            {'Add to calendar'}
          </Text>
        </View> */}

      <View
        style={{
          width: width * 0.91,
          alignSelf: 'center',
          padding: heightToDp(4.5),
          backgroundColor: 'white',
          marginHorizontal: widthToDp(5),
          borderRadius: 15,
          marginTop: 15,
        }}>
        {DATA.map((item, index) => {
          return (
            <View style={{marginTop: index > 0 ? heightToDp(6.7) : 0}}>
              <OrderServiceCard
                serviceName={item.serviceName}
                artistName={item.artistName}
                serviceCount={item.serviceCount}
                distance={item.distance}
                screen={'OrderConfirm'}
              />
            </View>
          );
        })}
      </View>
      <Button
        title={'View Order'}
        btnStyle={{position: 'absolute', bottom: heightToDp(5)}}
        onPress={() =>
          props.navigation.navigate('ConsumerHomeStack', {
            screen: 'ConsumerOrderProcess',
          })
        }
      />
    </SafeAreaView>
  );
};

export default ConsumerOrderConfirm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
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
    fontFamily: fonts.robo_reg,
    fontSize: 16,
    lineHeight: 20,
    color: "#67718C",
    marginLeft: widthToDp(6.7),
  },
});
