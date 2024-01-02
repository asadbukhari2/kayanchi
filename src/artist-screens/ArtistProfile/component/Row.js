import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { fonts, useTheme } from '../../../utils/theme';
import { ThemeProvider } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import makeStyle from './row.styles';

const Row = props => {
  const theme = useTheme();
  const styles = makeStyle(theme);
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
