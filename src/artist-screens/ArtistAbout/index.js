import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Switch, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Button } from '../../components';
import { height, heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { useTheme, fonts } from '../../utils/theme';
import back from '../../assets/back.png';
import faq from '../../assets/faq.png';
import makeStyle from './artistAbout.style';

const theme = useTheme();
const faqData = [
  { id: 1, question: 'Terms & conditions' },
  { id: 2, question: 'Privacy Policy' },
  { id: 3, question: 'Payments & Wallet terms' },
];
const ArtistAbout = props => {
  const styles = makeStyle(theme)
  const [name, setName] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: widthToDp(5),
            width: widthToDp(90),
          }}>
          {/* <Image source={back} /> */}
          <View style={{ marginLeft: 0 }}>
            <Header backBtn />
          </View>
        </View>

        <View>
          <Text style={styles.heading}>About </Text>
        </View>

        <View style={styles.faqcontainer}>
          {faqData.map(item => (
            <View style={styles.faqContent}>
              <Text style={{ fontSize: 16, color: theme.lightBlack, fontFamily: fonts.hk_semiBold }}>
                {item.question}
              </Text>
              <Image source={faq} style={styles.faqimage} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistAbout;

