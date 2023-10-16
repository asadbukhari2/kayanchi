import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {fonts, useTheme} from '../../utils/theme';

const theme = useTheme();

const index = props => {
  const {title, iconColor, titleStyle, onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.addAddress]}>
      <AntDesign
        name={'plus'}
        style={[styles.icon, {color: iconColor ? iconColor : theme.lightBlack}]}
      />
      <Text style={[styles.radioTxt, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addAddress: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.background,
    paddingHorizontal: widthToDp(3.2),
    paddingVertical: heightToDp(5),
    borderRadius: 10,
    width: width * 0.91,
    alignSelf: 'center',
    marginTop: heightToDp(3.7),
  },
  icon: {
    fontSize: 22,
  },
  radioTxt: {
    fontFamily: fonts.robo_reg,
    fontSize: 16,
    lineHeight: 22,
    color: theme.greyText,
    marginLeft: widthToDp(3.5),
  },
});

export default index;
