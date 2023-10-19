import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Image, Text, View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Button, Header } from '../../components';
import { useTheme, images, fonts } from '../../utils/theme';
import { width, heightToDp, widthToDp, height } from '../../utils/Dimensions';

const data = ['20% Commision', '5 Gigs', '2 Promos'];
const theme = useTheme();

const ModalData = [
  {
    id: 'gig',
    modalImageSource: images.CreateGig,
    modalDescription: 'Basic gig allows you to offer services in snigle category only',
    modalTitle: 'Create a Gig',
  },
  {
    id: 'promo',
    modalImageSource: images.CreatePromo,
    modalDescription: 'Promotional are mix of your gigs and any additional service you want to offer',
    modalTitle: 'Create a Promo',
  },
];

export default function ConsumerGig(props) {
  const [selectedContainer, setSelectedContainer] = useState(null);

  const handleContainerClick = containerId => {
    console.log(containerId);
    setSelectedContainer(containerId);
  };

  const handleContinueClick = () => {
    console.log('seelcted', selectedContainer);
    if (selectedContainer === 'gig') {
      props.navigation.navigate('ConsumerHomeStack', {
        screen: 'ConsumerGigInfo',
      });
    } else if (selectedContainer === 'promo') {
      props.navigation.navigate('ConsumerHomeStack', {
        screen: 'ConsumerPromoMainPage',
      });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.welcomeTxt}>Create Menu</Text>
          <Text style={styles.heading}>Hey Narmeen!</Text>
          <Text>
            Time to create your menu and showcase your skills as an expert at{' '}
            <Text style={{ color: theme.primary }}>Kaynchi</Text>
          </Text>
        </View>

        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {ModalData.map((data, index) => (
              <TouchableWithoutFeedback key={index} onPress={() => handleContainerClick(data.id)}>
                <View
                  style={[
                    styles.modalElement,
                    // selectedContainer === data.id
                    //   ? {backgroundColor: 'pink'}
                    //   : null,
                  ]}>
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
                        justifyContent: 'space-between',
                        borderRadius: 10,
                      },
                    ]}>
                    <Text style={styles.modalText}>{data.modalTitle}</Text>
                    <Text style={styles.modalDescription}>{data.modalDescription}</Text>
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
  heading: { fontSize: 40, fontFamily: fonts.hk_bold, paddingVertical: heightToDp(3) },
  subheading: { color: '#67718C', fontSize: 12, textAlign: 'center' },
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
    marginTop: heightToDp(5),
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
    height: (height * 0.91) / 4.5, // Set a fixed height or remove this line if you want it to adjust based on content
    // paddingVertical: 20,
    // paddingHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: 10,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  modalDescription: {
    fontSize: 12,
    color: 'white',
    textAlign: 'justify',
    paddingRight: widthToDp(17),
  },
  buttontext: { marginVertical: heightToDp(5) },
});
