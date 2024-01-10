import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Header } from '../../components';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Service from './component';
import makeStyle from './artistOrderSummary.style';

const theme = useTheme();

const DATA = [
  {
    serviceName: 'Haircut',
    artistName: 'Narmeen Iqbal',
    serviceCount: 3,
  },
  {
    serviceName: 'Nail Polish',
    artistName: 'Narmeen Iqbal',
    serviceCount: 12,
  },
  {
    serviceName: 'Nail Polish',
    artistName: 'Narmeen Iqbal',
    serviceCount: 12,
  },
];

const ArtistOrderSummary = props => {
  const styles = makeStyle(theme)
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: heightToDp(30) }}>
        <Header backBtnGrey />
        <View style={{ height: heightToDp(80), backgroundColor: 'red' }}></View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{
              fontFamily: fonts.hk_bold,
              fontSize: heightToDp(8),
              color: theme.darkBlue,
            }}>
            Amjad Ali
          </Text>
          <Text style={{ marginLeft: 10 }}>4.5</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};



export default ArtistOrderSummary;
