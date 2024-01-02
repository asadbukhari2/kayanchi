import React, { useState } from 'react';
import { SafeAreaView, Image, Text, View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Button, Header } from '../../components';
import { useTheme, images, fonts } from '../../utils/theme';
import { heightToDp, widthToDp } from '../../utils/Dimensions';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import makeStyle from './artistCreateGig.styles';

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
  const theme = useTheme();
  const styles = makeStyle(theme);
  const navigation = useNavigation();
  const [selectedContainer, setSelectedContainer] = useState(null);
  const user = useSelector(state => state.auth.user);
  const gigs = useSelector(state => state.gig.gigs);

  const handleContainerClick = containerId => {
    setSelectedContainer(containerId);
  };

  const handleContinueClick = () => {
    if (selectedContainer === 'gig') {
      navigation.navigate('ArtistBasicGig', { is_promotional: false });
    } else if (selectedContainer === 'promo') {
      navigation.navigate('ArtistPromoMainPage', { is_promotional: true });
    } else {
      showMessage({
        message: 'Please Select type',
        type: 'warning',
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Create Menu" />
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
                disabled={data.id === 'promo' && gigs.length < 2}>
                <View style={styles.modalElement}>
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
                            : '#A0CDA3',
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
