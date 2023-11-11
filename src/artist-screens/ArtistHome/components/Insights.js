import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { widthToDp, heightToDp } from '../../../utils/Dimensions';
import { fonts, useTheme } from '../../../utils/theme';

const impression = require('../../../assets/impressions.png');

const leftArrow = require('../../../assets/left.png');
const rightArrow = require('../../../assets/right.png');
const theme = useTheme();
export default function Insights({ insightData }) {
  return (
    <View style={styles.insight}>
      <View style={[styles.insightDetail, { marginVertical: 10 }]}>
        <View>
          <Text style={{ color: theme.greyText, fontFamily: fonts.hk_bold, fontSize: 18 }}>Insights</Text>
        </View>
        <View style={styles.arrowDetail}>
          <Image source={leftArrow} style={styles.arrow} />
          <Text
            style={{
              marginHorizontal: widthToDp(5),
              color: '#0F2851',
              fontFamily: fonts.hk_medium,
            }}>
            Last Month
          </Text>
          <Image source={rightArrow} style={styles.arrow} />
        </View>
      </View>
      {insightData.map((item, index) => (
        <View key={index} style={styles.impressionDetail}>
          <View>
            <Text style={{ color: '#0F2851', fontFamily: fonts.hk_medium }}>{item.title}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#0F2851', fontFamily: fonts.hk_medium }}>{item.count}</Text>
            <Image
              source={item.imageLink}
              style={{
                width: 8,
                height: 12,
                resizeMode: 'contain',
                marginLeft: 5,
              }}
            />
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  insight: {
    backgroundColor: 'white',
    margin: widthToDp(5),
    borderRadius: 10,
    padding: 10,
  },
  impressionDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 7,
  },
  insightDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  arrow: { height: 12, width: 12, resizeMode: 'contain' },
  arrowDetail: { flexDirection: 'row', alignItems: 'center' },
});
