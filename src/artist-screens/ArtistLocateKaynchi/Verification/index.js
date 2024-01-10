import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import makeStyle from '../artistLocateKaynchiStyles/verification.style';
import { useTheme } from '../../../utils/theme';
const theme = useTheme();

export default function index() {
  const styles = makeStyle(theme)
  return (
    <View>
      <Text>index</Text>
    </View>
  );
}


