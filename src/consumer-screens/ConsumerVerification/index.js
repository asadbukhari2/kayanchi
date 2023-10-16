import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header, Button} from '../../components';
import {heightToDp, widthToDp, width} from '../../utils/Dimensions';
import {useTheme, fonts} from '../../utils/theme';
import ImageCropPicker from 'react-native-image-crop-picker';
import approval from '../../assets/approval.png';

import {PermissionsAndroid} from 'react-native';

async function requestCameraPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Camera Permission',
        message: 'App needs access to your camera',
        buttonPositive: 'OK',
        buttonNegative: 'Cancel',
      },
    );
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
const ConsumerVerification = props => {
  const [image, setImage] = useState();
  const [cnic, setCnic] = useState();
  const [nadraCard, setNadraCard] = useState();
  const [selectedImage, setSelectedImage] = useState(null); // State to store selected image URI

  const openCamera = () => {
    console.log('clicked');
    ImageCropPicker.openCamera({
      width: width * 0.868,
      height: heightToDp(97.2),
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setImage(image);
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
            elevation: 1,
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

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Verification'} />

      <View style={styles.gigVersion}>
        <Text style={styles.title}>{'Verify yourself to start selling.'}</Text>
      </View>
      <Text style={styles.txt}>
        {'Complete your verification to activate your gigs on the marketplace'}
      </Text>

      <View style={styles.filePicker}>
        <TouchableOpacity
          onPress={() => {
            ImageCropPicker.openPicker({
              width: widthToDp(90),
              height: heightToDp(97.2),
              cropping: true,
            }).then(cnic => {
              console.log(cnic);
              setCnic(cnic);
            });
          }}
          activeOpacity={0.9}
          style={styles.parentUpload}>
          {cnic ? (
            renderImageWithLabel({uri: cnic.path}, 'Pending Approval')
          ) : (
            <View>
              <View style={styles.upload}>
                <Text style={styles.fileText}>Upload NIC Picture</Text>
              </View>
            </View>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.filePicker}>
        <TouchableOpacity
          onPress={openCamera}
          activeOpacity={0.9}
          style={styles.parentUpload}>
          {image ? (
            renderImageWithLabel({uri: image.path}, 'Pending Approval')
          ) : (
            <View>
              <View style={styles.upload}>
                <Text style={styles.fileText}>Take a Selfie</Text>
              </View>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.filePicker}>
        <TouchableOpacity
          onPress={() => {
            ImageCropPicker.openPicker({
              width: widthToDp(90),
              height: heightToDp(97.2),
              cropping: true,
            }).then(nadraCard => {
              console.log(nadraCard);
              setNadraCard(nadraCard);
            });
          }}
          activeOpacity={0.9}
          style={styles.parentUpload}>
          {nadraCard ? (
            renderImageWithLabel({uri: nadraCard.path}, 'Pending Approval')
          ) : (
            <View>
              <View style={styles.upload}>
                <Text style={styles.fileText}>
                  Nadra Verification Certificate
                </Text>
              </View>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.skipStyling}>
        <Text style={styles.fileText}>I want to skip </Text>
      </View>

      <Button
        title={'Continue'}
        btnStyle={styles.btn}
        onPress={() => {
          props.navigation.navigate('ConsumerPublishGig');
        }}
      />
    </SafeAreaView>
  );
};

export default ConsumerVerification;

const styles = StyleSheet.create({
  skipStyling: {
    height: 100,
    width: widthToDp(100),
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filePicker: {
    marginTop: 20,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    width: widthToDp(90),
    marginLeft: widthToDp(5),
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fileText: {
    // backgroundColor: "red",
    color: '#1683D7',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    // fontWeight: 400,
    fontSize: 14,
  },
  imageContainer: {
    position: 'relative',
    width: widthToDp(90),
    height: 100,
    borderRadius: 10,
    overflow: 'hidden', // Make sure label doesn't overflow the container
  },
  pendingLabelContainer: {
    height: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',

    width: widthToDp(90),
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  approvalIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  pendingLabelText: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
    color: 'white',
    fontSize: 12,
  },
  // pendingLabel: {
  //   position: 'absolute',
  //   height:100,
  //   width: widthToDp(90),
  //   textAlign:'center',
  //   justifyContent:'center',
  //   paddingTop: 35,
  //   alignItems:'center',
  //   backgroundColor: 'rgba(0, 0,0, 0.2)',
  //   borderRadius: 4,
  //   color:'white',
  //   fontSize:16,
  // },
  parentGigVersion: {
    marginTop: 25,
  },
  gigVersion: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  gigVersionText: {
    fontSize: 16,
    marginHorizontal: 24,
    fontFamily: fonts.robo_reg,
    color: theme.darkBlack,
    marginTop: 8,
    lineHeight: 18.75,
    width: width * 0.5,
  },
  container: {
    flex: 1,
    backgroundColor: theme.darkGray,
    paddingTop: heightToDp(7),
  },
  skipView: {
    position: 'absolute',
    bottom: heightToDp(23),
    alignSelf: 'center',
  },
  btn: {
    position: 'absolute',
    bottom: heightToDp(5.5),
  },
  img: {
    resizeMode: 'cover',
    height: heightToDp(59.95),
    width: widthToDp(67.9),
    alignSelf: 'center',
    marginTop: heightToDp(6.7),
  },
  skip: {
    fontSize: 14,
    fontFamily: fonts.robo_reg,
    lineHeight: 16.41,
    color: theme.linkTxt,
  },
  txt: {
    fontSize: 16,
    marginHorizontal: 24,
    fontFamily: fonts.robo_reg,
    // color: theme.darkBlack,
    color: '#67718C',
    marginTop: 8,
    lineHeight: 18.75,
  },
  title: {
    fontSize: 34,
    marginHorizontal: 24,
    fontFamily: fonts.robo_med,
    color: theme.lightBlack,
    // marginTop: 23,
    // lineHeight: 28.13,
  },
});
