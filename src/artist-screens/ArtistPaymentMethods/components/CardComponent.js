import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { fonts, useTheme } from '../../../utils/theme';
import { heightToDp, widthToDp } from '../../../utils/Dimensions';

const theme = useTheme();

const CardComponent = props => {
  const { makeDefault, titleData, state, number2, number, defaultCard } = props;
  return (
    <View style={styles.container}>
      <View style={styles.carDetail}>
        <Text style={{ color: theme.greyText }}>{titleData}</Text>
        <Text style={{ color: '#1583D8' }}>{state}</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.cardNumber}>
          <Text style={{ color: theme.greyText }}>{number}</Text>
          <Text style={{ color: '#84668C' }}>{defaultCard}</Text>
        </View>
        <View style={styles.cardNumber}>
          <Text style={{ color: theme.greyText }}>{number2}</Text>
          <Text style={{ color: '#1583D8' }}>{makeDefault}</Text>
        </View>
        <Text style={{ color: theme.greyText }}>+ Add new card</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    marginHorizontal: widthToDp(5),
    paddingHorizontal: widthToDp(3),
    paddingVertical: heightToDp(5),
    borderRadius: 10,
  },
  cardNumber: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: heightToDp(3),
  },
  carDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginHorizontal: widthToDp(5),
    marginTop: heightToDp(5),
    marginBottom: 5,
  },
});

export default CardComponent;
