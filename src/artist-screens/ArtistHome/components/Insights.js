import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { widthToDp } from '../../../utils/Dimensions';
import { fonts, useTheme } from '../../../utils/theme';

import { GET_INSIGHTS } from '../../../redux/actions/homeAction';

const impression = require('../../../assets/impressions.png');

const theme = useTheme();

const limitOptions = [
  { title: 'Last Month', value: 30 },
  { title: 'Bi Month', value: 14 },
  { title: 'Weekly', value: 7 },
];

const Insights = React.memo(() => {
  const [loading, setLoading] = useState(true);
  const [limitIndex, setLimitIndex] = useState(0);
  const [insightsData, setInsightsData] = useState([]);

  const fetchInsights = async _ => {
    setLoading(true);
    const res = await GET_INSIGHTS(_);
    const result = [];
    Object.entries(res).forEach(([k, v]) => {
      let key = k.split('_').join(' ');
      key = key[0].toUpperCase() + key.slice(1);

      result.push({ title: key, count: v });
    });

    setInsightsData(result);
    setLoading(false);
  };

  const handleArrowClick = direction => {
    if (direction === 'left') {
      setLimitIndex(prevIndex => Math.max(prevIndex - 1, 0));
    } else if (direction === 'right') {
      setLimitIndex(prevIndex => Math.min(prevIndex + 1, limitOptions.length - 1));
    }
  };

  useEffect(() => {
    fetchInsights(limitOptions[limitIndex].value);
  }, [limitIndex]);

  return (
    <View style={styles.insight}>
      <View style={styles.insightDetail}>
        <View>
          <Text
            style={{ color: theme.greyText, fontFamily: fonts.hk_bold, fontSize: 18 }}
            onPress={() => {
              handleArrowClick('right');
            }}>
            Insights
          </Text>
        </View>
        <View style={styles.arrowDetail}>
          <TouchableOpacity
            onPress={() => {
              handleArrowClick('left');
            }}
            style={{ padding: 5 }}>
            <Text
              style={{
                color: limitIndex !== 0 ? theme.primary : theme.greyText,
                fontSize: 20,
                fontWeight: 'bold',
                padding: 4,
              }}>
              {'<'}
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              marginHorizontal: widthToDp(5),
              color: '#0F2851',
              fontFamily: fonts.hk_medium,
            }}>
            {limitOptions[limitIndex].title}
          </Text>

          <TouchableOpacity onPress={() => handleArrowClick('right')} style={{ padding: 5 }}>
            <Text
              style={{
                color: limitIndex !== limitOptions.length - 1 ? theme.primary : theme.greyText,
                fontSize: 20,
                fontWeight: 'bold',
                padding: 4,
              }}>
              {'>'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
        insightsData.map((item, index) => (
          <View key={item.title} style={styles.impressionDetail}>
            <View>
              <Text style={{ color: '#0F2851', fontFamily: fonts.hk_medium }}>
                {item.title[0].toUpperCase() + item.title.slice(1)}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: '#0F2851', fontFamily: fonts.hk_medium }}>{item.count}</Text>
              <Image
                // source={item.imageLink}
                source={impression}
                style={{
                  width: 8,
                  height: 12,
                  resizeMode: 'contain',
                  marginLeft: 5,
                }}
              />
            </View>
          </View>
        ))
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  insight: {
    backgroundColor: 'white',
    margin: widthToDp(5),
    borderRadius: 10,
    padding: 10,
    zIndex: -1,
  },
  impressionDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 7,
  },
  insightDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  arrow: { height: 12, width: 12, resizeMode: 'contain' },
  arrowDetail: { flexDirection: 'row', alignItems: 'center' },
});

export default Insights;
