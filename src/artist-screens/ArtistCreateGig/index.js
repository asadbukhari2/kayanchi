import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Image, Text, View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Button, Header } from '../../components';
import { useTheme, images, fonts } from '../../utils/theme';
import { width, heightToDp, widthToDp, height } from '../../utils/Dimensions';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';

const theme = useTheme();

const ModalData = [
  {
    id: 'gig',
    modalImageSource: images.CreateGig,
    modalDescription: 'Basic gigs allow you to offer services in a single category only.',
    modalTitle: 'Create a Gig',
  },
  {
    id: 'promo',
    modalImageSource: images.CreatePromo,
    modalDescription:
      'Promo gig offers are multi-category packaged deals that a you can create in response to general requirements of Clients.',
    modalTitle: 'Create a Promo',
  },
];

export default function ArtistGig() {
  const navigation = useNavigation();
  const [selectedContainer, setSelectedContainer] = useState(null);
  const user = useSelector(state => state.auth.user);

  const handleContainerClick = containerId => {
    setSelectedContainer(containerId);
  };
  console.log(selectedContainer);
  const handleContinueClick = () => {
    if (selectedContainer === 'gig') {
      navigation.navigate('ArtistBasicGig', { is_promotional: false });
    } else if (selectedContainer === 'promo') {
      navigation.navigate('ArtistBasicGig2', { is_promotional: true });
    } else {
      showMessage({
        message: 'Please Select type',
        type: 'warning',
      });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Create gig" />
      <ScrollView>
        <View>
          <Text style={styles.heading}>Hey {user?.name}</Text>
          <Text
            style={{
              fontFamily: fonts.robo_reg,
              fontSize: 16,
              marginRight: widthToDp(5),
              color: theme.dark,
            }}>
            Time to create your menu and showcase your skills as an expert at{' '}
            <Text style={{ color: theme.primary }}>Kaynchi</Text>
          </Text>
        </View>

        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {ModalData.map((data, index) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => handleContainerClick(data.id)}
                disabled={data.id === 'promo'}>
                <View style={[styles.modalElement]}>
                  <View
                    style={[
                      {
                        backgroundColor:
                          selectedContainer === data.id
                            ? data.id === 'gig'
                              ? '#668C6A'
                              : theme.primary
                            : data.id === 'promo'
                            ? '#BAAED3'
                            : '#A0CDA3', // Use the lighter shade here
                      },
                      {
                        width: widthToDp(60),
                        padding: 15,
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        borderRadius: 10,
                      },
                    ]}>
                    <Text style={styles.modalText}>{data.modalTitle}</Text>
                    <Text style={[styles.modalDescription, { paddingTop: heightToDp(5) }]}>
                      {data.modalDescription}
                    </Text>
                  </View>
                  <View>
                    <Image source={data.modalImageSource} style={styles.imageModal} />
                  </View>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        </View>
        <View>
          <Text style={styles.subheading}>Minimum 2 Basic gigs are required to craete a promo.</Text>
          <Text style={styles.subheading}>Promo(s) are valid for 14 days only.</Text>
        </View>
        <View style={styles.buttontext}>
          <Button title="Continue" onPress={handleContinueClick} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    paddingTop: heightToDp(8),
    paddingHorizontal: widthToDp(5),
  },
  welcomeTxt: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    paddingHorizontal: widthToDp(4),
  },
  seperator: {
    height: 2,
    backgroundColor: '#DEDEDE',
  },
  heading: {
    fontSize: 40,
    color: '#2F3A58',
    fontFamily: fonts.hk_bold,
    paddingVertical: heightToDp(3),
  },
  subheading: {
    color: '#67718C',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: fonts.robo_reg,
  },
  new: {
    paddingVertical: heightToDp(5),
    paddingHorizontal: widthToDp(4),
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.9)', // Transparent black background
  },
  modalContent: {
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    paddingTop: 20,
  },
  imageModal: {
    width: 80,
    height: 100,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  closeIconContainer: {
    backgroundColor: '#EEEEEE',
    borderRadius: 20,
    position: 'absolute',
    right: 20,
    top: 5,
  },
  modalElement: {
    backgroundColor: 'white',
    width: width * 0.91,
    height: (height * 0.91) / 4,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'visible',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  modalText: {
    fontSize: 18,
    // fontWeight: 'bold',
    fontFamily: fonts.robo_med,
    color: 'white',
  },
  modalDescription: {
    fontSize: 14,
    color: '#D5D5D5',
    fontFamily: fonts.robo_reg,
    textAlign: 'left',
    paddingRight: widthToDp(5),
  },
  buttontext: { marginVertical: heightToDp(5) },
});
