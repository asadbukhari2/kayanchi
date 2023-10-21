import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { widthToDp } from '../../../utils/Dimensions';
import { fonts, useTheme } from '../../../utils/theme';

const theme = useTheme();

const ArtistYourOrders = props => {
  const { title } = props;
  const [tab, setTab] = useState('All');
  return (
    <TouchableOpacity
      style={{
        width: widthToDp(21),
        backgroundColor: tab === title ? '#84668C' : theme.background,
        borderRadius: widthToDp(2),
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => setTab(title)}>
      <Text
        style={{
          fontFamily: fonts.robo_bold,
          fontSize: 16,
          color: tab === title ? theme.background : theme.darkBlue,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ArtistYourOrders;

const styles = StyleSheet.create({});
