import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Button } from '../../components';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import { useTheme, fonts } from '../../utils/theme';

import search from '../../assets/question.png';
import resolution from '../../assets/resolution.png';
import cancelation from '../../assets/cancelation.png';
import faq from '../../assets/faq.png';
import { useSelector } from 'react-redux';
const whatsappphone = require('../../assets/whatsappphone.png');

const theme = useTheme();
const faqData = [
  { id: 1, question: 'How to organize your profile?' },
  { id: 2, question: 'How to attract clients?' },
  { id: 3, question: 'How to create a best menu?' },
  { id: 4, question: 'What is Maynchi Commision?' },
];
const ArtistHelp = props => {
  const [name, setName] = useState('');
  const user = useSelector(state => state.auth.user);

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
          <View style={{ marginLeft: 0 }}>
            <Header backBtn />
          </View>
        </View>

        <View>
          <Text style={styles.heading}>
            Hey <Text style={{ color: theme.primary }}>{user.name},</Text>
          </Text>
          <Text style={styles.heading}>how can we help?</Text>
        </View>
        <View style={styles.inputContainer}>
          <Image source={search} style={styles.image} />
          <TextInput
            placeholder="Type your question here"
            placeholderTextColor={theme.greyText}
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
        </View>
        <View style={styles.containerContent}>
          <View style={styles.helpContainer}>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('ArtistProfileStack', {
                  // screen: 'ArtistDisputeResolution',
                  screen: 'ArtistCancelOrder',
                  params: {
                    cancel_type: 'Cancellation',
                    type: 'dispute',
                  },
                })
              }>
              <View style={styles.centeredContainer}>
                <Text style={styles.head}>Dispute</Text>
                <Text style={styles.head}>Resolution</Text>
                <Image source={resolution} style={styles.resolution} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.helpContainer}>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('ArtistProfileStack', {
                  screen: 'ArtistCancelOrder',
                  params: {
                    cancel_type: 'Cancellation',
                    type: 'cancel',
                  },
                })
              }>
              <View style={styles.centeredContainer}>
                <Text style={styles.head}>Order</Text>
                <Text style={styles.head}>Cancellation</Text>
                <Image source={cancelation} style={styles.resolution} />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text
            style={{
              marginHorizontal: widthToDp(4),
              marginBottom: 5,
              marginTop: 15,
              fontFamily: fonts.sans_reg,
              color: theme.greyText,
            }}>
            FAQs
          </Text>

          <View style={styles.faqcontainer}>
            {faqData.map(item => (
              <TouchableOpacity style={styles.faqContent}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#677790',
                    fontFamily: fonts.robo_reg,
                  }}>
                  {item.question}
                </Text>
                <Image source={faq} style={styles.faqimage} />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View>
          <Button
            title={'Whatsapp Kyanchi'}
            btnStyle={[styles.btn, { marginTop: heightToDp(10), backgroundColor: '#668C6A' }]}
            image={whatsappphone}
            imageStyle={styles.iconStyles}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistHelp;

const styles = StyleSheet.create({
  heading: {
    color: '#0F2851',
    fontSize: 40,
    marginLeft: widthToDp(4),
    fontFamily: fonts.hk_bold,
  },
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 12,
    borderColor: 'white',
    paddingVertical: 2,
    marginHorizontal: widthToDp(4),
  },

  image: { position: 'absolute', width: 16, height: 16, marginLeft: 8 },
  resolution: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
    margin: 5,
    marginTop: 15,
  },
  helpContainer: {
    backgroundColor: 'white',
    paddingHorizontal: widthToDp(5),
    paddingVertical: heightToDp(5),
    borderRadius: 10,
  },
  containerContent: {
    flexDirection: 'row',
    marginVertical: heightToDp(4),
    marginHorizontal: widthToDp(4),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginLeft: 15,
    color: theme.dark,
  },
  centeredContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: widthToDp(35),
  },
  faqcontainer: {
    backgroundColor: 'white',
    marginHorizontal: widthToDp(4),
    paddingHorizontal: widthToDp(4),
    paddingVertical: 10,
    borderRadius: 10,
  },
  faqContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: widthToDp(2),
    marginBottom: 6,
  },
  faqimage: { width: 12, height: 12, resizeMode: 'contain' },
  iconStyles: {
    width: 25,
    height: 25,
    marginRight: 10,
    resizeMode: 'contain',
    // , position: 'absolute', left: widthToDp(5)
  },
  head: {
    color: '#1583D8',
    fontSize: 14,
    fontFamily: fonts.sans_reg,
  },
});
