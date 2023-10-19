import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { heightToDp } from '../../utils/Dimensions';
import Entypo from 'react-native-vector-icons/Entypo';
import { useTheme, fonts } from '../../utils/theme';

const theme = useTheme();

const index = props => {
  const { count, onPressIncrement, onPressDecrement, btnStyle, countStyle, iconStyle } = props;
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {count > 0 && (
        <TouchableOpacity onPress={onPressDecrement} activeOpacity={0.7} style={[styles.counterBtn, btnStyle]}>
          <Entypo name={'minus'} style={[styles.icon, iconStyle]} />
        </TouchableOpacity>
      )}
      {count > 0 && <Text style={[styles.count, countStyle]}>{count}</Text>}
      <TouchableOpacity onPress={onPressIncrement} activeOpacity={0.7} style={[styles.counterBtn, btnStyle]}>
        <Entypo name={'plus'} style={[styles.icon, iconStyle]} />
      </TouchableOpacity>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  counterBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: theme.primary,
  },
  icon: {
    fontSize: heightToDp(5),
    color: theme.background,
  },
  count: {
    fontSize: 20,
    fontFamily: fonts.hk_semiBold,
    lineHeight: 24,
    color: theme.darkBlack,
    marginHorizontal: 13,
  },
});
