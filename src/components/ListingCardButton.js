import React, { useEffect, useState } from 'react';
import SimpleOrderCard from './SimpleOrderCard';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { fonts, useTheme } from '../utils/theme';
import { heightToDp, width, widthToDp } from '../utils/Dimensions';
import MultiButton from './MultiButton';
const location = require('../assets/Path.png');

const theme = useTheme();

const ListingCardButton = ({ order, onPress, type, navigation }) => {
  const [section, setSection] = useState(null);
  console.log(order);

  const viewTimelineHandler = () => {
    navigation.navigate('ArtistOrderStack', {
      screen: 'ArtistTimeline',
      params: { ...order, timlineType: 'active' },
    });
  };
  const activeOrderHandler = () => {
    navigation.navigate('ArtistOrderStack', {
      screen: 'ArtistConfirmOrderRequest',
      params: { ...order },
    });
  };
  const TimelineHandler = () => {
    navigation.navigate('ArtistOrderStack', {
      screen: 'ArtistTimeline',
      params: { ...order, timlineType: 'finished' },
    });
  };
  const CancelHandler = () => {
    navigation.navigate('ArtistOrderStack', {
      screen: 'ArtistTimeline',
      params: { ...order, timlineType: 'cancelled' },
    });
  };
  const GroomingDoneHandler = () => {
    navigation.navigate('ArtistOrderStack', {
      screen: 'ArtistGroomingDone',
    });
  };

  const renderSection = () => {
    if (order.order.order_status !== 'Cancelled') {
      if (order.order.order_status === 'Waiting') {
        return (
          <View style={styles.indicatorView}>
            <View style={styles.row}>
              <MultiButton
                title="View"
                btnStyle={{
                  backgroundColor: '#67506D',
                  fontSize: 14,
                  height: heightToDp(10.5),
                }}
                onPress={activeOrderHandler}
              />
              <MultiButton
                title="Cancel"
                btnStyle={{
                  backgroundColor: '#EEEEEF',
                  fontSize: 14,
                  height: heightToDp(10.5),
                }}
                titleStyle={{ color: '#67506D' }}
                onPress={CancelHandler}
              />
            </View>
          </View>
        );
      } else if (order.order.order_status === 'Completed') {
        return (
          <View style={styles.indicatorView}>
            <View style={styles.row}>
              <MultiButton
                title="View Timeline"
                btnStyle={{
                  backgroundColor: '#67506D',
                  height: heightToDp(10.5),
                }}
                onPress={TimelineHandler}
              />
              <MultiButton
                title="Rate"
                btnStyle={{
                  backgroundColor: '#eee',
                  height: heightToDp(10.5),
                }}
                titleStyle={{ fontFamily: fonts.hk_medium, color: theme.dark }}
                onPress={GroomingDoneHandler}
              />
            </View>
          </View>
        );
      } else if (order.order.order_status === 'Accepted') {
        return (
          <TouchableOpacity
            onPress={viewTimelineHandler}
            style={{
              borderRadius: 30,
              bottom: -10,
              paddingVertical: widthToDp(3),
              paddingHorizontal: widthToDp(10),
              backgroundColor: '#84668C',
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 14,
                textTransform: 'uppercase',
                fontFamily: fonts.robo_bold,
                alignSelf: 'center',
              }}>
              View Timeline
            </Text>
          </TouchableOpacity>
        );
      }
    } else {
      return (
        <>
          <View style={styles.orderDetails}>
            <View>
              <Text style={[styles.textBold, { marginTop: 5 }]}>
                {order.order.is_hosting ? 'HOSTING AT:' : 'TRVELLING TO:'}
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={location} style={{ height: 15, width: 15, resizeMode: 'contain' }} />
                <Text style={{ color: '#32aee3' }}>{order.default_artist_address.text}</Text>
              </View>
            </View>
            <Image source={order.imageLink} style={styles.OrderImage} resizeMode="contain" />
          </View>

          <Text style={styles.orderStatus}>{order.order.order_status}</Text>
          <Text style={[styles.subheading, { overflow: 'hidden' }]}>{order.cancelReason} </Text>
        </>
      );
    }
    return section;
  };

  useEffect(() => {
    setSection(renderSection());
  }, []);

  return <SimpleOrderCard order={order} onPress={onPress} type={type} section={section} />;
};

export default ListingCardButton;

const styles = StyleSheet.create({
  heading: {
    color: '#0F2851',
    fontSize: 40,
    marginLeft: widthToDp(4),
    fontFamily: fonts.hk_bold,
  },
  btnContainer: {
    flexDirection: 'row',
    marginHorizontal: widthToDp(5),
    marginVertical: 10,
  },
  btnContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: widthToDp(5),
    marginVertical: 10,
    backgroundColor: 'white',
  },
  tabText: {
    fontSize: 16,
    color: 'black',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  activeTab: {
    backgroundColor: theme.primary,
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  button: {
    color: '#A77246',
    borderColor: '#A77246',
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 10,
    fontSize: 14,
    marginRight: 10,
  },
  orderStatus: {
    backgroundColor: '#eee',
    color: theme.dark,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: widthToDp(25),
    textAlign: 'center',
    borderRadius: 20,
    marginTop: 15,
    marginBottom: 5,
  },
  subheading: {
    fontSize: 12,
    color: '#193356',
    marginRight: 10,
    width: widthToDp(30),
  },
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingTop: heightToDp(7),
  },
  orderContainer: {
    backgroundColor: 'white',
    width: width * 0.91,
    marginHorizontal: widthToDp(5),
    marginBottom: 20,
    paddingVertical: heightToDp(5),
    paddingHorizontal: widthToDp(1),
    borderRadius: 10,
  },
  orderDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  OrderImage: {
    height: 30,
    width: 30,
    marginHorizontal: 10,
  },
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
  indicatorView: { marginHorizontal: 4, marginTop: heightToDp(3), width: '100%' },
  row: { flexDirection: 'row', alignItems: 'center' },

  headingName: {
    fontSize: 20,
    color: '#0F2851',
    fontFamily: fonts.hk_bold,
  },
  textBold: {
    color: '#0F2851',
    fontFamily: fonts.robo_med,
  },
});
