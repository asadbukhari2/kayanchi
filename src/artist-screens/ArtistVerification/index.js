import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Button } from '../../components';
import { heightToDp, widthToDp, width } from '../../utils/Dimensions';
import { useTheme, fonts } from '../../utils/theme';
import ImageCropPicker from 'react-native-image-crop-picker';
import approval from '../../assets/approval.png';

import { PermissionsAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { verify } from '../../redux/actions/gigActions';
import { useDispatch, useSelector } from 'react-redux';
import { getServices } from '../../redux/actions/commonActions';
import makeStyle from './artistVerification.styles';

async function requestCameraPermission() {
  try {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
      title: 'Camera Permission',
      message: 'App needs access to your camera',
      buttonPositive: 'OK',
      buttonNegative: 'Cancel',
    });
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Camera permission granted');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}
const theme = useTheme();
const ArtistVerification = () => {
  const styles = makeStyle(theme)
  const [image, setImage] = useState();
  const [cnic, setCnic] = useState();
  const [nadraCard, setNadraCard] = useState();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const { artist_id } = auth.profile;
  const navigation = useNavigation();

  const handleVerification = (type, img) => {
    const formD = new FormData();

    formD.append('type', type);
    formD.append('image', {
      uri: img.path,
      name: img.path.split('/').pop(),
      type: 'image/jpg',
    });

    verify(formD, auth.userDetails.token);
  };

  const openCamera = () => {
    console.log('clicked');
    ImageCropPicker.openCamera({
      width: width * 0.868,
      height: heightToDp(97.2),
      cropping: true,
    })
      .then(selfie => {
        console.log(selfie);
        handleVerification('Selfie', selfie);
        setImage(selfie);
      })
      .catch(error => {
        console.log('Camera capture error:', error);
        if (error.code === 'E_PERMISSION_MISSING') {
          // Handle camera permission error, prompt the user to grant permission
          requestCameraPermission();
        }
      });
  };

  const renderImageWithLabel = (imageSource, label) => {
    return (
      <View style={styles.imageContainer}>
        <Image
          source={imageSource}
          style={{
            width: widthToDp(90),
            height: 100,
            borderRadius: 10,
            resizeMode: 'cover',
          }}
        />
        <View style={styles.pendingLabelContainer}>
          <Image source={approval} style={styles.approvalIcon} />
          <Text style={styles.pendingLabelText}>{label}</Text>
        </View>
      </View>
    );
  };

  useEffect(() => {
    dispatch(getServices(artist_id, auth.userDetails.token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header title={'Verification'} />

        <View style={styles.gigVersion}>
          <Text style={styles.title}>{'Verify yourself to start selling. '}</Text>
        </View>
        <Text style={styles.txt}>{'Complete your verification to activate your gigs on the marketplace'}</Text>

        <TouchableOpacity
          onPress={() => {
            ImageCropPicker.openPicker({
              width: widthToDp(90),
              height: heightToDp(97.2),
              cropping: true,
            }).then(img => {
              handleVerification('CNIC', img);
              setCnic(img);
            });
          }}
          activeOpacity={0.9}
          style={styles.filePicker}>
          {cnic ? (
            renderImageWithLabel({ uri: cnic.path }, 'Pending Approval')
          ) : (
            <View>
              <View style={styles.upload}>
                <Text style={styles.fileText}>Upload NIC Picture</Text>
              </View>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={openCamera} activeOpacity={0.9} style={styles.filePicker}>
          {image ? (
            renderImageWithLabel({ uri: image.path }, 'Pending Approval')
          ) : (
            <View>
              <View style={styles.upload}>
                <Text style={styles.fileText}>Take a Selfie</Text>
              </View>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            ImageCropPicker.openPicker({
              width: widthToDp(90),
              height: heightToDp(97.2),
              cropping: true,
            }).then(nicCard => {
              console.log(nicCard);
              handleVerification('Nadra Verification', nicCard);
              setNadraCard(nicCard);
            });
          }}
          activeOpacity={0.9}
          style={styles.filePicker}>
          {nadraCard ? (
            renderImageWithLabel({ uri: nadraCard.path }, 'Pending Approval')
          ) : (
            <View>
              <View style={styles.upload}>
                <Text style={styles.fileText}>Nadra Verification Certificate</Text>
              </View>
            </View>
          )}
        </TouchableOpacity>

        <View style={styles.skipStyling}>
          <Text style={styles.fileText} onPress={() => navigation.navigate('ArtistPublishGig')}>
            I want to skip
          </Text>
        </View>

        <View style={styles.btnText}>
          <Button title="Continue" btnStyle={styles.btn} onPress={() => navigation.navigate('ArtistPublishGig')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistVerification;


