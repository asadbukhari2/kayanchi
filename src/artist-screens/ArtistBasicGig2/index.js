import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Button } from '../../components';
import { widthToDp } from '../../utils/Dimensions';
import { useTheme, fonts } from '../../utils/theme';
import Gallery from '../../assets/Gallery.png';
import back from '../../assets/back.png';
import ImageCropPicker from 'react-native-image-crop-picker';
import { useNavigation, useRoute } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import makeStyle from './artistBasicGig2.styles';

const timeLimits = [
  { label: '30 mins +', value: '30' },
  { label: '1 hour +', value: '60' },
  { label: '2 hour +', value: '120' },
];

const ArtistGig2 = () => {
  const theme = useTheme();
  const styles = makeStyle(theme);

  const [images, setImages] = useState([null, null, null]);

  const [description, setDescription] = useState();
  const [duration, setDuration] = useState();
  const [amount, setAmount] = useState(0);
  const navigation = useNavigation();
  const route = useRoute();
  const { category_id, target_audience, name } = route.params;

  const handleImageSelection = index => {
    ImageCropPicker.openPicker({
      cropping: true,
    }).then(image => {
      console.log(image);
      const updatedImages = [...images];
      updatedImages[index] = image;

      setImages(updatedImages);
    });
  };

  const handleContinue = () => {
    console.log('description && duration && amount', description, duration, amount);
    if (description && duration && amount) {
      navigation.navigate('ArtistGigMood', {
        category_id,
        target_audience,
        name,
        amount,
        duration,
        description,
        service_images: images,
      });
    } else {
      showMessage({
        type: 'warning',
        message: 'Fill All fields',
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            flex: 0,
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: widthToDp(5),
            width: widthToDp(90),
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={back} />
          </TouchableOpacity>
          <View style={{ marginLeft: -20 }}>
            <Header title="Basic gig info" />
          </View>
        </View>
        <View style={styles.gigVersion}>
          <Text style={styles.title}>Service description</Text>
        </View>

        <TextInput
          multiline={true}
          style={styles.inputField}
          value={description}
          onChangeText={e => setDescription(e)}
          maxLength={200}
          placeholder="Please tell use anything that may assist with the order..."
          placeholderTextColor={'#8D8A94'}
        />
        <Text style={styles.warning}>The description can not contain more than 200 letters.</Text>
        <View style={styles.gigVersion}>
          <Text style={styles.title}>Service duration</Text>
        </View>
        <Text style={styles.warning}>The estimated time of the service, from start to end.</Text>

        <View
          style={{
            flex: 0,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: widthToDp(90),
              flex: 0,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {timeLimits.map(item => {
              return (
                <TouchableOpacity
                  key={item.value}
                  onPress={() => setDuration(item.value)}
                  style={{
                    width: 100,
                    height: 35,
                    flex: 0,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 30,
                    backgroundColor: duration === item.value ? '#84668C' : '#9A9A9A',
                    marginRight: 7,
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: fonts.robo_reg,
                      color: 'white',
                      lineHeight: 16,
                    }}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={styles.gigVersion}>
          <Text style={styles.title}>Service amount</Text>
        </View>
        <Text style={styles.txt}>Price your service.</Text>
        <View style={styles.parentPrice}>
          <TextInput
            style={styles.priceField}
            value={amount}
            placeholder="500"
            placeholderTextColor={'#8D8A94'}
            onChangeText={e => setAmount(e)}
            keyboardType="number-pad"
          />
          <Text style={styles.pkr}>Pkr</Text>
        </View>
        <View style={styles.gigVersion}>
          <Text style={styles.title}>Service pictures</Text>
        </View>
        <Text style={styles.txt}>Uplod pictures of your past work for this service from your gallery. (Optional)</Text>
        <View style={styles.parentUpload}>
          {images.map((image, index) => (
            <TouchableOpacity key={index} onPress={() => handleImageSelection(index)} activeOpacity={0.9}>
              {image ? (
                <Image source={{ uri: image.path }} style={styles.upload} />
              ) : (
                <View style={styles.upload}>
                  <Image source={Gallery} />
                </View>
              )}
              <Text style={styles.uploadText}>Upload</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Button title={'Continue'} btnStyle={styles.btn} onPress={handleContinue} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistGig2;
