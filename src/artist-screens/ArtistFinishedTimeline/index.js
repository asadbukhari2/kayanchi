import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';

const location = require('../../assets/Path.png');
import FinishedOrderStep from '../../components/FinishedOrderStep';
import { getOrderTimeline } from '../../redux/actions';
import SimpleOrderCard from '../../components/SimpleOrderCard';
import makeStyle from './artistFinishedTimeLine.style';
const host_green = require('../../assets/host_green.png');
const car_brown = require('../../assets/car_brown.png');
const theme = useTheme();
const ArtistFinishedTimeline = props => {
  const [loading, setLoading] = useState(true);
  const [timeline, setTimeline] = useState(null);
  const order = props.route.params;
  const styles = makeStyle(theme);
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


