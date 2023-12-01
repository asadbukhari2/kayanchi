/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { widthToDp, heightToDp } from '../../../utils/Dimensions';
import { fonts } from '../../../utils/theme';
import { useSelector } from 'react-redux';
import { GET_ARTIST_METRICES } from '../../../redux/actions/homeAction';
const completion = require('../../../assets/Completion.png');
const punctuality = require('../../../assets/Punctuality.png');
const availability = require('../../../assets/Availabilty.png');

const Performance = React.memo(() => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const user = useSelector(state => state.auth.user);

  const fetchOrdersSummary = async () => {
    setLoading(true);
    const res = await GET_ARTIST_METRICES(user.id);

    const resp = [
      {
        percantage: `${res.completion_rate}%`,
        title: 'Completion Rate',
        Description: res.total_orders
          ? `You completed ${res.completed_order} out of ${res.total_orders} jobs`
          : 'You have done 0 Jobs',
        imageLink: completion,
      },
      {
        percantage: `${res.punctuality_rate}%`,
        title: 'Punctuality',
        Description: res.total_orders
          ? `You completed ${res.punctual_orders} out of ${res.total_orders} jobs`
          : 'You have done 0 Jobs',
        imageLink: punctuality,
      },
      {
        percantage: `${res.availability_rate}%`,
        title: 'Availabilty Rate',
        Description: res.total_orders
          ? `You completed ${res.accepted_orders} out of ${res.total_orders} jobs`
          : 'You have done 0 Jobs',
        imageLink: availability,
      },
    ];
    setData(resp);

    setLoading(false);
  };

  useEffect(() => {
    fetchOrdersSummary();
  }, []);

  return (
    <View>
      {loading ? (
        <View style={{ height: 100, alignItems: 'center', justifyContent: 'center' }}>
          <Text
            style={{
              color: '#0F2851',
              fontFamily: fonts.hk_medium,
            }}>
            Loading...
          </Text>
        </View>
      ) : (
        data.map((item, index) => (
          <View key={item.title} style={styles.performanceContainer}>
            <View>
              <Text style={styles.performanceHeading}>
                {item.percantage.includes('.')
                  ? Number(item.percantage.split('%')[0]).toFixed(2)
                  : item.percantage.split('%')[0]}
                %
              </Text>
              <Text style={styles.performanceSubHeading}>{item.title}</Text>
              <Text style={{ color: '#677790', fontFamily: fonts.robo_med }}>{item.Description}</Text>
            </View>
            <View>
              <Image source={item.imageLink} style={styles.imageSource} />
            </View>
          </View>
        ))
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  imageSource: {
    width: 55,
    height: 55,
    resizeMode: 'contain',
    marginLeft: widthToDp(10),
    marginTop: heightToDp(2),
  },
  performanceContainer: {
    backgroundColor: 'white',
    marginHorizontal: widthToDp(5),
    marginVertical: heightToDp(2),
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: heightToDp(5),
    paddingHorizontal: widthToDp(7),
  },
  performanceHeading: {
    fontSize: 36,
    fontFamily: fonts.hk_bold,
    color: '#5ba842',
  },
  performanceSubHeading: { color: '#5ba842', fontSize: 20 },
});

export default Performance;
