import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts, useTheme} from '../../../utils/theme';
import {Counter} from '../../../components';
import { heightToDp, widthToDp } from '../../../utils/Dimensions';

const theme = useTheme();

const index = props => {
  const {serviceCount, serviceName, artistName} = props;

  const [count, setCount] = useState(serviceCount);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.serviceName}>{serviceName}</Text>
        <Text style={styles.artistLabel}>ARTIST</Text>
        <Text style={styles.artistName}>{artistName}</Text>
      </View>
      <View style={{marginRight:-widthToDp(2.5)}}>
        <Counter
          count={count}
          onPressIncrement={increment}
          onPressDecrement={decrement}
          btnStyle={{backgroundColor: undefined}}
          iconStyle={{color: theme.counterGrey}}
          countStyle={styles.counterCount}
        />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  serviceName: {
    fontFamily: fonts.hk_bold,
    fontSize: 20,
    lineHeight: 20,
    color: theme.darkBlack,
  },
  artistLabel: {
    fontFamily: fonts.robo_light,
    fontSize: 14,
    lineHeight: 20,
    color: theme.greyText,
    marginTop:heightToDp(2.2)
  },
  artistName: {
    fontFamily: fonts.robo_reg,
    fontSize: 16,
    lineHeight: 20,
    color: theme.greyText,
  },
  counterCount: {
    fontSize: 24,
    fontFamily: fonts.hk_bold,
    lineHeight: 30,
    color: theme.primary,
    marginHorizontal: 9,
  },
});
