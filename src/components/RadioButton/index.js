import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';

const theme = useTheme();

const RadioButton = props => {
  const { text, containerStyle, source, isSelected, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={[styles.container, containerStyle]}>
      <View style={styles.radioCircle}>{isSelected && <View style={styles.radioDot} />}</View>
      <Text style={styles.txt}>{text}</Text>
      {source && <Image source={source} style={styles.image} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  radioCircle: {
    width: widthToDp(5),
    height: heightToDp(5),
    borderRadius: 9,
    backgroundColor: theme.homeBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioDot: {
    width: widthToDp(3.6),
    height: heightToDp(3.6),
    borderRadius: heightToDp(3.6) / 2,
    backgroundColor: theme.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  txt: {
    fontSize: 16,
    fontFamily: fonts.robo_reg,
    lineHeight: 18.75,
    color: theme.darkBlack,
    marginHorizontal: widthToDp(4.5),
  },
  image: {
    width: 19,
    height: 19,
    resizeMode: 'contain',
  },
});

export default RadioButton;
