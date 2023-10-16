import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { widthToDp, heightToDp } from '../../../utils/Dimensions'

const impression = require('../../../assets/impressions.png');

const leftArrow = require('../../../assets/left.png');
const rightArrow = require('../../../assets/right.png');

// const insightData = [
//     {
//       title: 'Impression',
//       count: '955',
//       imageLink: impression,
//     },
//     {
//       title: 'Clicks',
//       count: '16',
//       imageLink: impression,
//     },
//     {
//       title: 'Conversions',
//       count: '0.21%',
//       imageLink: impression,
//     },
//   ];
  
export default function Insights({insightData}) {
  return (
    <View style={styles.insight}>
    <View style={styles.insightDetail}>
      <View>
        <Text>Insights</Text>
      </View>
      <View style={styles.arrowDetail}>
        <Image source={leftArrow} style={styles.arrow} />
        <Text style={{marginHorizontal: widthToDp(5)}}>Last Month</Text>
        <Image source={rightArrow} style={styles.arrow} />
      </View>
    </View>

    {insightData.map(item => (
      <>
        <View style={styles.impressionDetail}>
          <View>
            <Text>{item.title}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>{item.count}</Text>
            <Image
              source={item.imageLink}
              style={{width: 15, height: 15, marginLeft: 5}}
            />
          </View>
        </View>
      </>
    ))}
  </View>

  )
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
      arrow: {height: 12, width: 12, resizeMode: 'contain'},
      arrowDetail: {flexDirection: 'row', alignItems: 'center'},
     
})