import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fonts, useTheme } from '../../../utils/theme';
import { Counter } from '../../../components';
import { heightToDp, widthToDp } from '../../../utils/Dimensions';
import makeStyle from './style';

const theme = useTheme();

const ArtistOrderSummary = props => {
  const { serviceCount, serviceName, artistName } = props;
const styles = makeStyle(theme)
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
      <View style={{ marginRight: -widthToDp(2.5) }}>
        <Counter
          count={count}
          onPressIncrement={increment}
          onPressDecrement={decrement}
          btnStyle={{ backgroundColor: undefined }}
          iconStyle={{ color: theme.counterGrey }}
          countStyle={styles.counterCount}
        />
      </View>
    </View>
  );
};

export default ArtistOrderSummary;


