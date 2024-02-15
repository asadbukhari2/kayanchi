import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fonts, useTheme } from '../../utils/theme';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { Button, Header, RadioButton } from '../../components';
import ToggleSwitch from 'toggle-switch-react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import makeStyle from './artistPaymentDetails.style';

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
  const styles = makeStyle(theme);
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
