import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {fonts, useTheme} from '../../../utils/theme';
import {heightToDp, width} from '../../../utils/Dimensions';

const theme = useTheme();

const index = props => {
  const {area, address, artistName, artistContact, lastOrder, onEdit} = props;
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.area}>{area}</Text>
        <TouchableOpacity activeOpacity={0.7} onPress={onEdit}>
          <Text style={styles.editTxt}>{'Edit'}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.heading}>{'Address'}</Text>
      <Text style={styles.value}>{address}</Text>
      <Text style={styles.heading}>{'Artist'}</Text>
      <Text style={styles.value}>{artistName}</Text>
      <Text style={styles.value}>{artistContact}</Text>
      <Text
        style={[
          styles.value,
          {color: theme.linkTxt, marginVertical: heightToDp(4.5)},
        ]}>
        {'Last order ' + lastOrder}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.background,
    width: width * 0.91,
    alignSelf: 'center',
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
  },
  editTxt: {
    fontFamily: fonts.robo_bold,
    fontSize: 16,
    lineHeight: 22,
    color: theme.linkTxt,
  },
  area: {
    fontFamily: fonts.robo_bold,
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: -0.3,
    color: theme.lightBlack,
  },
  heading: {
    fontFamily: fonts.robo_reg,
    fontSize: 14,
    lineHeight: 16,
    color: theme.addressHeadings,
    marginTop: heightToDp(6.7),
    marginBottom: 6,
  },
  value: {
    fontFamily: fonts.robo_reg,
    fontSize: 16,
    lineHeight: 22,
    color: theme.counterGrey,
  },
});

export default index;
