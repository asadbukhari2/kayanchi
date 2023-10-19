import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View, ScrollView, Image, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AddNewBtn, Button, Header, TextInput } from '../../components';
import CircularProgressBar from '../../components/CircularProgressBar';
import CircularProgress from 'react-native-circular-progress-indicator';

import MultiButton from '../../components/MultiButton';
import { heightToDp, widthToDp, width } from '../../utils/Dimensions';
import { GLOBAL_STYLES } from '../../utils/styles';
import { fonts, useTheme } from '../../utils/theme';

const ConsumerApplyPromoCode = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const closeModal = () => {
    setIsModalVisible(false);
  };
  const PromoCodeData = [
    {
      title: 'Invite Bonus',
      content: 'Powered By Kayanchi',
      date: 'Use by 09-September-2023',
      discount: '15% off',
    },
    {
      title: 'Invite Bonus',
      content: 'Powered By Kayanchi',
      date: 'Use by 09-September-2023',
      discount: '15% off',
    },
  ];

  return (
    <SafeAreaView style={[GLOBAL_STYLES.containerHome, { paddingTop: 10 }]}>
      <Header backBtnGrey title="Apply Promo code" />
      <Text style={[GLOBAL_STYLES.title, { fontFamily: fonts.hk_bold }]}>{'Promo codes'}</Text>
      <Text
        style={{
          color: '#67718C',
          marginHorizontal: widthToDp(6),
          fontSize: 16,
          fontFamily: fonts.robo_reg,
        }}>
        Use one of the codes below to avail your invite bonus from Kaynchi!
      </Text>

      {PromoCodeData.map((promoCode, index) => (
        <View key={index} style={styles.inviteContent}>
          <View style={styles.inviteContainer}>
            <Text style={{ fontFamily: fonts.hk_bold, fontSize: 20, color: '#D8B29B' }}>{'%'}</Text>
            <View style={styles.alignRow}>
              <Text
                style={{
                  color: '#193356',
                  fontSize: 16,
                  fontFamily: fonts.robo_bold,
                  marginLeft: 10,
                }}>
                {promoCode.title}
              </Text>
              <Text
                style={{
                  color: '#677790',
                  fontSize: 10,
                  fontFamily: fonts.robo_reg,
                }}>
                {promoCode.content}
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.alignRow,
              {
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: widthToDp(5),
              },
            ]}>
            <Text
              style={{
                marginLeft: widthToDp(7),
                fontFamily: fonts.robo_reg,
                color: '#193356',
              }}>
              {promoCode.date}
            </Text>
            <Text
              style={{
                fontSize: 22,
                color: '#84668C',
                fontFamily: fonts.hk_bold,
              }}>
              {promoCode.discount}
            </Text>
          </View>
        </View>
      ))}
      {/* <View style={{position:'absolute', bottom: heightToDp(5) }}> */}

      <Button
        title="Apply Discount"
        onPress={() => setIsModalVisible(true)}
        btnStyle={{ position: 'absolute', bottom: heightToDp(5.5) }}
      />

      {/* </View> */}

      <Modal visible={isModalVisible} animationType="slide" onRequestClose={closeModal}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text
                style={{
                  fontSize: 34,
                  color: '#2F3A58',
                  fontFamily: fonts.hk_bold,
                  marginHorizontal: widthToDp(5),
                }}>
                Waiting for confirmation
              </Text>
              <View style={{ alignItems: 'center', marginVertical: 30 }}>
                <CircularProgressBar
                  progress={15}
                  radius={80}
                  strokeWidth={4}
                  color="#84668C"
                  textStyle={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    fill: '#29AAE2',
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  marginHorizontal: widthToDp(5),
                  width: widthToDp(60),
                  color: '#67718C',
                }}>
                Waiting for Narmeen Iqbal to accept your booking.
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginTop: 10,
                  marginHorizontal: widthToDp(5),
                  width: widthToDp(66),
                  color: '#67718C',
                }}>
                You may cancel your booking in 3 minutes if she does not accept.
              </Text>
              <View style={[styles.indicatorView, { marginTop: 20 }]}>
                <View style={styles.row}>
                  <MultiButton
                    title={'Go Back Home'}
                    btnStyle={{ backgroundColor: '#67506D' }}
                    onPress={() =>
                      props.navigation.navigate('ConsumerHomeStack', {
                        screen: 'ConsumerHome',
                      })
                    }
                  />
                  <MultiButton
                    title={'Cancel Request'}
                    btnStyle={{ backgroundColor: '#F0F0F0' }}
                    titleStyle={{ color: '#67718C' }}
                    onPress={() =>
                      props.navigation.navigate('ConsumerHomeStack', {
                        screen: 'ConsumerApplyPromoCode',
                      })
                    }
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </Modal>
    </SafeAreaView>
  );
};

export default ConsumerApplyPromoCode;

const styles = StyleSheet.create({
  alignRow: { flex: 1, flexDirection: 'row', justifyContent: 'space-between' },
  inviteContainer: { flexDirection: 'row', marginHorizontal: widthToDp(5) },
  inviteContent: {
    backgroundColor: 'white',
    paddingVertical: 10,
    marginHorizontal: widthToDp(6),
    marginVertical: 10,
    borderRadius: 15,
    height: heightToDp(23),
  },

  modalDescription: {
    fontSize: 12,
    color: 'white',
    textAlign: 'justify',
    paddingRight: widthToDp(17),
  },

  indicatorView: {
    marginHorizontal: widthToDp(4),
    marginTop: heightToDp(3),
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white', // Transparent black background
  },
  modalContent: {
    // padding: 20,
    borderRadius: 10,
    paddingTop: 20,
  },
});
