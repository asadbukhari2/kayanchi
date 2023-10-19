import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { width } from '../../../utils/Dimensions';
import { fonts, useTheme } from '../../../utils/theme';

const theme = useTheme();

const index = props => {
  const { unRead, title, body } = props;
  return (
    <View style={[styles.container, { backgroundColor: unRead ? theme.primary : theme.background }]}>
      <View style={styles.locationIconView}>
        <Image
          source={require('../../../assets/Vector(2).png')}
          style={[styles.img, { tintColor: unRead ? theme.primary : undefined }]}
        />
      </View>
      <View>
        <Text style={[styles.txt, { fontFamily: fonts.robo_bold, color: unRead ? theme.background : theme.backIcon }]}>
          {title}
        </Text>
        <Text style={[styles.txt, { fontFamily: fonts.robo_reg, color: unRead ? theme.background : theme.backIcon }]}>
          {body}
        </Text>
      </View>
      {unRead && (
        <TouchableOpacity style={styles.viewDetails}>
          <Text style={[styles.txt, { fontFamily: fonts.robo_reg, color: theme.background }]}>{'View details'}</Text>
        </TouchableOpacity>
      )}
      {unRead && <View style={styles.unReadBadge} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    height: 88,
    width: width * 0.91,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
  },
  txt: {
    fontSize: 14,
    lineHeight: 20,
    color: theme.backIcon,
  },
  img: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  viewDetails: {
    position: 'absolute',
    right: 12,
    bottom: 10,
  },
  unReadBadge: {
    position: 'absolute',
    right: 8,
    top: 16,
    width: 11,
    height: 11,
    borderRadius: 11 / 2,
    backgroundColor: theme.msgUnReadBadge,
  },
  locationIconView: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
    backgroundColor: theme.homeBackground,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default index;
