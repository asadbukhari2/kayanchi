import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';

const location = require('../../assets/Path.png');
import FinishedOrderStep from '../../components/FinishedOrderStep';
import { getOrderTimeline } from '../../redux/actions';
import SimpleOrderCard from '../../components/SimpleOrderCard';
const host_green = require('../../assets/host_green.png');
const car_brown = require('../../assets/car_brown.png');

const ArtistFinishedTimeline = props => {
  const [loading, setLoading] = useState(true);
  const [timeline, setTimeline] = useState(null);
  const order = props.route.params;

  const fetchTimeline = _ => {
    getOrderTimeline(_)
      .then(res => {
        setTimeline(res.timeline);
        setLoading(false);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchTimeline(order.order.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: widthToDp(5),
            width: widthToDp(90),
          }}>
          <View style={{ marginLeft: 0 }}>
            <Header
              backBtn
              title="help?"
              titleStyle={{
                position: 'absolute',
                right: 0,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#84668C',
                fontSize: 14,
                color: '#84668C',
                paddingVertical: 5,
                paddingHorizontal: 15,
              }}
            />
          </View>
        </View>
        <View>
          <Text style={styles.heading}>Timeline </Text>
        </View>

        <SimpleOrderCard order={order} />

        <View style={styles.separator} />
        {!loading && <FinishedOrderStep data={timeline} />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistFinishedTimeline;

const styles = StyleSheet.create({
  heading: {
    color: '#0F2851',
    fontSize: 40,
    marginLeft: widthToDp(4),
    fontFamily: fonts.hk_bold,
  },
  textCenter: {
    color: '#67718C',
    textAlign: 'center',
    marginHorizontal: widthToDp(12),
    marginTop: 10,
  },
  container: {
    flex: 1,
    paddingTop: heightToDp(7),
    backgroundColor: '#F7F7F7',
  },
  stepIndicatorContainer: {
    marginVertical: 20,
    flexDirection: 'column', // Display the steps in a column layout
    paddingHorizontal: widthToDp(5),
  },
  progressStepContainer: {
    alignItems: 'center',
  },
  stepContent: {
    marginTop: 20,
    alignItems: 'center',
  },
  orderContainer: {
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    marginHorizontal: widthToDp(5),
    paddingVertical: heightToDp(5),
    paddingHorizontal: widthToDp(1),
  },
  orderDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  OrderImage: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  latestbutton: {
    padding: 5,
    color: 'white',
    fontSize: 12,
    borderRadius: 50,
    backgroundColor: '#a77246',
    textTransform: 'uppercase',
    paddingLeft: widthToDp(3),
    paddingRight: widthToDp(3),
  },
  separator: {
    height: 1,
    marginVertical: 5,
    backgroundColor: '#EEEEEE',
  },
  indicatorView: {
    marginBottom: 20,
    marginHorizontal: 24,
    marginTop: heightToDp(6),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingName: {
    fontSize: 20,
    color: '#0F2851',
    fontFamily: fonts.hk_bold,
  },
  textBold: {
    fontWeight: 'bold',
  },
});
