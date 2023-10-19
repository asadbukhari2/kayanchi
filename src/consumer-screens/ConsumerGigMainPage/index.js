import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Button, Header } from '../../components';
import { fonts, useTheme } from '../../utils/theme';
import { heightToDp, widthToDp, height, width } from '../../utils/Dimensions';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient'; // Import the LinearGradient component
import Modal from 'react-native-modal';
import { TextInput } from '../../components';
const AddMore = require('../../assets/addMore.png');
const theme = useTheme();

const STATUS_RADIO = [
  {
    source: require('../../assets/hosting4.png'),
    title: "I'm hosting",
  },
  {
    source: require('../../assets/travelling4.png'),
    title: "I'm travelling",
  },
];
const offer = [{ title: '20% off' }, { title: '30% off' }, { title: '50% off' }];

export default function ConsumerGigMainPage(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [preferenceStatus, setPreferenceStatus] = useState('');
  const [name, setName] = useState('');

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Your gigs" />

      <View style={styles.gigContainer}>
        <Text style={styles.heading}>Create a Promo</Text>
        <Image source={AddMore} style={{ width: 20, height: 20 }} />
      </View>
      <Text style={styles.description}>Choose the active gigs that you want to continue with this promo deal</Text>
      <LinearGradient
        colors={['#668C6A', '#3E5F41']} // Define your gradient colors here
        style={styles.Discount}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.text}>Add Discount</Text>
          <Feather style={{ color: '#193356', fontSize: 18, marginLeft: 10 }} name="edit-2" />
        </View>
        <View>
          <Text style={styles.subHeading}>Hydra facial super extreme</Text>
        </View>
      </LinearGradient>

      <View style={styles.gigContainer}>
        <Text style={styles.heading}>Promos</Text>
        <Image source={AddMore} style={{ width: 20, height: 20 }} />
      </View>
      <Text style={styles.description}>Choose the active gigs that you want to continue with this promo deal</Text>
      <LinearGradient
        colors={['#84668C', '#67506D']} // Define your gradient colors here
        style={styles.Discount}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.text}>Add Discount</Text>
          <Feather
            style={{ color: 'white', fontSize: 18, marginLeft: 10 }}
            name="edit-2"
            onPress={() => setModalVisible(true)}
          />
        </View>
        <View>
          <Text style={styles.subHeading2}>Hydra facial super extreme</Text>
        </View>
      </LinearGradient>

      <Modal
        coverScreen={false}
        isVisible={modalVisible}
        style={{ flex: 1, margin: 0, justifyContent: 'flex-end' }}
        onSwipeComplete={() => setModalVisible(!modalVisible)}
        swipeDirection={['down']}>
        <View style={styles.modalMainView}>
          <TouchableOpacity onPress={closeModal} style={styles.closeIconContainer}>
            <Feather name="x" size={24} color="black" />
          </TouchableOpacity>

          <View style={styles.modalTxtView}>
            <Text style={styles.modalTitle}>Hydra facial super extreme</Text>
            <Text style={styles.modalNormalTxt}>Enter your discount and offer more move value to your clients.</Text>
            <Text style={styles.modalNormalTxt2}>Commonly offered </Text>

            <View style={{ flexDirection: 'row' }}>
              {offer.map(item => (
                <Text style={styles.DiscountOffer}>{item.title}</Text>
              ))}
            </View>
          </View>
          <TextInput
            input={text => setName(text)}
            placeholder="100"
            inputBoxStyle={{
              borderBottomColor: '#ece9ed',
              backgroundColor: '#ece9ed',
              borderRadius: 5,
              padding: 10,
            }}
          />

          <Button
            title={'Add discount'}
            btnStyle={{ position: 'absolute', bottom: heightToDp(5.5) }}
            onPress={() =>
              props.navigation.navigate('ConsumerHomeStack', {
                screen: 'ConsumerPromoMainPage',
              })
            }
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    paddingTop: heightToDp(8),
  },
  heading: {
    fontSize: 30,
    color: 'black',
    // fontWeight: 'bold',
    fontFamily: fonts.hk_bold,
    paddingHorizontal: widthToDp(4),
  },
  description: {
    paddingHorizontal: widthToDp(4),
    marginRight: widthToDp(18),
    color: '#67718C',
  },
  gigContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: widthToDp(5),
  },
  text: {
    backgroundColor: '#D9D9D9',
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 10,
    fontSize: 12,
    marginRight: 15,
  },
  subHeading: {
    fontSize: 16,
    lineHeight: 18,
    color: '#ffffff',
    paddingTop: 20,
    paddingBottom: 7,
  },
  subHeading2: {
    fontSize: 16,
    lineHeight: 18,
    color: 'white',
    paddingTop: heightToDp(15),
    paddingBottom: 10,
  },
  Discount: {
    borderRadius: 10,
    width: widthToDp(41),
    marginHorizontal: widthToDp(5),
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10,
  },
  seperator: {
    height: 2,
    backgroundColor: '#DEDEDE',
  },
  new: {
    paddingVertical: heightToDp(5),
    paddingHorizontal: widthToDp(4),
  },
  DiscountOffer: {
    backgroundColor: '#ADADAD',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    color: '#FFFFFF',
    borderRadius: 15,
    marginRight: 15,
  },

  modalMainView: {
    height: height * 0.45,
    backgroundColor: theme.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: width * 0.868,
    position: 'absolute',
    alignSelf: 'center',
    bottom: heightToDp(25),
  },
  hostingImg: {
    width: widthToDp(10.5),
    height: heightToDp(10.5),
    resizeMode: 'cover',
    marginBottom: heightToDp(2.5),
  },
  travellingImg: {
    width: widthToDp(9),
    height: heightToDp(8),
    resizeMode: 'cover',
    marginBottom: heightToDp(2.8),
  },
  modalImg: {
    resizeMode: 'cover',
    alignSelf: 'center',
    height: heightToDp(47.5),
    width: widthToDp(53.7),
    marginTop: -heightToDp(23.75),
  },
  btnView: {
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 21,
    height: 50,
    borderColor: theme.inputText,
  },
  orderSummaryImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  closeIconContainer: {
    backgroundColor: '#EEEEEE',
    borderRadius: 20,
    position: 'absolute',
    right: 20,
    top: 5,
  },
  modalNormalTxt: {
    fontFamily: fonts.robo_reg,
    fontSize: 16,
    lineHeight: 18.75,
    color: '#67718C',
  },
  modalNormalTxt2: {
    fontFamily: fonts.robo_reg,
    fontSize: 12,
    lineHeight: 18.75,
    color: '#2F3A58',
    paddingTop: 12,
  },
  modalTitle: {
    marginBottom: 8,
    fontFamily: fonts.hk_bold,
    fontSize: 24,
    lineHeight: 26,
    color: theme.lightBlack,
    marginRight: 28,
  },
  modalTxtView: {
    marginHorizontal: widthToDp(6.7),
    marginTop: heightToDp(6.7),
  },

  subHeadingView: {
    borderBottomColor: theme.primary,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 9,
    borderBottomWidth: 1,
  },
  priceField: {
    backgroundColor: '#DFDEDF',
    width: widthToDp(90),
    // marginLeft: widthToDp(5),
    borderRadius: 8,
    // paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    // fontWeight: '400',
    // marginHorizontal: 24,
    fontFamily: fonts.robo_reg,
    color: '#8D8A94',
    lineHeight: 22,
  },
});
