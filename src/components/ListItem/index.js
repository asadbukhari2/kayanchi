// ListItem.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';

const ListItem = ({ label }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.bulletPoint}>•</Text>
      <Text style={styles.itemText}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    paddingHorizontal: widthToDp(4),
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 2,
  },
  bulletPoint: {
    fontSize: 14,
    marginRight: 8,
    color: '#67718C',
    fontFamily:fonts.robo_med
  },
  itemText: {
    fontSize: 14,
    color: '#67718C', 
    fontFamily:fonts.robo_med,
  },
});

export default ListItem;
