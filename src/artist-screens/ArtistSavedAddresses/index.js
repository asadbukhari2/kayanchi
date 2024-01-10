import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AddNewBtn, Header } from '../../components';
import { heightToDp } from '../../utils/Dimensions';
import { GLOBAL_STYLES } from '../../utils/styles';
import { useTheme } from '../../utils/theme';
import Address from './component';
import { getSavedAddresses } from '../../redux/actions';
import makeStyle from './artistSavedAddress.styles';

const theme = useTheme();

const ArtistSavedAddresses = props => {
  const [loading, setLoading] = useState(false);
  const [address, setAddresses] = useState([]);
const styles = makeStyle(theme)
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
          onPress={() => props.navigation.navigate('ArtistLocateKaynchi')}
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
                key={item.address.createdAt}
                area={item.address.city + ', ' + item.address.country}
                address={item.address.text}
                lastOrder={item.latest_order}
              />
            );
          })
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistSavedAddresses;


