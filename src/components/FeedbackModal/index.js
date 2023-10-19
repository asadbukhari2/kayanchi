import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import MultiButton from '../MultiButton';
import { widthToDp, heightToDp, width } from '../../utils/Dimensions';
import { fonts, useTheme } from '../../utils/theme';
import Feather from 'react-native-vector-icons/Feather';
import TextInput from '../TextInput';

const theme = useTheme();
const FeedBackModal = ({
  isVisible,
  closeModal,
  coverScreen = false,
  swipeDirection = ['down'],
  title,
  subtitle,
  imageSource,
  question,
  onYesClick,
  textInput,
  onNoClick,
}) => {
  const [text, setName] = useState('');
  return (
    <Modal
      coverScreen={coverScreen}
      isVisible={isVisible}
      style={{ flex: 1, margin: 0, justifyContent: 'flex-end', backgroundColor: 'white' }}
      onSwipeComplete={closeModal}
      swipeDirection={swipeDirection}>
      <View style={styles.modalMainView}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={closeModal}
          style={{ padding: heightToDp(4.5), position: 'absolute', right: 0 }}>
          <Feather name={'x'} style={{ fontSize: 20, color: theme.backIcon }} />
        </TouchableOpacity>

        <Text style={styles.headingTxt}>{title}</Text>
        <Text style={styles.subHeadingTxt}>{subtitle}</Text>
        <View style={{ alignItems: 'center' }}>
          <Image source={imageSource} style={styles.imageModal} />
        </View>
        <Text
          style={{
            color: '#2F3A58',
            // fontWeight: '500',
            fontFamily: fonts.robo_med,
            fontSize: 18,
            marginHorizontal: widthToDp(5),
          }}>
          {question}
        </Text>
        {textInput && (
          <View>
            <TextInput
              input={text => setName(text)}
              placeholder={'Please share your response'}
              multiline
              inputBoxStyle={{
                backgroundColor: '#e7e7e7',
                borderBottomColor: '#e7e7e7',
                padding: 10,

                height: heightToDp(45),
                borderRadius: 10,
                textAlignVertical: 'top',
              }}
            />
            <Text
              style={{
                color: '#29AAE2',
                position: 'absolute',
                right: 25,
                bottom: 5,
              }}>
              0/100
            </Text>
          </View>
        )}
        <View style={styles.indicatorView}>
          <View style={styles.row}>
            <MultiButton title={'Yes'} btnStyle={{ backgroundColor: '#67506D' }} onPress={onYesClick} />
            <MultiButton title={'No'} btnStyle={{ backgroundColor: '#9A9A9A' }} onPress={onNoClick} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FeedBackModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.homeBackground,
  },
  indicatorView: {
    marginHorizontal: widthToDp(5),
    marginTop: heightToDp(3),
    marginBottom: 15,
  },
  row: { flexDirection: 'row', alignItems: 'center' },

  discover: { backgroundColor: 'white', width: width * 0.42, borderRadius: 10 },
  chart: {
    backgroundColor: 'white',
    width: width * 0.45,
    borderRadius: 10,
    flex: 1,
    alignItems: 'stretch',
    paddingLeft: 10,
  },
  explorContainer: { flexDirection: 'row', marginHorizontal: widthToDp(4) },
  logoView: {
    flexDirection: 'row',
    height: heightToDp(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageModal: {
    height: heightToDp(70),
    width: widthToDp(70),
    resizeMode: 'contain',
  },
  buzzTxt: {
    fontSize: 20,
    color: '#2F3A58',
    marginLeft: widthToDp(5),
    marginVertical: 10,
  },
  headingTxt: {
    color: '#2F3A58',
    fontSize: 34,
    fontFamily: fonts.hk_bold,
    paddingTop: heightToDp(14),
    marginHorizontal: widthToDp(5),
    width: widthToDp(70),
  },
  subHeadingTxt: {
    color: '#67718C',
    width: widthToDp(70),
    fontFamily: fonts.robo_reg,
    fontSize: 16,
    marginHorizontal: widthToDp(5),
  },
  text: {
    backgroundColor: '#587c5c',
    color: 'white',
    padding: 5,
    fontSize: 11,
    borderRadius: 20,
    position: 'absolute',
    right: widthToDp(5),
    top: heightToDp(10),
  },
  logo: {
    width: widthToDp(29.5),
    height: heightToDp(7),
    marginTop: heightToDp(2),
    resizeMode: 'contain',
  },
  btn: {
    position: 'absolute',
    bottom: heightToDp(5.5),
  },
  icon: {
    fontSize: heightToDp(5),
    padding: heightToDp(4.5),
    color: theme.primary,
  },
});
