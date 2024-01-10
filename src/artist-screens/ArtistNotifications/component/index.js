import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { width } from '../../../utils/Dimensions';
import { fonts, useTheme } from '../../../utils/theme';
import makeStyle from './styles';

const theme = useTheme();

const ArtistNotifications = props => {
  const { unRead, title, body } = props;
  const styles = makeStyle(theme)
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



export default ArtistNotifications;
