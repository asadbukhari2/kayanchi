import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AddNewBtn, Header } from '../../components';
import { heightToDp } from '../../utils/Dimensions';
import { GLOBAL_STYLES } from '../../utils/styles';
import { useTheme } from '../../utils/theme';
import Address from './component';
import { getSavedAddresses } from '../../redux/actions';

const theme = useTheme();

const ArtistSavedAddresses = props => {
  const [loading, setLoading] = useState(false);
  const [address, setAddresses] = useState([]);

  useEffect(() => {
    setLoading(true);
    getSavedAddresses()
      .then(res => {
        setAddresses(res);
        setLoading(false);
      })
      .catch(e => {
        console.log('error', e);
        setLoading(false);
      });
  }, []);

  return (
    <SafeAreaView style={GLOBAL_STYLES.containerHome}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: heightToDp(30) }}>
        <Header backBtnGrey />
        <Text style={GLOBAL_STYLES.title}>Saved addresses</Text>
        <AddNewBtn
          title="Add an address"
          iconColor={theme.counterGrey}
          titleStyle={{ color: theme.counterGrey }}
          onPress={() => props.navigation.navigate('ArtistProfileStack', { screen: 'ArtistLocateKaynchi' })}
        />
        {loading ? (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Loading</Text>
          </View>
        ) : (
          address.length > 0 &&
          address?.map(item => {
            return (
              <Address
                key={item.text}
                area={item.city + ', ' + item.country}
                address={item.text}
                lastOrder={item.lastOrder}
              />
            );
          })
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistSavedAddresses;

const styles = StyleSheet.create({
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: 50,
  },
  loadingText: {
    color: theme.dark,
  },
});
