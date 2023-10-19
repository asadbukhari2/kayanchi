import React from 'react';
import { Modal, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MultiButton from '../MultiButton';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import { fonts } from '../../utils/theme';
const LocationAway = require('../../assets/LocationAway.png');
const beauty_color = require('../../assets/beauty_color.png');

const DiscoverModal = ({
  visible,
  closeModal,
  background_image,
  name,
  profession,
  experience,
  knownFor,
  additionalInfo,
  distance,
  dollars,
  data,
  navigation,
}) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={closeModal}
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            zIndex: 1,
          }}>
          <Feather name={'x'} style={{ fontSize: 20 }} />
        </TouchableOpacity>
        <Image
          source={background_image}
          style={{
            width: width,
            height: heightToDp(70),
            resizeMode: 'cover',
          }}
        />

        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#2F3A58',
              fontSize: 34,
              fontFamily: fonts.hk_bold,
              marginVertical: 10,
            }}>
            {name}
          </Text>
          <View style={styles.InfoContainer}>
            <Image
              source={beauty_color}
              style={{
                width: 14,
                height: 13,
                resizeMode: 'cover',
              }}
            />
            <Text
              style={{
                color: '#67718C',
                marginLeft: 4,
                fontFamily: fonts.robo_med,
              }}>
              {profession} •
            </Text>
            <Text style={{ color: '#67718C', fontFamily: fonts.robo_med }}>{experience}</Text>
            <Text style={{ color: '#1583D8', fontFamily: fonts.robo_med }}>{dollars}</Text>
          </View>
          <Text
            style={{
              marginVertical: 10,
              fontFamily: fonts.robo_reg,
              fontSize: 14,
              color: '#2F3A58',
            }}>
            {knownFor}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {data.map((item, index) => (
            <View
              key={index}
              style={{
                alignItems: 'center',
                margin: 10,
                backgroundColor: '#84668C',
                paddingVertical: heightToDp(7),
                paddingHorizontal: widthToDp(4),
                borderRadius: 20,
              }}>
              <Image source={item.imageLink} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
              <Text style={{ color: 'white' }}>{item.name}</Text>
            </View>
          ))}
        </View>
        <Text
          style={{
            color: '#67718C',
            fontSize: 14,
            textAlign: 'center',
            fontFamily: fonts.robo_reg,
            marginHorizontal: widthToDp(8),
          }}>
          {additionalInfo}
        </Text>
        <View style={styles.indicatorView}>
          <View style={styles.row}>
            <MultiButton
              image={LocationAway}
              title={'1.1 Km away'}
              btnStyle={{ backgroundColor: '#E7E7E7' }}
              titleStyle={{ color: '#1583D8' }}
            />
            <MultiButton
              title={'View Profile'}
              btnStyle={{ backgroundColor: '#84668C' }}
              titleStyle={{ fontFamily: fonts.robo_bold, fontSize: 16 }}
              onPress={() =>
                navigation.navigate('ConsumerHomeStack', {
                  screen: 'ConsumerYourProfile',
                })
              }
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DiscoverModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   backgroundColor: theme.homeBackground,
    paddingTop: heightToDp(4),
  },

  indicatorView: {
    marginHorizontal: widthToDp(5),
    marginTop: heightToDp(3),
    marginBottom: 15,
  },
  row: { flexDirection: 'row', alignItems: 'center' },

  discoverContainer: {
    flexDirection: 'row',
    width: 'auto',
    flexGrow: 0,
    marginHorizontal: widthToDp(2),
    marginTop: heightToDp(45),
  },
  dicoverImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#EEEEEE',
  },
  dicoverImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    marginHorizontal: widthToDp(5),
    borderRadius: 10,
    opacity: 0.7,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    marginTop: 20,
  },
  background_image: {
    height: heightToDp(84),
  },
  favouriteContainer: {
    backgroundColor: '#FFFFFF66',
    padding: 10,
    position: 'absolute',
    right: 25,
    top: 25,
    borderRadius: 20,
  },
  InfoContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    marginHorizontal: widthToDp(5),
  },
  studio: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: '#D9D9D9',
    color: '#193356',
    marginLeft: 10,
  },
  artist: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: '#5EAC66',
    color: 'white',
  },
});
