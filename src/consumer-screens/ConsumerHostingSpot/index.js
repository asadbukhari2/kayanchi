import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fonts, useTheme } from '../../utils/theme';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { Button, Header, ImageCard } from '../../components';
import ImageCropPicker from 'react-native-image-crop-picker';

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

const ConsumerHostingSpot = props => {
  const [image, setImage] = useState(null);
  const handleAddHostingImages = () => {
    console.log(image);
  };
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
      <Button title={'Continue'} btnStyle={styles.btn} onPress={handleAddHostingImages} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.homeBackground,
  },
  title: {
    marginTop: heightToDp(5.5),
    width: width * 0.868,
    alignSelf: 'center',
    fontFamily: fonts.hk_bold,
    fontSize: 34,
    lineHeight: 40.81,
    color: theme.lightBlack,
  },
  titleTxt: {
    marginTop: heightToDp(4.5),
    width: width * 0.868,
    alignSelf: 'center',
    fontFamily: fonts.robo_reg,
    fontSize: 16,
    lineHeight: 20,
    color: theme.darkBlack,
  },
  picView: {
    width: width * 0.868,
    height: heightToDp(43.2),
    backgroundColor: theme.background,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: heightToDp(6.7),
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadTxt: {
    fontFamily: fonts.robo_reg,
    fontSize: 14,
    lineHeight: 20,
    color: theme.primary,
    marginTop: heightToDp(3, 9),
  },
  imgIcon: {
    width: widthToDp(15.5),
    height: heightToDp(14.5),
    resizeMode: 'cover',
  },
  viewAllRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: heightToDp(6.7),
  },
  viewAll: {
    fontFamily: fonts.robo_reg,
    fontSize: 16,
    lineHeight: 18.75,
    color: theme.linkTxt,
    paddingHorizontal: widthToDp(4.5),
    paddingVertical: heightToDp(0.5),
  },
  listHeader: {
    fontFamily: fonts.hk_medium,
    fontSize: 20,
    lineHeight: 24,
    color: theme.lightBlack,
    marginLeft: widthToDp(6.7),
  },
  imagesCardName: {
    marginTop: heightToDp(2.2),
    marginLeft: heightToDp(2.5),
  },
  imagesCardContainer: {
    alignItems: 'flex-start',
    marginRight: widthToDp(2.2),
    marginTop: heightToDp(4.5),
  },
  imagesCardImg: {
    height: heightToDp(33.3),
    width: widthToDp(33.3),
    borderRadius: 10,
  },
  btn: {
    position: 'absolute',
    bottom: heightToDp(5.5),
  },
});

export default ConsumerHostingSpot;
