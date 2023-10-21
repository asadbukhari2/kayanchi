import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';

const theme = useTheme();

const ListHeader = props => {
  const { title, linkText, linkOnPress, titleStyle, linkStyle, containerStyle } = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <TouchableOpacity onPress={linkOnPress} activeOpacity={0.7}>
        <Text style={[styles.link, linkStyle]}>{linkText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: heightToDp(6.7),
  },
  title: {
    fontFamily: fonts.hk_bold,
    fontSize: 14,
    lineHeight: 20,
    color: theme.backIcon,
    paddingHorizontal: widthToDp(6.7),
  },
  link: {
    fontFamily: fonts.robo_reg,
    fontSize: 16,
    lineHeight: 18.75,
    color: theme.linkTxt,
    paddingHorizontal: widthToDp(4.5),
  },
});

export default ListHeader;
