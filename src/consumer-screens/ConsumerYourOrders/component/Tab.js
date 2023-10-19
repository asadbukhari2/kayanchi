import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { widthToDp } from '../../../utils/Dimensions';
import { useTheme } from '../../../utils/theme';

const theme = useTheme();

const index = props => {
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
          fontFamily: fonts.robo_reg,
          fontSize: 16,
          color: tab === title ? theme.background : theme.darkBlue,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({});
