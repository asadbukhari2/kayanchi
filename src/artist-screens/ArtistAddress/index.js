import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AddNewBtn, Button, Header } from '../../components';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { useTheme, fonts } from '../../utils/theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import makeStyle from './artistAddress.style';

const theme = useTheme();

const ArtistAddress = props => {
  const [address, setAddress] = useState('');
  const styles = makeStyle(theme);
  return (
    <SafeAreaView style={styles.container}>
      <Header backBtnGrey />
      <Text style={styles.title}>{'Where are you located?'}</Text>
      <Text style={styles.subTitle}>{'HOST LOCATION'}</Text>
      <View style={styles.centerView}>
        <TouchableOpacity activeOpacity={0.7} style={[styles.straightRow, styles.currentLocationRow]}>
          <MaterialIcons name={'my-location'} style={styles.icon} />
          <Text style={styles.currentLocation}>{'Use Current Location'}</Text>
        </TouchableOpacity>

        <View style={styles.lowerViewMain}>
          <Text style={styles.radioTitle}>{'Recent locations'}</Text>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setAddress('Tariq Road, karachi')}
            style={[styles.straightRow, styles.firstRadio]}>
            <View style={styles.radioCircle}>
              {address === 'Tariq Road, karachi' && <View style={styles.radioDot} />}
            </View>
            <Text style={styles.radioTxt}>{'Tariq Road, karachi'}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setAddress('DHA, Karachi')}
            style={[styles.straightRow, { paddingVertical: heightToDp(2.2) }]}>
            <View style={styles.radioCircle}>{address === 'DHA, Karachi' && <View style={styles.radioDot} />}</View>
            <Text style={styles.radioTxt}>{'DHA, Karachi'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <AddNewBtn
        title={'Add a new address'}
        onPress={() => {
          console.log('add new address');
        }}
      />
      <Button
        title={'Continue'}
        btnStyle={styles.btn}
        onPress={() => props.navigation.navigate('OrderStack', { screen: 'HostingSpot' })}
      />
    </SafeAreaView>
  );
};



export default ArtistAddress;
