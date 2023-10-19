import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { widthToDp, heightToDp } from '../../../utils/Dimensions';
import { fonts } from '../../../utils/theme';
export default function Performance({ PerformanceData }) {
  return (
    <View>
      {PerformanceData.map(item => (
        <>
          <View style={styles.performanceContainer}>
            <View>
              <Text style={styles.performanceHeading}>{item.percantage}</Text>
              <Text style={styles.performanceSubHeading}>{item.title}</Text>
              <Text>{item.Description}</Text>
            </View>
            <View>
              <Image source={item.imageLink} style={styles.imageSource} />
            </View>
          </View>
        </>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  imageSource: {
    width: 40,
    height: 40,
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
    paddingVertical: heightToDp(5),
    paddingHorizontal: widthToDp(7),
  },
  performanceHeading: { fontSize: 36, fontFamily: fonts.robo_bold, color: '#5ba842' },
  performanceSubHeading: { color: '#5ba842', fontSize: 20 },
});
