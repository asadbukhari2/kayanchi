import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { fonts, useTheme } from '../../../utils/theme';
import { ThemeProvider } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const theme = useTheme();

const Row = props => {
  const { icon, title, onPress } = props;
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.container}>
      <View style={{ position: 'absolute' }}>{icon}</View>
      <Text style={styles.title}>{title}</Text>
      <Ionicons name={'chevron-forward-sharp'} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default Row;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.robo_bold,
    fontSize: 16,
    lineHeight: 22,
    color: theme.counterGrey,
    marginLeft: 40,
  },
  icon: {
    fontSize: 20,
    color: theme.profileForwardGrey,
    position: 'absolute',
    right: 0,
  },
});
