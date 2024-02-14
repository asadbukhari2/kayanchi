import React from 'react';
const background_image = require('../../../../assets/background_image.png');
const beauty_color = require('../../../../assets/beauty_color_white.png');
const upload = require('../../../../assets/upload.png');
import { View, Text, ScrollView, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { styles } from '../../style';
import { Header } from '../../../../components';

const ArtistDetailHeader = ({ artistServices }) => {
  console.log('this is the artist service', artistServices.id);
  return (
    <ImageBackground source={background_image} resizeMode="cover" style={styles.backGroundImageContainer}>
      <View style={[styles.flex, styles.justifyContentBetween, styles.backGroundContainer]}>
        <View>
          <Header backBtn title="" />
          <TouchableOpacity style={[styles.positionAbsoulte, styles.right0, styles.paddingVertical5]}>
            <Text style={styles.btn}>View Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.flex, styles.flexDirectionRow, styles.alignItemsCenter, styles.justifyContentBetween]}>
          <View>
            <Text style={[styles.headerHeading, styles.colorWhite]}>{artistServices?.artist}</Text>
            <View style={[styles.flex, styles.flexDirectionRow, styles.alignItemsCenter]}>
              <Image style={styles.icon} source={beauty_color} />
              <Text style={[styles.colorWhite, styles.fontSize15]}>Beautition • </Text>
              <Text style={[styles.colorWhite, styles.fontSize15]}>New</Text>
            </View>
          </View>
          <View style={[styles.uploadBtn, styles.flex, styles.alignItemsCenter, styles.justifyContentCenter]}>
            <Image style={styles.icon} source={upload} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ArtistDetailHeader;
