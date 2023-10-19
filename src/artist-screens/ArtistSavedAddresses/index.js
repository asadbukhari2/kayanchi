import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AddNewBtn, Header } from '../../components';
import { heightToDp } from '../../utils/Dimensions';
import { GLOBAL_STYLES } from '../../utils/styles';
import { useTheme } from '../../utils/theme';
import Address from './component';

const theme = useTheme();

const DATA = [
  {
    area: 'DHA phase 6, Itehad lane 8',
    address: '402, building 14c, ittehad lane 8, DH...',
    artistName: 'Narmeen Iqbal',
    artistContact: '92 333 0310876',
    lastOrder: '25th May 2021',
  },
  {
    area: 'DHA phase 6, Itehad lane 8',
    address: '402, building 14c, ittehad lane 8, DH...',
    artistName: 'Narmeen Iqbal',
    artistContact: '92 333 0310876',
    lastOrder: '25th May 2021',
  },
];

const index = props => {
  return (
    <SafeAreaView style={GLOBAL_STYLES.containerHome}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: heightToDp(30) }}>
        <Header backBtnGrey />
        <Text style={GLOBAL_STYLES.title}>{'Saved addresses'}</Text>
        <AddNewBtn
          title={'Add an address'}
          iconColor={theme.counterGrey}
          titleStyle={{ color: theme.counterGrey }}
          onPress={() => props.navigation.navigate('ArtistProfileStack', { screen: 'ArtistLocateKaynchi' })}
        />
        {DATA.map((item, index) => {
          return (
            <Address
              area={item.area}
              address={item.address}
              artistName={item.artistName}
              artistContact={item.artistContact}
              lastOrder={item.lastOrder}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default index;
