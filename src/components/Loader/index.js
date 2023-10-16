import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';
import {useTheme} from '../../utils/theme';

export default function index() {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
      }}>
      <ActivityIndicator size={'small'} color={theme.primary} />
    </View>
  );
}

const styles = StyleSheet.create({});
