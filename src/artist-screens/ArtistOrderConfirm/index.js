import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';
import { Button, Header, OrderServiceCard } from '../../components';
import Octicons from 'react-native-vector-icons/Octicons';
import makeStyle from './artistOrderConfirm.style';

const theme = useTheme();

const DATA = [
  {
    serviceName: 'Haircut',
    serviceCount: 3,
    artistName: 'Narmeen iqbal',
  },
  {
    serviceName: 'Haircut',
    serviceCount: 3,
    artistName: 'Narmeen iqbal',
  },
];

const ArtistOrderConfirm = props => {
  const styles = makeStyle(theme)
  return (
    <SafeAreaView style={styles.container}>
      <Header backBtnGrey />
      <Text style={styles.title}>{'Order confirmed #334758'}</Text>
      <Text style={[styles.titleTxt, { marginTop: 24 }]}>{'Thurday, 2nd December'}</Text>
      <Text style={styles.titleTxt}>{'7:30 - 8:30 AM'}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
        <Octicons
          name={'calendar'}
          style={{
            fontSize: 22,
            color: theme.backIcon,
            marginLeft: widthToDp(6.7),
          }}
        />
        <Text style={[styles.titleTxt, { color: theme.linkTxt, marginLeft: 8 }]}>{'Add to calendar'}</Text>
      </View>
      <Text
        style={[
          styles.titleTxt,
          {
            color: theme.backIcon,
            marginTop: heightToDp(8.9),
            marginBottom: heightToDp(6.7),
          },
        ]}>
        {'You are hosting at your place.'}
      </Text>
      <View
        style={{
          width: width * 0.91,
          alignSelf: 'center',
          padding: heightToDp(4.5),
          backgroundColor: theme.background,
        }}>
        {DATA.map((item, index) => {
          return (
            <View style={{ marginTop: index > 0 ? heightToDp(6.7) : 0 }}>
              <OrderServiceCard
                serviceName={item.serviceName}
                artistName={item.artistName}
                serviceCount={item.serviceCount}
                screen={'OrderConfirm'}
              />
            </View>
          );
        })}
      </View>
      <Button
        title={'Continue'}
        btnStyle={{ position: 'absolute', bottom: heightToDp(5.5) }}
        onPress={() => props.navigation.navigate('MyTabs', { screen: 'Home' })}
      />
    </SafeAreaView>
  );
};

export default ArtistOrderConfirm;


