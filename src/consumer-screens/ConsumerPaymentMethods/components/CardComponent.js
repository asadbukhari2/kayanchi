import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { fonts, useTheme } from '../../../utils/theme';
import { heightToDp, widthToDp } from '../../../utils/Dimensions';

const theme = useTheme();

const CardComponent = props => {
  const { makeDefault, titleData, state, number2, number, defaultCard, screen, navigation } = props;
  const navigateToScreen = () => {
    console.log('screen', screen);
    console.log('props', props);

    navigation.navigate('ConsumerProfileStack', { screen: screen });
  };
  return (
    <View style={styles.container}>
      <View style={styles.carDetail}>
        <Text>{titleData}</Text>
        <Text style={{ color: '#1583D8' }}>{state}</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.cardNumber}>
          <Text>{number}</Text>
          <Text>{defaultCard}</Text>
        </View>
        <View style={styles.cardNumber}>
          <Text>{number2}</Text>
          <Text>{makeDefault}</Text>
        </View>
        <TouchableOpacity onPress={navigateToScreen}>
          <Text>+ Add new card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    marginHorizontal: widthToDp(4),
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
    marginHorizontal: widthToDp(4),
    marginTop: heightToDp(5),
    marginBottom: 5,
  },
});

export default CardComponent;
