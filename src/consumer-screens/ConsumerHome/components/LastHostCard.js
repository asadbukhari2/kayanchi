import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {height, heightToDp, width, widthToDp} from '../../../utils/Dimensions';
import {useTheme, fonts} from '../../../utils/theme';

const theme = useTheme();

export default function LastHostCard() {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>Last hosted at North nazmabad</Text>
      <Text style={styles.sub_title}>Amjad is expecting you at 10:30AM</Text>
      <Entypo
        style={{
          position: 'absolute',
          top: 5,
          right: 10,
          color: '#E0E3E7',
          fontSize: widthToDp(5),
        }}
        name="cross"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.background,
    width: width * 0.9,
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 14,
    marginHorizontal: 24,
    fontFamily: fonts.robo_bold,
    color: theme.lightBlack,
  },
  sub_title: {
    fontSize: 14,
    marginHorizontal: 24,
    fontFamily: fonts.robo_reg,
    color: theme.lightBlack,
  },
});
