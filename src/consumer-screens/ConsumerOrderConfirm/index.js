import { ScrollView, StyleSheet, Text, Image, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';
import { Button, Header, OrderServiceCard } from '../../components';
import hostBrown from '../../assets/hostborwn.png';
import travelBrown from '../../assets/travel_brown.png';
import { Fetch } from '../../utils/APIservice';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { getConsumerOrder } from '../../redux/actions/commonActions';
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
  const id = props.route.params.orderId;
  const token = useSelector(state => state.auth.token);
  const orderById = useSelector(state => state.common.orderById);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConsumerOrder(token, id));
  }, [id]);
  return (
    <SafeAreaView style={styles.container}>
      <Header backBtnGrey />
      {orderById && (
        <View>
          <Text style={[styles.title, { fontFamily: fonts.hk_bold }]}>{`Order confirmed ${id.slice(0, 6)}`}</Text>
          {orderById?.createdAt && (
            <Text style={[styles.titleTxt, { marginTop: 24 }]}>
              {moment(orderById?.createdAt).format('DD MMMM,YYYY')}
            </Text>
          )}
          <Text
            style={
              styles.titleTxt
            }>{`${orderById?.booking_slot?.start_time} - ${orderById?.booking_slot?.end_time}`}</Text>
          <Text
            style={{
              color: '#84668C',
              fontFamily: fonts.robo_bold,
              marginTop: 10,
              // fontWeight: '700',
              fontSize: 16,
              marginLeft: widthToDp(6.7),
            }}>
            {orderById?.artist?.name} is {orderById?.is_hosting ? 'hosting' : 'traveling'} you.
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 5,
              justifyContent: 'space-between',
              marginHorizontal: widthToDp(6.7),
            }}>
            <Text
              style={{
                color: '#50A2E1',
                width: widthToDp(60),
              }}>
              {orderById.artist_address && orderById?.artist_address.text}
            </Text>
            {orderById?.isHosting ? (
              <Image source={hostBrown} style={{ height: 35, width: 35, objectFit: 'contain' }} />
            ) : (
              <Image source={travelBrown} style={{ height: 35, width: 35, objectFit: 'contain' }} />
            )}
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
            {orderById?.order_items.map((item, index) => {
              return (
                <View style={{ marginTop: index > 0 ? heightToDp(6.7) : 0 }}>
                  <OrderServiceCard
                    serviceName={orderById?.order_items}
                    artistName={orderById?.artist?.name}
                    serviceCount={item.quantity}
                    distance={orderById.time_to_reach}
                    screen={'OrderConfirm'}
                    total={orderById.total_service_charges}
                  />
                </View>
              );
            })}
          </View>
          <Button
            title={'View Order'}
            onPress={() =>
              props.navigation.navigate('ConsumerHomeStack', {
                screen: 'ConsumerOrderProcess',
              })
            }
          />
        </View>
      )}
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
    color: '#67718C',
    marginLeft: widthToDp(6.7),
  },
});
