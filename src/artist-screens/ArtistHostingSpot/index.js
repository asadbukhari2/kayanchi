import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fonts, useTheme } from '../../utils/theme';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { Button, Header, ImageCard } from '../../components';
import ImageCropPicker from 'react-native-image-crop-picker';
import makeStyle from './artistHostingSpot.style';

const theme = useTheme();

const DATA1 = [
  {
    name: 'My house',
  },
  {
    name: 'Ali’s place',
  },
  {
    name: 'Malik house',
  },
];

const ArtistHostingSpot = props => {
  const [image, setImage] = useState(null);
const styles = makeStyle(theme)
  return (
    <SafeAreaView style={styles.container}>
      <Header backBtnGrey />
      <Text style={styles.title}>{'Upload pictures of your hosting spot'}</Text>
      <Text style={styles.titleTxt}>{'Kaynchi needs to verify your hosting spot before processing your order.'}</Text>
      <TouchableOpacity
        onPress={() => {
          ImageCropPicker.openPicker({
            // width: width * 0.868,
            // height: heightToDp(43.2),
            cropping: true,
          }).then(image => {
            console.log(image);
            setImage(image);
          });
        }}
        activeOpacity={0.7}
        style={styles.picView}>
        <Image
          source={image ? { uri: image.path } : require('../../assets/img.png')}
          style={image ? { width: '100%', height: '100%', resizeMode: 'contain' } : styles.imgIcon}
        />
        {!image && <Text style={styles.uploadTxt}>Upload here</Text>}
      </TouchableOpacity>
      <View style={styles.viewAllRow}>
        <Text style={styles.listHeader}>{'Choose from your list'}</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.viewAll}>{'View all'}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={DATA1}
        style={{ marginLeft: widthToDp(4.5) }}
        horizontal
        keyExtractor={({ item, index }) => index}
        renderItem={({ item, index }) => {
          return (
            <ImageCard
              name={item.name}
              containerStyle={styles.imagesCardContainer}
              imgStyle={styles.imagesCardImg}
              nameStyle={styles.imagesCardName}
            />
          );
        }}
      />
      <Button title={'Continue'} btnStyle={styles.btn} onPress={() => props.navigation.navigate('BookingDate')} />
    </SafeAreaView>
  );
};



export default ArtistHostingSpot;
