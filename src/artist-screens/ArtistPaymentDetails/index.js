import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fonts, useTheme } from '../../utils/theme';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { Button, Header, RadioButton } from '../../components';
import ToggleSwitch from 'toggle-switch-react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const theme = useTheme();

const DATA = [
  {
    card: 'Card ending 4509',
    ballance: false,
  },
  {
    card: 'Card ending 8946',
    ballance: true,
  },
];

const ArtistPersonalDetails = props => {
  const [paymentCash, setPaymentCash] = useState(false);
  const [walletPayment, setWalletPayment] = useState(false);
  const [sufficientBallance, setSufficientBallance] = useState(false);
  const [card, setCard] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Header backBtnGrey />
      <Text style={styles.title}>{'Payment details'}</Text>
      <Text style={styles.subTitle}>{'AMOUNT'}</Text>
      <View style={styles.straightRow}>
        <Text style={styles.titleTxt}>{'Service charges'}</Text>
        <Text style={styles.chargesTxt}>{'Rs 5680'}</Text>
      </View>
      <Text style={styles.titleTxt}>{'incl.tax'}</Text>
      <View style={styles.straightRow}>
        <Text style={styles.titleTxt}>{'Promo applied'}</Text>
        <Text style={[styles.chargesTxt, { color: theme.green, marginRight: widthToDp(6.7) }]}>{'-80'}</Text>
      </View>
      <TouchableOpacity style={styles.straightRow}>
        <Text style={[styles.titleTxt, { color: theme.linkTxt }]}>{'Add promo'}</Text>
      </TouchableOpacity>
      <View style={[styles.straightRow, { marginTop: heightToDp(4.5) }]}>
        <Text style={styles.titleTxt}>{'Total (inc GST 13%)'}</Text>
        <Text style={styles.chargesTxt}>{'Rs 5680'}</Text>
      </View>
      <Text style={[styles.subTitle, { marginTop: heightToDp(9) }]}>{'CHOOSE PAYMENT METHOD'}</Text>
      <View style={styles.centerView}>
        <View style={[styles.straightRowInner]}>
          <Text style={[styles.titleTxt, { marginLeft: 0 }]}>Cash</Text>
          <ToggleSwitch
            isOn={paymentCash}
            onColor={theme.primary}
            offColor={theme.genderGrey}
            size="small"
            onToggle={isOn => setPaymentCash(isOn)}
          />
        </View>
        <View style={[styles.straightRowInner, { marginTop: heightToDp(4.5) }]}>
          <View style={styles.straightRowInner}>
            <Text style={[styles.titleTxt, { marginLeft: 0 }]}>{'Wallet'}</Text>
            {sufficientBallance && (
              <Text style={[styles.chargesTxt, { color: theme.green, marginLeft: widthToDp(6.7) }]}>{'Pkr 1000'}</Text>
            )}
          </View>
          <ToggleSwitch
            isOn={walletPayment}
            onColor={theme.primary}
            offColor={theme.genderGrey}
            size="small"
            onToggle={isOn => setWalletPayment(isOn)}
          />
        </View>
        <Text style={[styles.titleTxt, { marginLeft: 0, marginTop: heightToDp(6.7), marginBottom: heightToDp(7.5) }]}>
          Use card
        </Text>
        <View>
          {DATA.map((item, index) => {
            return (
              <View style={{ marginTop: index > 0 ? heightToDp(6.2) : 0 }}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    setCard(item.card);
                    setSufficientBallance(item.ballance);
                  }}
                  style={[styles.row, styles.firstRadio]}>
                  <View style={styles.radioCircle}>{card === item.card && <View style={styles.radioDot} />}</View>
                  <Text style={styles.radioTxt}>{item.card}</Text>
                </TouchableOpacity>
                {/* <RadioButton text={item.card} onPress={() => setCard(item.card)} isSelected={item.card === card} /> */}
              </View>
            );
          })}
        </View>
        <TouchableOpacity activeOpacity={0.7} style={[styles.straightRow, styles.addAddress]}>
          <AntDesign name={'plus'} style={[styles.icon, { color: theme.lightBlack }]} />
          <Text style={styles.radioTxt}>{'Add new card'}</Text>
        </TouchableOpacity>
      </View>
      <Button
        title={'Continue'}
        btnStyle={{ position: 'absolute', bottom: heightToDp(5.5) }}
        onPress={() => props.navigation.navigate('OrderConfirm')}
      />
    </SafeAreaView>
  );
};

export default ArtistPersonalDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.homeBackground,
  },
  title: {
    marginTop: heightToDp(5.5),
    width: width * 0.868,
    alignSelf: 'center',
    fontFamily: fonts.hk_bold,
    fontSize: 34,
    lineHeight: 40.81,
    color: theme.lightBlack,
  },
  subTitle: {
    marginTop: heightToDp(6.7),
    width: width * 0.868,
    alignSelf: 'center',
    fontFamily: fonts.hk_bold,
    fontSize: 14,
    lineHeight: 20,
    color: theme.backIcon,
  },
  titleTxt: {
    fontFamily: fonts.robo_reg,
    fontSize: 16,
    lineHeight: 20,
    color: theme.darkBlack,
    marginLeft: widthToDp(6.7),
  },
  chargesTxt: {
    fontFamily: fonts.hk_regular,
    fontSize: 16,
    lineHeight: 20,
    color: theme.primary,
    marginRight: widthToDp(6.7),
  },
  straightRow: {
    width: width,
    alignSelf: 'center',
    marginTop: heightToDp(2.2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  straightRowInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  centerView: {
    width: width * 0.91,
    backgroundColor: theme.background,
    padding: heightToDp(4.5),
    alignSelf: 'center',
    marginTop: heightToDp(2.2),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addAddress: {
    backgroundColor: theme.background,
    paddingHorizontal: widthToDp(3.2),
    paddingVertical: heightToDp(5),
    borderRadius: 10,
    width: width * 0.91,
    alignSelf: 'center',
    marginTop: heightToDp(6.7),
  },
  radioTxt: {
    fontFamily: fonts.robo_reg,
    fontSize: 16,
    lineHeight: 22,
    color: theme.greyText,
    marginLeft: widthToDp(3.5),
  },
  icon: {
    fontSize: 22,
    color: theme.primary,
  },
  firstRadio: {
    marginTop: heightToDp(2.2),
    paddingVertical: heightToDp(2.2),
  },
  radioCircle: {
    width: widthToDp(5),
    height: heightToDp(5),
    borderRadius: 9,
    backgroundColor: theme.homeBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioDot: {
    width: widthToDp(3.6),
    height: heightToDp(3.6),
    borderRadius: heightToDp(3.6) / 2,
    backgroundColor: theme.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  },
});
