import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { Button, Header } from '../../components';
import { fonts, useTheme } from '../../utils/theme';
import { heightToDp, widthToDp, height, width } from '../../utils/Dimensions';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient'; // Import the LinearGradient component
import Modal from 'react-native-modal';
import { TextInput } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { addDiscount, getGigsOfUser } from '../../redux/actions/gigActions';
const AddMore = require('../../assets/addMore.png');
const theme = useTheme();

const offer = [
  { title: '20% off', value: 20 },
  { title: '30% off', value: 30 },
  { title: '50% off', value: 50 },
];

export default function ArtistGigMainPage(props) {
  const [modalVisible, setModalVisible] = useState(false);

  const [gigName, setGigName] = useState('');
  const [percentage, setPercentage] = useState(0);

  const { gigs } = useSelector(state => state.gig);

  const dispatch = useDispatch();

  const simpleGigs = gigs.filter(_ => _.is_promotional === false);
  const promoGigs = gigs.filter(_ => _.is_promotional === true);

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleAddDiscount = item => {
    setGigName(item);
    setModalVisible(true);
  };
  const handleEditDiscount = item => {
    setGigName(item);
    setPercentage(item.discount_percentage);
    setModalVisible(true);
  };
  const handleOfferclick = e => {
    setPercentage(e.value.toString());
  };

  const dicountClickHandler = () => {
    closeModal();

    const data = {
      discount_percentage: percentage,
    };

    addDiscount(gigName.id, data);
    dispatch(getGigsOfUser());
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Your gigs" />

      <View style={styles.gigContainer}>
        <Text style={styles.heading}>Basic gigs</Text>
        <Image source={AddMore} style={{ width: 20, height: 20 }} />
      </View>
      <Text style={styles.description}>Choose the active gigs that you want to continue with this promo deal</Text>
      <FlatList
        data={simpleGigs}
        style={{ marginTop: heightToDp(1.5), marginLeft: widthToDp(1.5) }}
        horizontal
        keyExtractor={({ item, index }) => index}
        renderItem={({ item, index }) => {
          return (
            <>
              <LinearGradient colors={['#668C6A', '#3E5F41']} style={[styles.Discount]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  {item.is_discount ? (
                    <Text style={styles.percentTag}>{item.discount_percentage}% off</Text>
                  ) : (
                    <>
                      <TouchableOpacity onPress={() => handleAddDiscount(item)}>
                        <Text style={styles.percentTag}>Add Discount</Text>
                      </TouchableOpacity>
                    </>
                  )}
                  {item.is_discount && (
                    <TouchableOpacity onPress={() => handleEditDiscount(item)}>
                      <Feather style={{ color: '#fff', fontSize: 18, marginLeft: 0 }} name="edit-2" />
                    </TouchableOpacity>
                  )}
                </View>
                <View>
                  <Text style={styles.subHeading}>{item.name.replace(/["']/g, '')}</Text>
                </View>
              </LinearGradient>
            </>
          );
        }}
      />

      <View style={styles.gigContainer}>
        <Text style={styles.heading}>Promos</Text>
        <Image source={AddMore} style={{ width: 20, height: 20 }} />
      </View>
      <Text style={styles.description}>Choose the active gigs that you want to continue with this promo deal</Text>
      <FlatList
        data={promoGigs}
        style={{ marginTop: heightToDp(1.5), marginLeft: widthToDp(1.5) }}
        horizontal
        keyExtractor={({ item, index }) => index}
        renderItem={({ item, index }) => {
          return (
            <>
              <LinearGradient colors={['#84668C', '#67506D']} style={[styles.Discount]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  {item.is_discount ? (
                    <Text style={styles.percentTag}>{item.discount_percentage}% off</Text>
                  ) : (
                    <>
                      <TouchableOpacity onPress={() => handleAddDiscount(item)}>
                        <Text style={styles.percentTag}>Add Discount</Text>
                      </TouchableOpacity>
                    </>
                  )}
                  {item.is_discount && (
                    <TouchableOpacity onPress={() => handleEditDiscount(item)}>
                      <Feather style={{ color: '#fff', fontSize: 18, marginLeft: 0 }} name="edit-2" />
                    </TouchableOpacity>
                  )}
                </View>
                <View>
                  <Text style={styles.subHeading}>{item.name.replace(/["']/g, '')}</Text>
                </View>
              </LinearGradient>
            </>
          );
        }}
      />

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
            <Text style={styles.modalTitle}>{gigName?.name.replace(/["']/g, '')}</Text>
            <Text style={styles.modalNormalTxt}>Enter your discount and offer more move value to your clients.</Text>
            <Text style={styles.modalNormalTxt2}>Commonly offered </Text>

            <View style={{ flexDirection: 'row' }}>
              {offer.map(item => (
                <TouchableOpacity onPress={() => handleOfferclick(item)}>
                  <Text
                    style={[
                      styles.DiscountOffer,
                      percentage !== item.value.toString()
                        ? { backgroundColor: '#ADADAD' }
                        : { backgroundColor: '#A77246' },
                    ]}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <TextInput
            style={styles.priceField}
            value={percentage}
            // input={!percentage ? true : false}
            input
            placeholder="10"
            placeholderTextColor={'#8D8A94'}
            onChangeText={e => setPercentage(e)}
            keyboardType="number-pad"
            icon="edit-2"
          />

          <Button
            title="Add discount"
            btnStyle={{ position: 'absolute', bottom: heightToDp(5.5) }}
            onPress={dicountClickHandler}
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
    paddingTop: heightToDp(4),
  },
  heading: {
    fontSize: 30,
    color: 'black',
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
  percentTag: {
    backgroundColor: '#FAE5FF',
    color: '#000',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  text: {
    backgroundColor: '#D9D9D9',
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 10,
    fontSize: 12,
    marginRight: 15,
  },
  subHeading2: {
    fontSize: 16,
    lineHeight: 18,
    color: 'white',
    paddingTop: heightToDp(15),
    paddingBottom: 7,
  },
  subHeading: {
    fontSize: 16,
    lineHeight: 18,
    color: '#ffffff',
    paddingTop: heightToDp(15),
    paddingBottom: 10,
  },
  Discount: {
    borderRadius: 10,
    width: 190,
    height: 130,
    marginHorizontal: widthToDp(1),
    paddingHorizontal: 10,
    paddingVertical: 10,
    // marginTop: 10,
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
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 5,
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
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    fontFamily: fonts.robo_reg,
    color: '#8D8A94',
    lineHeight: 22,
  },
});
