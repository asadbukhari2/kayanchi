import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { width, heightToDp } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Counter from '../Counter';

const theme = useTheme();
const host = require('../../assets/hostborwn.png');
const car = require('../../assets/car_brown.png');

const index = props => {
  const { price, details, cat, time, onCountChange } = props;
  const [count, setCount] = useState(0);
  const [showMore, setShowMore] = useState(false);

  console.log('count', count);
  console.log('price', parseInt(price * count));

  const increment = () => {
    setCount(count + 1);
    onCountChange(count + 1, price * (count + 1));
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      onCountChange(count - 1, price * (count - 1));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.shownView}>
        <View>
          <Text style={styles.catName}>{cat}</Text>
          <Text style={styles.priceTxt}> Rs {price}</Text>
        </View>
        <Counter count={count} onPressIncrement={increment} onPressDecrement={decrement} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 16,
        }}>
        <Text style={[styles.secondRowTxt, { color: theme.darkBlack }]}>{time}</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setShowMore(!showMore)}
          style={{ flexDirection: 'row', alignItems: 'center' }}>
          {/* <Feather
              name={showMore ? 'chevrons-up' : 'chevrons-down'}
              style={styles.moreIcon}
            /> */}
          <Image source={car} style={styles.iconStyle} />
          <Image source={host} style={styles.iconStyle} />
          <Text style={[styles.secondRowTxt, { color: theme.linkTxt }]}>
            {/* {showMore ? 'Less Details' : 'More Details'} */}
            View
          </Text>
        </TouchableOpacity>
      </View>
      {/* {showMore && <Text style={styles.details}>{details}</Text>} */}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    width: width * 0.91,
    padding: heightToDp(2.2),
    marginVertical: heightToDp(2.2),
    alignSelf: 'center',
    backgroundColor: theme.background,
    borderRadius: 10,
  },
  shownView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  catName: {
    fontFamily: fonts.robo_med,
    fontSize: 16,
    lineHeight: 18.75,
    color: theme.darkBlack,
  },
  iconStyle: {
    width: 25,
    height: 25,
    marginHorizontal: 5,
  },
  priceTxt: {
    fontFamily: fonts.hk_medium,
    marginTop: 8,
    fontSize: 16,
    lineHeight: 19.2,
    color: '#1583D8',
  },
  moreIcon: {
    fontSize: heightToDp(5),
    marginRight: 8.9,
    color: theme.linkTxt,
  },
  secondRowTxt: {
    fontFamily: fonts.robo_reg,
    fontSize: 16,
    lineHeight: 18.75,
  },
  details: {
    fontSize: 14,
    marginBottom: 16,
    fontFamily: fonts.segoi,
    lineHeight: 18.62,
    color: theme.darkBlack,
  },
});
