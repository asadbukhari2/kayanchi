import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { widthToDp } from '../../../utils/Dimensions';
import { fonts, useTheme } from '../../../utils/theme';
import makeStyle from './styles/tab.styles';

const theme = useTheme();

const ArtistYourOrders = props => {
  const { title } = props;
  const [tab, setTab] = useState('All');
  const styles = makeStyle(theme)
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

