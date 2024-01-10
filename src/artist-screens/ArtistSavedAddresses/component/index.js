import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { fonts, useTheme } from '../../../utils/theme';
import { heightToDp, width } from '../../../utils/Dimensions';
import makeStyle from './artistSavedAddresses.styles';

const theme = useTheme();

const ArtistSavedAddresses = props => {
  const { area, address, lastOrder, onEdit } = props;
  const styles = makeStyle(theme)
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.area}>{area}</Text>
        <TouchableOpacity activeOpacity={0.7} onPress={onEdit}>
          <Text style={styles.editTxt}>Edit</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.heading}>Address</Text>
      <Text style={styles.value}>{address}</Text>
      {lastOrder && (
        <Text style={[styles.value, { color: theme.linkTxt, marginVertical: heightToDp(4.5) }]}>
          {'Last order ' + lastOrder}
        </Text>
      )}
    </View>
  );
};



export default ArtistSavedAddresses;
