import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AddNewBtn, Header } from '../../components';
import { heightToDp, widthToDp, width } from '../../utils/Dimensions';
import { GLOBAL_STYLES } from '../../utils/styles';
import { fonts, useTheme } from '../../utils/theme';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient'; // Import the LinearGradient component
import arrowdownloadmoney from '../../assets/arrowdownloadmoney.png';
import withdrawnarrow from '../../assets/withdrawnarrow.png';

// import CardComponent from './components/CardComponent';
// import PromoCodeComponent from './components/PromoCodeComponent';
const theme = useTheme();

const ArtistMyWallet = props => {
  return (
    <SafeAreaView style={GLOBAL_STYLES.containerHome}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: heightToDp(30) }}>
        <Header backBtnGrey />
        <Text style={[GLOBAL_STYLES.title]}>{'My Wallet'}</Text>

        <Text
          style={{
            fontSize: 16,
            color: '#67718C',
            marginLeft: widthToDp(6),
            marginRight: widthToDp(6),
            marginBottom: 9,
            fontFamily: fonts.robo_reg,
            marginTop: 10,
          }}>
          {'Our wallet allows you to view, withdrawn or top up the money using digit payments'}
        </Text>

        <Text
          style={{
            textAlign: 'center',
            color: '#67718C',
            fontSize: 16,
            fontFamily: fonts.robo_reg,
            marginTop: 15,
          }}>
          Avaiable Kyanchi credit{' '}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: theme.primary,
            fontSize: 32,
            fontFamily: fonts.hk_bold,
          }}>
          PKR 2,000
        </Text>

        <View style={styles.balanceContainer}>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('ArtistProfileStack', {
                screen: 'ArtistLoad',
              })
            }>
            <LinearGradient
              colors={['#67506D', '#84668C']}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={styles.loadMoney}>
              <Image source={arrowdownloadmoney} style={styles.iconloadMoney} />
              <Text style={styles.text}>Load Money</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('ArtistProfileStack', {
                screen: 'ArtistWithdrawMoney',
              })
            }>
            <LinearGradient
              colors={['#3E5F41', '#668C6A']}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={styles.withdrawmoney}>
              <Image source={withdrawnarrow} style={styles.iconwithdrawmoney} />
              <Text style={styles.text2}>Withdraw Money</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('ArtistProfileStack', {
              screen: 'ArtistPaymentHistory',
            })
          }>
          <Text
            style={{
              textAlign: 'center',
              color: '#1583D8',
              fontSize: 14,
              marginTop: 10,
              fontFamily: fonts.robo_med,
              marginTop: widthToDp(10),
            }}>
            View Payment history
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistMyWallet;

const styles = StyleSheet.create({
  loadMoney: {
    width: widthToDp(44),
    height: heightToDp(27),
    borderRadius: 10,
  },
  withdrawmoney: {
    width: widthToDp(44),
    height: heightToDp(27),
    borderRadius: 10,
  },
  balanceContainer: {
    flexDirection: 'row',
    marginHorizontal: widthToDp(5),
    justifyContent: 'space-between',
    marginTop: 15,
  },
  iconloadMoney: { width: 25, height: 25, resizeMode: 'contain', margin: 13 },
  iconwithdrawmoney: {
    width: 25,
    height: 31,
    resizeMode: 'contain',
    position: 'absolute',
    right: 5,
  },
  text: { color: 'white', paddingLeft: 15, marginRight: widthToDp(19) },
  text2: {
    color: 'white',
    paddingLeft: 15,
    position: 'absolute',
    bottom: heightToDp(5),
    marginRight: widthToDp(15),
  },
});
